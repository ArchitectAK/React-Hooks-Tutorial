import React, { useState, useEffect } from "react";
import axios from "axios";

const FetchSingleRepo = () => {
  const [name, setName] = useState("");
  const [repo, setRepo] = useState({});

  useEffect(() => {
    axios
      .get(`https://api.github.com/repos/AnkitDroidGit/${name}`)
      .then((response) => {
        console.log(response);
        setRepo(response.data);
      })
      .catch((error) => console.log(error));
  });

  return (
    <>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></input>
      <div>HTML URL = {repo.html_url}</div>
    </>
  );
};

export default FetchSingleRepo;
