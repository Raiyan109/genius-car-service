import React from 'react';
// import './About.css'
import proPic from '../../images/photo-1511367461989-f85a21fda167.jpg'
import PageTitle from '../Shared/PageTitle/PageTitle';


const About = () => {
    return (
        <div className="about-container">
            <PageTitle title='About'></PageTitle>
            <h1>this is aabut us</h1>
            {/* <div className="card">

                <img src={proPic} className="card__image" alt="" />
                <p className="card__name">Raiyan </p>
                <div className="grid-container">

                    <div className="grid-child-posts">
                        156 Post
                    </div>

                    <div className="grid-child-followers">
                        1012 Likes
                    </div>

                </div>
                <ul className="social-icons">
                    <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                    <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                    <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                    <li><a href="#"><i className="fa fa-codepen"></i></a></li>
                </ul>
                <button className="btn draw-border">Follow</button>
                <button className="btn draw-border">Message</button>

            </div> */}

        </div>

    );
};

export default About;