import { useEffect, useState } from "react";
import axios from "axios";
import apiUrl from "../../apiUrl";
import { useParams } from "react-router-dom";
import CityDetails from "../components/CityDetails";
import Header from "../components/Header/Header";
import Itineraries from "../components/Itineraries";

export default function CItyDetailsV() {
    const { id } = useParams()

    const [data, setData] = useState([])


    useEffect(
    () => {
        axios(apiUrl + 'cities/citydetails/' + id)
            // .then(res => console.log(res.data.response))
            .then(res => setData(res.data.response))
            .catch(err => console.log(err))
    },[id],
    // console.log(id)
)
  return (
    <>
        <div className="flex flex-col min-h-screen bg-center bg-cover justify-between"  style={{backgroundImage: `url(${data.photo})`}}>
            {/* HEADER */}
            {/* <div className="flex justify-between mx-10 mb-5
                md:items-center 
                lg:mx-10">

                <Logo name={"My Tinerary"} />

                <HamMenu />
                <NavBar />
            </div> */}
            <Header/>
            <CityDetails city={data.city} country={data.country} smalldescription={data.smalldescription}/>
            <Itineraries/>
        </div>

    </>
  );
}
