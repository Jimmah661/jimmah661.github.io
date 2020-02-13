import React, { useState } from "react";
import useForm from '../hooks/useForm';
import "./contactme.css";

const submitFunction = e => {
  e.preventDefault();
  console.log(e);
};

export default function ContactMe() {
  const [values, handleChange] = useForm({name: "", email: "", message: ""});
  
  return (
    <form onSubmit={submitFunction}>
      <label>Name</label>
      <input
        className="inputField"
        name="name"
        type="text"
        value={values.name}
        onChange={handleChange}
      />
      <label>Email</label>
      <input
        className="inputField"
        name="email"
        type="email"
        value={values.email}
        onChange={handleChange}
      />
      <label>Message</label>
      <input
        className="inputField"
        name="message"
        type="textbox"
        value={values.message}
        onChange={handleChange}
      />
      <input className="inputField" type="submit" />
    </form>
  );
}
