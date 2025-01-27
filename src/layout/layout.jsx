import Header from "../components/header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../components/footer/footer";

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
