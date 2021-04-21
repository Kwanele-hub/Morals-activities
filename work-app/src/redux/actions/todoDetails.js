
  const initialState = {
    form: "",
  };
 const formReducer = (state = initialState, action) => {
    switch (action.type) {
      case "ADD_DETAILS":
        return {...state, form: [...state.form, action.payload]}
      default:
        return state;
    }
  };

  export default formReducer