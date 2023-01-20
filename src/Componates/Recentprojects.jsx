import React from 'react'
import img1 from '../Images/7.jpg'
import img2 from '../Images/8.jpg'
import img3 from '../Images/9.jpg'
import img4 from '../Images/10.jpg'

const Recentprojects = () => {
    return (
        <div>

            <div className="container">
                <div className="pt-5">
                    <div className="row">
                        <h4 className="text-center ">RECENT PROJECTS</h4>
                        <div className='box-header'></div>
                    </div>
                    <div className="text-center mt-5">
                        <p>Here are a few of many projects we have completed for our customers. We provide a professional service
                            <br />  which includes consultation, free estimate, design, supply of materials and installation.</p>
                    </div>
                    <div className="our-services mt-5">
                        <ul className=' row row-cols-1 row-cols-sm-2 row-cols-md-4 text-center ' style={{ listStyle: 'none' }}>
                            <li className='ourproject'>
                                <a href="#"><img src={img1} alt="OUR PROJECT IMAGES" /></a>
                                <div className="view text-center">
                                    <div className="my-3">
                                        <p className='mb-3'>Design and Build</p>
                                        <div className="btn-project">
                                            <button type="button" class="btn text-black rounded-5 btn-outline-warning">VIEW ALL PROJECT</button>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className='ourproject'>
                                <a href="#"><img src={img2} alt="OUR PROJECT IMAGES" /></a>
                                <div className="view text-center">
                                    <div className="my-3">
                                        <p className='mb-3'>Garden Renovation</p>
                                        <div className="btn-project">
                                            <button type="button" class="btn text-black rounded-5 btn-outline-warning">VIEW ALL PROJECT</button>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className='ourproject'>
                                <a href="#"><img src={img3} alt="OUR PROJECT IMAGES" /></a>
                                <div className="view text-center">
                                    <div className="my-3">
                                        <p className='mb-3'>Interior Renovation</p>
                                        <div className="btn-project">
                                            <button type="button" class="btn text-black rounded-5 btn-outline-warning">VIEW ALL PROJECT</button>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className='ourproject'>
                                <a href="#"><img src={img4} alt="OUR PROJECT IMAGES" /></a>
                                <div className="view text-center">
                                    <div className="my-3">
                                        <p className='mb-3'>Solar Systems</p>
                                        <div className="btn-project">
                                            <button type="button" class="btn text-black rounded-5 btn-outline-warning">VIEW ALL PROJECT</button>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div style={{ marginTop: "67px", paddingBottom: "87px" }} className='text-center row row-cols-1 row-cols-sm-2 align-items-center'>
                        <h5 className='text-end d-none d-md-block'>EXPLORE OUR PROJECTS </h5>
                        <a href="#" className='text-center'>
                            <button type="button" class="btn text-white rounded-5 btn-outline-warning">VIEW ALL SERVICES</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Recentprojects;
