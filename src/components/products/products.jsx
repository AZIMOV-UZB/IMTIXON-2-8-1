import React, { useEffect, useRef } from "react";
import { IoCartOutline } from "react-icons/io5";
import Skeleton from "../skeleton/skeleton";
import { Link, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/api/slice/cartSilice";
import { FaStar } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';


const Products = ({ data, isLoading }) => {
  const notify = () => toast("Maxsulot savatga joylandi");
  const link = useRef(null);
  const dispatch = useDispatch();
  const location = useLocation();
  useEffect(() => {
    const clickLink = () => link.current.click();
    setTimeout(clickLink, 10);
    return () => {
      clearTimeout(clickLink);
    };
  }, [location.pathname]);

  return (
    <>
      <div className=" w-full mt-10  lg:gap-4 grid grid-cols-1   sm:grid-cols-1  my-5 md:grid-cols-2 lg:grid-cols-4 gap-2 container mx-auto">
        {data?.map((el) => {
          return (
            <div key={el.id} className="bg-white rounded-[10px] hover:drop-shadow  ">
              <div className=" flex items-center justify-center mb-[20px] mt-2 ">
                <Link to={`/products/${el.id}`}>
                  <img
                    className=" object-contain h-[200px]  duration-75 hover:scale-105
                   "
                    src={el.image_url}
                    alt="foto"
                  />
                </Link>
              </div>
              <div className="flex flex-col gap-4  p-2">
                <p className="text-[16px] text-[#190D26] font-[400]">
                  {el.description.slice(1, 40)}...
                </p>

                <div className=" lg:gap-2 grid grid-cols-1   sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-2 items-center text-yellow-300">
                  <div className="flex gap-1 items-center">
                    <FaStar className="text-2xl" />
                    <p className=" text-[18px] text-black font-[500]">
                      {el.ratings_stars}
                    </p>
                  </div>
                  <del className="text-[#ddd] text-[18px] ml-5">800 000 so'm</del>
                </div>
                <div className="flex gap-2 items-center">
                  <p className=" text-[21px] font-[600] hover:text-red-600">
                    {el.price}
                  </p>
                  <p className="font-[600] text-xl">so'm</p>

                </div>
                <button onClick={() => dispatch(addToCart(el))}
                  className="border gap-4  py-[3px] px-[20px] w-full bg-[#0BA42D] flex items-center justify-center rounded-[6px]  hover:scale-105">
                  <IoCartOutline className="text-[#fff] font-[500]  text-xl" />
                  <p className="text-[#fff] font-[500] text-[18px]" onClick={notify}>Savatchaga</p>
                </button>

              </div>
              <ToastContainer
            position="top-center"
            autoClose={5000}
            limit={3}
              />

            </div>

          );
        })}
        {isLoading &&
          new Array(20).fill().map((_, idx) => <Skeleton key={idx} />)}

      </div>
    </>
  );
};

export default Products;
