import React from 'react';

function Imageslider() {
  const logos = [
    { img: require("../assets/eximagies/slider (1).jpeg") ,objectfit:"cover"},
    { img: require("../assets/eximagies/slider (2).jpeg") ,objectfit:"cover"},
    { img: require("../assets/eximagies/slider (3).jpeg") ,objectfit:"cover"},
    { img: require("../assets/eximagies/slider (4).jpeg") ,objectfit:"cover"},
    { img: require("../assets/eximagies/slider (5).jpeg") ,objectfit:"cover"},
    { img: require("../assets/eximagies/slider (6).jpeg") ,objectfit:"cover"},
    { img: require("../assets/eximagies/slider (7).jpeg") ,objectfit:"cover"},
    { img: require("../assets/eximagies/slider (8).jpeg") ,objectfit:"cover"},
    { img: require("../assets/eximagies/slider (9).jpeg") ,objectfit:"cover"},
    { img: require("../assets/eximagies/slider (10).jpeg") ,objectfit:"cover"},
    { img: require("../assets/eximagies/slider (11).jpeg") ,objectfit:"cover"},
  ];
  const logos02 = [
    { img: require("../assets/eximagies/slider (12).jpeg") ,objectfit:"fill"},
    { img: require("../assets/eximagies/slider (13).jpeg") ,objectfit:"fill"},
    { img: require("../assets/eximagies/slider (14).jpeg") ,objectfit:"cover"},
    { img: require("../assets/eximagies/slider (15).jpeg") ,objectfit:"cover"},
    { img: require("../assets/eximagies/slider (16).jpeg") ,objectfit:"cover"},
    { img: require("../assets/eximagies/slider (17).jpeg") ,objectfit:"cover"},
    { img: require("../assets/eximagies/slider (18).jpeg") ,objectfit:"cover"},
    { img: require("../assets/eximagies/slider (19).jpeg") ,objectfit:"cover"},
    { img: require("../assets/eximagies/slider (20).jpeg") ,objectfit:"cover"},
    { img: require("../assets/eximagies/slider (21).jpeg") ,objectfit:"cover"},
 


  ];
  return (
    <>

      <div className='schedule overflow-hidden'>
        <div className="partners-logo-slider  mt-2 pt-2 pt-lg-5">
          <div className="slide-track">
            {logos.concat(logos).map((logo, index) => (
              <div className="sliderun m-2 rounded-4" key={index}>
                <img src={logo.img} alt="Logo" className="img-fluid  d-flex slign-content-center align-items-center justify-content-center  w-100 h-100 rounded-4"  style={{ objectFit: logo.objectfit }} />
              </div>
            ))}
            {logos.concat(logos).map((logo, index) => (
              <div className="sliderun m-2 rounded-4" key={index}>
                <img src={logo.img} alt="Logo" className="img-fluid  d-flex slign-content-center align-items-center justify-content-center  w-100 h-100 rounded-4"  style={{ objectFit: logo.objectfit }} />
              </div>
            ))}
            {logos.concat(logos).map((logo, index) => (
              <div className="sliderun m-2 rounded-4" key={index}>
                <img src={logo.img} alt="Logo" className="img-fluid  d-flex slign-content-center align-items-center justify-content-center  w-100 h-100 rounded-4"  style={{ objectFit: logo.objectfit }} />
              </div>
            ))}
            {logos.concat(logos).map((logo, index) => (
              <div className="sliderun m-2 rounded-4" key={index}>
                <img src={logo.img} alt="Logo" className="img-fluid  d-flex slign-content-center align-items-center justify-content-center  w-100 h-100 rounded-4"  style={{ objectFit: logo.objectfit }} />
              </div>
            ))}
          </div>
        </div>
        <div className="partners-logo-slider  mb-2 pb-lg-5">
          <div className="slide-track02">
            {logos02.concat(logos02).map((logo, index) => (
              <div className="sliderun m-2 rounded-4" key={index}>
                <img src={logo.img} alt="Logo" className="img-fluid  d-flex slign-content-center align-items-center justify-content-center  w-100 h-100 rounded-4"  style={{ objectFit: logo.objectfit }} />
              </div>
            ))}
            {logos02.concat(logos02).map((logo, index) => (
              <div className="sliderun m-2 rounded-4" key={index}>
                <img src={logo.img} alt="Logo" className="img-fluid  d-flex slign-content-center align-items-center justify-content-center  w-100 h-100 rounded-4"  style={{ objectFit: logo.objectfit }} />
              </div>
            ))}
            {logos02.concat(logos02).map((logo, index) => (
              <div className="sliderun m-2 rounded-4" key={index}>
                <img src={logo.img} alt="Logo" className="img-fluid  d-flex slign-content-center align-items-center justify-content-center  w-100 h-100 rounded-4"  style={{ objectFit: logo.objectfit }} />
              </div>
            ))}
            {logos02.concat(logos02).map((logo, index) => (
              <div className="sliderun m-2 rounded-4" key={index}>
                <img src={logo.img} alt="Logo" className="img-fluid  d-flex slign-content-center align-items-center justify-content-center  w-100 h-100 rounded-4"  style={{ objectFit: logo.objectfit }} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Imageslider;
