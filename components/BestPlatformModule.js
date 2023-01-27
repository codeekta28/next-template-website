import React from 'react'
import {GrDeploy} from "react-icons/gr"

import styles from "../styles/BestPlatformModule.module.css"

function BestPlatformModule({icon,num,purpose}) {
  return (
  <div className="col-md-4 text-center my-2">
    <icon className={styles.icon}>{icon}</icon>
    <h3 style={{fontSize:"25px",marginTop:"10px"}}>{num}</h3>
    <p className={`py-2 ${styles.para}`}>{purpose}</p>

  </div>
  )
}

export default BestPlatformModule