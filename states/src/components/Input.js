import React from 'react';
import { useState } from 'react';

export default function Input() {
    const [form, setForm] = useState({name:"",email:""});
  
    const onChangeInput= (event) =>{
        
        setForm({...form,[event.target.name]:event.target.value})
    }

   
  return (
    <div>
        <h2>Input Sample</h2>
       <input placeholder="name" name="name" value={form.name} onChange={onChangeInput}/>
       <br/>
       {form.name}
       <br/>
       <input value={form.email} name="email" placeholder="email" onChange={onChangeInput}/>
       <br/>
       {form.email}
       
    </div>
  )
}
