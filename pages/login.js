import React from "react";
import Head from "next/head";
import Card from "../components/UI/Card";
import ImageInitial from "../components/SignUpLogIn/ImageInitial";
import signIn from "../public/assests/Images/signIn.jpg";
import Heading from "../components/SignUpLogIn/Heading";
import InputCompo from "../components/SignUpLogIn/InputCompo";
import Button from "../components/UI/Button";
import Link from "next/link";
import styles from "../styles/login.module.css";
import { useRouter } from "next/router";
import { useState } from "react";
import { postRequest } from "../Request/postRequest";
import { userLogin } from "../store/auth";
import store from "../store/store";
import { useForm } from "react-hook-form";
import { setTokenToLocalStorage } from "../helper/setTokenToLocalStorage";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import HeadCompo from "../components/HeadCompo";

const schema = yup.object({
  email: yup.string().email().required(),
  // password: yup.string().min(8).max(32).required(),
});
function login() {
  // hooks
  const router = useRouter();

  // states
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [signInStatus, setSignInStatus] = useState(null);
  const [signInMsg, setSignInMsg] = useState("");

   // validation (common)
   const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function handleChange(evt) {
    setLoginData({ ...loginData, [evt.target.name]: evt.target.value });
  }

  async function signInAction(evt) {

    // chances to optimize used same code in index.tsx handlesubmit function(params)
    let formDataa = new FormData();
    formDataa.append("email", loginData.email);
    formDataa.append("password", loginData.password);
    const responseData = await postRequest(
      "http://galux.live/webwork/public/api/auth/login",
      formDataa
    );
    // adding token to redux store
    store.dispatch(userLogin(responseData.token));
    // adding token to local storage
    setTokenToLocalStorage(responseData.token)
    
    setSignInStatus(responseData.status);
    setSignInMsg(responseData.message);
    if (responseData.status) {
      router.push("/dashboard/user");
    }
  }
  // submit function ends here
  const msgStyle = {
    display: signInStatus === null ? "none" : "block",
  };
  return (
    <>
      <HeadCompo>
      <title>Shop Future-Sign In</title>
        <meta
          name="description"
          content="create your own website using shop future to increase your customer"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </HeadCompo>
      <main
        className={`d-flex flex-column justify-content-center p-3 ${styles.main}  `}
        style={{ height: "100vh", backgroundColor: "var(--signInBgColor)" }}
      >
        <div style={msgStyle}>
          {signInStatus == false && (
            <div
              className="alert alert-danger alert-dismissible fade show w-100 my-3"
              role="alert"
            >
              <strong>{signInMsg}</strong> Please signIn Carefully.
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
              ></button>
            </div>
          )}
        </div>
        <Card className="container ">
          <div className="row" style={{ backgroundColor: "var(--signInCard)" }}>
            <div className="col-lg-7 d-none d-lg-block p-3">
              <ImageInitial img={signIn} alt="image for signin page" />
            </div>
            <div className="col-lg-5">
              <div className=" d-flex flex-column justify-content-center h-100 pl-2">
                <Heading
                  heading="Hey,Hello"
                  description="Enter the information you entered while regestering"
                />
                <form action="" onSubmit={handleSubmit(signInAction)}>
                <div>
                    <input
                    className="input"
                      {...register("email")}
                      className={`${styles.input} mb-1`}
                      placeholder="Email"
                      type="email"
                      name="email"
                      onChange={handleChange}
                      value={loginData.email}
                    />
                    <p className="text-danger">{errors.email?.message}</p>
                  </div>
                  <div>
                    <input
                      {...register("password")}
                      className={`${styles.input} mb-1`}
                      placeholder="password"
                      type="password"
                      name="password"
                      onChange={handleChange}
                      value={loginData.password}
                    />
                    <p className="text-danger">{errors.password?.message}</p>
                  </div>
                  {/* <Button classname="mt-5">Login</Button> */}
                  <button className="btn btn-dark btn-lg btn-block w-100 rounded mt-5">
                    Login
                  </button>
                </form>
              </div>
            </div>
          </div>
        </Card>
      </main>
    </>
  );
}

export default login;
