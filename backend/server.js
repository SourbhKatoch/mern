console.log('Server is running on port 5000');

import cors from 'cors'; //importing cors to allow cross-origin requests

import express, { application } from 'express';
import dotenv from 'dotenv';





const app = express(); //entry point of the application
const PORT = process.env.PORT || 5000; 

dotenv.config(); //to use environment variables from .env file

import connectDB from './config/dbConnection.js'; //importing the database connection
connectDB(); //calling the function to connect to the database

app.use(cors()); //using cors middleware to allow cross-origin requests

app.use(express.json());


 //middleware to parse JSON data from incoming requests

import contactRoutes from './routes/contactRoutes.js'; //importing the contact routes

app.use('/api/contacts', contactRoutes); // '/api/contacts' is the base

 // || or symbol , either be 5000 or free port 


// dotenv.config();

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    });   // () => is annonymous function, it is a callback function that will be executed when the server starts listening on the specified port