import { Route, Routes } from "react-router-dom";

import Layout from "./layout/layout";
import ProductsSection from "./components/products-section/Products-section";
import SinglProdutc from "./pages/singlProdutc/Singl-Produtc";
import Cartproducts from "./components/cartproducts/Cartproducts";
import { useSelector } from "react-redux";
import Admin from "./pages/admin/Admin";
import NotFound from "./pages/not-found/NotFound";
import Qurulma from "./pages/admin/qurulma/Qurulma";

function App() {
  const cart = useSelector((state) => state.cart.value);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>

          <Route path="/" element={<ProductsSection />} />
          <Route path="products/:id" element={<SinglProdutc />} />
          <Route path="/cartProducts" element={<Cartproducts data={cart} />} />
          <Route path="*" element={<NotFound/>} />
          <Route path="products/:id" element={<SinglProdutc />} />
          <Route path="/Admin/*" element={<Admin />}>
          <Route path="qurulmalaringiz" element={<Qurulma/>} />
        </Route>         


          </Route>

      </Routes>
    </>
  );
}

export default App;
