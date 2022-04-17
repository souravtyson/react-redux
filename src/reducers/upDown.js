const initialState = 20;

const changeNumber = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + (action.payload ? action.payload : 1);
    case "DECREMENT":
      return state - (action.payload ? action.payload : 1);
    default:
      return state;
  }
};

export default changeNumber;
