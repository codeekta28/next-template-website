import React from 'react'
import styles from "../../styles/Button.module.css"

function Button({children,onClick,classname,bgColor,color}) {
  const btnStyle={
    backgroundColor: bgColor,
    color:color
  }
  return (
    // <button type="button" onClick={onClick} style={btnStyle} className={`btn btn-dark btn-lg btn-block w-100 rounded  ${classname}`}>{children}</button>
    <button  onClick={onClick} style={btnStyle} className={`${styles.button}  ${classname}`}>{children}</button>

  )
}

export default Button