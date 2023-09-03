import { useEffect } from "react";

import { useParams } from "react-router-dom";
import CityDetails from "../components/CityDetails";
import Header from "../components/Header/Header";
import Itineraries from "../components/Itineraries";
import { useDispatch, useSelector } from "react-redux";
import cities_actions from "../store/actions/cities";

export default function CityDetailsPage() {
    
    const { id } = useParams()
    const cityDetails_redux = useSelector(store => store.cities.city)
    const dispatch = useDispatch()
    const { read_cityDetails } = cities_actions
    
    useEffect(
        () => {
                dispatch( read_cityDetails( {id: id}) )
            },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        []
    )        


        return (
            <>
                <div className="min-h-screen w-[100%]">
                    <Header/>
                    <CityDetails city={cityDetails_redux.city} country={cityDetails_redux.country} smalldescription={cityDetails_redux.smalldescription} photo={cityDetails_redux.photo}/>
                    <Itineraries/>
                </div>
            </>
        );
}
