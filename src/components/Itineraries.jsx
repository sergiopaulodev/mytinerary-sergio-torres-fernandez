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

    
    

    useEffect(
        () =>{
            dispatch( read_itineraries_from_city ( {city_id: id} ))

        // eslint-disable-next-line react-hooks/exhaustive-deps
        },[show]
    )


    
    
        console.log(itineraries_redux);
    return (
        <>
        <div className="flex justify-center">
            <h2 className="text-4xl font-semibold uppercase bg-white rounded-t-lg p-2" id="itineraries">Itineraries</h2>
        </div>  
        {itineraries_redux.length > 0 ? 
            itineraries_redux.map(each => 
                <span key={each._id} className="flex flex-col justify-center items-center mb-8">
                    <div className="flex flex-col bg-gray-100 shadow-md rounded-lg gap-4">
                        <div className="flex justify-center text-[#1C1C1C]">{each.name}</div>
                        <div className="flex flex-col items-center justify-between gap-8 w-[50vw] h-[80%]">
                            <img src={each.photo} alt={each.name} className="max-w-[40vw] h-auto rounded-md shadow-sm" />
                            <UsersInteractions userName={'user_name'} tags={each.tags} duration={each.duration} price={each.price}  />
                            
                        </div>
                            
                    </div>
                </span>
            ) :
            <NoneIntineraries/>
        }
    </>
  );
}
