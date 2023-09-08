import LinkCities from "./LinkCities";
import LinkHome from "./LinkHome";
import LinkLogin from "./LinkLogin";
import user_actions from "../../../store/actions/users";
import { useDispatch, useSelector } from "react-redux";
const { signout } = user_actions
import {Link as Anchor, useParams} from 'react-router-dom'
import { useState } from "react";


export default function NavBar() {

    const dispatch = useDispatch()
    const mail = useSelector(store =>store.users.user?.mail)
    const user = useSelector(store=>store.users.user)

    let { id } = useParams()
    console.log(id);
    id = ''
    
console.log(user);

    const [show, setShow] = useState(false)
        
    function handlerShowHide(){
        setShow(!show)
    }
  
    return (
        <>
            <nav className="justify-between hidden p-4
            md:flex 
            md:gap-6 
            md:items-center">
                <LinkHome />
                <LinkCities />

                {/* <LinkLogOut onClick={ ()=> dispatch(signout()) } />  */}                
                {mail ?
                <>  
                    <div className="flex flex-col px-4 bg-[#4F46E5] rounded-lg py-2 gap-4 items-center">
                        <div className=''>
                            <img src={user.photo} alt={user.name} className="flex w-[2rem] object-cover rounded-full" />
                        </div>
                        {!show ?
                        <button onClick={handlerShowHide}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                            </svg>
                        </button>:
                        <>
                            <p className="text-xl font-semibold text-[#1C1C1C] rounded-lg px-4 py-2 
                                hover:text-white
                                hover:transition
                                hover:delay-100
                                hover:duration-100
                                hover:ease-in-out
                                ">{user.name}</p>
                            <div className="flex gap-4">
                                <button className="">
                                    <Anchor to='auth/logout' onClick={() => dispatch(signout())} className="flex justify-between items-center gap-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                                        </svg>
                                    </Anchor>
                                </button>
                                <button onClick={handlerShowHide}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                                    </svg>
                                </button>
                            </div>
                        </>}
                        <LinkLogin style={'hidden'} />
                    </div>
                </>
                : 
                <LinkLogin style={'bg-[#4F46E5] rounded-lg py-2 px-4 hover:transition hover:ease-in-out hover:bg-[#756ff1]'} />
            }

            </nav>
        </>
    );
}
