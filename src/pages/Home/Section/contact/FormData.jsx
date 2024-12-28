import { Input } from "antd";
import React, { useState } from "react";
import Button from "../../../../Components/Button";

const FormData = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [textarea, setTextarea] = useState("");
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleTextAreaCHange = (e) => {
    setTextarea(e.target.value);
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const message = { name,email,textarea };
    console.log(message);
    setName("");
    setEmail("");
    setTextarea("");
  };
  return (
    <div className="md:w-[40%] w-full">
      <h5 className="subHeading bg-transparent text-secondary-color">
        Drop your message
      </h5>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <Input
            type="text"
            name="name"
            id="name"
            required
            value={name}
            onChange={handleNameChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <Input
            type="email"
            name="email"
            id="email"
            required
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <Input.TextArea
            type="textarea"
            name="message"
            id="message"
            required
            value={textarea}
            onChange={handleTextAreaCHange}
          />
        </div>
        <div>
          <Button type="submit">Send Message</Button>
        </div>
      </form>
    </div>
  );
};

export default FormData;
