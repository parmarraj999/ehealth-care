import React from 'react';
import '../home.css';

function Review() {
    return (
        <div className='review_container' >
            <h2 className='title' >Review & Ratings</h2>
            <div className='review_box_container' >
                <div className='review_box' >
                    <div className='review_profile'>
                        <div className='review_profile_details'>
                            <img src='../../../../images/profile-1.jpg' />
                            <div>
                                <h4>Jane Smith</h4>
                                <p>2 days ago</p>
                            </div>
                        </div>
                        <div className='review_profile_stars'>
                            <svg style={{width:"20px"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(240,187,64,1)"><path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"></path></svg>
                            <svg style={{width:"20px"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(240,187,64,1)"><path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"></path></svg>
                            <svg style={{width:"20px"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(240,187,64,1)"><path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"></path></svg>
                            <svg style={{width:"20px"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(240,187,64,1)"><path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"></path></svg>
                            <svg style={{width:"20px"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(240,187,64,1)"><path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"></path></svg>
                        </div>
                    </div>
                    <p>Great service, prompt delivery , and friendly staff.</p>
                </div>
                <div className='review_box' >
                <div className='review_profile'>
                        <div className='review_profile_details'>
                            <img src='../../../../images/profile-2.jpg' />
                            <div>
                                <h4>Jon Doe</h4>
                                <p>5 days ago</p>
                            </div>
                        </div>
                        <div className='review_profile_stars'>
                            <svg style={{width:"20px"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(240,187,64,1)"><path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"></path></svg>
                            <svg style={{width:"20px"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(240,187,64,1)"><path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"></path></svg>
                            <svg style={{width:"20px"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(240,187,64,1)"><path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"></path></svg>
                            <svg style={{width:"20px"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(240,187,64,1)"><path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"></path></svg>
                            <svg style={{width:"20px"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(240,187,64,1)"><path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"></path></svg>
                        </div>
                    </div>
                    <p>The product quality exceeded my expectations</p>
                </div>
            </div>
            <div className='review_box_container' >
                <div className='review_box' >
                    <div className='review_profile'>
                        <div className='review_profile_details'>
                            <img src='../../../../images/profile-3.jpg' />
                            <div>
                                <h4>Emily Brown</h4>
                                <p>1 week ago</p>
                            </div>
                        </div>
                        <div className='review_profile_stars'>
                            <svg style={{width:"20px"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(240,187,64,1)"><path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"></path></svg>
                            <svg style={{width:"20px"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(240,187,64,1)"><path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"></path></svg>
                            <svg style={{width:"20px"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(240,187,64,1)"><path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"></path></svg>
                            <svg style={{width:"20px"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(240,187,64,1)"><path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"></path></svg>
                            <svg style={{width:"20px"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(240,187,64,1)"><path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"></path></svg>
                        </div>
                    </div>
                    <p>Satisfied with purchase. will order again.</p>
                </div>
                <div className='review_box' >
                <div className='review_profile'>
                        <div className='review_profile_details'>
                            <img src='../../../../images/profile-4.jpg' />
                            <div>
                                <h4>Michael Lee</h4>
                                <p>3 Week ago</p>
                            </div>
                        </div>
                        <div className='review_profile_stars'>
                            <svg style={{width:"20px"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(240,187,64,1)"><path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"></path></svg>
                            <svg style={{width:"20px"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(240,187,64,1)"><path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"></path></svg>
                            <svg style={{width:"20px"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(240,187,64,1)"><path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"></path></svg>
                            <svg style={{width:"20px"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(240,187,64,1)"><path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"></path></svg>
                            <svg style={{width:"20px"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(240,187,64,1)"><path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"></path></svg>
                        </div>
                    </div>
                    <p>Decent experience, but the packaging could be improve. </p>
                </div>
            </div>
        </div>
    )
}

export default Review