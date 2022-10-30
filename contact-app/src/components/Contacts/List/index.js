import { useState } from "react";

export default function Form({ contacts }) {
  const [filterText, setFilterText] = useState("");
  
  const filteredContacts = contacts.filter((contact) => {
    return Object.keys(contact).some((key) =>
      contact[key].toLowerCase().includes(filterText.toLowerCase())
    );
  });
  return (
    <div>
      <input
        placeholder="Filter contact"
        onChange={(e) => setFilterText(e.target.value)}
        value={filterText}
      />
      <ul className="list">
        {filteredContacts.map((contact, index) => (
          <li key={index}>
            <span>{contact.name}</span>
            <span>{contact.phone_number}</span>
            
          </li>
        ))}
      </ul>
      <p>Total Contacts({filteredContacts.length})</p>
    </div>
  );
}
