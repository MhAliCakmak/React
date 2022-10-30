import { useState,useEffect } from "react";

const initialFormValues={ name: "", phone_number: "" }
export default function Form({ addContact, contacts }) {
  const [form, setForm] = useState(initialFormValues);

  const onChangeForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    
    setForm(initialFormValues);
    
  }, [contacts])
  
  const onSubmit = (e) => {
    e.preventDefault();
    if (form.name && form.phone_number) {
      console.log(form);
      addContact([...contacts, form]);
      
    }
  };
  return (
    <form onSubmit={onSubmit}>
      <div>
        <input name="name" onChange={onChangeForm} value={form.name} placeholder="Name" />
      </div>
      <div>
        <input
          name="phone_number"
          onChange={onChangeForm}
          placeholder="Phone Number"
          value={form.phone_number}
        />
      </div>
      <div>
        <button className="addButton">Add</button>
      </div>
    </form>
  );
}
