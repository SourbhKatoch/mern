console.log('Server is running on port 5000');

import express, { application } from 'express';
import dotenv from 'dotenv';

const app = express(); //entry point of the application

app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to the Server'
    });
}); // '/' is the root route, req is request, res is response

app.use(express.json()); //middleware to parse JSON data from incoming requests

import contactRoutes from './routes/contactRoutes.js'; //importing the contact routes

app.use('/api/contacts', contactRoutes); // '/api/contacts' is the base

const PORT = process.env.PORT || 5000;  // || or symbol , either be 5000 or free port 


// dotenv.config();

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    });   // () => is annonymous function, it is a callback function that will be executed when the server starts listening on the specified port