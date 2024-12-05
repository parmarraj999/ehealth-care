import React from 'react';
import '../home.css';

function Blogpage() {
    return (
        <div className='blog_page_container' >
            <h2 className='title' >Blog Page</h2>
            <div className='blogs_container' >
                <div className='blog'>
                    <div>
                        <h3>Cardiology News</h3>
                        <p>Explore the latest advantage in cardiology including new treatment options and research findings</p>
                    </div>
                    <img src='../../../../images/blog-1.jpg' />
                </div>
                <div className='blog' >
                    <div>
                        <h3>Tech In Healthcare</h3>
                        <p>Stay informed with updates on  the impact of technology  in healthcare and how  it's reshaping the industry</p>
                    </div>
                    <img src='../../../../images/blog-2.jpg' />
                </div>
                <div className='blog' >
                    <div>
                        <h3>Cancel Research</h3>
                        <p>Read about the recent breakthroughs in cancer research and the promising new therapies being developed</p>
                    </div>
                    <img src='../../../../images/blog-3.jpg' />
                </div>
            </div>
        </div>
    )
}

export default Blogpage