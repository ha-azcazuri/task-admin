import { ITask } from "../interfaces/ITasks";
import { Task } from "../schemas/tasks.schema";

export function findTaskById(id: string) {
    return Task.find({ id });
}

export function findTasksByQuantity(quantity: number) {
    return Task.find().limit(quantity);
}

export function saveTasks(tasks: ITask[]) {
    return Task.insertMany(tasks);
}

export function findTaskAndUpdate(id: string, isDone: boolean) {
    return Task.findOneAndUpdate(
        { id },                     // Filter
        { isDone },                 // Update
        { returnOriginal: false }   // Options
    );
}