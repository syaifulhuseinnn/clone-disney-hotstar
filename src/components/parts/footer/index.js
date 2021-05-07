import React from "react";
import "./style.css";
import gplay from "../../../assets/images/gplay.svg";
import appstore from "../../../assets/images/appstore.svg";

export default function Footer() {
  return (
    <footer className="footer my-5 py-4">
      <div className="row no-gutters">
        <div className="col-12 col-md-7 col-xl-7">
          <div className="menu">
            <ul>
              <li>Tentang Disney+ Hotstar</li>
              <li>Syarat Penggunaan</li>
              <li>Kebijakan Privasi</li>
              <li>Tanya Jawab</li>
              <li>Masukan</li>
            </ul>
            <p>
              © 2021 Disney dan semua perusahaan terkait. Hak cipta dilindungi
              undang-undang. © 2021 semua perusahaan pemberi lisensi Disney. Hak
              cipta dilindungi undang-undang.
            </p>
          </div>
        </div>
        <div className="col-6 col-md-2 col-xl-2">
          <div className="connect-us">
            <span className="d-block con">Terhubunglah dengan kami</span>
            <span className="fb mt-2 mt-xl-3 p-2 rounded">
              <i className="bx bxl-facebook text-center"></i>
            </span>
            <span className="twitter mt-2 mt-xl-3 mx-2 p-2 rounded">
              <i className="bx bxl-twitter"></i>
            </span>
          </div>
        </div>
        <div className="col-6 col-md-2 col-xl-3">
          <div className="app">
            <span className="d-block con">Disney+ Hotstar App</span>
            <div className="mt-xl-2">
              <img src={gplay} alt="" className="my-2 mr-sm-2 mr-xl-2" />
              <img src={appstore} alt="" className="" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
