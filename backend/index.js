import express from "express";
import { mongoDbURL, PORT } from "./config.js";
import mongoose from 'mongoose';
import todosRoute from "./routes/ToDoRoutes.js";
import cors from 'cors';

const app = express();


//Middleware for parsing request body
app.use(express.json());

app.use(cors());

mongoose.connect(mongoDbURL)
    .then(() => {
        console.log('App connected to database')
        app.listen(PORT, () => {
    console.log(`App is listening to port: ${PORT}`);
});

    })
    .catch((error) => {
        console.log(error);
    });

app.get('/', (request, response) => {
    console.log(request);
    return response.status(234).send("Hello world")
});
app.use('/api/todos', todosRoute);
