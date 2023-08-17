import HamMenu from "./HamMenu/HamMenu";
import Logo from "./Logo";
import NavBar from "./NavBar/NavBar";
import logo from "../../../public/img/mytinerary-logo.png"

export default function Header() {
  return (
    <>
      <div className="flex justify-between mx-10 mb-5
      md:items-center 
      lg:mx-10">

        <Logo src={logo} name={"My Tinerary"} />

        <HamMenu />
        <NavBar />
      </div>
    </>
  );
}
