import React from 'react'
import { SketchPicker } from 'react-color';
import { useState } from 'react';
import InputCompo from './SignUpLogIn/InputCompo';

function ColorPicker({changeColor}) {
    const [placeHolder,setPlaceHolder]=useState("Pick A Color For Your Template ")
    const [color, setColor] = useState('#ff0000');
    const [showColor, setShowColor] = useState(false);

    function handleColor(){
       setShowColor((prevState)=>!prevState)
 
    }
    
  const handleColorChange = (color) => {
    setColor(color.hex);
    setPlaceHolder(color.hex)
    changeColor(color.hex)
    // you can perform additional operations here
    // like update other state or call other function
    // or you can do any other operation with this color.hex value
  }
  return (
    <div>
        {/* <label htmlFor="">Choose Color For Template:</label>
         <SketchPicker color={color} onChange={(color) => setColor(color.hex)} /> */}
         <InputCompo type="text" name="color" placeHolder={placeHolder} onClick={handleColor}/>
         {showColor && <SketchPicker color={color} onChange={handleColorChange} /> }
    </div>
  )
}

export default ColorPicker