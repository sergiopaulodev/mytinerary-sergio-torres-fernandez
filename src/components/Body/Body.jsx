import Carousel from "./Carousel/Carousel";
import TextContent from "./TextContent/TextContent";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Body() {

    const [data, setData] = useState([])
    useEffect(
        
        () => {
            axios('/data.json')
                .then(res => setData(res.data))
                .catch(err => console.log(err))
        },
        []
    )

  return (
    <>
      <div className="justify-between mx-10 mb-6
      md:flex-nowrap md:mb-0
      lg:flex
      lg:justify-center
      ">
        <TextContent/>
        
        <Carousel data={data}  />
      </div>
    </>
  );
}
