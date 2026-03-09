import { useState } from "react";
import { registerUser } from "../services/api";

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    emergencyContacts: ""
  });

  const submit = async () => {
    await registerUser({
      ...form,
      emergencyContacts: form.emergencyContacts.split(",")
    });
    alert("Registered Successfully");
  };

  return (
    <div className="p-6">
      <input placeholder="Name" onChange={e=>setForm({...form,name:e.target.value})} />
      <input placeholder="Email" onChange={e=>setForm({...form,email:e.target.value})} />
      <input placeholder="Password" type="password" onChange={e=>setForm({...form,password:e.target.value})} />
      <input placeholder="Emergency contacts (comma separated)" onChange={e=>setForm({...form,emergencyContacts:e.target.value})} />
      <button onClick={submit}>Register</button>
    </div>
  );
}
