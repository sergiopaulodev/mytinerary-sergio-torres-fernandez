import LinkHome from "../NavBar/LinkHome";
import LinkCities from "../NavBar/LinkCities";
import LinkLogin from "../NavBar/LinkLogin";
import logo from '../../../../public/mytinerary-logo.png'
import UserLogged from '../NavBar/UserLogged';
import user_actions from "../../../store/actions/users";
const { signout } = user_actions


import { useState } from "react";
import Logo from "../Logo";
import { useDispatch, useSelector } from "react-redux";
import LinkLogOut from "../NavBar/LinkLogOut";

export default function HamMenu( ) {
  

    const [isChecked, setChecked] = useState(false)

    function hMenu(){
        setChecked(!isChecked)
    }

    function signOut() {
        dispatch(signout())
    }

    const dispatch = useDispatch()
    const user = useSelector(store=>store.users.user)
    const mail_signin =useSelector(store=>store.users.user?.mail)



    return (
    <>
        
        {isChecked ?
        <Logo src={logo} style={"hidden w-full md:flex md:justify-star"}/>
        
        :
        <Logo src={logo} style={"flex w-full"}/>
        }
        

        <div className="flex flex-col items-end p-0 
        md:hidden">

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10 flex" 
              onClick={hMenu}
                  ><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
  
              {isChecked &&

                <div className="flex flex-col justify-between gap-6 mt-8 items-end">
                    {mail_signin?
                    <>
                        <UserLogged name={user.name} photo={user.photo} />
                        <LinkHome />
                        <LinkCities/>
                        <LinkLogOut onClick={signOut} />
                    </>
                    
                    :
                    <>
                        <LinkHome />
                        <LinkCities/>
                        <LinkLogin style={'bg-[#4F46E5] rounded-lg py-2 px-4 hover:transition hover:ease-in-out hover:bg-[#756ff1]'}/>
                    </>
                    }
                    
                </div>

              }
                  
          </div>
    </>
  );
}
