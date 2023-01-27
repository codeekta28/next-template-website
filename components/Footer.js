import React from "react";
import styles from "../styles/Footer.module.css";
import Link from "next/link";
import { AiFillGithub } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";

function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <div className="container">
        <div className="row p-5">
          <div className="col-4">
            <h3>Simple Shop</h3>
            <p>Copyright © 2023</p>
          </div>
          <div className="col-4">
            <nav>
              <ul style={{ listStyleType: "none" }}>
                <li>
                  <Link href="index.html">Home</Link>
                </li>
                <li>
                  <Link href="features.html">Features</Link>
                </li>
                <li>
                  <Link href="docs.html">Docs</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="col-4">
            <Link className={styles.social} href="#">
              <AiFillGithub />
            </Link>
            <Link className={styles.social} href="#">
              <AiFillFacebook />
            </Link>
            <Link className={styles.social} href="#">
              <AiFillInstagram />
            </Link>
            <Link className={styles.social} href="#">
              <AiFillTwitterCircle />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
