import React from 'react'

export default function index() {
    return (
         <div id="services" className="parallax section db parallax-off no-padding-bottom"  >
         <div className="container">
            <div className="row">
               <div className="col-lg-5 col-md-6 col-sm-12 col-xs-12">
                  <div className="message-box">
                     <h2>Services</h2>
                     <h5>NOUS SOMMES LE LEADERS EN CONSTRUCTION MODERNE !</h5>
                  </div>
                  
               </div>
               <div className="col-lg-7 col-md-6 col-sm-12 col-xs-12">
                  <div className="row">
                     <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                        <div className="service-inform">
                           <div className="icon-service">
                              <img src="images/icon1.png" alt="#" />
                           </div>
                           <div className="service-inform-text">
                              <h3>Service </h3>
                              <p>Nous Avons nos camion des livraison.</p>
                           </div>
                        </div>
                     </div>
                     <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                        <div className="service-inform">
                           <div className="icon-service">
                              <img src="images/icon4.png" alt="#" />
                           </div>
                           <div className="service-inform-text">
                              <h3>Service </h3>
                              <p>Nous avons nos instrument pour tous sortes des travails</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="row">
               <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 serv" style={{background:"#222"}}>
                  <div className="serv-blog">
                     <img src="images/sr1.png" alt="#" />
                  </div>
                  <div className="serv-blog-cont">
                     <h3>Manufacturing</h3>
                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                  </div>
               </div>
               <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 serv" style={{background:"#181818"}}>
                  <div className="serv-blog">
                     <img src="images/sr2.png" alt="#" />
                  </div>
                  <div className="serv-blog-cont">
                     <h3>Fabrication</h3>
                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                  </div>
               </div>
               <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 serv" style={{background:"#222"}}>
                  <div className="serv-blog">
                     <img src="images/sr3.png" alt="#" />
                  </div>
                  <div className="serv-blog-cont">
                     <h3>Construction</h3>
                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                  </div>
               </div>
            </div>
         </div>
      </div>
    )
}
