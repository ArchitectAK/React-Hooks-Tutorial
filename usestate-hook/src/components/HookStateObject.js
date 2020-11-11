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
      <h3>Your name is - {about.name}</h3>
      <h3>Your are working as - {about.bio}</h3>
      <h3>{JSON.stringify(about)}</h3>
    </form>
  );
}

export default HookStateObject;
