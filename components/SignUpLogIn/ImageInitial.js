import React from 'react'
import Image from 'next/image'
import signUp from "../../public/assests/Images/signUp.jpg"



function ImageInitial({img,alt}) {
  return (
    <div className=' ' style={{height:"100%"}}>
        <Image className={`img-fluid  rounded-top-left rounded-bottom-right h-100`}
            src={img}
            alt={alt}
    
        />
    </div>
  )
}

export default ImageInitial