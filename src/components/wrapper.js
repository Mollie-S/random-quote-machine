import React from "react";
import TwitterImg from "../images/Twitter_Social_Icon_Rounded_Square_Color.png";

function Wrapper() {
  // const proxy = "https://cors-anywhere.herokuapp.com/";
  const api = "https://api.paperquotes.com/apiv1/quotes/?lang=en";

  fetch(api, {
    headers: {
      Authorization: "Token{547e9ce1fd76c539001052061b1ec2b93c2b6aff}",
    },
  })
    .then((request) => request.json())
    .then((data) => console.log(data));

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
