import React from "react";
import SVG from "react-inlinesvg";
import Form from "./Form";

class Home extends React.Component {
  render() {
    return (
      <div className="home-container">
        <SVG src="app/images/pattern.svg" />
        <div className="home-title">
          <div className="form">
            <Form vertical={true}>
              <label className="label" htmlFor="citystate">
                Enter a City and State
              </label>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
