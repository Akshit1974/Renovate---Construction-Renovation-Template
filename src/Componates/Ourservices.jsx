import React from 'react'
import img1 from '../Images/4.jpg'
import img2 from '../Images/5.jpg'
import img3 from '../Images/6.jpg'
const Ourservices = () => {
    return (
        <div style={{ backgroundColor: 'rgb(245, 245, 245)' }}>
            <div className="container">
                <div className="pt-5">
                    <div className="row">
                        <h4 className="text-center ">OUR SERVICES</h4>
                        <div className='box-header'></div>
                    </div>
                    <div className="text-center mt-5">
                        <p>With over 15 years experience and real focus on customer satisfaction, you can rely on us for your next renovation,<br/>
                            driveway sett or home repair. We provide a professional service for private and commercial customers.</p>
                    </div>
                    <div className="our-services mt-5">
                        <ul className='row row-cols-1 row-cols-sm-2 row-cols-md-3 text-center ' style={{ listStyle: 'none' }}>
                            <li>
                                <a href="#"><img src={img1} alt="OUR SERVICES IMAGES" /></a>
                                <h4 className='mt-4'>INTERIOR RENOVATION</h4>
                                <div className='box-header'></div>
                                <p>We can help you bring new life to existing rooms and develop unused spaces.</p>
                            </li>
                            <li>
                                <a href="#"><img src={img2} alt="OUR SERVICES IMAGES" /></a>
                                <h4 className='mt-4'>DESIGN AND BUILD</h4>
                                <div className='box-header'></div>
                                <p>From initial design and project specification to archieving a high end finish.</p>
                            </li>
                            <li>
                                <a href="#"><img src={img3} alt="OUR SERVICES IMAGES" /></a>
                                <h4 className='mt-4'>TILING AND PAINTING</h4>
                                <div className='box-header'></div>
                                <p>We offer quality tiling and painting solutions for interior and exterior.</p>
                            </li>
                        </ul>
                    </div>
                    <div style={{ marginTop: "67px", paddingBottom: "87px" }} className='text-center'>
                        <a href="#">
                            <button type="button" class="btn text-white rounded-5 btn-outline-warning">VIEW ALL SERVICES</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Ourservices;

{/* <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 row-cols-xxl-5"> */ }


// xl={{ span: 12 }} xs={{span:12}}
{/* <Row xxl={6} xl={5} lg={4} md={3} sm={2} xs={1}>
    <Col>1</Col>
    <Col>2</Col>
    <Col>3</Col>
    <Col>4</Col>
    <Col>5</Col>
</Row> */}