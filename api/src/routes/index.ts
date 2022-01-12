import express, { Request, Response } from 'express';
const router = express.Router();

// Other Routes
import tasksRouter from './tasks.routes';

router.get('/',  (req: Request, res: Response) => {
    res.send("Welcome to Task System API!");
});

router.use('/tasks', tasksRouter);

export default router;