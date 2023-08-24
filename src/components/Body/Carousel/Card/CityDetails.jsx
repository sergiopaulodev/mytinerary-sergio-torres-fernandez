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
    },[id],
    console.log(id)
)

  return (
    <>
    {/* {console.log(data)} */}
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-t from-indigo-300">
        <div className="flex items-center bg-slate-100 bg-gradient-to-b from-slate-400  w-[75vw] h-[60vh] rounded-3xl shadow-lg">
            <div className="flex flex-col items-center justify-center gap-8">
                <h2 className="text-2xl font-semibold bg-slate-100 rounded-lg p-2">{data.city}</h2>
                <h3 className="text-2xl font-semibold">{data.country}</h3>
                <img src={data.photo} alt={data.city} id={data._id} 
                    className="object-cover w-1/2 h-[9rem] rounded-xl shadow-xl" />
                <p className="text-lg italic text-center w-[70%]">{data.smalldescription}</p>
                <Anchor to="/cities" className="text-xl font-semibold uppercase bg-slate-100 shadow-xl rounded-lg p-2
                    hover:delay-150 
                    hover:duration-300 
                    hover:ease-in-out
                    hover:bg-[#4F46E5]
                    hover:text-white
                ">go back</Anchor>
            </div>
        </div>
      </div>
    </>
  );
}
