import axios from 'axios';
import * as crypto from 'crypto';
import { ITask } from '../../interfaces/ITasks';
import { findTasksByQuantity, saveTasks } from '../../repositories/tasks.repository';
import { LOREM_FAKER_API_URL } from '../../utils/constants';

async function getTasks(numberOfTasks: number) {
    // 1) FIND TASKS IN DB
    const tasksInDb = await findTasksByQuantity(numberOfTasks);
    const tasksDiffNumber = numberOfTasks - tasksInDb.length;
    let newTasks: ITask[] = [];
    if (tasksDiffNumber > 0) {
        // GENERATE MISSING TASKS
        newTasks = await generateTasks(tasksDiffNumber);
        newTasks = await saveTasks(newTasks);
    }
    
    return [ ...tasksInDb, ...newTasks ];
}

async function generateTasks(tasksDiffNumber: number) {
    // 1) GET TITLES
    const { data } = await fetchTitlesFromAPI(tasksDiffNumber);
    
    // 2) GENERATE ID FOR EACH TITLE
    // { id: "...", title: "..." }
    const tasks: ITask[] = data.map((title: string) => {
        return { id: crypto.randomUUID(), title }
    });

    return tasks;
}

function fetchTitlesFromAPI(numberOfTasks: number) {
    return axios.create({
        baseURL: LOREM_FAKER_API_URL,
        timeout: 30000,
    }).get('/api', { params: { quantity: numberOfTasks }});
}

export default getTasks;