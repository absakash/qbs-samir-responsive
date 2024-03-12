import React from 'react';
import ceo from '../../assets/banner/ceo.jpg'

const CEO = () => {
    return (
        <div>
            <div className='my-20 px-10 grid md:grid-cols-2  '>
                <div>
                    <img className='w-full mx-auto md:mx-auto inline-block md:w-full px-10  rounded-lg lg:rounded-lg md:h-[400px]' src={ceo} alt="" />
                </div>
                <div className='mt-10 ml-2 mr-2'>
                    <h1 className="text-4xl text-red ">CEO</h1>
                    <p className=' '>At Qubic Business Solutions, we provide call answering service that serves as a resource for all your business communication needs.</p>
                    <h1 className="text-4xl text-red p-2 pt-5">Message</h1>
                    <p className=''>Welcome to Qubic Business Solutions website. QBS is an exciting, fast growing IT & BPO company with friendly atmosphere. At QBS, we aim not only to become Pakistan`s leading company,</p>
                    <h1 className="text-4xl text-red p-2 pt-5">Vision & Mission</h1>
                    <p className=''>Foundation of our business is on highest degree of ethics, integrity and dedication. Which enables us to be consistent with our commitment with our clients. Our vision is to be the employer.</p>


                </div>
            </div>
        </div>
    );
};

export default CEO;