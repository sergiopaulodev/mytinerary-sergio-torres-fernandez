import Carousel from "./Carousel/Carousel";
import TextContent from "./TextContent/TextContent";
import { useEffect, useState } from "react";
import axios from "axios";
import apiUrl from "../../../apiUrl";
import { useDispatch, useSelector } from "react-redux";
import store from "../../store/store";
import city_actions from "../../store/actions/cities";

const { read_carousel } = city_actions

export default function Body() {

    // const [data, setData] = useState([])
    // const store = useSelector(store => store)
    // console.log(store);

    // const city_reducer = useSelector(store => store.cities)
    // console.log(city_reducer);

    const carousel = useSelector(store => store.cities.carousel)
    console.log(carousel);

    const dispatch = useDispatch()

    useEffect(
        
        () => {
            // axios(apiUrl + 'cities/carousel')
            //     // // .then(res => console.log(res.data.data))
            //     .then(res => setData(res.data.data))
            //     .catch(err => console.log(err))
            if (carousel.length === 0){
            dispatch(read_carousel)
            }        
    },[]
    )

  return (
    <>
      <div className="justify-between mx-10 mb-6
      md:flex-nowrap md:mb-0
      lg:flex
      lg:justify-center
      ">
        <TextContent/>
        
        <Carousel data={carousel}  />
      </div>
    </>
  );
}
