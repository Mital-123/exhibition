import React from 'react'

function Schedule() {
    return (
        <>
            <section class="schedule ">
                <div class="container">
                    <div className="col-lg-10 mx-auto day-schedule">
                        <div class="">
                            <div className="day-header">
                                <div className="day-number">21</div>
                                <div className="day-info">
                                    <h3>Day 1</h3>
                                    <p>Saturday, June 2025</p>
                                </div>
                            </div>
                            {/* <h2 className='fw-bold'>21st June Events</h2> */}
                            <ul class="event-list ps-0" style={{ fontFamily: "Poppins" }}>
                                <li>
                                    <span class="time">10:00 am</span>
                                    <span class="event-name">Inauguration</span>
                                </li>
                                <li>
                                    <span class="time">2:30 pm</span>
                                    <span class="event-name">Healthy Cooking Show (Chef Anju Srivastava)</span>
                                </li>
                                <li>
                                    <span class="time">5:00 pm</span>
                                    <span class="event-name">Award Ceremony (Star Celebrities of Surat)</span>
                                </li>
                                <li>
                                    <span class="time">7:00 pm</span>
                                    <span class="event-name">Yoga Day Celebration</span>
                                </li>
                            </ul>
                        </div>

                        <div class="mt-4">
                            <div className="day-header">
                                <div className="day-number">22</div>
                                <div className="day-info">
                                    <h3>Day 2</h3>
                                    <p>Sunday, June 2025</p>
                                </div>
                            </div>
                            {/* <h2 className='fw-bold'>22nd June Events</h2> */}
                            <ul class="event-list ps-0">
                                <li>
                                    <span class="time">11:30 am</span>
                                    <span class="event-name">Adv. Priti Joshi (Learning Session)</span>
                                </li>
                                <li>
                                    <span class="time">2:00 pm</span>
                                    <span class="event-name">Lekha Gheewala (Business Fun Activities)</span>
                                </li>
                                <li>
                                    <span class="time">4:00 pm</span>
                                    <span class="event-name">Mega Housiee</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Schedule