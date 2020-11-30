import React, { useState, useEffect } from "react";
import axiso from "axios";

function HookFetch() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    axiso
      .get("https://api.github.com/users/AnkitDroidGit/repos")
      .then((response) => {
        console.log(response);
        setRepos(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <ul>
        {repos.map((repo) => (
          <li key={repo.id}>{repo.name}</li>
        ))}
      </ul>
    </>
  );
}

export default HookFetch;
