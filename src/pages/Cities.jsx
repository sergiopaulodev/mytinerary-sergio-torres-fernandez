/* eslint-disable react/no-unescaped-entities */
import { useEffect, useRef, useState } from "react";
import CardCity from "../components/Body/Carousel/Card/CardCity";
import axios from "axios";
import apiUrl from '../../apiUrl'
import { useDispatch, useSelector } from "react-redux";
import cities_actions from "../store/actions/cities";

const { read_cities } = cities_actions

export default function Cities() {

    // const [data, setData] = useState([])
    const [reEffect, setReEffect] = useState(true)
    const text =  useRef()

    const cities_redux = useSelector(store => store.cities.cities)
    const dispatch = useDispatch()
    console.log(cities_redux);
   
    function handlerFilter() {
        setReEffect(!reEffect)
    }
   
    useEffect(

        () =>{
            axios.get(apiUrl + 'cities')
                // // .then(res => console.log(res.data.response))
                .then(res => {
                    // setData(res.data.response)
                    console.log(res.data.response);
                    dispatch( read_cities({
                        cities: res.data.response, 
                        text: text.current.value
                                .trim()
                                .normalize("NFD")
                                .replace(/[\u0300-\u036f]/g, "")
                                .toLowerCase()
                            })
                    )

                })
                .catch(err => {
                    console.log(err)
                    // setData([])
                })
            }, [dispatch, reEffect]
    )
    console.log(cities_redux);


    
return (   
    
    <div className="bg-gradient-to-t from-indigo-200 flex flex-col">


        <label htmlFor="" className="flex justify-center items-center mt-20 mb-10">
           <div className="flex justify-start w-[60%] items-center border-2 px-2 rounded-lg
           md:w-1/2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-gray-500">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
            <input ref={text} type="text" id="text" onKeyUp={handlerFilter} className="w-full h-[45px] p-4 border-none outline-none hover:outline-none" placeholder="Search your city" />
           </div>

        </label>

        <div className="flex flex-col items-center gap-10 justify-center mb-8
            md:flex-wrap
            md:flex-row">
        { cities_redux.length>0 ? 
            cities_redux.map(each => <>
            <CardCity 
                src={each.photo} 
                city={each.city} 
                country={each.country}
                id={each._id}
            />
            
            </>)
            :
            <div className="flex flex-col min-h-screen">
                <p className="text-xl font-semibold">Not found</p>
                <p className="text-xl font-semibold">Has not match, please try again</p>
            </div>
            }
        
            
        </div>
    </div>
  )

}
