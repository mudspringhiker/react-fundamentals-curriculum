import React from "react";
import Background from "../images/pattern.svg";

class Home extends React.Component {
  render() {
    return (
      <div className="home-container">
        <Background />
        <div className="home-title">
          <h1>A Weather App</h1>
          <div className="form">
            <form className="column">
              <label className="header" htmlFor="citystate">
                Enter a City and State
              </label>
              <input type="text" placeholder="Cedar Park, TX" id="city-state" />
              <button className="button" type="submit">
                Get Weather
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
