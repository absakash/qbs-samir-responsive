import React from 'react';
import { FaPhoneSquareAlt, FaFacebook, FaInstagramSquare, FaViber } from "react-icons/fa";
import { HiMailOpen } from "react-icons/hi";
import { FaSkype } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <div>
            <div className='bg-blue-600 text-white hidden sm:hidden md:hidden  lg:block'>
                <div className='flex justify-between px-20 py-3'>
                    <div>

                        <div className='flex gap-5'>
                            <div className='flex'>
                                <h4><HiMailOpen /> qubicbusinesssolutions@gmail.com</h4>
                            </div>
                            <div className='flex'>
                                <h4><FaPhoneSquareAlt /> 01915205801</h4>
                            </div>
                        </div>

                    </div>
                    <div className='flex gap-4 align-middle text-2xl '>
                        <Link target='_blank' to='https://www.facebook.com/s.m.asifurrahman.antu'>     <FaFacebook /></Link>


                        <FaInstagramSquare />
                        <FaSkype />

                    </div>
                </div>
            </div>
            {/* header two */}





        </div>
    );
};

export default Header;