import React from 'react'
import '../home.css'

function FreeService() {
  return (
    <div className='free_service_container' >
        <h2 className='title' >Free Services</h2>
        <p>Explore the variety of services available for free, including music,, streaming, playlist, creation and more. </p>
        <div className='free_services' >
            <div className='free_service_box' >
                <div>
                    <h3>Mindfull Apps</h3>
                    <p>Explore Guided Meditations, breathing excersices, and calming music to enhance mental wel-being</p>
                    <p>available on all devices with a simple sign-up</p>
                    <button>Learn More</button>
                </div>
                <img src='../../../../images/service-1.jpg' />
            </div>
            <div className='free_service_box' >
                <div>
                    <h3>Free Course</h3>
                    <p>Access hundred of free courses on various subjects, from technology to humanities</p>
                    <p>sign up to start learning instantly</p>
                    <button>Learn More</button>
                </div>
                <img src='../../../../images/service-2.jpg' />
            </div>
            <div className='free_service_box' >
                <div>
                    <h3>Languarges learning</h3>
                    <p>Learning new Languages with interactive lessions and real-life conservations.</p>
                    <p>No subscription required, start anytime.</p>
                    <button>Start Learning</button>
                </div>
                <img src='../../../../images/service-3.jpg' />
            </div>
        </div>
    </div>
  )
}

export default FreeService