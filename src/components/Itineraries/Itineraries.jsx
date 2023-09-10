import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import itinerary_action from "../../store/actions/itineraries";
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
        <div className="flex flex-col gap-8 bg-gray-300 w-[100%]">

            
        {itineraries_redux.length > 0 ? 
            itineraries_redux.map(each => 
                <span key={each._id} className="flex flex-col justify-center items-center py-16">
                    <div className="flex flex-col bg-gray-100 shadow-md rounded-lg gap-4 w-full
                    md:w-[90%]
                    lg:w-[55%]">
                        <p className="flex justify-center text-2xl font-thin text-[#1C1C1C] pt-4 pb-4">{each.name}
                        </p>
                        <div className="flex flex-col items-center justify-between gap-8 w-full
                            md:w-[90vw]
                            md:h-[80%]
                            lg:w-[100%]

                        ">
                        <div className="flex justify-center w-full">
                            <img src={each.photo} alt={each.name} className="objet-cover w-[90vw] transition-transform transform duration-300 ease-in-out rounded-md shadow-lg
                            md:w-[70vw]
                            lg:w-[40vw]
                            hover:scale-110" />
                        </div>
                        <UsersInteractions comments={each.comments} photo={each.city_id.admin_id.photo} userName={each.city_id.admin_id.name} tags={each.tags} duration={each.duration} price={each.price} />
                        {/* Comments */}
                                                        

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