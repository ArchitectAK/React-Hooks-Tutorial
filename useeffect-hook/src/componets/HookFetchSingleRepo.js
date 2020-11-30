import React, { useState, useEffect } from "react";
import axiso from "axios";

function HookFetchSingleRepo() {
  const [repo, setRepo] = useState([]);
  const [name, setName] = useState([]);

  useEffect(() => {
    axiso
      .get(`https://api.github.com/repos/AnkitDroidGit/${name}`)
      .then((response) => {
        console.log(response);
        setRepo(response.data);
      })
      .catch((error) => console.log(error));
  }, [name]);

  return (
    <>
      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <div>{repo.html_url}</div>
    </>
  );
}

export default HookFetchSingleRepo;
