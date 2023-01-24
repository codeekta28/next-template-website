import React from 'react'

function Card({children,className}) {
  return (
    <div className={`rounded-bottom-right container bg-light ${className} `}>{children}</div>
  )
}

export default Card