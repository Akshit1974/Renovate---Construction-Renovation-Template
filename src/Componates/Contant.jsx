import React from 'react'
import { FaFacebookF, FaPhoneAlt, FaPinterest, FaSearch } from "react-icons/fa";
import { BsWallet2 } from "react-icons/bs";

const Contant = () => {
    return (
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
    )
}

export default Contant;

