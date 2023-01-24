import React from "react";
import { useCallback, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { getRequest } from "../../Request/getRequest";
import { useRouter } from "next/router";
import {getTokenFromLocalStorage} from "../../helper/getTokenFromLocalStorage"
import {removeTokenFromLocalStorage} from "../../helper/removeTokenFromLocalStorage"

function user() {
  // state
  const [userData, setUserData] = useState({});

  // routes
  const router=useRouter();

  // get request as soon as page loads
  const getUserDetail = useCallback(async (token) => {
    const data = await getRequest(
      token,
      "http://galux.live/webwork/public/api/auth/user"
    );
    setUserData(data);
  }, []);

  // useEffect to call above function
  useEffect(() => {
    // have to call this function here as localStorage is not recognisable at server side rendering ie outside useEffect 
    const token=getTokenFromLocalStorage();
    getUserDetail(token);
  }, []);

  // Event functions
  function handleLogout(){
    console.log("Logout")
    removeTokenFromLocalStorage();
    router.replace("/login")
  }
  return <>
  {Object.keys(userData).length>0 && <>
    <h1>created_at:{userData.user.created_at}</h1>
  <h1>email:{userData.user.email}</h1>
  <h1>id:{userData.user.id}</h1>
  <h1>name:{userData.user.name}</h1>
  <h1>updated_at:{userData.user.updated_at}</h1>
  <button onClick={handleLogout}>Logout</button>
  </>}
  </>

}

export default user;
