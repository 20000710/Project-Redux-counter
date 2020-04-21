export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";

export const addIceCream = () => {
  return {
    type: INCREMENT
  };
};

export const minusIceCream = () => {
  return {
    type: DECREMENT
  };
};
