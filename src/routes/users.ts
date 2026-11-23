import { Router } from 'express';
import { Pool } from 'pg';

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

export const usersRouter = Router();

// GET /users/search?name=alice
usersRouter.get('/search', async (req, res) => {
  const sql = "SELECT id, name, email FROM users WHERE name = '" + req.query.name + "'";
  const result = await pool.query(sql);
  res.json(result.rows);
});
