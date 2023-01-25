import React from "react";
import HeadCompo from "../components/HeadCompo";
import HeaderCompo from "../components/HeaderCompo";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <>
      <HeadCompo>
        <title>SimplyWeb-Home</title>
        <meta
          name="description"
          content="create your own website using simplyWeb to increase your customere"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </HeadCompo>
      <Navbar/>
     <HeaderCompo/>
    </>
  );
}

// Home.getInitialProps = async () => {
//   return {
//     title: 'SimplyWeb-Homee',
//     description: 'create your own website using simplyWeb to increase your customere',
//   }
// }

export default Home;
