import React from "react";
import img from "../../assets/images/logo.svg";
import goog from "../../assets/images/goog.svg";
import iphone from "../../assets/images/iphone.svg";

const Footer = () => {
  return (
    <>
    <div className="bg-white justify-center">
        <div className="container mx-auto justify-between grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 p-5">
      
      <div>
      <img
                  className="w-[130px] h-[50px] object-contain "
                  src={img}
                  alt="foto"
                />

                <p  className="text-xl font-bold my-3">Mobilux © 2022</p>
                <p className=" my-3">Barcha huquqlar kafolatlangan</p>

                <div className="flex gap-3"> 
                <img
                  className="w-[130px] h-[50px] object-contain "
                  src={goog}
                  alt="foto"
                />
                
    <img
                  className="w-[130px] h-[50px] object-contain "
                  src={iphone}
                  alt="foto"
                />

                </div>

      </div>
            <div className="">
              <p className="lg:text-[22px] md:text-[20px] sm-text-[18px] text-[18px] font-[500] ">
              Foydali havolalar
              </p>
              <p className="text-[15px] lg:text-[17px] sm:text-[16px] my-3 ">
              Bosh sahifa              </p>
              <p className="text-[15px] lg:text-[17px] sm:text-[16px] my-3 ">
              Yordam kerakmi?              </p>
              <p className="text-[15px] lg:text-[17px] sm:text-[16px] my-3 ">
              Foydalanish shartlari              </p>
              <p className="text-[15px] lg:text-[17px] sm:text-[16px] my-3 ">
              Maxfiylik siyosati              </p>
            </div>

            <div className="gap-[19px] ">
              <p className="lg:text-[22px] md:text-[20px] sm-text-[18px] text-[18px] font-[500]">
              Biz haqimizda              </p>
              <p className="text-[15px] lg:text-[17px] sm:text-[16px]  my-3">
              Manzil: #214, G-dong, Lotte castle, 347 Jongno, Jongno-gu, Seoul, 03113, Crescent Trade ltd
              </p>
              <p className="text-[15px] lg:text-[17px] sm:text-[16px]  my-3">
              Korxona nomi:Mobilux trade              </p>
              <p className="text-[15px] lg:text-[17px] sm:text-[16px]  my-3">
              Korxona rahbari:HASANBOY TURSUNOV
              </p>
              <p className="text-[15px] lg:text-[17px] sm:text-[16px]  my-3">
              Registratsiya raqami:433-62-00377              </p>
              <p className="text-[15px] lg:text-[17px] sm:text-[16px] my-3 ">
              Telefon raqam:93 000 66-44 97 000 66-44      </p>
            </div>
          
          </div>
        </div>
    </>
  );
};

export default Footer;
