import express from 'express';
import { authRouter } from './routes/auth';
import { reportsRouter } from './routes/reports';
import { usersRouter } from './routes/users';

const app = express();
app.use(express.json());

app.use('/auth', authRouter);
app.use('/users', usersRouter);
app.use('/reports', reportsRouter);

app.listen(3000, () => console.log('API listening on http://localhost:3000'));
