import React from 'react';
import bannerOne from '../../assets/banner/img-1.avif'

const Banner = () => {
    return (
        <div className='grid md:grid-cols-2'>
            <div className=' mt-20 py-10 px-5'>
                <h1 className='text-2xl '>Qubic <span className='text-blue-500'>Solution !</span></h1>
                <p className='mt-2 text-xl '> <span className="text-blue-500">Welcome</span> to Our Qubic solution web !</p>
                <p className='mt-2'>
                    Did you know that our Customer Support team at Qubic Business Solutions has a satisfaction rating of over 95%? Experience exceptional service for yourself - reach out to us now!
                </p>
                <button className='btn bg-blue-500 text-white mx-auto mt-2' > Call us now !</button>

            </div>
            <div className=' overflow-hidden rounded-lg w-full'>
                <img className=' w-full  md:w-full mx-auto h-[350px]   md:h-[500px] rounded-lg   hover:scale-125 duration-1000 ease-in-out  ' src={bannerOne} alt="" />
            </div>
        </div>
    );
};

export default Banner;