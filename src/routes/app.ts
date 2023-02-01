// app.ts
import express, {Express} from 'express';

import routes from './routes';

export const network = (server:Express) =>{
  server.use('/user/',routes);
}
