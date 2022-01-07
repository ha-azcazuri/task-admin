import express from 'express';

class Server {
    app: express.Application;
  
    constructor() {
        this.app = express();
    }
  
    config() {
        /* middleware initialziation */
        
    }
  
    routes(){
        /* use api routes */
        
    }
  
    start() {
      return this.app.listen(this.app.get('port'), () => {
        console.log('ESTOY CORRIENDO ANDREA, VOS SI QUE SOS LIGERA!')
        // after listen
        // this.connectToMongo();
      });
    }

    // connectToMongo() {
    //     //Creating the DB when the server starts.
    //     try {
    //         MongoConnection.connectToMongo();
    //         console.log(`Tasks API listening at http://${environmentVariables.apiHost}:${environmentVariables.apiPort}`);
    //     } catch (error) {
    //         console.error(error);
    //         throw new Error("Cannot connect with the database");
    //     }
    // }
}

const server = new Server();
export default server.start();