import React, { useState } from "react";

function HookStateObject() {
  const [about, setAbout] = useState({ name: "", bio: "" });
  return (
    <form>
      <input
        type="text"
        value={about.name}
        onChange={(e) => about({ ...about, name: e.target.value })}
      />
      <input
        type="text"
        value={about.bio}
        onChange={(e) => setAbout({ ...about, bio: e.target.value })}
      />
      <h2>Your first name is - {about.name}</h2>
      <h2>Your last name is - {about.bio}</h2>
      <h2>{JSON.stringify(about)}</h2>
    </form>
  );
}

export default HookStateObject;
