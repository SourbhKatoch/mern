import axios from 'axios';
import React, { useEffect } from 'react';  
import ReactDOM from 'react-dom/client';

import './App.css';

import ContactList from './components/ContactList';
import ContactForm from './components/ContactForm';

function App() {
  const [input, setInput] = React.useState('');
  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState(null);

  const fetchContacts = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      const response = await axios.get('https://upgraded-funicular-xvgjr6p7wjr3p7gj-5000.app.github.dev/api/contacts');
      setData(response.data);
    } catch (err) {
      setError('Error fetching contacts');
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []); 

  return (
    <div className="container">
      <h1>Contact Manager</h1>
      <ContactForm onContactAdded={fetchContacts} />
      <ContactList contacts={data} onContactDeleted={fetchContacts} />
      {error && <p className="error">{error}</p>}
      

      </div>
  );
}

export default App;