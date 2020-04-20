export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";

export const addItem = () => {
  return {
    type: INCREMENT
  };
};

export const minusItem = () => {
  return {
    type: DECREMENT
  };
};
