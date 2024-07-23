import express from 'express';
import * as dotenv from 'dotenv';
import userRoutes from './routes/user.routes';
import roomRoutes from './routes/room.routes';
import memberRoutes from "./routes/member.routes"
import connection from './config/db';
import cors from 'cors';

dotenv.config();

const app = express();

app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());

app.use('/users', userRoutes);
app.use('/rooms', roomRoutes);
app.use("/member", memberRoutes)

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    await connection;
    console.log('Conexion exitosa a la BD');
    app.listen(PORT, () => console.log(`Servidor corriendo en ${PORT}`));
  } catch (err: any) {
    console.error('Error de conexion a la BD:', err.message);
  }
};

startServer();
