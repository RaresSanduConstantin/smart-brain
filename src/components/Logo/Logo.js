import React from "react";
import Tilt from "react-tilt";
import "./Logo.css";
import leu from "./leu.png";

const Logo = () => {
  return (
    <div className="ma4 mt0">
      <Tilt
        className="Tilt br2 shadow-3"
        options={{ max: 45, scale: 1 }}
        style={{ height: 140, width: 140 }}
      >
        <div className="Tilt-inner pa3">
          <img style={{ paddingTop: "5px" }} src={leu} alt="logo" />
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
