import react from 'react'; // Import React library
import ContactItem from './contactItem';

function ContactList({ contacts, onContactDeleted }) {
  return (
    <ul>
      {contacts.map((contact) => (
        <ContactItem 
          key={contact.id} 
          contact={contact} 
          onContactDeleted={onContactDeleted} 
        />
      ))}
    </ul>
  );
}

export default ContactList; // Export the ContactList component