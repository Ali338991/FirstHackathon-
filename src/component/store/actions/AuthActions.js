import { db, auth } from "../../config/Firebase";
// import { CHECK_USER } from "../reducers/TodoType";

export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const SIGNUP = "SIGNUP";
export const USER_DATA = "USER_DATA";

export const loadUserData = (uid) => async (dispatch) => {
  try {
    const userData = await db.collection("User")
    .where("id", "==", uid)
    .get()

    console.log("userData", userData);

    dispatch({
      type: USER_DATA,
      payload: userData,
    });

  } catch (error) {
    alert(error);
    console.log("error", error);
  }
};

export const doLogin = (obj, history, setSpin) => async (dispatch) => {
  try {
    setSpin(true);
    // firebase login
    const userResult = await auth.signInWithEmailAndPassword(
      obj.Email,
      obj.Password
    );
    console.log("userResult", userResult.user);
    console.log("userResult", userResult.user.emailVerified);
    if (userResult.user.emailVerified === true) {
      dispatch({
        type: LOGIN,
        payload: userResult.user,
      });
      setSpin(false);
      history.replace("/User");
    } else {
      setSpin(false);
      history.replace("/Login");
      alert("First Verify Email");
    }
  } catch (error) {
    alert(error);
    setSpin(false);
  }
};

export const doSignUp = (obj, history, setSpin) => async (dispatch) => {
  try {
    setSpin(true);
    // firebase login
    const result = await auth.createUserWithEmailAndPassword(
      obj.Email,
      obj.Password
    );
    await result.user.updateProfile({
      displayName: obj.FName + obj.LName,
    });
    await result.user.sendEmailVerification();
    await db.collection("OurSubscriber").add({ Email: obj.Email });
    console.log("uID", result.user.uid);
    await db.collection("User").add({
      id: result.user.uid,
      Name: obj.FName + obj.LName,
      Email: obj.Email,
      Phone: obj.Phone,
      RegNo: obj.RegNo,
      MyCourse: obj.MyCourse,
      Password: obj.Password,
    });
    console.log("result", result.user.emailVerified);
    dispatch({
      type: SIGNUP,
      payload: result.user,
    });

    setSpin(false);

    history.replace("/Login");
    alert("Plz Check Your Email For Verification");
  } catch (error) {
    history.replace("/SignUp");
    setSpin(false);
    alert(JSON.stringify(error));
  }
};

export const doLogout = () => (dispatch) => {
  try {
    // firebase login
    const res = auth.signOut();
    console.log("user", res);
    dispatch({
      type: LOGOUT,
    });
  } catch (error) {
    alert(JSON.stringify(error));
    console.log("error", error);
  }
};
