import { Router, type Request, type Response } from "express";
import { pool } from "../db";
import crypto from "crypto";

const router = Router();

router.get("/", async (req: Request, res: Response) => {
  try {
    const [rows] = await pool.query("SELECT * FROM MENU_ITEM");
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: "Database error" });
  }
});

router.post("/", async (req: Request, res: Response) => {
  const { Name, Category, Price } = req.body;
  const ItemID = crypto.randomUUID();

  try {
    await pool.execute(
      "INSERT INTO MENU_ITEM (ItemID, Name, Category, Price) VALUES (?, ?, ?, ?)",
      [ItemID, Name, Category, Price],
    );
    res.status(201).json({ ItemID, Name, Category, Price });
  } catch (error) {
    res.status(500).json({ error: "Failed to create menu item" });
  }
});

router.put("/:id", async (req: Request, res: Response) => {
  const { Name, Category, Price } = req.body;
  try {
    await pool.execute(
      "UPDATE MENU_ITEM SET Name = ?, Category = ?, Price = ? WHERE ItemID = ?",
      [Name, Category, Price, req.params.id],
    );
    res.json({ message: "Menu item updated" });
  } catch (error) {
    res.status(500).json({ error: "Failed to update menu item" });
  }
});

router.delete("/:id", async (req: Request, res: Response) => {
  const id = req.params.id as string; // Explicitly tell TS this is a string

  try {
    await pool.execute("DELETE FROM MENU_ITEM WHERE ItemID = ?", [id]);
    res.json({ message: "Menu item deleted" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete menu item" });
  }
});

export default router;
