import React, { useState, useEffect } from "react";

function UseEffectTitle() {
  const [title, setTitle] = useState("Old Hook Title");

  useEffect(() => {
    return () => {
      console.log(`Hook Updated Title: ${title}`);
      document.title = title;
    };
  }, [title]);
  return (
    <div>
      <button onClick={() => setTitle("Updated Title")}>
        Update document title by Hook
      </button>
    </div>
  );
}
export default UseEffectTitle;
