import express, { Request, Response } from "express";
import mongoose from "mongoose";
import {network} from './routes/app';

const app = express()
//tolerancia del servidor.
app.use(express.json(), express.urlencoded({extended: false}));
//inyeccion de las rutas que se usaran.
network(app)


//configuracion de la base de datos.
mongoose.set('strictQuery', true);

const config = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  autoIndex: false, // Don't build indexes
  serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
  socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
  family: 4, // Use IPv4, skip trying IPv6
}

async function run(): Promise<void> {

  mongoose.connect(
    `mongodb://localhost:27017/`,config
  )
    .then(() => {
      console.log(`Database is ready`);
    })
    .catch((err) => {
      console.log(`Holy s***, troubles! ${err}`);
    });
}

//encendiendo el servidor y asignando el puerto en el que escuchara
app.listen(3000, async () => {
 console.log("Servidor iniciado en el puerto 3000");

 //se ejecuta la base de datos al encender el sv.
 await run();
});


/////////
