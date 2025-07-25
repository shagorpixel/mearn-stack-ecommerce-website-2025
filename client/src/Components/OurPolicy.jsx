import React from 'react';
import { assets } from '../assets/frontend_assets/assets';

const OurPolicy = () => {
    return (
        <div className=' flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700'>
            <div>
                <img src={assets.exchange_icon} className=' w-12 mb-5 m-auto' alt="" />
                <p className=' font-semibold'>Easy Exchange Policy</p>
                <p className=' font-semibold'>We offer hassle free exchange policy</p>
            </div>
            <div>
                <img src={assets.quality_icon} className=' w-12 mb-5 m-auto' alt="" />
                <p className=' font-semibold'>7 Days Return Policy</p>
                <p className=' font-semibold'>We provide 7 days free return policy</p>
            </div>
            <div>
                <img src={assets.support_img} className=' w-12 mb-5 m-auto' alt="" />
                <p className=' font-semibold'>Best Customer Supoprt</p>
                <p className=' font-semibold'>we provide 24/7 customer support</p>
            </div>
        </div>
    );
};

export default OurPolicy;