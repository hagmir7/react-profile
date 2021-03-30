import React, { Component } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';


class Body extends Component{
    render(){
        return(
            <div className='container-fluid'>
                <div className='row border-bottom content'>
                    <div className='col-xl-6 col-lg-6 col-md-4'>
                        <img src='https://hassan-agmir.netlify.app/images/PicsArt.png' />

                    </div>

                    <div className='col-xl-6 col-lg-6 col-md-8'>
                        <section className="homesection" >


                            <div className="text-about card mt-3 p-3 mr-3">
                                <h2>Hassan Agmir</h2>
                                <h4>PYTHON is everything in my life!</h4>
                                <p>
                                    Thank You For Visit My Website!
                                    I'm Hassan, I work as a web design and Developer...  Python is My best programing languag I ues It with Django framework
                                    to program websites.
                                </p>
                                <div className="social-media">
                                    <a href="https://www.facebook.com/h.agmir6" title="Facebook" target="_blank"><FontAwesomeIcon icon={['fab', 'facebook']} /></a>
                                    <a href="https://wa.me/212648382674" title="Whatsapp" target="_blank"><FontAwesomeIcon icon={['fab', 'whatsapp']} /></a>
                                    <a href="https://www.youtube.com/channel/UC_H4r1duGQfgBD3gNsEIqXw?view_as=subscriber" target="_blank" title="Youtube"><FontAwesomeIcon icon={['fab', 'youtube']} /></a>
                                    <a href="https://www.instagram.com/hassan_agmir/" target="_blank" title="Instagram"><FontAwesomeIcon icon={['fab', 'instagram']} /></a>
                                </div>

                            </div>
                            <div className="divimg">
                                <img className="imgbg  animate__animated  animate__fadeInLeft animate__fast" src="images/PicsArt.png" alt="" />
                            </div>
                        </section>
                    </div>

                </div>


            </div>
        )
    }
}

export default Body;