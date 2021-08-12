import React, { useEffect } from "react";
import { loadUserData } from "../../store/actions/AuthActions";
import { useSelector, useDispatch } from "react-redux";

export default function User() {
  const dispatch = useDispatch();
  const uid = useSelector((state) => state.AuthReducer.user?.uid);
  console.log("useEffect Check", uid);
  useEffect(() => {
    dispatch(loadUserData(uid));
  }, [uid]);
  return <div className="bg-danger ">User Home Page</div>;
}
