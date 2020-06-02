import React from "react";
import TwitterImg from "../images/Twitter_Social_Icon_Rounded_Square_Color.png";

function Wrapper() {
  return (
    <div id="quote-box">
      <h3 id="text">Text</h3>
      <p id="author">author</p>
      <a href="https://twitter.com/" id="tweet-quote">
        <img
          src={TwitterImg}
          alt="twitter_icon"
          style={{ width: "1rem" }}
        ></img>
      </a>

      <button id="new-quote">New Quote</button>
    </div>
  );
}

export default Wrapper;
