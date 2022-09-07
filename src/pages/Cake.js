import React from "react";
import { connect } from "react-redux";
import { addCake, minusCake } from "../action/CakeAction";
import Header from "../components/header";

const cake = props => {
  console.log("props", props);
  return (
    <div>
      <Header />
      <h1>Halaman Cake</h1>
      <button
        onClick={() => {
          props.addCake();
        }}
      >
        +
      </button>
      <h3>Anda memiliki cake {props.cake}</h3>
      <button
        onClick={() => {
          if(props.cake > 0){
            props.minusCake();
          } else{
            return props.cake
          }
        }}
      >
        -
      </button>
    </div>
  );
};

const mapStateToProps = props => {
  return {
    cake: props.Cake.cake
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addCake: () => dispatch(addCake()),
    minusCake: () => dispatch(minusCake())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(cake);
