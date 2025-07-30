
import React, { useState } from 'react';

import axios from 'axios';

function ContactForm({ onContactAdded }) {

    const {form, setForm} = useState({name: '', email: '', phone: ''});
    const handleChange = async (e) => {
        setForm({...form, [e.target.name]: e.target.value});
};

const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('https://upgraded-funicular-xvgjr6p7wjr3p7gj-5000.app.github.dev/api/contact', form);
    setForm({name: '', email: '', phone: ''});
    onContactAdded();
    };
    return (
        <form onSubmit={handleChange}>
            <input name = "name" value={form.name} onChange= {handleChange} placeholder="Name" required />  
            <input  name = "email" value={form.email} onChange={handleChange} placeholder="Email" required /> // Add email input    
            <input  name = "phone" value={form.phone} onChange={handleChange} placeholder="Phone" required /> // Add phone inpu
            <button type="submit">Add Contact</button>
        </form>
    );
}

export default ContactForm; // Export the ContactForm component

