import { useEffect, useState } from "react";
import axios from "axios";
import apiUrl from "../../../../../apiUrl";
import { useParams } from "react-router-dom";
import { Link as Anchor} from 'react-router-dom'

export default function CityDetails() {
    const { id } = useParams()

    const [data, setData] = useState([])


    useEffect(
    () => {
        axios(apiUrl + 'cities/citydetails/' + id)
            // .then(res => console.log(res.data.response))
            .then(res => setData(res.data.response))
            .catch(err => console.log(err))
    },[]
)

  return (
    <>
    {console.log(data)}
      <div className="flex justify-center min-h-screen mb-4">
        <div className="flex flex-col items-center grow justify-center gap-4">
            <h2 className="text-2xl font-semibold">{data.city}</h2>
            <h3 className="text-2xl font-semibold">{data.country}</h3>
            <img src={data.photo} alt={data.city} className="w-2/5 rounded-xl shadow-lg" />
            <p className="text-lg uppercase">under construction</p>
            <Anchor to="/cities" className="text-2xl font-semibold uppercase bg-indigo-100 rounded-lg p-2
                hover:delay-150 
                hover:duration-300 
                hover:ease-in-out
                hover:bg-[#4F46E5]
                hover:text-white
            ">go back</Anchor>
        </div>
      </div>
    </>
  );
}
