import React from 'react'
import styles from "../styles/CloudHosting.module.css"
import cloud from "../public/assests/Images/cloud.png"
import Button from "./UI/Button"
import Link from 'next/link'
function CloudHosting() {
  return (
    <section className={styles.cloudContainer}>
        <div className="container">
            <div className={`row p-md-5 p-2`}>
                <div className={`col-md-6 my-2 text-md-start text-center ${styles.titleCol}`}>
                    <h1>Extreme Cloud Hosting</h1>
                    <h5>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, repellat.</h5>
                    <Link href={"/signUp"}><Button classname={`my-2`}>Try Now</Button></Link>
                </div>
                <div className="col-md-6">
                    <img className={styles.img} src={cloud.src} alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default CloudHosting