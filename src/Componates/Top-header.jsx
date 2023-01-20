import { FaFacebookF, FaPhoneAlt, FaPinterest, FaSearch } from "react-icons/fa";
import { BsClock, BsFillEnvelopeFill, BsTwitter } from "react-icons/bs";
const Tophedaer = () => {

    return (
        <div  style={{ backgroundColor: "#e2e2e2", fontSize: "15px" ,width:'100%'}}>
            <div className="container">
                <div className="row  row-cols-1 row-cols-md-auto justify-content-between align-items-center">
                    <div className="row row-cols-1 row-cols-md-auto text-center">
                        <p><a href="#" className="text-dark opacity-75 "><FaPhoneAlt/>+149 75 23 222 35</a></p>
                        <p className="text-dark opacity-75"><BsFillEnvelopeFill/> needhelp@company.com</p>
                        <p className="text-dark opacity-75"><BsClock/> Mon - Sat: 8.00 am - 7.00 pm</p>
                    </div>
                    <div className="row row-cols-auto row-cols-md-auto text-center justify-content-center">
                        <a href="#" className=" text-dark opacity-75"><FaFacebookF /></a>
                        <a href="#" className=" text-dark opacity-75"><BsTwitter /></a>
                        <a href="#" className=" text-dark opacity-75"><FaPinterest /></a>
                        <a href="#" className=" text-dark opacity-75"><FaSearch /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Tophedaer;