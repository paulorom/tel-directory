import React from "react";

const ListPeople = ({ people, onDeletePerson }) => {
  return (
    <div>
      <h2>Telephone Directory</h2>
      <ul>
        {people.map((person, index) => (
          <li key={index}>
            <strong>{person.name}</strong>: {person.phoneNumber}
            <button onClick={() => onDeletePerson(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListPeople;
