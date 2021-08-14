import { combineReducers } from "redux";
import AuthReducer from "./reducers/AuthReducer";
import PicReducer from "./reducers/PicReducer";
import ProfileReducer from "./reducers/ProfileReducer";



const rootReducer = combineReducers({
    AuthReducer,
    PicReducer,
    ProfileReducer,
});


export default rootReducer;

