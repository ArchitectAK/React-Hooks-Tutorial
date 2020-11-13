import React, { useState } from "react";

function StateWithArray() {
  const [items, setItems] = useState([]);

  const [freind, setFreind] = useState("Ankit");

  const addFriends = () => {
    if (!items.find((item) => item.name === freind)) {
      setItems([...items, { id: items.length, name: freind }]);
    } else {
      alert(`${freind} is already added`);
    }
  };
  return (
    <div>
      <h4>Add your friend to list</h4>
      <input
        type="text"
        value={freind}
        onChange={(e) => setFreind(e.target.value)}
      />
      <button onClick={() => addFriends()}>Add {freind}</button>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}
export default StateWithArray;
