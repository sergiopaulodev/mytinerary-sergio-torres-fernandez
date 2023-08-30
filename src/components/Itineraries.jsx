import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import itinerary_action from "../store/actions/itineraries";
import NoneIntineraries from "./NoneIntineraries";
const { read_itineraries_from_city } = itinerary_action

export default function Itineraries() {

    const { id } = useParams()
    const itineraries_redux = useSelector(store => store.itineraries.itineraries)
    const dispatch = useDispatch()

    const [show, setShow] = useState(false)
    
    

    useEffect(
        () =>{
            dispatch( read_itineraries_from_city ( {city_id: id} ))

        // eslint-disable-next-line react-hooks/exhaustive-deps
        },[show]
    )

    function handlerShowHide(){
        setShow(!show)
    }

    
    
        console.log(itineraries_redux);
    return (
        <>
        {itineraries_redux.length > 0 ? 
            itineraries_redux.map(each => 
                <span key={each._id} className="flex flex-col bg-gradient-to-b from-slate-50 justify-center items-center min-h-screen">
                    <div className="flex flex-col bg-white gap-4">
                        <div className="flex justify-center text-[#1C1C1C]">{each.name}</div>
                        <div className="flex flex-col items-center justify-between gap-4 w-[50vw] h-[80%]">
                            <img src={each.photo} alt={each.name} className="max-w-[40vw] h-auto rounded-md shadow-sm" />
                        { show ?
                        //DropDown hide
                             <div className="flex justify-between w-[40vw] mb-4">
                                <button>❤️</button>
                                <button onClick={handlerShowHide}>⬇️</button>
                            </div> :
                            // DropDown show
                            <>
                                <div className="flex justify-between w-[40vw] mb-4">
                                <button>❤️</button>
                                <button onClick={handlerShowHide}>⬆️</button>
                            </div>
                            <div className="flex justify-between w-[40vw] mb-4">
                                <div className="flex flex-col items-center">
                                    <p className="text-center text-[#1C1C1C]">User</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 justify-center">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    <p className="text-center text-slate-400">user name</p> 
                                </div>
                                <div className="flex flex-col">
                                    <p className="text-center text-[#1C1C1C]">Hashtags</p>
                                    <p className="text-slate-400">{each.tags}</p> 
                                </div>
                                <div className="flex flex-col">
                                    <p className="text-center text-[#1C1C1C]">Duration</p>
                                    <p className="text-slate-400">{each.duration} min</p> 
                                </div>
                                <div className="flex flex-col">
                                    <p className="text-center text-[#1C1C1C]">Price</p>
                                    <p className="text-slate-400">{each.price}💵💵💵</p> 
                                </div>
                            </div>
                            </>

                        }
                            
                        </div>
                            
                    </div>
                </span>
            ) :
            <NoneIntineraries/>
        }
    </>
  );
}
