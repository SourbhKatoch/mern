import asyncHandler from 'express-async-handler';

import Contact from '../models/contactModels.js'; //importing the contact model

//@desc Get all contacts
//@route GET /api/contacts
//@access Public

const getContacts = asyncHandler( async(req, res) => {
    const contacts = await Contact.find(); //fetching all contacts from the database
    console.log("The contacts are", contacts);
    res.status(200).json(contacts); //sending the contacts as a response
    });


//@desc Create a new contact
//@route POST /api/contacts
//@access Public

const createContact = asyncHandler( async(req, res) => {
    const contacts = await Contact.find(); //fetching all contacts from the database
    console.log("The request body is:", req.body);
    const { name, email, phone } = req.body; //destructuring the request body
    if (!name || !email || !phone) {
        res.status(400);
        throw new Error('All fields are required!')
       }

    const contact = await Contact.create({
        name,
        email,
        phone
    });     
    console.log("The contact is", contact);
       
    res.status(201).json({
        message: 'Create a new Contact', contact});
});

//@desc Update a contact
//@route GET /api/contacts/:id
//@access Public
const getContact = asyncHandler( async(req, res) => {
    const contact = await Contact.findById(req.params.id); //fetching a contact by id from the database
    if (!contact) {
        res.status(404);
        throw new Error('Contact not found');
    }
    res.status(200).json({
        message: `Get Contact with ID: ${req.params.id}`
    });
});

//@desc Update a contact
//@route PUT /api/contacts/:id
//@access Public
const updateContact = asyncHandler( async(req, res) => {
    const contact = await Contact.findById(req.params.id); //fetching a contact by id from the database
    if (!contact) {
        res.status(404);
        throw new Error('Contact not found');
    }
    const updatedContact = await Contact.findByIdAndUpdate(req.params.id, req.body, 
        { new: true}); //to return the updated contact
    res.status(200).json(updateContact);
    });




//@desc Delete a contact
//@route DELETE /api/contacts/:id
//@access Public
const deleteContact = asyncHandler( async(req, res) => {
    const contact = await Contact.findById(req.params.id); //fetching a contact by id from the database
    if (!contact) {
        res.status(404);
        throw new Error('Contact not found');
    }
    await Contact.findByIdAndDelete(req.params.id); //deleting a contact by id
    res.status(200).json(contact);
    });


export { getContacts, createContact, getContact, updateContact, deleteContact};

