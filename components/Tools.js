import React from "react";
import Card from "../components/UI/Card";
import getStarted from "../public/assests/Images/getStarted.svg";
import integrate from "../public/assests/Images/integrate.svg";
import help from "../public/assests/Images/help.svg";
import ToolsCard from "./ToolsCard";

function Tools() {

  // const getStarted = require('../public/assests/Images/signUp.jpg').default;
  return (
    <section className="tools my-5">
      <h5 className="text-center">
        Our machine learning enabled tools are designed to add intelligence to
        your website development.
      </h5>
      <div className="container p-5">
        <div className="row">
          {/* Can optimize it to array in future */}
          <ToolsCard
            img={getStarted.src}
            title={"Integrate all platforms"}
            des={
              "You can integrate all your internal platforms with Kapture,using APIs and SDKs, to facilitate efficiency across teams."
            }
          />
          <ToolsCard
            img={integrate.src}
            title={"Easy to get started"}
            des={
              "Our account managers help you get started, so you can deploy and deliver a seamless customer experience in no time."
            }
          />
          <ToolsCard
            img={help.src}
            title={"We are here to help"}
            des={
              "Be it product support or customer success, our experts are here to help clear all the hurdles at every step of your journey."
            }
          />
          {/* <div className="col-4">
            <Card>
              <img className="py-2 img-fluid" src={integrate.src} alt="" />
              <h5 className="bold">Integrate all platforms</h5>
              <p className="my-1 fw-light">
                You can integrate all your internal platforms with Kapture,
                using APIs and SDKs, to facilitate efficiency across teams.
              </p>
            </Card>
          </div>
          <div className="col-4">
            <Card>
              <img className="py-2 img-fluid" src={help.src} alt="" />
              <h5 className="bold">We are here to help</h5>
              <p className="my-1">
                Be it product support or customer success, our experts are here
                to help clear all the hurdles at every step of your journey.
              </p>
            </Card>
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default Tools;
{
  /* <div class="card">
<img class="py-2" src="#" alt=""/>
<h5 class="bold">Easy to get started</h5>
<p class="my-1">Our account managers help you get started, so you can deploy and deliver a seamless
    customer experience in no time.</p>
</div>
<div class="card">
<img class="py-2" src="#" alt=""/>
<h5 class="bold">Integrate all platforms</h5>
<p class="my-1">You can integrate all your internal platforms with Kapture, using APIs and SDKs, to
    facilitate efficiency across teams.</p>
</div>
<div class="card">
<img class="py-2" src="#" alt=""/>
<h5 class="bold">We are here to help</h5>
<p class="my-1">Be it product support or customer success, our experts are here to help clear all
    the hurdles at every step of your journey.</p>
</div> */
}
