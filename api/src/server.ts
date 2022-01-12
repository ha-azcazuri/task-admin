import express from 'express';
import mongoose from 'mongoose';
import apiRoutes from './routes/index';
import { API_PATH, MONGO_HOST, MONGO_PORT } from './utils/constants';

class Server {
    app: express.Application;
  
    constructor() {
        this.app = express();
        this.app.set('port', 3001);
        this.config();
        this.routes();
        mongoose.connect(`mongodb://${MONGO_HOST}:${MONGO_PORT}/task_admin`);
    }
  
    config() {
        /* middleware initialziation */
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: false }));
    }
  
    routes(){
        /* use api routes */
        this.app.use(API_PATH, apiRoutes);
    }

    connectToMongo() {

    }
  
    start() {
      return this.app.listen(this.app.get('port'), () => {
        console.log('Task System is ready!')
      });
    }
}

const server = new Server();
export default server.start();