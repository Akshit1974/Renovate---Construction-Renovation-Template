import Carousel from 'react-bootstrap/Carousel';
import img1 from '../Images/1.jpg';
import img2 from '../Images/2.jpg';
import img3 from '../Images/3.jpg';

function Slider() {
  return (
    <div>
      <Carousel fade>
      <Carousel.Item>
        <img className="d-block w-100" src={img1} alt="First slide"/>
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
        <img className="d-block w-100" src={img2} alt="First slide"/>
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
        <img className="d-block w-100" src={img3} alt="First slide"/>
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
    </div>
  );
}

export default Slider;