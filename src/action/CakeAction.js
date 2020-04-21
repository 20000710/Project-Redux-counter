export const INCREMENTCAKE = "INCREMENTCAKE";
export const DECREMENTCAKE = "DECREMENTCAKE";

export const addCake = () => {
  return {
    type: INCREMENTCAKE
  };
};

export const minusCake = () => {
  return {
    type: DECREMENTCAKE
  };
};
