import { useSelector, useDispatch } from "react-redux";
import Carousel from "./Carousel/Carousel";
import TextContent from "./TextContent/TextContent";
import { useEffect } from "react";
import cities_actions from "../../store/actions/cities";

const { read_carousel } = cities_actions

export default function Body() {
    
    const carousel_redux = useSelector(store => store.cities.carousel)
    const dispatch = useDispatch()

    useEffect(
        
        () => {
            dispatch( read_carousel({carousel: carousel_redux}) )
            // eslint-disable-next-line react-hooks/exhaustive-deps
            }, []
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
