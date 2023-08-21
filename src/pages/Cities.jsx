import { useEffect, useState } from "react";
import CardCities from "../components/Body/Carousel/Card/CardCities";
import axios from "axios";
import apiUrl from '../../apiUrl'

export default function Cities() {

    const [data, setData] = useState([])
   
    useEffect(

        () =>{
            axios(apiUrl + 'cities')
                // .then(res => console.log(res.data.response))
                .then(res => setData(res.data.response))
                .catch(err => console.log(err))
            },
        []
    )

    
return (

    // <div className="flex flex-col items-center w-full min-h-screen">
    //     <h1 className="flex justify-center items-start text-6xl text-[#1C1C1C] uppercase" >404 Error</h1>
    //     <p className="flex justify-center items-start text-3xl text-[#1C1C1C] uppercase">Page not found</p>
    // </div>
    
    
    <>


        <label htmlFor="" className="flex justify-center items-center mt-20">
           <div className="flex justify-start w-1/3 items-center border-2 px-2 rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-gray-500">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
                <input type="text" className="w-1/3 h-[45px] p-4 border-0" placeholder="Search your city" />
           </div>

        </label>

        <div className="flex flex-wrap">
        {data.map(each => <CardCities
                key={each._id}
                src={each.photo}
                city={each.city}
            /> )}    
        
            
        </div>
    </>
  )

}
