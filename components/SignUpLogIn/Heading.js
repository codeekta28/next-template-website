import React from 'react'

function Heading({heading,description}) {
  return (
    <div className=''>
        <h1 style={{fontWeight:"700"}}>{heading}</h1>
        <p style={{fontSize:"1.2rem",fontWeight:"400"}}>{description}</p>
    </div>
  )
}

export default Heading