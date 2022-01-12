import express from 'express';
import apiRoutes from './routes/index';
import { API_PATH } from './utils/constants';

class Server {
    app: express.Application;
  
    constructor() {
        this.app = express();
        this.app.set('port', 3001);
        this.routes();
    }
  
    config() {
        /* middleware initialziation */
        
    }
  
    routes(){
        /* use api routes */
        this.app.use(API_PATH, apiRoutes);
    }
  
    start() {
      return this.app.listen(this.app.get('port'), () => {
        console.log('Task System is ready!')
      });
    }
}

const server = new Server();
export default server.start();