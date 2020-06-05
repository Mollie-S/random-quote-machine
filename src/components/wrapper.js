import React, { useState } from "react";
import TwitterImg from "../images/Twitter_Social_Icon_Square_White.png";
import MovieQuotes from "../assets/movie_quotes";

function Wrapper() {
  const [quote, setQuote] = useState(
    "Inspiration moves one from Pessimism to Optimism, from Doubt to Faith, from Despair to Hope, and from Darkness to Light!"
  );
  const [author, setAuthor] = useState("author");

  const handleClick = () => {
    // since api is slow and unstable, I'm commenting this feature out and adding the quotes db myself.
    // I'll leave the code snippets though
    // const proxy = "https://cors-anywhere.herokuapp.com/";
    // const api = `${proxy}https://thesimpsonsquoteapi.glitch.me/quotes?count=50`;
    // fetch(api)
    //   .then((request) => request.json())
    //   .then((data) => {
    //     setQuotation(data[0].quote);
    //     setCharacter(data[0].character);
    //   });

    let getRandomQuote = Math.floor(Math.random() * MovieQuotes.length);
    setQuote(MovieQuotes[getRandomQuote].quotation);
    setAuthor(MovieQuotes[getRandomQuote].author);
  };

  return (
    <div id="quote-box" className="flip-card">
      <h3 id="text">{quote}</h3>
      <p id="author">{author}</p>
      <a href="https://twitter.com/intent/tweet" id="tweet-quote">
        <img
          className="tweet-img"
          src={TwitterImg}
          alt="twitter_icon"
          style={{ width: "2rem", filter: "grayscale(100%)" }}
        ></img>
      </a>

      <button id="new-quote" onClick={handleClick}>
        New Quote
      </button>
    </div>
  );
}

export default Wrapper;
