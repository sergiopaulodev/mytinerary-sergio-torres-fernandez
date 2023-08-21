import FooterCities from "./FooterCities";
import FooterHome from "./FooterHome";
import FooterLogin from "./FooterLogin";


export default function Footer() {
  return (
    <>
        <footer className="flex w-full min-h-[5vh] mx-auto bg-gray-200 gap-8 justify-between mt-0
        lg:min-h-[10vh]">
            <nav className="flex w-1/3 justify-evenly items-center gap-4">
                    <FooterHome />
                    <FooterCities />
                    <FooterLogin />

                    {/* <div to="/login" className="text-2xl font-bold">
                        Login
                    </div>
                    <div className="text-2xl font-bold">
                        Us
                    </div> */}
            </nav>
            
            <div className="w-1/3 flex justify-center items-center">
                <span className="text-xl font-thin">Sergio Paulo ©</span>
            </div>
        </footer>
    </>
  );
}
