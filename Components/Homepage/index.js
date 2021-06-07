import React from "react";

export default function index() {
  return (
    <div
      id="home"
      className="parallax first-section"
      data-stellar-background-ratio="0.4"
      style={{ backgroundImage: "url('uploads/building/slide-img1.png')" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12 col-md-offset-2 text-center">
            <div className="big-tagline">
              <img
                className="border-line-img"
                src="uploads/building/sep-line-white.png"
                alt=""
              />
              <h2>
                <span className="yellow"
                 >
                  Cdi Build
                </span>
              </h2>
              <img
                className="border-line-img"
                src="uploads/building/sep-line-white.png"
                alt=""
              />
              <p className="lead">
                L'entreprise specialise dans l'architeture et la construction
                des maison et autres services pour l'assurance de vos
                construction
              </p>
              <a
                data-scroll
                href="#services"
                className="btn btn-light btn-radius btn-brd"
              >
                Nos Services
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
