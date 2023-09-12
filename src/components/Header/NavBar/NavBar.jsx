import LinkCities from "./LinkCities";
import LinkHome from "./LinkHome";
import LinkLogin from "./LinkLogin";
import user_actions from "../../../store/actions/users";
import { useDispatch, useSelector } from "react-redux";
const { signout } = user_actions
// import {Link as Anchor} from 'react-router-dom'
// import { useState } from "react";
import UserLogged from "./UserLogged";


export default function NavBar() {

    const dispatch = useDispatch()
    const mail = useSelector(store =>store.users.user?.mail)
    const user = useSelector(store=>store.users.user)

   
function signOut() {
    dispatch(signout())
}
// () => dispatch(signout())
  
    return (
        <>
            <nav className="justify-between hidden p-4
            md:flex 
            md:gap-6 
            md:items-center">
                <LinkHome />
                <LinkCities />
            
                {mail ?
                <>
                    <UserLogged style={''} name={user.name} photo={user.photo} onClick={signOut} />               
                </>
                : 
                    <LinkLogin style={'bg-[#4F46E5] rounded-lg py-2 px-4 hover:transition hover:ease-in-out hover:bg-[#756ff1]'} />
                }

            </nav>
        </>
    );
}
// () => dispatch(signout())