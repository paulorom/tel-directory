import React, { useState } from "react";
import AddPerson from "./AddPerson";
import ListPeople from "./ListPeople";

function App() {
  const [people, setPeople] = useState([]);

  const handleAddPerson = (person) => {
    setPeople([...people, person]);
  };

  const handleDeletePerson = (index) => {
    const updatedPeople = [...people];
    updatedPeople.splice(index, 1);
    setPeople(updatedPeople);
  };

  return (
    <div>
      <h1>Telephone Directory App</h1>
      <AddPerson onAddPerson={handleAddPerson} />
      {people.length > 0 && (
        <ListPeople people={people} onDeletePerson={handleDeletePerson} />
      )}
    </div>
  );
}

export default App;
