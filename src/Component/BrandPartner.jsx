import { Image } from "react-bootstrap";

export default function BrandPartners() {
  return (
    <section className="brand-partners-section">
      {/* Floating background elements */}
      <div className="floating-element"></div>
      <div className="floating-element"></div>
      <div className="floating-element"></div>

      <div className="container w-100">
        <div className="text-center" data-aos="fade-up" data-aos-duration="1500" data-aos-once="true"><h1 className='text-white text-center fw-bold partner-category-title'>Our Supporters</h1></div>

        <div className="partners-container">

          <div className="other-partners-grid">
            {/* Venue Partner */}
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

            {/* Photography Partner */}
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

            {/* Associated Partner */}
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

            {/* Digital Partner */}
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

          {/* Other Partners Grid */}
          <div className="text-center mt-5" data-aos="fade-up" data-aos-duration="1500" data-aos-once="true"><h1 className='text-white text-center fw-bold partner-category-title'>Our Partners</h1></div>
          <div className="other-partners-grid">
            {/* Photography Partner */}
            <div className="partner-category">
              <h3 className="partner-category-sub-title">Photography Partner</h3>
              <div className="partner-card" data-aos="zoom-in" data-aos-duration="1500" data-aos-once="true" data-aos-delay="50">
                <Image
                  src={require("../assets/eximagies/Photography Partner-coy.jpg")}
                  alt="Photography Partner"
                  width={180}
                  height={100}
                  className="partner-image"
                />
              </div>
            </div>

            {/* Associated Partner */}
            <div className="partner-category">
              <h3 className="partner-category-sub-title">Associated Partner</h3>
              <div className="partner-card" data-aos="zoom-in" data-aos-duration="1500" data-aos-once="true" data-aos-delay="100">
                <Image
                  src={require("../assets/eximagies/Associated With.jpg")}
                  alt="Associated Partner"
                  width={180}
                  height={100}
                  className="partner-image"
                />
              </div>
            </div>

            {/* Digital Partner */}
            <div className="partner-category">
              <h3 className="partner-category-sub-title">Digital Partner</h3>
              <div className="partner-card" data-aos="zoom-in" data-aos-duration="1500" data-aos-once="true" data-aos-delay="150">
                <Image
                  src={require("../assets/eximagies/Digital Partner.jpg")}
                  alt="Digital Partner"
                  width={180}
                  height={100}
                  className="partner-image"
                />
              </div>
            </div>

            {/* Venue Partner */}
            <div className="partner-category">
              <h3 className="partner-category-sub-title">Venue Partner</h3>
              <div className="partner-card" data-aos="zoom-in" data-aos-duration="1500" data-aos-once="true" data-aos-delay="250">
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
    </section>
  )
}
