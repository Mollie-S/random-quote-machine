import React, { useState } from "react";
import TwitterImg from "../images/Twitter_Social_Icon_Rounded_Square_Color.png";

function Wrapper() {
  const [quotation, setQuotation] = useState("hi");
  const [author, setCharacter] = useState("author");

  const handleClick = () => {
    const proxy = "https://cors-anywhere.herokuapp.com/";
    const api = `${proxy}https://thesimpsonsquoteapi.glitch.me/quotes?count=50`;

    fetch(api)
      .then((request) => request.json())
      .then((data) => {
        setQuotation(data[0].quote);
        setCharacter(data[0].character);
      });
  };

  return (
    <div id="quote-box">
      <h3 id="text">{quotation}</h3>
      <p id="author">{author}</p>
      <a href="https://twitter.com/intent/tweet" id="tweet-quote">
        <img
          src={TwitterImg}
          alt="twitter_icon"
          style={{ width: "1rem" }}
        ></img>
      </a>

      <button id="new-quote" onClick={handleClick}>
        New Quote
      </button>
    </div>
  );
}

export default Wrapper;
