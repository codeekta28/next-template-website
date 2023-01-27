import React from "react";
import Card from "./UI/Card";
import styles from "../styles/ToolsCard.module.css"

function ToolsCard({img, title, des}) {
  return (
    <div className="col-md-4 my-2">
      <Card>
        <img className={`py-2 img-fluid ${styles.img}`} src={img} alt="" />
        <h6 className="bold">{title}</h6>
        <p className="my-1">{des}</p>
      </Card>
    </div>
  );
}

export default ToolsCard;
