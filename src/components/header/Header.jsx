import React, { useEffect, useRef, useState } from "react";
import "./header.css";
import { IoSearchOutline } from "react-icons/io5";
import { BsMenuUp } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import { Link} from "react-router-dom";
import { GiShoppingCart } from "react-icons/gi";
import navbar from "../../assets/images/logo.svg";
import uzb from "../../assets/images/uzb.svg";
import { useSelector } from "react-redux";

const Header = () => {
  const cart = useSelector((state) => state.cart.value);
  console.log(cart);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    window.scrollY
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="z-10 bg-white header py-2">
      <div className="container mx-auto ">
        <div className=" flex items-center  gap-[60px] justify-between mt-5 ">
          <Link to={"/"}>
            <img
              className="w-[130px] h-[50px] object-contain logo "
              src={navbar}
              alt="foto"
            />
          </Link>
<div className="bag border-2 border-[#0BA42D] rounded-lg  w-[700px]  items-center flex gap-3 bg-[#f6f8fa] justify-between ">
  <div className="flex px-1">
  <button className="items-center">
            <IoSearchOutline className="text-3xl pl-1" />
  </button>
<input className="outline-none text-xl font-[600] text-[#0BA42D] pl-4 bg-[#f6f8fa] " type="text" placeholder="Qidirish"/>
  </div>

  <div  className="bg-[#0BA42D] flex gap-3 px-2 text-white items-center w-[120px] text-center h-[36px] rounded-r-lg">
  <BsMenuUp  className="text-xl "/>
    <button className="text-xl ">
    Filter
    </button>
  </div>

</div>
       
          <div className="flex gap-2 lg:gap-5 items-center ">
            <div className="flex gap-1 items-center bg-[#eee] rounded-lg p-2">
            <img
              className="w-[25px] h-[25px] uzb"
              src={uzb}
              alt="foto"
            />
            <select className="outline-none text-[#0BA42D] bg-[#eee]" name="" id="">
              <option value="">
                uzb
              </option>
              <option value="">
                eng
              </option>
              <option value="">
                rus
              </option>
            </select>
            </div>
            <Link to={"/cartProducts"}>
            <div className="flex items-center">
              <GiShoppingCart className=" text-3xl font-bold text" />
            <div className="pt-3 px-3 mb-4 rounded-[50px] bg-red-700 boob">
            <sup className="text-yellow-400 text-[18px] font-bold  boob">{cart.length}</sup>
            </div>
            </div>
            </Link>
            
              <Link to={"/Admin/*"}>
            <div className="flex gap-2 items-center">

              <p className="text-xl lg ">Kirish</p>
              <FaUserCircle className=" text-3xl font-bold text" />
            </div>
            </Link>
          </div>
        
        </div>
      </div>
    </div>
  );
};

export default Header;