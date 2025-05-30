import { Image } from "react-bootstrap";



export default function BrandPartners() {
  return (
    <section className="brand-partners-section">
      {/* Floating background elements */}
      <div className="floating-element"></div>
      <div className="floating-element"></div>
      <div className="floating-element"></div>

      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Our Supporters</h2>
        </div>

        <div className="partners-container">

          <div className="other-partners-grid">
            {/* Venue Partner */}
            <div className="partner-category">
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
            <div className="partner-category">
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
            <div className="partner-category">
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
            <div className="partner-category">
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
          <div className="section-header">
            <h2 className="section-title">  Our Partners</h2>
          </div>
          <div className="other-partners-grid">
            {/* Photography Partner */}
            <div className="partner-category">
              <h3 className="partner-category-title">Photography Partner</h3>
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

            {/* Associated Partner */}
            <div className="partner-category">
              <h3 className="partner-category-title">Associated Partner</h3>
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

            {/* Digital Partner */}
            <div className="partner-category">
              <h3 className="partner-category-title">Digital Partner</h3>
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

            {/* Venue Partner */}
            <div className="partner-category">
              <h3 className="partner-category-title">Venue Partner</h3>
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
    </section>
  )
}
