import HamMenu from "./HamMenu/HamMenu";
import Logo from "./Logo";
import NavBar from "./NavBar/NavBar";

export default function Header() {
  return (
    <>
      <div className="flex justify-between md:items-center lg:mx-20 mx-10 mt-4 md:mb-72 mb-16">
        <Logo src={ "https://st2.depositphotos.com/1768926/10934/v/450/depositphotos_109347560-stock-illustration-water-wave-logo-template.jpg" } name={"My Tinerary"} />
        <HamMenu />
        <NavBar />
      </div>
    </>
  );
}
