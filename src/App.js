import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [jokes, setJokes] = useState([]);

  const fetchJokes = async () => {
    const res = await fetch("https://api.chucknorris.io/jokes/random");
    const data = await res.json();
    setJokes(data);
  };

  useEffect(() => {
    fetchJokes();
  }, []);

  return (
    <div className="App">
      <h1>
        Adventure with Chuck Norris{" "}
        <span style={{ fontSize: "1.3em" }}> &#128514; </span>
      </h1>
      <p style={{ fontSize: "1.3em" }}>{jokes.value}</p>
      <button className="btn" onClick={fetchJokes}>
        Get Chuck's Next Move
      </button>
    </div>
  );
}

export default App;
