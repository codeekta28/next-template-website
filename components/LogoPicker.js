import React from 'react'
import { useState } from 'react';
import styles from "../styles/LogoPicker.module.css"
function LogoPicker({takeLogo}) {
    const [logo, setLogo] = useState(null);
    const handleLogoChange = (e) => {
        setLogo(e.target.files[0])
        takeLogo(e.target.files[0])
      }
  return (
    <div className={`${styles.logoContainer}`}>
     <label htmlFor="logo">Upload Logo:</label>
      <input type="file" id="logo" name="logo" onChange={handleLogoChange}  accept="image/*"/>
    </div>
  )
}

export default LogoPicker