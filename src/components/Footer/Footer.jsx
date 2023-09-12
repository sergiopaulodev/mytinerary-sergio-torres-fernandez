import { useSelector } from "react-redux";
import FooterCities from "./FooterCities";
import FooterHome from "./FooterHome";
import FooterLogin from "./FooterLogin";


export default function Footer() {

    const mail_logged = useSelector(store => store.users.user?.mail)

  return (
    <>
        <footer className="flex w-full min-h-[5vh] px-4 bg-gray-200 gap-8 justify-between mt-0
        lg:min-h-[10vh]">
            <nav className="hidden w-1/3 justify-between items-center
                sm:flex">
                    <FooterHome />
                    <FooterCities />
                    {mail_logged ? 
                    <FooterLogin style={'hidden'} />:
                    <FooterLogin style={"text-xl font-semibold text-[#1C1C1C] rounded-lg px-4 py-2 hover:text-white  hover:bg-[#1C1C1C] hover:transition hover:delay-100 hover:duration-100 hover:ease-in-out"} />
                    }

                    {/* <div to="/login" className="text-2xl font-bold">
                        Login
                    </div>
                    <div className="text-2xl font-bold">
                        Us
                    </div> */}
            </nav>
            
            <div className="w-full flex justify-center items-center
                sm:w-1/3">
                <span className="text-xl font-thin">Sergio Paulo ©</span>
            </div>
        </footer>
    </>
  );
}
