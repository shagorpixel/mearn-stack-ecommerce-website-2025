import React, { useState } from "react";
import { assets } from "./../assets/frontend_assets/assets";
import { Link, NavLink } from "react-router-dom";

const Navber = () => {
  const menuList = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Collection",
      path: "/collection",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];
  const [visible,setvisible] = useState(false);
  return (
    <div className=" flex items-center justify-between py-5 font-medium">
      <Link to={'/'}>
      <img src={assets.logo} className=" w-36 " alt="" />
      </Link>
      <ul className=" hidden sm:flex gap-5 text-gray-700 text-sm">
        {menuList.map((list, index) => (
          <NavLink key={index} to={list.path} className={`flex flex-col items-center gap-1`}>
            <p className=" uppercase">{list.name}</p>
            <hr className=" w-3/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>
        ))}
      </ul>
      <div className=" flex items-center gap-6">
        <img src={assets.search_icon} className=" w-5 cursor-pointer" alt="Search" />
        <div className=" relative group">
            <img src={assets.profile_icon} className=" w-5 cursor-pointer" alt="" />
            <div className=" group-hover:block hidden absolute dropdown-menu right-0 pt-4 ">
                <div className=" flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
                    <p className=" cursor-pointer hover:text-black">My Profile</p>
                    <p className=" cursor-pointer hover:text-black">Orders</p>
                    <p className=" cursor-pointer hover:text-black">Logout</p>
                </div>
            </div>
        </div>
        <Link to={'/cart'} className=" relative">
            <img src={assets.cart_icon} className=" w-5 min-w-5" alt="" />
            <p className=" absolute leading-4 right-[-5px] bottom-[-5px] w-4 text-center bg-black text-white aspect-square rounded-full text-[8px] ">10</p>
        </Link>
        <img onClick={()=>setvisible(true)} src={assets.menu_icon} className=" w-5 cursor-pointer sm:hidden " alt="" />
      </div>
       {/* mobile menu */}
       <div className={`absolute top-0 right-0 bottom-0 sm:w-0 overflow-hidden bg-white transition-all ${visible?'w-full':'w-0'}`}>
         <div className=" flex flex-col text-gray-600">
            <div onClick={()=>setvisible(false)} className=" flex items-center gap-4 p-3 cursor-pointer hover:bg-gray-100">
              <img className=" h-4 rotate-180" src={assets.dropdown_icon} alt="" />
              <p>Back</p>
            </div>
            {
              menuList.map((items,index)=>(
                <NavLink key={index} onClick={ ()=>setvisible(false)} to={items.path} className="py-2 pl-6 border border-gray-200 hover:bg-gray-50">
                  {items.name}
                </NavLink>
              ))
            }
         </div>
       </div>
    </div>
  );
};

export default Navber;
