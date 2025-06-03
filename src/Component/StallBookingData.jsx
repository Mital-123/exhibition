import React, { useEffect, useState } from 'react';

function StallBookingData() {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        fetch('https://exhibition-sigma.vercel.app/')
            .then(response => response.json())
            .then(json => {
                setData(json);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <div className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
                <img src="https://media.tenor.com/1s1_eaP6BvgAAAAC/rainbow-spinner-loading.gif" alt="" className='img-fluid bg-white' width={150} />
            </div>
        );
    }

    return (
        <div className='container my-4'>
            <h2 className='text-center fw-bold mb-4 darkcolor'>Stall Booking Data</h2>
            <div className="table-responsive">
                <table className="table table-bordered table-striped table-hover">
                    <thead className="table-dark">
                        <tr>
                            <th>Sr. No.</th>
                            <th>Name</th>
                            <th>E-mail</th>
                            <th>Phone No.</th>
                            <th>Business</th>
                            <th>Category</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Stall</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.length > 0 ? (
                            data.map((item, index) => (
                                <tr key={index} style={{ fontSize: "14px" }}>
                                    {console.log(item)
                                    }
                                    <td>{index + 1}</td>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.phnumber}</td>
                                    <td>{item.business}</td>
                                    <td>{item.category}</td>
                                    <td>{new Date(item.createdAt).toLocaleDateString('en-GB')}</td>
                                    <td>{new Date(item.createdAt).toLocaleTimeString()}</td>
                                    <td className='text-center'>{item.stall}</td>
                                    
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="8" className="text-center" style={{ fontSize: "14px" }}>No Data Available.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default StallBookingData;