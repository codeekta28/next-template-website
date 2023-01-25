import React from "react";
import Heading from "./SignUpLogIn/Heading";
import Navbar from "./Navbar";
import styles from "../styles/HeaderCompo.module.css";
import header from "../public/assests/Images/header.webp"
import signIn from "../public/assests/Images/signIn.jpg"
import ImageInitial from "./SignUpLogIn/ImageInitial";
import Link from "next/link";

function HeaderCompo() {
  return (
    <header className={styles.header}  style={{ backgroundColor:"#778da9" }}>

    <div className={`container ${styles.headerContainer}`}>
         <div className="row">
             <div className="col-md-6 col-sm-12  order-md-1 order-2 text-light pt-5">
                 <h2 className="pb-3">Cheap-Beautiful-Durable landing Pages__Without Dev Help</h2>
                 {/* <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod quidem incidunt natus libero repellat provident, earum pariatur laborum commodi possimus fugiat saepe similique, ea harum voluptate error delectus sunt repellendus.</p> */}
                 <h4 className="">Your website should be a marketing asset, not an engineering challenge.</h4>
                 <Link href="/signup" className="btn btn-light mt-3">Start Building</Link>
             </div>
             {/* <div className="col-md-2"></div> */}
             <div className="col-md-6 col-sm-12  order-md-2 order-1 mt-2">
               <ImageInitial img={header} alt="header"/>
             
             </div>

         </div>
     </div>
      {/* <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <!-- Your navigation links here -->
  </nav> */}
    </header>
  );
}

export default HeaderCompo;
// <div className='border border-danger'style={{ backgroundColor: "var(--signInBgColor)"}}>
//     <div className="container border border-danger bg-primary">
//         <div className="row">
//             <div className="col-md-5 text-light">
//                 {/* <Heading heading={"Cheap-Beautiful-Durable landing Pages__Without Dev Help"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur voluptatem quae, harum aliquid, molestias culpa nostrum sapiente voluptas nulla explicabo maxime dolores quia iste ut ducimus modi fuga? Pariatur, consequatur!"}/> */}
//                 <h3>Cheap-Beautiful-Durable landing Pages__Without Dev Help</h3>
//                 <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod quidem incidunt natus libero repellat provident, earum pariatur laborum commodi possimus fugiat saepe similique, ea harum voluptate error delectus sunt repellendus.</p>
//             </div>
//             <div className="col-md-2"></div>
//             <div className="col-md-5">image</div>

//         </div>
//     </div>
// </div>
