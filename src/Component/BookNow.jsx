import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ButtonCom from "./ButtonCom";
import Swal from "sweetalert2";

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
                errormsg.stall = "Please select number of stall!";
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
            errormsg.stall = "Please select number of stall!";
        }

        if (Object.values(errormsg).every((x) => x === "")) {
            axios.post("https://exhibition-sigma.vercel.app/", obj)
                .then((res) => {
                    console.log(res.data);
                    setSavedId(res.data._id);
                    setobj({ ...blankobj });

                    Swal.fire({
                        icon: 'success',
                        title: 'Upload Successful',
                        text: '✅ Stall Booking successfully!',
                        timer: 2000,
                        showConfirmButton: false
                    });
                })
                .catch(function (error) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Booking Failed',
                        text: '❌ Phone number already exists.',
                        confirmButtonText: 'OK'
                    });
                });
        }
        seterrormsg({ ...errormsg });
    };

    return (
        <>
            <div className="w-100 h-auto d-flex position-relative bg-light py-4">
                <div className="container position-relative z-1">
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="col-12 col-lg-6 mb-4 px-4">
                            <div className="h-100">
                                <div style={{ border: "7px double var(--info)" }} className="p-2">
                                    <img src={require("../assets/Images/business_img.jpg")} className="booknow_img img-fluid" alt="" />
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-lg-6 mb-4 px-4">
                            <div className="h-100 bg-white shadow border rounded-4 p-4">
                                <div className="title fs-4 infocolor fw-bold mb-2">Stall Booking Form</div>
                                <div className="rounded mb-3" style={{ width: "50px", border: "3px solid var(--orange)" }}></div>

                                <div>
                                    <label htmlFor="name" className="fw-medium">Name</label>
                                    <input type="text" className="form-control mt-1" name="name" value={obj.name} onChange={getdata} id="name" placeholder="Enter Your Name" />
                                    <div className='text-danger fw-medium' style={{ fontSize: "13px" }}>{errormsg.name ? errormsg.name : '\u00A0'}</div>
                                </div>

                                <div>
                                    <label htmlFor="email" className="fw-medium">Email</label>
                                    <input type="email" className="form-control mt-1" name="email" value={obj.email} onChange={getdata} id="email" placeholder="Enter Your E-mail" />
                                    <div className='text-danger fw-medium' style={{ fontSize: "13px" }}>{errormsg.email ? errormsg.email : '\u00A0'}</div>
                                </div>

                                <div>
                                    <label htmlFor="phone" className="fw-medium">Phone</label>
                                    <input type="tel" className="form-control mt-1" name="phnumber" value={obj.phnumber} onChange={getdata} id="phone" placeholder="Enter Your Phone Number" />
                                    <div className='text-danger fw-medium' style={{ fontSize: "13px" }}>{errormsg.phnumber ? errormsg.phnumber : '\u00A0'}</div>
                                </div>

                                <div>
                                    <label htmlFor="business" className="fw-medium">Business Name</label>
                                    <input type="text" className="form-control mt-1" name="business" value={obj.business} onChange={getdata} id="business" placeholder="Enter Your Business Name" />
                                    <div className='text-danger fw-medium' style={{ fontSize: "13px" }}>{errormsg.business ? errormsg.business : '\u00A0'}</div>
                                </div>

                                <div>
                                    <label htmlFor="stall" className="fw-medium">No. of Stall</label>
                                    <select id="stall" className="form-select mt-1" name="stall" value={obj.stall} onChange={getdata}>
                                        <option value="">Select Stall</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                    </select>
                                    <div className='text-danger fw-medium' style={{ fontSize: "13px" }}>{errormsg.stall ? errormsg.stall : '\u00A0'}</div>
                                </div>
                                <div className="w-100">
                                    <Link to={""} className="text-decoration-none" onClick={savedata}>
                                        <ButtonCom btn="Submit" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* {savedId && (
                <div className="popup-overlay position-fixed w-100 h-100 top-0 start-0 bg-opacity-75 d-flex justify-content-center align-items-center" onClick={() => setSavedId(null)}>
                    <div className="popup-content bg-white rounded text-center p-4" onClick={(e) => e.stopPropagation()}>
                        <h3>Success!</h3>
                        <p>Your form has been submitted.</p>
                        <p><strong>Saved ID:</strong> {savedId}</p>
                        <button className="btn btn-success px-3 py-2 mt-2" onClick={() => {
                            navigator.clipboard.writeText(savedId);
                            setSavedId(null);
                        }}>Copy ID</button>
                        <div className="fw-bold mt-3 text-danger">રજીસ્ટ્રેશન માટે ID જરૂરી છે, તેથી તેને સાચવી રાખજો અને કોપી કરવાનું ભૂલશો નહીં.</div>
                    </div>
                </div>
            )} */}
        </>

    );
}

export default BookNow;