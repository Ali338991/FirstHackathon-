import { useEffect } from "react";
import "./App.css";
import firebase from 'firebase';
import Navigation from "./component/navigation/Navigation";
import { useDispatch } from "react-redux";
import { doCheckUser } from "./component/store/actions/AuthActions";
function App() {
  const dispatch = useDispatch();

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
  }, []);

  return (
    <div>
      <Navigation />
    </div>
  );
}

export default App;
