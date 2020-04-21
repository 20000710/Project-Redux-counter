import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

const header = props => {
  console.log("props", props);
  return (
    <div>
      <h2>Header</h2>
      <h3>Total ice cream adalah {props.icecream}</h3>
      <h3>Total cake adalah {props.cake}</h3>

      <button
        onClick={() => {
          props.history.push("/");
        }}
      >
        Home
      </button>

      <button
        onClick={() => {
          props.history.push("/icecream");
        }}
      >
        Ice Cream
      </button>
      <button
        onClick={() => {
          props.history.push("/cake");
        }}
      >
        Cake
      </button>
    </div>
  );
};

const mapStateToProps = props => {
  return {
    icecream: props.IceCream.icecream,
    cake: props.Cake.cake
  };
};

export default connect(mapStateToProps, null)(withRouter(header));
