import { useState, useEffect } from "react";
import "./App.css";
import firebase from 'firebase';
import Navigation from "./component/navigation/Navigation";
import { useDispatch } from "react-redux";
import { doCheckUser } from "./component/store/actions/AuthActions";
import { doGetAnnouncement, doGetCourseList, doGetNews } from "./component/store/actions/adminAction/AdminControlAction";
import Loader from "./component/commonComponent/Loader";
function App() {
  const dispatch = useDispatch();
  const [Spin, setSpin] = useState(false);


  async function Check() {
    await firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User        var user = user;
        dispatch(doCheckUser(user));    
      } 
    });
  }

  useEffect(() => {
    Check();
    dispatch(doGetNews(setSpin))
    dispatch(doGetAnnouncement(setSpin))
    dispatch(doGetCourseList(setSpin))

  }, []);

  if (Spin) {
    return <Loader />;
  }

  return (
    <div>
      <Navigation />
    </div>
  );
}

export default App;
