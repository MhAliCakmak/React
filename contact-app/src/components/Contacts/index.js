import { useState, useEffect } from "react";
import {} from "./style.css";
import List from "./List";
import Form from "./Form";

export default function Contacts() {
  const [contact, setContact] = useState([
    {
      name: "Mehmet",
      phone_number: "345345435",
    },
    {
      name: "John Doe",
      phone_number: "315439",
    },
  ]);
  useEffect(() => {
    console.log(contact);
  }, [contact]);

  return (
    <div id="container">
      <h1>Contacts</h1>
      <List contacts={contact} />
      <Form addContact={setContact} contacts={contact} />
    </div>
  );
}
