import express from 'express';
const router =   express.Router();

/*'''router.route('/').get((req, res) => {
    res.status(200).json({
        message: 'Contact Route'
    });*/

import { getContact, createContact, updateContact, deleteContact } from '../controllers/contactController.js';
 //importing the contact controller functions 

 router.route('/').get((req, res) => {
    res.status(200).json({
        message: 'Welcome to the Contact API'});
    });

 // '/' is the root route for contacts, req is request, res is response

router.route('/').get(getContact).post(createContact); // GET and POST requests for contacts
router.route('/:id').get(getContact).put(updateContact).delete(deleteContact); // GET, PUT, DELETE requests for a specific contact by ID
export default router; //exporting the router to be used in server.js
