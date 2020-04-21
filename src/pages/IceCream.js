import React from "react";
import { connect } from "react-redux";
import Header from "../components/header";
import { addIceCream, minusIceCream } from "../action/IceCreamAction";

const icecream = props => {
  console.log("props", props);
  return (
    <div>
      <Header />
      <h1>Halaman Ice Cream</h1>
      <button
        onClick={() => {
          props.addIceCream();
        }}
      >
        +
      </button>
      <h3>Anda memiliki ice cream {props.icecream}</h3>
      <button
        onClick={() => {
          props.minusIceCream();
        }}
      >
        -
      </button>
    </div>
  );
};

const mapStateToProps = props => {
  return {
    icecream: props.IceCream.icecream
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addIceCream: () => dispatch(addIceCream()),
    minusIceCream: () => dispatch(minusIceCream())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(icecream);
