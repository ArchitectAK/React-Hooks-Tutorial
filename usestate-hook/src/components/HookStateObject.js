import React, { useState } from "react";

function HookStateObject() {
  const [about, setAbout] = useState({ name: "Ankit", bio: "Developer" });
  return (
    <form>
      <input
        type="text"
        value={about.name}
        onChange={(e) => setAbout({ ...about, name: e.target.value })}
      />
      <input
        type="text"
        value={about.bio}
        onChange={(e) => setAbout({ ...about, bio: e.target.value })}
      />
      <h2>Your name is - {about.name}</h2>
      <h2>Your are working as - {about.bio}</h2>
      <text>Current state of object is</text>
      <br />
      <br />
      <text>{JSON.stringify(about)}</text>
    </form>
  );
}

export default HookStateObject;
