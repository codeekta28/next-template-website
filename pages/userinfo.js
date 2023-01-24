import React from "react";
import styles from "../styles/userinfo.module.css";
import ImageInitial from "../components/SignUpLogIn/ImageInitial";
import chooseColor from "../public/assests/Images/chooseColor.webp";
import relax from "../public/assests/Images/relax.webp";
import Heading from "../components/SignUpLogIn/Heading";
import InputCompo from "../components/SignUpLogIn/InputCompo";
import ColorPicker from "../components/ColorPicker";
import { useState } from "react";
import LogoPicker from "../components/LogoPicker";
import Button from "../components/UI/Button"

function userinfo() {
  const [color, setColor] = useState("#FFFFFF");
  const [logo, setLogo] = useState(null);
  const [name, setName] = useState("");
  function changeColor(color) {
    console.log("color in user oage", color);
    setColor(color);
    // this function will change the bg color of container according to the selection of color:
  }
  function handleLogo(logo){
setLogo(logo)
  }
  function handleSubmit(){
    console.log("logo",logo)
    console.log("color",color)
    console.log("name",name)
  }

  // function to check if the color is light or dark
  const isLight = (color) => {
    const [r, g, b] = color.match(/\w\w/g).map((x) => parseInt(x, 16));
    return (r * 299 + g * 587 + b * 114) / 1000 > 125;
  };
  // styles
  const containerStyle = {
    backgroundColor: color,
    color: isLight(color) ? "black" : "white",
  };
  return (
    <div
      className={`container-fluid  d-flex align-items-center ${styles.userinfoContainer}`}
     
    >
      <div className={`row  ${styles.userRow}`}>
        <div className="col-md-4 col-12">
          <ImageInitial img={chooseColor} alt="choose color image" />
        </div>
        <div className="col-md-4 col-12 text-center d-flex flex-column justify-content-center">
          <Heading
            heading="Relax Crunch And Munch"
            description="We will take the responsibility for your businness growth"
          />
          {/* form starts here */}
          <form action="" onSubmit={handleSubmit}>
            <InputCompo
              type="text"
              name="businessName"
              placeHolder="Business Name"
              onChange={(e) => setName(e.target.value)}
            />

            <ColorPicker  style={containerStyle} changeColor={changeColor} />
            <LogoPicker takeLogo={handleLogo} />
            <Button classname="mt-5">Submit</Button>
          </form>
        </div>
        <div className="col-md-4 col-12">
          <ImageInitial img={relax} alt="relax customer image" />
        </div>
      </div>
    </div>
  );
}

export default userinfo;
