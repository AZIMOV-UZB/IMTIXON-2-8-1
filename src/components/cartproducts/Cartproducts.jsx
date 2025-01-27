import React from "react";
import "./cart.css";
import { IoCartOutline } from "react-icons/io5";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { useDispatch } from "react-redux";
import {
  decrementCart,
  incrementCart,
  removeFromCart,
} from "../../redux/api/slice/cartSilice";
import { Link } from "react-router-dom";
const Cartproducts = ({ data }) => {
  const dispatch = useDispatch();
  console.log(data);
  window.scrollTo(0, 0);

  return (
    <>
      <div className="container  ">
        <Link to={"/"}>
          <div className="flex items-center gap-2 mb-[30px] mt-[40px] w-[250px] p-2   bg-green-500 hover:bg-red-500 hover:rounded-lg">
            <FaLongArrowAltLeft className="text-white text-2xl" />
            <p className="text-[15px]  text-white text-3xl font-bold">
              Back to Shopping
            </p>
          </div>
        </Link>
        <h2 className="text-[20px] w-[68%] font-[700] lg:text-[26px] border-b border-dashed pb-2 mb-[30px]">
          SHOPPING CART
        </h2>
    
        <div className="flex lg:flex-row flex-col">
          <div className=" w-full  grid-cols-1 gap-3 pt-3 lg:pl-[30px] lg:mb-[40px] bg-white p-4 rounded-lg">
            {data?.map((el) => {
              return (
                <div
                  key={el.id}
                  className="flex lg:flex-row flex-col gap-9 lg:gap-3 w-full"
                >
                  <div className=" p-[6px]  items-center justify-center mb-[20px] relative">
                    <button
                      onClick={() => dispatch(removeFromCart(el))}
                      className="absolute  lg:left-[-10px] text-2xl hover:text-red-600"
                    >
                      <IoMdClose />
                    </button>
                    <img
                      className="w-[250px] h-[200px] "
                      src={el.image_url}
                      alt=""
                    />
                  </div>
                  <div className="flex flex-col gap-4 pr-7">
                    <p className="text-[#190D26] text-[19px] font-[600]">
                      {el.name}
                    </p>

                    <p className="text-[16px] text-[#190D26] font-[400] lg:w-[100%] w-[40%]">
                      {el.description}
                    </p>
                    <p className="text-[16px] text-[#0BA42D] font-[400]">
                      In stock
                    </p>
                  </div>
                  <div className="flex items-center justify-between rounded-full bg-[#F0F0F0] px-[10px] py-[4px] w-[120px] lg:w-[140px] h-[35px]">
                    <button
                      className="text-[22px]"
                      onClick={() => dispatch(decrementCart(el))}
                      disabled={el.quantity <= 1}
                    >
                      -
                    </button>
                    <p className="text-[18px]">{el.quantity}</p>
                    <button
                      className="text-[22px]"
                      onClick={() => dispatch(incrementCart(el))}
                    >
                      +
                    </button>
                  </div>
                  <div>
                    <p className="text-[#000000] text-[21px] font-[600]">
                      ${el.price}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className=" mb-[40px]  ml-6 mr-6 "></div>
          <div className="flex flex-col gap-4 bg-white p-4 rounded-lg">
            <h2 className="text-[20px] font-[700] lg:text-[26px] border-b border-dashed pb-2">
              CART TOTALS
            </h2>
            <div className="flex justify-between">
              <p className="text-[16px] text-[#190D26]">
                Shipping (3-5 Business Days)
              </p>
              <p className="text-[17px] text-[#190D26] font-[600]">Free</p>
            </div>
            <div className="flex justify-between">
              <p className="text-[16px] text-[#190D26]">
                TAX (estimated for the United States (US))
              </p>
              <p className="text-[17px] text-[#190D26] font-[600]">$0</p>
            </div>
            <div className="flex justify-between border-b border-dashed pb-2">
              <p className="text-[16px] text-[#190D26]">Subtotal</p>
              <p className="text-[17px] text-[#190D26] font-[600]">
                ${" "}
                {data
                  ?.map((item) => item.price * item.quantity)
                  .reduce((prev, current) => prev + current, 0)
                  .toFixed(2)}
              </p>
            </div>
            <button className="border gap-4  py-[5px] px-[10px] text-[#fff] w-[100%] bg-[#0BA42D] flex items-center justify-center rounded-[4px]">
              <p className="text-[13px] text-[#fff] font-[500]">
                Proceed to Checkout
              </p>
            </button>
            <Link to={"/"}>
              <div className="flex items-center gap-2 justify-center">
                <FaLongArrowAltLeft />
                <p className="text-[15px] font-[700] text-[#0D2612]">
                  Back to Shopping
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cartproducts;
