import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import itinerary_action from "../store/actions/itineraries";
import NoneIntineraries from "./NoneIntineraries";
import UsersInteractions from "./UsersInteractions";
const { read_itineraries_from_city } = itinerary_action

// eslint-disable-next-line react/prop-types
export default function Itineraries( {show}) {

    const { id } = useParams()
    const itineraries_redux = useSelector(store => store.itineraries.itineraries)
    const dispatch = useDispatch()

    
    console.log(itineraries_redux.map(each=>console.log(each.comments)))

    useEffect(
        () =>{
            dispatch( read_itineraries_from_city ( {city_id: id } ))

        // eslint-disable-next-line react-hooks/exhaustive-deps
        },[show]
    )



    
    
    console.log(itineraries_redux);
    return (
        <div className="flex flex-col gap-8 bg-gray-100">
            
        {itineraries_redux.length > 0 ? 
            itineraries_redux.map(each => 
                <span key={each._id} className="flex flex-col justify-center items-center py-16">
                    <div className="flex flex-col bg-gray-100 shadow-md rounded-lg gap-4">
                        <div className="flex justify-center text-2xl text-[#1C1C1C]">{each.name}</div>
                        <div className="flex flex-col items-center justify-between gap-8 w-[50vw] h-[80%]">
                            <div className="flex justify-center">
                                <img src={each.photo} alt={each.name} className="w-[40vw] objet-cover rounded-md shadow-sm" />
                            </div>
                            <UsersInteractions photo={each.city_id.admin_id.photo} userName={each.city_id.admin_id.name} tags={each.tags} duration={each.duration} price={each.price} />
                            <div className="flex flex-col items-center">
                                <h2 className="text-center text-lg font-thin">⛔ Comments Under Construction ⛔</h2>
                                <p className="font-thin">{each.comments}</p>
                            </div>                            
                        </div>
                            
                    </div>
                </span>
            ) :
            <NoneIntineraries/>
        }
    </div>
  );
}

    // bg-gradient-to-tr from-gray-200 