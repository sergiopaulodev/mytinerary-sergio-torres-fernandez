import { useState } from 'react';
import { Link as Anchor } from 'react-router-dom'
import LinkLogin from './LinkLogin';
import LogOutBtn from './LogOutBtn';

// eslint-disable-next-line react/prop-types
export default function UserLogged({ name, photo, onClick}) {

    const [show, setShow] = useState(false)

    function handlerShowHide() {
        setShow(!show)
    }
    return (
        <>
            <div className="w-full flex flex-col rounded-lg items-center p-2">
                
                <img src={photo} alt={name} className="h-[40px] w-[40px] object-cover rounded-full
                    hover:transition 
                    hover:ease-in-out 
                    hover:opacity-70" 
                    onClick={handlerShowHide} />
                {!show ?
                     <span className='w-[40px]'></span>
                     :
                    <>
                    <ul className='hidden flex-col gap-4 items-center
                        md:flex
                        '>
                       <li>
                            <Anchor to='/' className="hidden text-xl font-bold text-[#1C1C1C] px-4 py-2
                                md:flex
                                hover:text-gray-600
                                hover:transition
                                hover:delay-100
                                hover:duration-100
                                hover:ease-in-out
                                ">{name}
                            </Anchor>
                        </li>

                        <li>
                            <LogOutBtn onClick={onClick} /> 
                        </li>

                    </ul>
                    
                    </>}
                <LinkLogin style={'hidden'} />
            </div>

        </>
    );
}
{/* <button>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                            {/* ⬇️ 
                        </svg >
                    </button > */}