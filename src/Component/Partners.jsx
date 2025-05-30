import React from 'react';

function Partners() {
    return (
        <div className='LANDINGIMAGE'>
            <div className="container p-5">

                <div className='bglightbluecolor rounded-5 text-center p-5'>
                    <div className=" px-4 fs-4 rounded-4 fw-bold text-uppercase text-white mb-3" style={{ display: "inline-block", background: "var(--info)" }}>
                        Our Supporters
                    </div>
                    <div className="row d-flex justify-content-center">
                        <div className="col-lg-2 col-6 my-2 my-lg-0">
                            <div className="h-100 rounded-4 d-flex align-items-center bg-white">
                                <div style={{ width: "150px" }} className='m-auto '>
                                    <img src={require("../assets/eximagies/qt=q_95.webp")} alt="" className=' img-fluid w-100 h-100 object-fit-cover' />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-6 my-2 my-lg-0">
                            <div className="h-100 rounded-4 d-flex align-items-center bg-white">
                                <div style={{ width: "150px" }} className='m-auto '>
                                    <img src={require("../assets/eximagies/SUPPORTER 01.jpg")} alt="" className=' img-fluid w-100 h-100 object-fit-cover' />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-6 my-2 my-lg-0">
                            <div className="h-100 rounded-4 d-flex align-items-center bg-white">
                                <div style={{ width: "150px" }} className='m-auto '>
                                    <img src={require("../assets/eximagies/SUPPORTER 03.jpg")} alt="" className=' img-fluid w-100 h-100 object-fit-cover' />
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-2 col-6 my-2 my-lg-0">
                            <div className="h-100 rounded-4 d-flex align-items-center bg-white">
                                <div style={{ width: "150px" }} className='m-auto '>
                                    <img src={require("../assets/eximagies/SUPPORTER 02.jpg")} alt="" className=' img-fluid w-100 h-100 object-fit-cover' />
                                </div>
                            </div>
                        </div>
                    </div>




                    <div className='mt-4'>
                        <div className='container'>
                            <div className=" px-4 fs-4 rounded-4 fw-bold text-uppercase text-white mb-3" style={{ display: "inline-block", background: "var(--info)" }}>
                                Our Partners
                            </div>
                            <div className='row bg-white col-lg-8 col-md-11 mx-auto justify-content-center'>
                                <div className='col-sm-6 col-11 mt-sm-0 mt-3 bg-info'>
                                    <div className="h-100 mb-md-0 mb-4">
                                        <div className="partners px-4 fs-6 rounded-4 bglightbluecolor fw-bold text-uppercase text-white my-3 py-2" style={{ display: "inline-block" }}>
                                            Photography
                                        </div>
                                        <img src={require("../assets/eximagies/Photography Partner-coy.jpg")} alt="" className='img-fluid' />
                                    </div>
                                </div>
                                <div className='col-sm-6 col-11 mt-sm-0 mt-3'>
                                    <div className="bg-white h-100">
                                        <div className="partners px-4 fs-6 rounded-4 bglightbluecolor fw-bold text-uppercase text-white my-3 py-2" style={{ display: "inline-block" }}>
                                            Associated
                                        </div>
                                        <img src={require("../assets/eximagies/Associated With.jpg")} alt="" className='img-fluid' />
                                    </div>
                                </div>
                                <div className='col-sm-6 col-11 mt-sm-0 mt-3 order-sm-3 order-4'>
                                    <div className="h-100">
                                        <div className="partners px-4 fs-6 rounded-4 bglightbluecolor fw-bold text-uppercase text-white my-3 py-2" style={{ display: "inline-block" }}>
                                            Digital
                                        </div>
                                        <img src={require("../assets/eximagies/Digital Partner.jpg")} alt="" className='img-fluid' />
                                    </div>
                                </div>
                                <div className='col-sm-6 col-11 my-sm-0 my-3 pb-sm-0 pb-4 bg-info order-sm-4 order-3'>
                                    <div className="h-100">
                                        <div className="partners px-4 fs-6 rounded-4 bglightbluecolor fw-bold text-uppercase text-white my-3 py-2" style={{ display: "inline-block" }}>
                                            Venue
                                        </div>
                                        <img src={require("../assets/eximagies/Venue Partner - Copy.jpg")} alt="" className='img-fluid' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>



                </div>
            </div>
        </div>
    );
}

export default Partners;
