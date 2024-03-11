import React from 'react';
import background from '../../assets/banner/img-2.avif'
import { IoMdTimer } from "react-icons/io";
import { BiLogoGmail } from "react-icons/bi";
const WhyUs = () => {
    return (
        <div>
            <div className='my-40  bg-center  bg-cover bg-no-repeat h-[500px] bg-fixed md:w-full' style={{ backgroundImage: `url(${background})` }}>
                <div className='bg-gradient-to-r from-gray-900 grid  md:grid-cols-2 h-[500px]' >
                    <div className='w-full'>
                        <h2 className='text-2xl text-white p-10'>Why we are ?</h2>
                        <p className='text--xl text-white pl-10'>Welcome to Qubic Business Solutions website. QBS is an exciting, fast growing IT & BPO company with friendly atmosphere. At QBS, we aim not only to become Pakistan`s leading company, but also to become World`s leading IT & BPO Services provider company.   </p>
                        <span className='pl-10 pt-10 inline-block text-white  text-xl'><IoMdTimer /> 24/7 Hours</span> <br />
                        <span className='pl-10  inline-block text-white  text-xl'>   <BiLogoGmail /> qbs.solutions@gmail.com</span>

                    </div>
                    <div>
                        <iframe className='hidden lg:block mt-14 rounded-md ml-6' width="560" height="315" src="https://www.youtube.com/embed/5rkHNI2tmvo?si=s_otLRX3vcgHJY33" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>


                    </div>
                </div>
            </div>

        </div>
    );
};

export default WhyUs;