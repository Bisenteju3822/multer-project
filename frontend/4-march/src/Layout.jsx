import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Head from "./Head";
const Layout = () => {
  return (
    <>
      <Head />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
