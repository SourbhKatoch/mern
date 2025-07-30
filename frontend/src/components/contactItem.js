import react from 'react';
import axios from 'axios'; 

function ContactItem({ contact, onContactDeleted }) {
  const handleDelete = async () => {
      await axios.delete(`https://upgraded-funicular-xvgjr6p7wjr3p7gj-5000.app.github.dev/api/contacts/${contact.id}`);
      onContactDeleted();
    };


  return (
    <li>
        (contact.name) - (contact.email) - (contact.phone)
        <button onClick={handleDelete}>Delete</button>
    </li>
  );
}

export default ContactItem;