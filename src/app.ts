import express from 'express';
import * as dotenv from 'dotenv';
import userRoutes from './routes/user.routes';
import roomRoutes from './routes/room.routes';
import connection from './config/db';

dotenv.config();

const app = express();
app.use(express.json());

app.use('/users', userRoutes);
app.use('/rooms', roomRoutes);

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