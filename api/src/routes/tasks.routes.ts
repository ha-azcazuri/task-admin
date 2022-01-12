import express from 'express';
import { getTasksController } from '../controllers/tasks.controller';

const tasksRouter = express.Router();

tasksRouter.get('/', getTasksController);

export default tasksRouter;