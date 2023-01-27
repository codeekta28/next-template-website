import React from "react";
import BestPlatform from "../components/BestPlatform";
import CloudHosting from "../components/CloudHosting";
import DesignInfo from "../components/DesignInfo";
import Footer from "../components/Footer";
import HeadCompo from "../components/HeadCompo";
import HeaderCompo from "../components/HeaderCompo";
import Navbar from "../components/Navbar";
import Tools from "../components/Tools";
import Try from "../components/Try";
import styles from "../styles/Home.module.css"

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
     <main>
      {/* <DesignInfo/> */}
      <Tools/>
      <BestPlatform/>
      <CloudHosting/>
      <Try/>
      <hr className={styles.hrDotted}/>
     </main>
     <Footer/>
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
