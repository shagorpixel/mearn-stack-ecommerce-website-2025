import React from 'react';
import { assets } from './../assets/frontend_assets/assets';

const Footer = () => {
    return (
        <footer>
            <div className=' flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm '>
                <div>
                    <img src={assets.logo} className=' mb-5 w-32' alt="" />
                    <p className=' w-full md:w-3/4 text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla repellendus atque natus. Modi magnam culpa iure quis ea reiciendis aliquid delectus voluptates expedita sequi! Ipsam delectus soluta cum architecto, sed voluptas vero laudantium perspiciatis a tempore, blanditiis ad necessitatibus ratione!</p>
                </div>
                <div>
                    <p className=' text-xl font-medium mb-5'>Company</p>
                    <ul className=' flex flex-col gap-4 text-gray-600'>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Delivary</li>
                        <li>Privicy Policy</li>
                    </ul>
                </div>
                <div>
                    <p className=' text-xl font-medium mb-5'>GET IN TOUCH</p>
                    <ul className=' flex flex-col gap-4 text-gray-600'>
                        <li>+8801734-345634</li>
                        <li>support@gramershop.com</li>
                    </ul>
                </div>
            </div>
            <div>
                <hr />
                <p className=' py-5 text-sm text-center'>Copywright 2025 gramershop.com - All Right Reserved</p>
            </div>
        </footer>
    );
};

export default Footer;