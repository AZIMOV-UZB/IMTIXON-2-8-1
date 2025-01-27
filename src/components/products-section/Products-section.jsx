import React, { useState } from "react";
import Products from "../products/products";
import { FaShoppingBag } from "react-icons/fa";
window.scrollTo(0, 0);

import {
  useGetBrandsQuery,
  useGetCategoryQuery,
  useGetColorsQuery,
} from "../../redux/api/categoreyApi";
import Saytbar from "../saytbar/Saytbar";
import Carousel from "../carusel/Carusel";

const ProductsSection = () => {
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [currentColor] = useState("");
  const { data, isLoading } = useGetCategoryQuery(
    `${selectedBrands.length <= 0 ? "" : "brand_name="}${selectedBrands.join(
      "&brand_name="
    )}${
      currentColor
        ? `&color_options_like=${encodeURIComponent(currentColor)}`
        : ""
    }`
  );
  const { data: brands } = useGetBrandsQuery();
  const { data: colors } = useGetColorsQuery();

  const handleBrands = (event) => {
    const brand = event.target.dataset.brand;
    if (!selectedBrands.some((item) => item === brand)) {
      setSelectedBrands((prev) => [...prev, brand]);
    } else {
      setSelectedBrands((prev) => prev.filter((item) => item !== brand));
    }
  };
  return (
    <div className="container">
      <div className="flex gap-4">
        <Saytbar/> 
<div>
  <Carousel/>
      <div className=" flex gap-2 items-center m-4 ml-5">
      <FaShoppingBag className="text-3xl text-green-400" />
<p className="text-3xl font-bold title">Yangi mahsulotlar</p>
      </div>
      <div>
        <Products
          data={data}
          isLoading={isLoading}
          brands={brands}
          colors={colors}
        />
      </div>
      </div>
      </div>
      
      </div>
  );
};

export default React.memo(ProductsSection);
