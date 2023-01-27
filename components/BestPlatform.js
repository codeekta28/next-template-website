import React from 'react'
import styles from "../styles/BestPlatform.module.css"
import {GrDeploy} from "react-icons/gr"
import {FaUpload} from "react-icons/fa"
import {FaProjectDiagram} from "react-icons/fa"

import BestPlatformModule from './BestPlatformModule'

function BestPlatform() {
  return (
 <section className='bestPlatform'>
    <div className="container">
        <h5 className={styles.heading}>
          Welcome to the best platform for building application for all types
          with modern architecture and scaling
</h5>
<div className="row my-5 w-75 m-auto">
<BestPlatformModule icon={<GrDeploy/>} num={"78,45,678"} purpose={"Deployment"}/>
<BestPlatformModule icon={<FaUpload/>} num={"100 TB"} purpose={"Published"}/>
<BestPlatformModule icon={<FaProjectDiagram/>} num={"23,65,67"} purpose={"Projects"}/>
</div>

    </div>

 </section>
  )
}

export default BestPlatform