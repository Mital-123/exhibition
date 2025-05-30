import React from 'react';
import Schedule from './Schedule';
import Footer from './Footer';
import BookStole from './BookStole';
import Imageslider from './Imageslider';
import Event from './Event';
import BrandPartners from './BrandPartner';

function HomeSec() {
  return (
    <>
      <div className=' text-center p-3 p-lg-4  LANDINGIMAGE overflow-hidden'   >
        <div className='position-relative  mt-2 mb-4' data-aos="fade-up" data-aos-duration="1500" data-aos-once="true">
          <h1 className=' text-white text-center fw-bold py-2  borderbtm'><span className='orangecolor'>Businessotsav</span> Exhibition 2025 🔊</h1>
        </div>
        <img src={require("../assets/eximagies/exhibition.jpeg")} alt="" className='poster_img img-fluid p-2' style={{ border: "5px double var(--info)" }}
        />
      </div>
      <Event />

      {/* date & time start */}
      <div className='LADINGIMAGE overflow-hidden'>
        {/* <div className='position-relative'>
          <h1 className=' text-white text-center fw-bold py-2  borderbtm'><span className='orangecolor'>Businessotsav</span> Exhibition 2025 🔊</h1>
        </div> */}

        <div className="bglightbluecolor py-5 overflow-hidden">
          <div className="container bglightbluecolor ">
            <div className="row g-3 py-4 d-flex justify-content-center">
              <div className="col-12 px-4 px-lg-2 col-lg-3" data-aos="fade-up" data-aos-duration="1500" data-aos-once="true" data-aos-delay="50">
                <div className="h-100 p-3 " style={{ border: "1px solid var(--info)" }} >
                  <div className='text-center'><img src="https://png.pngtree.com/png-vector/20221013/ourmid/pngtree-calendar-icon-logo-2023-date-time-png-image_6310337.png" alt="" className='img-fluid w-25 ' />
                    <h3 className='text-info text-center fw-bold py-2'>21 & 22 June</h3>
                    <div className='text-white '>Saturday & Sunday</div>
                    <div className='text-white '>10 am to 8 pm</div>
                  </div>
                </div>
              </div>
              <div className="col-12 px-4 px-lg-2 col-lg-5" data-aos="fade-up" data-aos-duration="1500" data-aos-once="true" data-aos-delay="350">
                <div className="h-100 p-3 " style={{ border: "1px solid var(--info)" }} >
                  <div className='text-center'><img src={require("../assets/Images/free entry 01.png")} alt="" className='img-fluid ' width={"50%"} />
                  </div>
                </div>
              </div>
              <div className="col-12 px-4 px-lg-2 col-lg-3" data-aos="fade-up" data-aos-duration="1500" data-aos-once="true" data-aos-delay="550">
                <div className="h-100 p-3 " style={{ border: "1px solid var(--info)" }} >
                  <div className='text-center'><img src={require("../assets/Images/location.png")} alt="" className='img-fluid w-25 ' />
                    <h3 className='text-info text-center fw-bold py-2'>Venue</h3>
                    <div className='text-white px-5'>Iskon Mall,
                      Opp. Rajhans Theatre,
                      Piplod, Surat.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* date & time end */}

      <Imageslider />
      <Schedule />
      <BookStole />
      <BrandPartners />
      <Footer />
    </>
  );
}

export default HomeSec;