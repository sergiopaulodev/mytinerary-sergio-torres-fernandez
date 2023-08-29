import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import itinerary_action from "../store/actions/itineraries";
const { read_itineraries_from_city } = itinerary_action

export default function Itineraries() {

    const { id } = useParams()
    const itineraries_redux = useSelector(store => store.itineraries.itineraries)
    const dispatch = useDispatch()
    
    

    useEffect(
        () =>{
            dispatch( read_itineraries_from_city ( {city_id: id} ))

        // eslint-disable-next-line react-hooks/exhaustive-deps
        },[]
    )


  return (
    <>
        {itineraries_redux
            .map(each => 
                <span key={each._id}>
                    <h1 className="text-2xl font-bold bg-slate-50 opacity-70 text-center">{each.name } en construccion</h1>
                    <h1 className="text-xl font-semibold bg-slate-50 opacity-70 text-center">{each.price }billetines </h1>
                    <h1 className="text-xl font-semibold bg-slate-50 opacity-70 text-center">{each.duration } min </h1>
                    <h1 className="text-xl font-semibold bg-slate-50 opacity-70 text-center">{each.tags } </h1>
                </span>
            )
        }
    </>
  );
}
