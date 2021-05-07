import React from "react";
import disneysmall from "../../../assets/images/disney-small.svg";
import "./style.css";

export default function TabMenu() {
  return (
    <div className="tab-menu d-lg-none py-2">
      <div className="text-center" id="home">
        <i className="bx bxs-home d-block mb-1 active-link"></i>
        <span className="active-link">Beranda</span>
      </div>
      <div className="text-center" id="serial">
        <i className="bx bx-tv d-block mb-1"></i>
        <span>Serial</span>
      </div>
      <div className="text-center align-self-start" id="disney">
        <img src={disneysmall} alt="" />
      </div>
      <div className="text-center" id="film">
        <i className="bx bx-movie d-block mb-1"></i>
        <span>Film</span>
      </div>
      <div className="text-center" id="local">
        <i className="bx bx-map d-block mb-1"></i>
        <span>Lokal</span>
      </div>
    </div>
  );
}
