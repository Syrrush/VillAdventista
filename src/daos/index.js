import mongoose from 'mongoose';
import dotenv from "../config/dotenv.js";


mongoose.connect(dotenv.app.MONGO, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});


const db = mongoose.connection;

db.on('connected', () => {
    console.log('Conectado a la base de datos MongoDB');
});

db.on('error', (err) => {
    console.error('Error de conexión a la base de datos:', err);
});

db.on('disconnected', () => {
    console.log('Desconectado de la base de datos MongoDB');
});

export default db;