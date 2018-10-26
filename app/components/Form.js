import React from "react";

const Form = props => {
  return (
    <form className="column">
      {props.children}
      <div className={!props.vertical && "input-button-header"}>
        <input type="text" placeholder="Cedar Park, TX" id="city-state" />
        <button className="button" type="submit">
          Get Weather
        </button>
      </div>
    </form>
  );
};

export default Form;
