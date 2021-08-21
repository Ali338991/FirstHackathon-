import { db, auth } from "../../../config/Firebase";
import firebase from "firebase";

export const GET_NEWS = "GET_NEWS";
export const GET_ANNOUNCEMENT = "GET_ANNOUNCEMENT";
export const GET_COURSE_LIST = "GET_COURSE_LIST";

export const doAddNews = (obj, setSpin) => async (dispatch) => {
  try {
    setSpin(true);
    await db.collection("News").add(obj);
    setSpin(false);
    alert("News Added")

  } catch (error) {
    alert(error);
    setSpin(false);
  }
};


export const doGetNews = (setSpin) => async (dispatch) => {
    try {
      setSpin(true);
      await db.collection("News").onSnapshot((querySnapshot) => {
        const NewsList = [];
        querySnapshot.forEach((doc) => {
          NewsList.push({
            ...doc.data(),
            docId: doc.id,
          });
        });
  
        console.log("CheckNews LISt", NewsList);
  
        dispatch({
          type: GET_NEWS,
          payload: NewsList
        });
        setSpin(false);
      });
    } catch (error) {
      alert(error);
      setSpin(false);
    }
  };

  export const doDelNews = (docId,setSpin) => async (dispatch) => {
    try {
      setSpin(true);
   await db.collection("News").doc(docId).delete()
      alert("Done");
      setSpin(false);
    } catch (error) {
      alert(error);
      setSpin(false);
    }
  };


  // Announcement Area

  export const doAddAnnouncement = (obj, setSpin) => async (dispatch) => {
    try {
      setSpin(true);
      await db.collection("Announcement").add(obj);
      setSpin(false);
      alert("Announcement Added")

    } catch (error) {
      alert(error);
      setSpin(false);
    }
  };
  
  
  export const doGetAnnouncement = (setSpin) => async (dispatch) => {
      try {
        setSpin(true);
        await db.collection("Announcement").onSnapshot((querySnapshot) => {
          const AnnouncementList = [];
          querySnapshot.forEach((doc) => {
            AnnouncementList.push({
              ...doc.data(),
              docId: doc.id,
            });
          });
    
          console.log("CheckAnnouncement LISt", AnnouncementList);
    
          dispatch({
            type: GET_ANNOUNCEMENT,
            payload: AnnouncementList
          });
          setSpin(false);
        });
      } catch (error) {
        alert(error);
        setSpin(false);
      }
    };
  
    export const doDelAnnouncement = (docId,setSpin) => async (dispatch) => {
      try {
        setSpin(true);
       await db.collection("Announcement").doc(docId).delete()
        alert("Done");
        setSpin(false);
      } catch (error) {
        alert(error);
        setSpin(false);
      }
    };
  
    //Course List Action

    export const doAddCourseList = (obj, setSpin) => async (dispatch) => {
      try {
        setSpin(true);
        await db.collection("CourseList").add(obj);
        setSpin(false);
        alert("Course Added")
      } catch (error) {
        alert(error);
        setSpin(false);
      }
    };
    
    
    export const doGetCourseList = (setSpin) => async (dispatch) => {
        try {
          setSpin(true);
          await db.collection("CourseList").onSnapshot((querySnapshot) => {
            const CourseList = [];
            querySnapshot.forEach((doc) => {
              CourseList.push({
                ...doc.data(),
                docId: doc.id,
              });
            });
      
            console.log("CheckCourseList LISt", CourseList);
      
            dispatch({
              type: GET_COURSE_LIST,
              payload: CourseList
            });
            setSpin(false);
          });
        } catch (error) {
          alert(error);
          setSpin(false);
        }
      };
    
      export const doDelCourseList = (docId,setSpin) => async (dispatch) => {
        try {
          setSpin(true);
          await db.collection("CourseList").doc(docId).delete()
          alert("Done");
          setSpin(false);
        } catch (error) {
          alert(error);
          setSpin(false);
        }
      };
    
