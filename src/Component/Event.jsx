import React from 'react'

function Event() {
    return (
        <>
            <section className=" event-info py-2 py-lg-4 overflow-hidden">
                <div className="container overflow-hidden">
                    <div className="organizers d-flex justify-content-space-around flex-wrap text-center">
                        <div className="org-item shadow" data-aos="fade-right" data-aos-duration="1500" data-aos-once="true">
                            <div className="org-logo shadow">
                                <img src={require("../assets/Images/468518376_122149498478321773_7939441204472915354_n.jpg")} alt="Pralesh Mahila Utkarsh Charitable Trust" />
                            </div>
                            <h3 className='infocolor fw-bold'>Organized By :</h3>
                            <p className='fw-medium text-light'>Pralesh Mahila Utkarsh Charitable Trust</p>
                        </div>
                        <div className="org-item shadow" data-aos="fade-left" data-aos-duration="1500" data-aos-once="true">
                            <div className="org-logo shadow">
                                <img src={require("../assets/Images/qt=q_95.webp")} alt="PG Click Business Platform" />
                            </div>
                            <h3 className='infocolor fw-bold'>Supported By :</h3>
                            <p className='fw-medium text-light'>PG Click Business Platform</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Event