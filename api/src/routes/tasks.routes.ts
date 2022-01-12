import express from 'express';
import { getTasksController, updateTasksController } from '../controllers/tasks.controller';

const tasksRouter = express.Router();

tasksRouter.get('/', getTasksController);

tasksRouter.patch('/:id',  updateTasksController);

export default tasksRouter;