import React, { useState, useEffect } from "react";

function HookUpdateTile() {
  const [title, setTitle] = useState("Title Hook");

  useEffect(() => {
    return () => {
      console.log("Title Updated by Hook");
      document.title = title;
    };
  }, [title]);

  return (
    <div>
      <button onClick={() => setTitle("Updated Title by Hook")}>
        Update document title by Hook
      </button>
    </div>
  );
}
export default HookUpdateTile;
