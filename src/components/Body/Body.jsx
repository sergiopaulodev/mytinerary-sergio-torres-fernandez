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
      <div className="lg:flex lg:mx-20 mx-10 md:flex-nowrap justify-between mb-16">
        <TextContent/>
        
        <Carousel data={data}  />
      </div>
    </>
  );
}
