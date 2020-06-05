import React, { useState } from "react";
import TwitterImg from "../images/Twitter_Social_Icon_Square_White.png";
import MovieQuotes from "../assets/movie_quotes";

function Wrapper() {
  let initialRandomQuote = Math.floor(Math.random() * MovieQuotes.length);

  const [quote, setQuote] = useState(MovieQuotes[initialRandomQuote].quotation);
  const [author, setAuthor] = useState(MovieQuotes[initialRandomQuote].author);

  const handleClick = () => {
    let getRandomQuote = Math.floor(Math.random() * MovieQuotes.length);
    setQuote(MovieQuotes[getRandomQuote].quotation);
    setAuthor(MovieQuotes[getRandomQuote].author);

    // since api is slow and unstable, I'm commenting this feature out and adding the quotes db myself.
    // I'll leave the code snippets though
    // const proxy = "https://cors-anywhere.herokuapp.com/";
    // const api = `${proxy}https://thesimpsonsquoteapi.glitch.me/quotes?count=50`;
    // fetch(api)
    //   .then((request) => request.json())
    //   .then((data) => {
    //     setQuote(data[0].quote);
    //     setAuthor(data[0].character);
    //   });
  };

  return (
    <div id="quote-box">
      <h3 id="text">{quote}</h3>
      <p id="author">{author}</p>
      <a href="https://twitter.com/intent/tweet" id="tweet-quote">
        <img
          className="tweet-img"
          src={TwitterImg}
          alt="twitter_icon"
          style={{ width: "2rem" }}
        ></img>
      </a>

      <button id="new-quote" onClick={handleClick}>
        New Quote
      </button>
    </div>
  );
}

export default Wrapper;
