import { Router, type Request, type Response } from "express";
import { pool } from "../db";
import crypto from "crypto";

const router = Router();

// GET all customers
router.get("/", async (req: Request, res: Response) => {
  try {
    const [rows] = await pool.query("SELECT * FROM CUSTOMER");
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: "Database error" });
  }
});

// POST new customer
router.post("/", async (req: Request, res: Response) => {
  const { Name, Email, Phone } = req.body;
  const CustomerID = crypto.randomUUID();

  try {
    await pool.execute(
      "INSERT INTO CUSTOMER (CustomerID, Name, Email, Phone) VALUES (?, ?, ?, ?)",
      [CustomerID, Name, Email, Phone],
    );
    res.status(201).json({ CustomerID, Name, Email, Phone });
  } catch (error) {
    res.status(500).json({ error: "Failed to create customer" });
  }
});

// PUT (Update) customer
router.put("/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  const { Name, Email, Phone } = req.body;

  try {
    await pool.execute(
      "UPDATE CUSTOMER SET Name = ?, Email = ?, Phone = ? WHERE CustomerID = ?",
      [Name, Email, Phone, id],
    );
    res.json({ message: "Customer updated successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to update customer" });
  }
});

// DELETE customer
router.delete("/:id", async (req: Request, res: Response) => {
  const id = req.params.id as string; // Explicitly tell TS this is a string

  try {
    await pool.execute("DELETE FROM CUSTOMER WHERE CustomerID = ?", [id]);
    res.json({ message: "Customer deleted" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete customer" });
  }
});

export default router;
