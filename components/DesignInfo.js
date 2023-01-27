import React from "react";
import styles from "../styles/DesignInfo.module.css";
import header from "../public/assests/Images/header1.webp";
import ImageInitial from "./SignUpLogIn/ImageInitial";
import Button from "./UI/Button";

function DesignInfo() {
  return (
    <section
      className={`${styles.horizontalGradient}  text-dark text-center py-4`}
    >
      {/* <h3 class="mt-3">A single platform for all your needs.</h3>
      <p class="my-4t">
        Integrate your contact centre, service centre and field force on one
        comprehensive platform.
      </p>

      <div className="container">
        <ImageInitial img={header} alt="one solution" />
        <div className="mt-4">
          <h3>Make the templates your own</h3>
          <p className="my-4"> 
            Sign up for a paid plan to access 100+ templates, build your own, or
            purchase a premium design from the Mailchimp Marketplace.
          </p>
          <Button bgColor={"#415a77"}  color="white">Sign Up Now</Button>
        </div>
      </div> */}
    </section>
  );
}

export default DesignInfo;
