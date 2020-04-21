import React from "react";
import { connect } from "react-redux";
import Header from "../components/header";

const home = props => {
  return (
    <div>
      <Header />
      <h1> Halaman Home </h1>
      <h3> jumlah Ice Cream {props.icecream} </h3>
      <h3> jumlah Cake {props.cake}</h3>
      <h3> jumlah total {props.total}</h3>
    </div>
  );
};

const mapStateToProps = props => {
  return {
    cake: props.Cake.cake,
    icecream: props.IceCream.icecream,
    total: props.Cake.cake + props.IceCream.icecream
  };
};

export default connect(mapStateToProps, null)(home);
