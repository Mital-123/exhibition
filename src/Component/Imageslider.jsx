import React from 'react';

function Imageslider() {
     const logos = [
    { img: "https://camo.envatousercontent.com/3641e902d71b12171b47c1836d1da794b4f5c7c2/68747470733a2f2f692e696d6775722e636f6d2f6638573651614e2e6a7067" },
    { img: "https://gumlet.assettype.com/down-to-earth%2Fimport%2Fdte%2Fuserfiles%2Fimages%2Fyoga(1).jpg" },
    { img: "https://i.pinimg.com/736x/9c/45/7e/9c457eb944acc02dba33dd2c1ca4f465.jpg" },
    { img: "https://i.pinimg.com/736x/c7/2d/b2/c72db210a8f2150cff316eb3b5099231.jpg" },
    { img: "https://i.pinimg.com/736x/7e/a3/b6/7ea3b6296c228b8d7785b966d0d97a7b.jpg" },
    { img: "https://gadyalkashmir.com/wp-content/uploads/2024/06/international-yoga-day-2020-01-1-scaled-1.jpg" },
    { img: "https://i.pinimg.com/736x/07/46/80/0746809e67352720c1bfb200bec50810.jpg" },
    { img: "https://camo.envatousercontent.com/3641e902d71b12171b47c1836d1da794b4f5c7c2/68747470733a2f2f692e696d6775722e636f6d2f6638573651614e2e6a7067" },
    { img: "https://gumlet.assettype.com/down-to-earth%2Fimport%2Fdte%2Fuserfiles%2Fimages%2Fyoga(1).jpg" },
    { img: "https://i.pinimg.com/736x/9c/45/7e/9c457eb944acc02dba33dd2c1ca4f465.jpg" },
    { img: "https://i.pinimg.com/736x/c7/2d/b2/c72db210a8f2150cff316eb3b5099231.jpg" },
  ];
  const logos02 = [
    { img: "https://camo.envatousercontent.com/3641e902d71b12171b47c1836d1da794b4f5c7c2/68747470733a2f2f692e696d6775722e636f6d2f6638573651614e2e6a7067" },
    { img: "https://gumlet.assettype.com/down-to-earth%2Fimport%2Fdte%2Fuserfiles%2Fimages%2Fyoga(1).jpg" },
    { img: "https://i.pinimg.com/736x/9c/45/7e/9c457eb944acc02dba33dd2c1ca4f465.jpg" },
    { img: "https://i.pinimg.com/736x/c7/2d/b2/c72db210a8f2150cff316eb3b5099231.jpg" },
    { img: "https://i.pinimg.com/736x/7e/a3/b6/7ea3b6296c228b8d7785b966d0d97a7b.jpg" },
    { img: "https://gadyalkashmir.com/wp-content/uploads/2024/06/international-yoga-day-2020-01-1-scaled-1.jpg" },
    { img: "https://i.pinimg.com/736x/07/46/80/0746809e67352720c1bfb200bec50810.jpg" },
    { img: "https://camo.envatousercontent.com/3641e902d71b12171b47c1836d1da794b4f5c7c2/68747470733a2f2f692e696d6775722e636f6d2f6638573651614e2e6a7067" },
    { img: "https://gumlet.assettype.com/down-to-earth%2Fimport%2Fdte%2Fuserfiles%2Fimages%2Fyoga(1).jpg" },
    { img: "https://i.pinimg.com/736x/9c/45/7e/9c457eb944acc02dba33dd2c1ca4f465.jpg" },
    { img: "https://i.pinimg.com/736x/c7/2d/b2/c72db210a8f2150cff316eb3b5099231.jpg" },
  ];
  return (
   <>
   
         <div className='schedule'>
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
