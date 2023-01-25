import React from "react";
import Head from "next/head";

function HeadCompo(props) {
  return (
    <Head>
      {props.children}
  
    </Head>
  );
}

export default HeadCompo;
