import { combineReducers } from "redux";
import AuthReducer from "./reducers/AuthReducer";
import PicReducer from "./reducers/PicReducer";



const rootReducer = combineReducers({
    AuthReducer,
    PicReducer,
});


export default rootReducer;

