import React from 'react'

function Button({children,onClick,classname}) {
  return (
    <button type="button" onClick={onClick} className={`btn btn-dark btn-lg btn-block w-100 rounded  ${classname}`}>{children}</button>
  )
}

export default Button