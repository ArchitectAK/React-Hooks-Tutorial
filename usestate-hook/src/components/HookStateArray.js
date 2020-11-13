import React, { useState } from "react";

function HookStateArray() {
  const [items, setItems] = useState([]);
  const [freind, setFreind] = useState("Ankit");
  const addFreindToList = () => {
    if (!items.find((item) => item.name === freind)) {
      setItems([...items, { id: items.length, name: freind }]);
    } else {
      alert(`${freind} is already added`);
    }
  };
  return (
    <div>
      <h4>Add to list</h4>
      <input
        type="text"
        value={freind}
        onChange={(event) => setFreind(event.target.value)}
      ></input>
      <button onClick={() => addFreindToList()}>Add freind</button>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}
export default HookStateArray;
