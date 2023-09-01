import { Outlet } from "react-router-dom";
import Banner from "../components/Banner/Banner";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
export default function CitiesLayout() {
  return (
    <>
        <Header />
        <Banner />
        <Outlet />
        <Footer />
    </>
  );
}
