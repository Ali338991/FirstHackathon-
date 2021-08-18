import { db, auth } from "../../../config/Firebase";
import firebase from "firebase";

export const ADMIN_LOGIN = "ADMIN_LOGIN";
export const ADMIN_LOGOUT = "ADMIN_LOGOUT";

export const doAdminLogin = (obj, history, setSpin) => async (dispatch) => {
  try {
    setSpin(true);
    // firebase login
    const AdminResult = await auth.signInWithEmailAndPassword(
      obj.Email,
      obj.Password
    );
    // const id = AdminResult.user.uid;
    dispatch({
      type: ADMIN_LOGIN,
      payload: AdminResult,
    });
    setSpin(false);
    history.replace("/Admin");

  } catch (error) {
    alert(error);
    setSpin(false);
  }
};

export const doAdminLogout = () => (dispatch) => {
    try {
      console.log("Logout Working");
      
      const res = auth.signOut();
      dispatch({
        type: ADMIN_LOGOUT,
      });
    } catch (error) {
      alert(error);
    }
  };