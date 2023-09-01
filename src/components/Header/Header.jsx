import HamMenu from "./HamMenu/HamMenu";
import NavBar from "./NavBar/NavBar";

export default function Header() {
  return (
    <>
    
      
        <div className="flex justify-end bg-gradient-to-l from-slate-400 p-2
        md:items-center 
        ">

            {/* <Logo src={logo} /> */}

            <HamMenu />
            <NavBar />
        </div>
    
    </>
  );
}
