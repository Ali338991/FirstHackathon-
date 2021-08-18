import { combineReducers } from "redux";
import AuthReducer from "./reducers/AuthReducer";
import PicReducer from "./reducers/PicReducer";
import ProfileReducer from "./reducers/ProfileReducer";
import CoursesReducer from "./reducers/CoursesReducer";
import GetDataReducer from './reducers/admin/GetDataReducer'



const rootReducer = combineReducers({
    AuthReducer,
    PicReducer,
    ProfileReducer,
    CoursesReducer,
    GetDataReducer,
});


export default rootReducer;

