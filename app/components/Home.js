import React from "react";
import SVG from "react-inlinesvg";

class Home extends React.Component {
  render() {
    return (
      <div className="home-container">
        <SVG src="app/images/pattern.svg" />
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
