import React, { useState } from "react";

const AddPerson = ({ onAddPerson }) => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name.trim() !== "" && phoneNumber.trim() !== "") {
      onAddPerson({ name, phoneNumber });
      setName("");
      setPhoneNumber("");
    }
  };

  return (
    <div>
      <h2>Add Person</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={handleNameChange} />
        </div>
        <div>
          <label>Phone Number:</label>
          <input
            type="text"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
          />
        </div>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddPerson;
