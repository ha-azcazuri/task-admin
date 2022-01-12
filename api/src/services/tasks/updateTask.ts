import { findTaskAndUpdate } from "../../repositories/tasks.repository";

function updateTask(id: string, isDone: boolean) {
    // 1) Find Task By Id and Update
    return findTaskAndUpdate(id, isDone);
}

export default updateTask;