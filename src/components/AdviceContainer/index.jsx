import axios from "axios";
import { useState } from "react";
import "./index.css";

const AdviceContainer = () => {
  const [advice, setAdvice] = useState("Your Advice will appear here :)");
  const fetchAdvice = () => {
    axios
      .get("https://api.adviceslip.com/advice")
      .then((response) => {
        setAdvice(response.data.slip.advice);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="app">
      <div className="card">
        <h1 className="heading">{advice}</h1>
        <button className="button" onClick={fetchAdvice}>
          <span>GIVE ME ADVICE!</span>
        </button>
      </div>
    </div>
  );
};
export default AdviceContainer;
