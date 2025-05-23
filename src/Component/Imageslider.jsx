import React from 'react';

function Imageslider() {
  const logos = [
    { img: require("../assets/Images/68747470733a2f2f692e696d6775722e636f6d2f6638573651614e2e6a7067.jpeg") },
    { img: require("../assets/Images/down-to-earth_import_dte_userfiles_images_yoga(1).jpg") },
    { img: require("../assets/Images/9c457eb944acc02dba33dd2c1ca4f465.jpg") },
    { img: require("../assets/Images/c72db210a8f2150cff316eb3b5099231.jpg") },
    { img: require("../assets/Images/7ea3b6296c228b8d7785b966d0d97a7b.jpg") },
    { img: require("../assets/Images/chefs-kiss-research-sh.jpg") },
    { img: require("../assets/Images/international-yoga-day-2020-01-1-scaled-1.jpg") },
    { img: require("../assets/Images/world-famous-restaurant-asian-female-600nw-2141026799.jpg") },
    { img: require("../assets/Images/intnl-yoga-day_1600x.jpg") },
    { img: require("../assets/Images/1747450191_Yoga.jpg") },
    { img: require("../assets/Images/c72db210a8f2150cff316eb3b5099231.jpg") },
    { img: require("../assets/Images/download.jpeg") },
  ];
  const logos02 = [
    { img: require("../assets/Images/101177427.jpg") },
    { img: require("../assets/Images/702.jpg") },
    { img: require("../assets/Images/food-blogger-adorable-healthy-chef-recording-video-social-media-cooking-process_140725-166617.jpg") },
    { img: require("../assets/Images/istockphoto-1307586844-612x612.jpg") },
    { img: require("../assets/Images/world-yoga-day-celebration-poster-woman-doing-asana-with-leaves-design_1017-52639.jpg") },
    { img: require("../assets/Images/1000_F_131486900_skZLVPitbgr35N1fGiUZ29PpR2oWNaJ6.jpg") },
    { img: require("../assets/Images/iStock-503779060.jpg") },
    { img: require("../assets/Images/eedbab37825563.Y3JvcCw0MDQsMzE2LDAsMA.png") },
    { img: require("../assets/Images/Healthy-food-for-kids.jpg") },
    { img: require("../assets/Images/flat-international-yoga-day-illustration_23-2149397992.jpg") },
    { img: require("../assets/Images/5-Award-Ceremony-Ideas-to-Wow-the-Audience.jpg") },

  ];
  return (
    <>

      <div className='schedule overflow-hidden'>
        <div className="partners-logo-slider  mt-2 pt-2 pt-lg-5">
          <div className="slide-track">
            {logos.concat(logos).map((logo, index) => (
              <div className="sliderun m-2 rounded-4" key={index}>
                <img src={logo.img} alt="Logo" className="img-fluid  d-flex slign-content-center align-items-center justify-content-center object-fit-cover w-100 h-100 rounded-4" />
              </div>
            ))}
            {logos.concat(logos).map((logo, index) => (
              <div className="sliderun m-2 rounded-4" key={index}>
                <img src={logo.img} alt="Logo" className="img-fluid  d-flex slign-content-center align-items-center justify-content-center object-fit-cover w-100 h-100 rounded-4" />
              </div>
            ))}
          </div>
        </div>
        <div className="partners-logo-slider  mb-2 pb-lg-5">
          <div className="slide-track02">
            {logos02.concat(logos02).map((logo, index) => (
              <div className="sliderun m-2 rounded-4" key={index}>
                <img src={logo.img} alt="Logo" className="img-fluid  d-flex slign-content-center align-items-center justify-content-center object-fit-cover w-100 h-100 rounded-4" />
              </div>
            ))}
            {logos02.concat(logos02).map((logo, index) => (
              <div className="sliderun m-2 rounded-4" key={index}>
                <img src={logo.img} alt="Logo" className="img-fluid  d-flex slign-content-center align-items-center justify-content-center object-fit-cover w-100 h-100 rounded-4" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Imageslider;
