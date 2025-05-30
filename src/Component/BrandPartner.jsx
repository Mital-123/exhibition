import React from 'react'
import { Image } from 'react-bootstrap'

function BrandPartner() {
  return (
    <>
      <div className='brand-partners-section'>
        <div className="floating-element"></div>
        <div className="floating-element"></div>
        <div className="floating-element"></div>

        {/* Our Supporters */}
        <div className='container'>
          <div className="text-center" data-aos="fade-up" data-aos-duration="1500" data-aos-once="true">
            <h1 className='text-white text-center fw-bold partner-category-title'>Our Supporters</h1>
          </div>
          <div className="row g-4 justify-content-center px-4 py-4">
            {/* <div className="col-10 col-sm-6 col-lg-3">
              <div className="partner-category" data-aos="zoom-in" data-aos-duration="1500" data-aos-once="true" data-aos-delay="50">
                <div className="partner-card">
                  <Image
                    src={require("../assets/eximagies/qt=q_95.webp")}
                    alt="Venue Partner"
                    width={180}
                    height={100}
                    className="partner-image"
                  />
                </div>
              </div>
            </div> */}

            <div className="col-10 col-sm-6 col-lg-3">
              <div className="partner-category" data-aos="zoom-in" data-aos-duration="1500" data-aos-once="true" data-aos-delay="100">
                <div className="partner-card">
                  <Image
                    src={require("../assets/eximagies/SUPPORTER 01.jpg")}
                    alt="Photography Partner"
                    width={180}
                    height={100}
                    className="partner-image"
                  />
                </div>
              </div>
            </div>

            <div className="col-10 col-sm-6 col-lg-3">
              <div className="partner-category" data-aos="zoom-in" data-aos-duration="1500" data-aos-once="true" data-aos-delay="150">
                <div className="partner-card">
                  <Image
                    src={require("../assets/eximagies/SUPPORTER 03.jpg")}
                    alt="Associated Partner"
                    width={180}
                    height={100}
                    className="partner-image"
                  />
                </div>
              </div>
            </div>

            <div className="col-10 col-sm-6 col-lg-3">
              <div className="partner-category" data-aos="zoom-in" data-aos-duration="1500" data-aos-once="true" data-aos-delay="250">
                <div className="partner-card">
                  <Image
                    src={require("../assets/eximagies/SUPPORTER 02.jpg")}
                    alt="Digital Partner"
                    width={180}
                    height={100}
                    className="partner-image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Our Partners */}
        <div className='container'>
          <div className="text-center mt-5" data-aos="fade-up" data-aos-duration="1500" data-aos-once="true">
            <h1 className='text-white text-center fw-bold partner-category-title'>Our Partners</h1>
          </div>
          <div className='row g-4 justify-content-center px-4 py-4'>
            <div className='col-10 col-sm-6 col-lg-3'>
              <div className="partner-category">
                <h3 className="partner-category-sub-title">Photography</h3>
                <div data-aos="zoom-in" data-aos-duration="1500" data-aos-once="true" data-aos-delay="50">
                  <div className="partner-card">
                    <Image
                      src={require("../assets/eximagies/Photography Partner-coy.jpg")}
                      alt="Photography Partner"
                      width={180}
                      height={100}
                      className="partner-image"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className='col-10 col-sm-6 col-lg-3'>
              <div className="partner-category">
                <h3 className="partner-category-sub-title">Associated</h3>
                <div data-aos="zoom-in" data-aos-duration="1500" data-aos-once="true" data-aos-delay="100">
                  <div className="partner-card">
                    <Image
                      src={require("../assets/eximagies/Associated With.jpg")}
                      alt="Associated Partner"
                      width={180}
                      height={100}
                      className="partner-image"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className='col-10 col-sm-6 col-lg-3'>
              <div className="partner-category">
                <h3 className="partner-category-sub-title">Digital</h3>
                <div data-aos="zoom-in" data-aos-duration="1500" data-aos-once="true" data-aos-delay="150">
                  <div className="partner-card">
                    <Image
                      src={require("../assets/eximagies/Digital Partner.jpg")}
                      alt="Digital Partner"
                      width={180}
                      height={100}
                      className="partner-image"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className='col-10 col-sm-6 col-lg-3'>
              <div className="partner-category">
                <h3 className="partner-category-sub-title">Venue</h3>
                <div data-aos="zoom-in" data-aos-duration="1500" data-aos-once="true" data-aos-delay="250">
                  <div className="partner-card">
                    <Image
                      src={require("../assets/eximagies/Venue Partner - Copy.jpg")}
                      alt="Venue Partner"
                      width={180}
                      height={100}
                      className="partner-image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default BrandPartner