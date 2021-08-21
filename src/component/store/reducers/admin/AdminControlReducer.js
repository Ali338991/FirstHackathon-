import {GET_NEWS,GET_ANNOUNCEMENT,GET_COURSE_LIST} from "../../actions/adminAction/AdminControlAction";
const initialState = {
 news: null,
 Announcement:null,
 GetCourseList:null,
 }
 
 
 
 function AdminControlReducer(state=initialState, action) {
     switch (action.type) {
      
             case GET_NEWS:{
            
                return {
                    ...state,
                    news:  action.payload
                };
            }

            case GET_ANNOUNCEMENT:{
            
                return {
                    ...state,
                    Announcement:  action.payload
                };
            }
            case GET_COURSE_LIST:{
            
                return {
                    ...state,
                    GetCourseList:  action.payload
                };
            }
        default:
         return state;
     }
 }
 
 export default AdminControlReducer;