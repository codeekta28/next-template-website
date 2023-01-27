import React from 'react'
import styles from "../../styles/Card.module.css"

function Card({children,className}) {
  return (
    <div className={`${className} ${styles.card} `}>{children}</div>
  )
}

export default Card
// rounded-bottom-right container bg-light 