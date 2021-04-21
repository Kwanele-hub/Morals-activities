import { combineReducers } from "redux";
import formReducer from '../actions/todoDetails'

const rootReducer = combineReducers({
  form: formReducer,
});

export default rootReducer;