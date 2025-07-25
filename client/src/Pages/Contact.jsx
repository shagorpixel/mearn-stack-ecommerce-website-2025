import React from 'react';
import Title from '../Components/Title';
import { assets } from '../assets/frontend_assets/assets';
import NewsLetterBox from '../Components/NewsLetterBox';

const Contact = () => {
    return (
        <div>
            <div className=' text-center text-2xl pt-10 border-t border-gray-200'>
                <Title text1={"CONTACT"} text2={"US"} />
            </div>
            <div className=' my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
                <img className=' w-full max-w-[480px]' src={assets.contact_img} alt="" />
                <div className=' flex flex-col justify-center items-start gap-6'>
                    <p className=' font-semibold text-xl text-gray-600s'>Our Store</p>
                    <p className=' text-gray-500'>Baliadanga Bazar <br /> Jhenaidah Sadar Jhenaidah Bangladesh.</p>
                    <p className=' text-gray-500'>Tel: +8801928-****** <br />Email:gramerstyle@gmail.com</p>
                    <p className=' font-semibold text-xl text-gray-600'>Careers at Gramershop</p>
                    <p className=' text-gray-500'> Learn More About Our teams and job openings.</p>
                    <button className=' border border-black p-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500 cursor-pointer rounded'>Explore Jobs</button>
                </div>
            </div>
            <NewsLetterBox />
        </div>
    );
};

export default Contact;