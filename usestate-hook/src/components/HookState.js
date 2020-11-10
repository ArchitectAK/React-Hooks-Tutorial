import React, { useState } from "react";

function Hookstate() {
  const [buttonText, setButtonText] = useState("Hey, click me 😔");

  return (
    <div>
      <button onClick={() => setButtonText("🎉🎉 You clicked me ! 🎉🎉")}>
        {buttonText}
      </button>
    </div>
  );
}

export default Hookstate;
