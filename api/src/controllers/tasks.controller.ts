import { Request, Response } from "express";
import getTasks from "../services/tasks/getTasks";
import updateTask from "../services/tasks/updateTask";

export async function getTasksController(req: Request, res: Response) {
    const numberOfTasks = (req.query.numberOfTasks) ? Number(req.query.numberOfTasks) : 3;
    
    if (!isNaN(numberOfTasks) && numberOfTasks > 0) {   // check parametros --> SIEMPRE CONTROLAR PARAMETROS!!
        const tasks = await getTasks(numberOfTasks);    // llamamos al servicio
        if (tasks.length > 0) {
            res.status(200).json(tasks);
        } else {
            res.status(400).json({
                title: 'ERROR!',
                message: 'An error ocurred while generating tasks.'
            });
        }
    } else {
        res.status(400).json({
            title: 'ERROR!',
            message: 'Bad Request.'
        });
    }
}

export async function updateTasksController(req: Request, res: Response) {
    console.log(req.body);
    const { id } = req.params;
    const { isDone } = req.body;
    if (isDone !== undefined) {
        const updatedTask = await updateTask(id, isDone);
        res.status(200).json(updatedTask);
    } else {
        res.status(400).json({
            title: 'ERROR!',
            message: 'Bad Request.'
        });
    }
}
