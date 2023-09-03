import HamMenu from "./HamMenu/HamMenu";
import NavBar from "./NavBar/NavBar";

export default function Header() {
  return (
    <>
    
      
        <div className="flex w-[100%] justify-end bg-gradient-to-l from-gray-400 p-2

        md:items-center 
        ">

            {/* <Logo src={logo} /> */}

            <HamMenu />
            <NavBar />
        </div>
    
    </>
  );
}
