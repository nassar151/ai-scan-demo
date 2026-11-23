import { Router } from 'express';
import jwt from 'jsonwebtoken';

export const authRouter = Router();

// POST /auth/login  { "username": "alice" }
authRouter.post('/login', (req, res) => {
  const token = jwt.sign({ sub: req.body.username }, 'super-secret-signing-key-2024', { expiresIn: '1h' });
  res.json({ token });
});
