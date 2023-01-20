import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import { BsWallet2 } from 'react-icons/bs';
import img1 from '../Images/1.jpg';
import img2 from '../Images/2.jpg';
import img3 from '../Images/3.jpg';
import img4 from '../Images/4.jpg';
import img5 from '../Images/5.jpg';
import img6 from '../Images/6.jpg';

function Home() {
  return (
    <>

      {/* Slider Start */}

      <Carousel fade>
        <Carousel.Item>
          <img className="d-block w-100" src={img1} alt="First slide" />
          <div className="position-absolute" style={{ top: '20%', left: '10%' }} >
            <div className="text-white pt-4" style={{ backgroundColor: 'rgba(0,0,0,0.5)', width: '40%' }}>
              <h4 className='mx-4'>HOME IMPROVEMENTS AND REMODELING</h4>
              <hr style={{ color: 'rgb(212, 186, 13)' }} />
              <p className='mx-4 d-none d-md-block'>With over 15 years experience and real focus on customer satisfaction, you can rely on us for your next renovation, remodeling or driveway sett.</p>
              <button className='rounded-5 mx-4 px-3 py-2 my-4 buy-teamplet d-none d-md-block'>BUY THIS TEMPLATE</button>
            </div>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={img2} alt="First slide" />
          <div className="position-absolute" style={{ top: '20%', left: '10%' }} >
            <div className="text-white pt-4" style={{ backgroundColor: 'rgba(0,0,0,0.5)', width: '40%' }}>
              <h4 className='mx-4'>HOME IMPROVEMENTS AND REMODELING</h4>
              <hr style={{ color: 'rgb(212, 186, 13)' }} />
              <p className='mx-4 d-none d-md-block'>With over 15 years experience and real focus on customer satisfaction, you can rely on us for your next renovation, remodeling or driveway sett.</p>
              <button className='rounded-5 mx-4 px-3 py-2 my-4 buy-teamplet d-none d-md-block'>BUY THIS TEMPLATE</button>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img3} alt="First slide" />
          <div className="position-absolute" style={{ top: '20%', left: '10%' }} >
            <div className="text-white pt-4" style={{ backgroundColor: 'rgba(0,0,0,0.5)', width: '40%' }}>
              <h4 className='mx-4'>HOME IMPROVEMENTS AND REMODELING</h4>
              <hr style={{ color: 'rgb(212, 186, 13)' }} />
              <p className='mx-4 d-none d-md-block'>With over 15 years experience and real focus on customer satisfaction, you can rely on us for your next renovation, remodeling or driveway sett.</p>
              <button className='rounded-5 mx-4 px-3 py-2 my-4 buy-teamplet d-none d-md-block'>BUY THIS TEMPLATE</button>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>

      {/* Slider End */}

      {/* COST OF RENOVATION START */}
      <div className='container'>
        <div className=" row row-cols-1 justify-content-end  py-4 ">
          <div className="row row-cols-1 row-cols-md-2">
            <div className="d-flex">
              <span className="fs-2">
                <BsWallet2 style={{ color: ' rgb(230, 166, 4)' }} />
              </span>
              <ul className='list'>
                <li><h5>COST OF RENOVATION</h5></li>
                <li><p>Use our form to estimate the initial cost of renovation or installation.</p></li>
              </ul>
            </div>
            <div className='text-end text-center'>
              <button type="button" className="btn btn-warning text-white rounded-5">REQUEST A QUOTE</button>
            </div>
          </div>
        </div>
      </div>
      {/* COST OF RENOVATION END */}

      {/* OUR SERVICES START */}
      <div style={{ backgroundColor: 'rgb(245, 245, 245)' }}>
        <div className="container">
          <div className="pt-5">
            <div className="row">
              <h4 className="text-center ">OUR SERVICES</h4>
              <div className='box-header'></div>
            </div>
            <div className="text-center mt-5">
              <p>With over 15 years experience and real focus on customer satisfaction, you can rely on us for your next renovation,<br />
                driveway sett or home repair. We provide a professional service for private and commercial customers.</p>
            </div>
            <div className="our-services mt-5">
              <ul className='row row-cols-1 row-cols-sm-2 row-cols-md-3 text-center ' style={{ listStyle: 'none' }}>
                <li>
                  <a href="#"><img src={img4} alt="OUR SERVICES IMAGES" /></a>
                  <h4 className='mt-4'>INTERIOR RENOVATION</h4>
                  <div className='box-header'></div>
                  <p>We can help you bring new life to existing rooms and develop unused spaces.</p>
                </li>
                <li>
                  <a href="#"><img src={img5} alt="OUR SERVICES IMAGES" /></a>
                  <h4 className='mt-4'>DESIGN AND BUILD</h4>
                  <div className='box-header'></div>
                  <p>From initial design and project specification to archieving a high end finish.</p>
                </li>
                <li>
                  <a href="#"><img src={img6} alt="OUR SERVICES IMAGES" /></a>
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
      {/* OUR SERVICES END */}
    </>
  );
}

export default Home;