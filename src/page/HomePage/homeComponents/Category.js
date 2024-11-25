import React from 'react'
import '../home.css';

function Category() {
    return (
        <div className='category_container' >
            <h2 className='title'>Categories</h2>
            <div className='category_boxes' >
                <div className='category_box' >
                    <img src='../../../../images/book-appointment.jpg' />
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: "center", width: "100%" }} >
                        <h2>Book Your Appointment</h2>
                        <button className='more'>Read More</button>
                    </div>
                </div>
                <div className='category_box' >
                    <img src='../../../../images/search-medicine.jpg' />
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: "center", width: "100%" }} >
                        <h2>Search Medicine</h2>
                        <button className='more'>Read More</button>
                    </div>
                </div>
                <div className='category_box' >
                    <img src='../../../../images/diagnostice-center.jpg' />
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: "center", width: "100%" }} >
                        <h2>Diagnostic Centers</h2>
                        <button className='more'>Read More</button>
                    </div>
                </div>
            </div>
            <div className='category_boxes' >
                <div className='category_box' >
                    <img src='../../../../images/ambulance.jpg' />
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: "center", width: "100%" }} >
                        <h2>Book Your Ambulance</h2>
                        <button className='more'>Read More</button>
                    </div>
                </div>
                <div className='category_box' >
                    <img src='../../../../images/house-call.jpg' />
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: "center", width: "100%" }} >
                        <h2>Doctor House Call</h2>
                        <button className='more'>Read More</button>
                    </div>
                </div>
                <div className='category_box' >
                    <img src='../../../../images/more-service.jpg' />
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: "center", width: "100%" }} >
                        <h2>More Service</h2>
                        <button className='more'>Read More</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Category