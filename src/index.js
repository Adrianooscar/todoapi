import express from 'express';
import { todoRoutes } from './routes/rooutes';
import { database } from './database/db'

const app = express();

// reconhecer o formato json
app.use(express.json())

// utilizar as rotas
app.use(todoRoutes)


// starta o servidor
app.listen(3333, async () => {

    // starta o banco de dados
    await database.sync();
    console.log('server is running')
})