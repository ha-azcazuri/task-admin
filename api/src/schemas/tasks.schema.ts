import { model, Schema } from "mongoose";
import { ITask } from "../interfaces/ITasks";

const TaskSchema = new Schema({
    id: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    isDone: { type: Boolean, default: false },
});

export const Task = model<ITask>('Task', TaskSchema, 'tasks')