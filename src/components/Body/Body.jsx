import { useSelector, useDispatch } from "react-redux";
import Carousel from "./Carousel/Carousel";
import TextContent from "./TextContent/TextContent";
import { useEffect } from "react";
import apiUrl from "../../../apiUrl";
import axios from "axios";
import city_actions from "../../store/actions/cities";

const { read_carousel } = city_actions

export default function Body() {
    
    // const [data, setData] = useState([])
    // // const store = useSelector(store => store.cities)
    // // console.log(store);
    
    // // const city_reducer = useSelector(store => store)
    // // console.log(city_reducer);
    
    // // const carousel = useSelector(store => store.cities)
    // // console.log(store);
    
    // // const dispatch = useDispatch()
    const carousel_redux = useSelector(store => store.cities.carousel)
    const dispatch = useDispatch()

    useEffect(
        
        () => {
            axios(apiUrl + 'cities/carousel')
                // // .then(res => console.log(res.data.data))
                .then(res => {
                    // setData(res.data.data)
                dispatch( read_carousel({carousel: res.data.data}) )
                })
                .catch(err => console.log(err))
            // if (carousel.length === 0){
            // dispatch(read_carousel)
            // }        
    },[dispatch]
    )
    console.log(carousel_redux);






  return (
    <>
      <div className="justify-between mx-10 mb-6
      md:flex-nowrap md:mb-0
      lg:flex
      lg:justify-center
      ">
        <TextContent/>
        
        <Carousel data={carousel_redux}/>
      </div>
    </>
  );
}
