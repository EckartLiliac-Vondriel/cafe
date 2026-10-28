import { Router, type Request, type Response } from "express";
import { pool } from "../db";
import crypto from "crypto";

const router = Router();

// GET all orders (with customer info)
router.get("/", async (req: Request, res: Response) => {
  try {
    const query = `
      SELECT o.OrderID, o.OrderDate, o.OrderStatus, o.TotalAmount, c.Name as CustomerName 
      FROM \`ORDER\` o
      JOIN CUSTOMER c ON o.CustomerID = c.CustomerID
      ORDER BY o.OrderDate DESC
    `;
    const [rows] = await pool.query(query);
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: "Database error" });
  }
});

// POST create a new order + order items
router.post("/", async (req: Request, res: Response) => {
  const { CustomerID, TotalAmount, Items } = req.body;
  // Items should be an array of: { ItemID, Quantity, UnitPrice }

  const OrderID = crypto.randomUUID();
  const OrderDate = new Date();
  const OrderStatus = "Pending";

  // Get a dedicated connection for the transaction
  const connection = await pool.getConnection();

  try {
    await connection.beginTransaction(); // Start Transaction

    // 1. Insert into ORDER table
    await connection.execute(
      "INSERT INTO \`ORDER\` (OrderID, CustomerID, OrderDate, OrderStatus, TotalAmount) VALUES (?, ?, ?, ?, ?)",
      [OrderID, CustomerID, OrderDate, OrderStatus, TotalAmount],
    );

    // 2. Insert all items into ORDER_ITEM table
    for (const item of Items) {
      await connection.execute(
        "INSERT INTO ORDER_ITEM (OrderID, ItemID, Quantity, UnitPrice) VALUES (?, ?, ?, ?)",
        [OrderID, item.ItemID, item.Quantity, item.UnitPrice],
      );
    }

    await connection.commit(); // Save changes
    res
      .status(201)
      .json({ OrderID, OrderStatus, message: "Order created successfully" });
  } catch (error) {
    await connection.rollback(); // Undo changes if anything fails
    console.error(error);
    res
      .status(500)
      .json({ error: "Failed to create order. Transaction rolled back." });
  } finally {
    connection.release(); // Return connection to pool
  }
});

// UPDATE order status (e.g., Pending -> Ready)
router.put("/:id/status", async (req: Request, res: Response) => {
  const { OrderStatus } = req.body;
  try {
    await pool.execute(
      "UPDATE \`ORDER\` SET OrderStatus = ? WHERE OrderID = ?",
      [OrderStatus, req.params.id],
    );
    res.json({ message: "Order status updated" });
  } catch (error) {
    res.status(500).json({ error: "Failed to update order status" });
  }
});

export default router;
