import { useState } from "react";
import axios from "axios";
import { IoMail } from "react-icons/io5";
import { MdCall } from "react-icons/md";
import { Link } from "react-router-dom";
import ButtonCom from "./ButtonCom";

function BookNow() {
    const [obj, setobj] = useState({});
    let [blankobj, setblankobj] = useState({});
    const [savedId, setSavedId] = useState(null);
    const [errormsg, seterrormsg] = useState({});

    const getdata = (e) => {
        const { name, value } = e.target;
        obj[name] = value;
        blankobj[name] = "";
        setobj({ ...obj });
        setblankobj({ ...blankobj });

        if (e.target.name === "name") {
            if (e.target.value === "" || e.target.value === undefined) {
                errormsg[e.target.name] = "Name is required!";
            } else if (!/^[a-zA-Z ]{1,40}$/.test(e.target.value)) {
                errormsg[e.target.name] = "Name must be alaphabet.";
            } else {
                errormsg[e.target.name] = "";
            }
        }

        if (name === "email") {
            if (!value.trim()) errormsg[e.target.name] = "E-mail is required!";
            else if (!/^[a-zA-Z0-9._%+-]+@(gmail|yahoo|outlook|icloud|hotmail)\.com$/.test(value))
                errormsg[e.target.name] = "E-mail is not valid.";
            else errormsg[e.target.name] = "";
        }

        if (e.target.name === "phnumber") {
            if (e.target.value === "" || e.target.value === undefined) {
                errormsg[e.target.name] = "Phone Number is required!";
            } else if (e.target.value.length < 10) {
                errormsg[e.target.name] = "Phone Number must be 10 digits.";
            } else if (e.target.value.length > 10) {
                errormsg[e.target.name] = "Phone Number is not valid.";
            } else {
                errormsg[e.target.name] = "";
            }
        }

        if (e.target.name === "business") {
            if (e.target.value === "" || e.target.value === "Select Near business") {
                errormsg[e.target.name] = "Please select a valid business!";
            } else {
                errormsg[e.target.name] = "";
            }
        }
        if (e.target.name === "stall") {
            if (!value || value < 1 || value > 5) {
                errormsg.stall = "Please select a valid number of stalles!";
            } else {
                errormsg.stall = "";
            }
        }

        seterrormsg({ ...errormsg });
    };

    const savedata = () => {

        if (!obj.name === "" || obj.name === undefined) {
            errormsg.name = "Name is required!";
        }

        if (!obj.email === "" || obj.email === undefined) {
            errormsg.email = "E-mail is required!";
        }

        if (!obj.phnumber === "" || obj.phnumber === undefined) {
            errormsg.phnumber = "Phone Number is required!";
        }

        if (!obj.business || obj.business === "Select Near business") {
            errormsg.business = "Please select a valid business!";
        }

        if (!obj.stall || obj.stall < 1 || obj.stall > 5) {
            errormsg.stall = "Please select a valid number of stall";
        }

        if (Object.values(errormsg).every((x) => x === "")) {
            axios.post("http://localhost:4000/", obj).then((res) => {
                console.log(res.data);
                setSavedId(res.data._id);
                setobj({ ...blankobj });
            }).catch(function (error) {
                alert("Phnumber or email is already in use");
            })
        }
        seterrormsg({ ...errormsg });
    };

    return (
        <>
            <div className="TicketForm_bg w-100 h-auto d-flex position-relative bg-light py-5 px-2">
                <div className="container py-4 position-relative z-1">
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="col-12 col-lg-6 p-4 p-lg-5">
                            <div className="h-100">
                                <div className="row gap-2 align-items-center mb-3">
                                    <div className="rounded-circle col-3 bg-white shadow p-2">
                                        <img src={require('../assets/Images/free-entry.png')} className="img-fluid object-fit-cover rounded-circle" alt="Free Entry" />
                                    </div>
                                    <div className="title fs-4 ps-1 col-8 fw-bold text-primary">Pralesh Mahila Utkarsh Charitable Trust</div>
                                </div>
                                <div className="title fs-3 fw-bold text-dark">Businessotsav Exhibition 2025</div>
                                <div className="rounded mb-3" style={{ width: "60px", border: "3px solid var(--orange)" }}></div>
                                <div className="mb-3">
                                    <div><span className="fw-bold">Supported By:</span> PG Click Business Platform</div>
                                    <div className="mt-2"><span className="fw-bold">Date:</span> 21st & 22nd June (Saturday & Sunday)</div>
                                    <div><span className="fw-bold">Time:</span> 10:00 AM to 8:00 PM</div>
                                    <div><span className="fw-bold">Venue:</span> Iskon Mall, Opp. Rajhans Theatre, Piplod, Surat</div>
                                </div>
                                <div className="bg-white p-3 rounded shadow-sm">
                                    <div className="fw-bold text-primary">21st June Events:</div>
                                    <ul className="mb-2 ps-4">
                                        <li>10:00 AM - Inauguration</li>
                                        <li>2:30 PM - Healthy Cooking Show (Chef Anju Srivastava)</li>
                                        <li>5:00 PM - Award Ceremony (Star Celebrities of Surat)</li>
                                        <li>7:00 PM - Yoga Day Celebration</li>
                                    </ul>
                                    <div className="fw-bold text-primary">22nd June Events:</div>
                                    <ul className="ps-4">
                                        <li>11:30 AM - Adv. Priti Joshi (Learning Session)</li>
                                        <li>2:00 PM - Lekha Gheewala (Business Fun Activities)</li>
                                        <li>4:00 PM - Mega Housiee</li>
                                    </ul>
                                </div>
                                <div className="my-3">
                                    <div className="fw-bold">Stall Price:</div>
                                    <p className="text-danger fs-5">₹3000/- for 2 days</p>
                                    <div className="badge bg-success text-light px-3 py-2 rounded-pill">FREE ENTRY FOR VISITORS</div>
                                </div>
                                <div className="mt-3">
                                    <div className="fw-bold mb-2">For Stall Booking Contact:</div>
                                    <ul className="list-unstyled">
                                        <li>PG Click Office: <strong>9825999079 / 7698900398</strong></li>
                                        <li>Founder of PG Click - Lekha Gheewala: <strong>9428631038</strong></li>
                                        <li>Event Planner - Kiran Sheth: <strong>9979460009</strong></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-lg-6 px-2 pb-4 p-lg-5">
                            <div className="bg-white shadow rounded-4 p-4">
                                <div className="title fs-5 text-dark fw-bold mb-2">Stall Booking Form</div>
                                <div className="rounded mb-3" style={{ width: "50px", border: "3px solid var(--orange)" }}></div>

                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Name</label>
                                    <input type="text" className="form-control" name="name" value={obj.name} onChange={getdata} id="name" />
                                    <div className='text-danger'>{errormsg.name}</div>
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input type="email" className="form-control" name="email" value={obj.email} onChange={getdata} id="email" />
                                    <div className='text-danger'>{errormsg.email}</div>
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="phone" className="form-label">Phone</label>
                                    <input type="tel" className="form-control" name="phnumber" value={obj.phnumber} onChange={getdata} id="phone" />
                                    <div className='text-danger'>{errormsg.phnumber}</div>
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="business" className="form-label">Business Name</label>
                                    <input type="text" className="form-control" name="business" value={obj.business} onChange={getdata} id="business" />
                                    <div className='text-danger'>{errormsg.business}</div>
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="stall" className="form-label">No. of Stalls</label>
                                    <select id="stall" className="form-select" name="stall" value={obj.stall} onChange={getdata}>
                                        <option value="">Select</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                    </select>
                                    <div className='text-danger'>{errormsg.stall}</div>
                                </div>

                                <div className="text-muted small mb-3">
                                    After submitting the form, our team will contact you for further details.
                                </div>

                                <div className="w-100 mt-4">
                                    <Link to={""} className="text-decoration-none" onClick={savedata}>
                                        <ButtonCom btn="Submit" />
                                    </Link>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {savedId && (
                <div className="popup-overlay position-fixed w-100 h-100 d-flex justify-content-center align-items-center" onClick={() => setSavedId(null)}>
                    <div className="popup-content bg-white rounded text-center p-3">
                        <h3>Success!</h3>
                        <p>Your form has been submitted.</p>
                        <p><strong>Saved ID :</strong> {savedId}</p>
                        <button className="px-3 py-2 border-0 text-white cursor-pointer rounded" onClick={() => {
                            navigator.clipboard.writeText(savedId);
                            setSavedId(null);
                        }}>Copy ID</button>
                        <div className="fw-bold mt-3">રજીસ્ટ્રેશન માટે ID જરૂરી છે, તેથી તેને સાચવી રાખજો અને કોપી કરવાનું ભૂલશો નહીં.</div>
                    </div>
                </div>
            )}
        </>

    );
}

export default BookNow;