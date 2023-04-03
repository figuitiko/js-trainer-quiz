import  express, {Application} from 'express';
import * as bodyParser from 'body-parser';
import cors from 'cors';
import env from './Env';

class App{
  public app: Application;
  constructor(){
    this.app = express();
    this.config();
    this.mongoSetup();
  };
  private config(): void{
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({extended: false}));
    this.app.use(cors());
  }
  private mongoSetup(): void{    
    const mongoose = require('mongoose');
    mongoose.connect(env.getDatabaseUrl(), {useNewUrlParser: true, useUnifiedTopology: true});
    mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));
  }
}

export default new App().app;