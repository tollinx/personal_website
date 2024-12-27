import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Homepage from "../Pages/HomePage";
import { Outlet } from "react-router";
import { Route, Routes } from "react-router";

const MainLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
        <main>{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
