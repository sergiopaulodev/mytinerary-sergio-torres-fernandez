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
                <div className="flex flex-col bg-no-repeat bg-center justify-between min-h-screen"  style={{backgroundImage: `url(${cityDetails_redux.photo})`}}>
                    <Header/>
                    <CityDetails city={cityDetails_redux.city} country={cityDetails_redux.country} smalldescription={cityDetails_redux.smalldescription}/>
                    <div className="flex justify-center">
                        <h2 className="text-4xl font-semibold uppercase bg-white rounded-t-lg p-2" id="itineraries">Itineraries</h2>
                    </div>
                    
                    <Itineraries/>
                </div>
            </>
        );
}
