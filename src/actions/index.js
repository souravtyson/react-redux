export const incNumber = (num = 0) => {
  return {
    type: "INCREMENT",
    payload: num
  };
};

export const decreNumber = (num = 0) => {
  return {
    type: "DECREMENT",
    payload: num
  };
};
