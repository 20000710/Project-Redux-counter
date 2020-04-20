import React from "react";
import { connect } from "react-redux";

const Item = props => {
  console.log("props", props);
  return (
    <div>
      <h1>Halaman Item</h1>
      <h3>anda memiliki item {props.item}</h3>
    </div>
  );
};

const mapStateToProps = ({ item }) => {
  return {
    item: item
  };
};

export default connect(mapStateToProps, null)(Item);
