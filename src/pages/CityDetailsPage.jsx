import { useEffect } from "react";
import axios from "axios";
import apiUrl from "../../apiUrl";
import { useParams } from "react-router-dom";
import CityDetails from "../components/CityDetails";
import Header from "../components/Header/Header";
import Itineraries from "../components/Itineraries";
import { useDispatch, useSelector } from "react-redux";
import cityDetails_action from "../store/actions/cityDetails";

export default function CityDetailsPage() {
    // const [data, setData] = useState([])
    
    const { id } = useParams()
    const cityDetails_redux = useSelector(store => store.cityDetails_reducer.cityDetails)
    const dispatch = useDispatch()

    const { read_cityDetails } = cityDetails_action
    
    useEffect(
        () => {
            axios(apiUrl + 'cities/citydetails/' + id)
            // .then(res => console.log(res.data.response))
            .then(res => {
                // setData(res.data.response)
                console.log(res.data.response);
                dispatch( read_cityDetails({id: id}) )
                
            })
            .catch(err => console.log(err))
        },[id,dispatch,read_cityDetails])
        // console.log(id)
        console.log(cityDetails_redux);
        

        return (
            <>
        <div className="flex flex-col min-h-screen bg-center bg-cover justify-between"  style={{backgroundImage: `url(${cityDetails_redux.photo})`}}>
            {/* HEADER */}
            {/* <div className="flex justify-between mx-10 mb-5
                md:items-center 
                lg:mx-10">
                
                <Logo name={"My Tinerary"} />
                
                <HamMenu />
                <NavBar />
            </div> */}
            <Header/>
            <CityDetails city={cityDetails_redux.city} country={cityDetails_redux.country} smalldescription={cityDetails_redux.smalldescription}/>
            <Itineraries/>
        </div>

    </>
  );
}
