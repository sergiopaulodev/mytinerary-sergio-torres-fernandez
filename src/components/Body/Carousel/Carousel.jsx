/* eslint-disable react/prop-types */
import Arrow from "./Arrow";
import Card from "./Card/Card";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
export default function Carousel({data}) {

const [counterFrom, setCounterFrom] = useState(0)
const [counterTo, setCounterTo] = useState(4)

function next() {
    //cuando se pasa de data.length entonces ahí reinicia los contadores

    if (counterTo >= data.length){
    setCounterFrom( 0 );
    setCounterTo( 4 )

    }else{
    setCounterFrom( counterFrom + 4 );
    setCounterTo( counterTo + 4 )
    }
    console.log(counterFrom)
    console.log(counterTo);
}

function previous() {
    if (counterFrom <= 0){
        setCounterFrom(data.length - 4 );
        setCounterTo( data.length )
    }else{
        setCounterFrom(counterFrom - 4)
        setCounterTo(counterTo - 4)
    }
}



  return (
    <>
    {/* { () ? (que pasa si es true) : (que pasa si es false)} */}
    
    <div className="lg:w-2/3 flex items-center flex-col gap-10">
        <h1 className="text-3xl font-extralight uppercase text-[#1C1C1C]">Popular Mytineraries</h1>
        <div className="flex flex-wrap md:flex-nowrap items-center justify-center lg:justify-between gap-2 drop-shadow-xl">
            <Arrow direction="M15.75 19.5L8.25 12l7.5-7.5" 
            className="inline-flex" onClick={previous} />
            
                {data.slice(counterFrom,counterTo).map(
                item => <Card
                            key={item.city} 
                            src={item.photo} 
                            city={item.city}
                        />
                )}
            
            <Arrow direction="M8.25 4.5l7.5 7.5-7.5 7.5"
                className="inline-flex" onClick={next} />
        </div>
    </div>
      
    </>
  );
}
