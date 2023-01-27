import React from "react";
import tryImage from "../public/assests/Images/try.svg";
import styles from "../styles/Try.module.css";
import Link from "next/link";
import Button from "./UI/Button";

function Try() {
  return (
    <section className={styles.tryContainer}>
      <div className="container">
        <div className="row">
          <div className={`col-md-6 ${styles.tryImage}`}>
            <img style={{maxWidth:"130px",width:"100%"}} className={`img-fluid`} src={tryImage.src} alt="try" />
          </div>
          <div className="col-md-6">
            <h2 class="md bolder my-4">
              Loved by thousands of awesome customers
            </h2>
            <p style={{color:"var(--signInBgColor)"}} class="my-4 lead fw-bolder">
              Try simple shop for free right away or speak to one of our experts.
            </p>
            <Link href="/signup">
              <Button bgColor={"rgb(8, 51, 150)"} color="white" classname="me-2">Try for Free</Button>
            </Link>
            <Link href="#">
            <Button bgColor={"rgb(255, 94, 77)"} color="white" classname="me-2 ">WhatsApp Us</Button>
            </Link>
            <div class="sm bold my-3">
              Get full access. No credit card required.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Try;
