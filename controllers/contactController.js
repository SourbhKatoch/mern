//@desc Get all contacts
//@route GET /api/contacts
//@access Public

const getContact = (req, res) => {
    res.status(200).json({
        message: 'Get all Contact'
    });
};

//@desc Create a new contact
//@route POST /api/contacts
//@access Public

const createContact = (req, res) => {
    console.log("The request body is:", req.body);
    const { name, email, phone } = req.body; //destructuring the request body
    if (!name || !email || !phone) {
        res.status(400);
        throw new Error('All fields are required!')
       }
       
    res.status(201).json({
        message: 'Create a new Contact'
    });
};


//@desc Update a contact
//@route PUT /api/contacts/:id
//@access Public
const updateContact = (req, res) => {
    res.status(200).json({
        message: `Update Contact with ID: ${req.params.id}`
    });
};



//@desc Delete a contact
//@route DELETE /api/contacts/:id
//@access Public
const deleteContact = (req, res) => {
    res.status(200).json({
        message: `Delete Contact with ID: ${req.params.id}`
    });
};

export { getContact, createContact, updateContact, deleteContact};

