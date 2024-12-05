import React from 'react';
import './footer.css';

function Footer() {
  return (
    <div className='footer_container' >
        <div className='footer_logo' >
            <img src='../../../../images/logo.png'/>
        </div>
        <div className='newsletter_container' >
            <h2>Subscribe to our newsletter</h2>
            <div className='newsletter_input' >
             <input placeholder='Input Your Email' />
             <button>Subscribe</button>
            </div>  
        </div>
        <div className='footer_navigation' >
          <div className='footer_list_container'>
            <h2>Product</h2>
            <div>
              <p>Features</p>
              <p>Pricing</p>
            </div>
          </div>
          <div className='footer_list_container'>
            <h2>Resources</h2>
            <div>
              <p>Blog</p>
              <p>User Guide</p>
              <p>Webinars</p>
            </div>
          </div>
          <div className='footer_list_container'>
            <h2>Company</h2>
            <div>
              <p>About us</p>
              <p>Contact us</p>
            </div>
          </div>
          <div className='footer_list_container'>
            <h2>Plan & Pricing</h2>
            <div>
              <p>Personal</p>
              <p>Start up</p>
              <p>Organization</p>
            </div>
          </div>
        </div>
        <div className='copyright_section' >
          <h1>© 2024 Ehealth-Care</h1>
        </div>
    </div>
  )
}

export default Footer