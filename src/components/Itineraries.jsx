import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import cities_actions from "../store/actions/cities";
import { useEffect } from "react";
import axios from "axios";
import apiUrl from "../../apiUrl";

export default function Itineraries() {

    const { id } = useParams()
    const itineraries_redux = useSelector(store => store.cities.itineraries)
    const dispatch = useDispatch()

    const { read_itineraries } = cities_actions

    useEffect(
        () =>{
            axios(apiUrl + 'itineraries?city=' + id)
            .then(res => {
                console.log(id);
                console.log(res.data.response);
                dispatch( read_itineraries( {itineraries:res.data.response} ))
            })

        },[dispatch, id, read_itineraries]
    )

    console.log(itineraries_redux);

  return (
    <>
    {itineraries_redux.map(
        each => { 
            console.log(each);
            if (id == each._id){
            console.log(each)
        }else{
            console.log('no ando')
        }
        }
        
    ) 
    }
        <h1 className="text-2xl font-bold bg-slate-50 opacity-50 text-center">Itineraries en construccion</h1>

    </>
  );
}
