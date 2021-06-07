import React from "react";

export default function index() {
  return (
    <header className="header header_style_01">
      <nav className="megamenu navbar navbar-default" data-spy="affix">
        <div className="top-header">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-hidden">
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-hidden">
                  <div className="gem-contacts-item gem-contacts-phone">
                    <a
                      className="phone-icon"
                      href="#"
                      target="_blank"
                      title="phone"
                    >
                      <i className="fa fa-phone" aria-hidden="true"></i>
                      +243827087305
                    </a>
                  </div>
                </div>
                <div className="top-area-block top-area-socials socials-colored-hover">
                  <div className="socials inline-inside">
                    <a
                      className="socials-item"
                      href="#"
                      target="_blank"
                      title="facebook"
                    >
                      <i className="fa fa-facebook" aria-hidden="true"></i>
                    </a>
                    <a
                      className="socials-item"
                      href="#"
                      target="_blank"
                      title="linkedin"
                    >
                      <i className="fa fa-linkedin" aria-hidden="true"></i>
                    </a>
                    <a
                      className="socials-item"
                      href="#"
                      target="_blank"
                      title="twitter"
                    >
                      <i className="fa fa-twitter" aria-hidden="true"></i>
                    </a>
                    <a
                      className="socials-item"
                      href="#"
                      target="_blank"
                      title="instagram"
                    >
                      <i className="fa fa-instagram" aria-hidden="true"></i>
                    </a>
                    <a
                      className="socials-item"
                      href="#"
                      target="_blank"
                      title="pinterest"
                    >
                      <i className="fa fa-pinterest" aria-hidden="true"></i>
                    </a>
                    <a
                      className="socials-item"
                      href="#"
                      target="_blank"
                      title="youtube"
                    >
                      <i className="fa fa-youtube" aria-hidden="true"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#navbar"
              aria-expanded="false"
              aria-controls="navbar"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="index.html">
              <img src="images/en-tete CD.png" alt="image" />
            </a>
          </div>
          <div id="navbar" className="navbar-collapse collapse">
            <ul className="nav navbar-nav navbar-right">
              <li className="active">
                <a data-scroll href="#home">
                  Home
                </a>
              </li>
              <li>
                <a data-scroll href="#about">
                  About <span className="hidden-xs"></span>
                </a>
              </li>
              <li>
                <a data-scroll href="#services">
                  Services
                </a>
              </li>
              <li>
                <a data-scroll href="#projects">
                  Projets
                </a>
              </li>
              <li>
                <a data-scroll href="#testimonials">
                  Temoignage
                </a>
              </li>
              <li>
                <a data-scroll href="#price">
                  Client
                </a>
              </li>
              <li>
                <a data-scroll href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
