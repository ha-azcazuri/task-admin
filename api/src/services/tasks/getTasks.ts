import axios from 'axios';
import * as crypto from 'crypto';
import { ITask } from '../../interfaces/ITasks';
import { LOREM_FAKER_API_URL } from '../../utils/constants';

async function getTasks(numberOfTasks: number) {
    // 1) GET TITLES
    const { data } = await fetchTitlesFromAPI(numberOfTasks);

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