import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Heading from "../components/SignUpLogIn/Heading";
import Button from "../components/UI/Button";
import ImageInitial from "../components/SignUpLogIn/ImageInitial";
import InputCompo from "../components/SignUpLogIn/InputCompo";
import Link from "next/link";
import logo from "../public/assests/Images/logo.png";
import signUp from "../public/assests/Images/signUp.jpg";
import { useState } from "react";
import { postRequest } from "../Request/postRequest";
import { formValidationSchemaManagement } from "../helper/formValidationSchemaManagement";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import HeadCompo from "../components/HeadCompo";

const inter = Inter({ subsets: ["latin"] });
// react-hook-form schema management
const schema = formValidationSchemaManagement({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().min(8).max(32).required(),
});

export default function SignUp() {
  // states
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [signUpStatus, setSignUpStatus] = useState(null);
  const [signUpMsg, setSignUpMsg] = useState("");

  // validation

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  // event functions
  function handleChange(event) {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }
  // submit function
  async function myfun(evt) {
    // evt.preventDefault();

    let formDataa = new FormData();

    formDataa.append("name", formData.name);
    formDataa.append("email", formData.email);
    formDataa.append("password", formData.password);

    const responseData = await postRequest(
      "http://galux.live/webwork/public/api/auth/register",
      formDataa
    );

    if (responseData.status) {
      setSignUpStatus(responseData.status);
      setSignUpMsg(responseData.message);
    } else {
      setSignUpStatus(responseData.status);
      setSignUpMsg(responseData.errors.email[0]);
    }
  }
  // alert msg according to signUp Condition
  let display;
  if (signUpStatus) {
    display = (
      <div className="alert alert-success  w-100 my-3" role="alert">
        {signUpMsg} Click{" "}
        <Link href="/login" className="alert-link">
          Login{" "}
        </Link>
        to procced
      </div>
    );
  } else {
    display = (
      <div
        className="alert alert-danger alert-dismissible fade show w-100 my-3"
        role="alert"
      >
        <strong>{signUpMsg}</strong> Please signUp Carefully.
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>
    );
  }
  // style of alert msg
  const msgStyle = {
    display: signUpStatus === null ? "none" : "block",
  };

  return (
    <>

      <HeadCompo>
        <title>Shop Future-Sign Up</title>
        <meta
          name="description"
          content="create your own website using shop future to increase your customer"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </HeadCompo>
      <main
        className={`d-flex flex-column justify-content-center p-3  ${styles.main} `}
        style={{ height: "100vh", backgroundColor: "var(--bgLightColor)" }}
      >
        <div style={msgStyle}>{display}</div>
        <div className="container ">
          <div className="row" style={{ backgroundColor: "var(--cardColor)" }}>
            <div className="col-lg-4 px-3">
              <div className=" d-flex flex-column justify-content-center h-100 pl-2">
                <Heading
                  heading="Create an account"
                  description="Let's get started with your 30 day free trial"
                />
                <form action="" onSubmit={handleSubmit(myfun)}>
                  <div>
                    <input
                      {...register("name")}
                      className={` mb-1`}
                      placeholder="FullName"
                      type="text"
                      name="name"
                      onChange={handleChange}
                      value={formData.name}
                    />
                    <p className="text-danger">{errors.name?.message}</p>
                  </div>
                  <div>
                    <input
                      {...register("email")}
                      className={`${styles.input} mb-1`}
                      placeholder="Email"
                      type="email"
                      name="email"
                      onChange={handleChange}
                      value={formData.email}
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
                      value={formData.password}
                    />
                    <p className="text-danger">{errors.password?.message}</p>
                  </div>

                  <button className="btn btn-dark btn-lg btn-block w-100 rounded">
                    Create An Account
                  </button>
                  {/* <Button>Create Account</Button> */}
                </form>
                <p className="text-center py-3">
                  Already have an account <Link href="./login">Log In</Link>
                </p>
              </div>
            </div>
            <div className="col-lg-8 d-none d-lg-block p-3">
              {" "}
              <ImageInitial img={signUp} alt="signUp Image" />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
