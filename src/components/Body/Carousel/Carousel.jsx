/* eslint-disable react/prop-types */
import Arrow from "./Arrow";
import Card from "./Card/Card";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
export default function Carousel( {data} ) {

const [counterFrom, setCounterFrom] = useState(0)
const [counterTo, setCounterTo] = useState(4)
const [counterFromMob, setCounterFromMob] = useState(0)
const [counterToMob, setCounterToMob] = useState(1)

function next() {
    //cuando se pasa de data.length entonces ahí reinicia los contadores

    if (counterTo >= data.length){
    setCounterFrom( 0 );
    setCounterTo( 4 )

    }else{
    setCounterFrom( counterFrom + 4 );
    setCounterTo( counterTo + 4 )
    }  
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

function nextMobile() {
    if (counterToMob >= data.length){
        setCounterFromMob(0);
        setCounterToMob(1)
    }else {
       setCounterFromMob(counterFromMob + 1) 
       setCounterToMob(counterToMob + 1) 
    }
}

function previousMobile() {
    if (counterFromMob <= 0){
        setCounterFromMob(data.length - 1)
        setCounterToMob(data.length)
    } else {
        setCounterFromMob(counterFromMob - 1)
        setCounterToMob(counterToMob - 1)
    }
}



  return (
    <>
    {/* { () ? (que pasa si es true) : (que pasa si es false)} */}
    
    <div className="hidden items-center flex-col gap-10 mx-2 
    md:mb-4
    md:flex 
    lg:w-2/3">
        <h1 className="text-3xl font-extralight uppercase text-[#1C1C1C]">Popular Mytineraries</h1>
        <div className="flex flex-wrap items-center justify-center drop-shadow-xl gap-2
        md:flex-nowrap  
        lg:justify-between">
            <Arrow direction="M15.75 19.5L8.25 12l7.5-7.5" 
            className="inline-flex" onClick={previous} />
            
                {data.slice(counterFrom,counterTo).map(
                item => <><Card
                            key={item._id} 
                            src={item.photo} 
                            city={item.city}
                            id={item._id}
                        />
                </>
                )}
            
            <Arrow direction="M8.25 4.5l7.5 7.5-7.5 7.5"
                className="inline-flex" onClick={next} />
        </div>
    </div>

    <div className="flex items-center flex-col gap-10 mb-4
    md:hidden 
    lg:w-2/3">
        <h1 className="text-3xl font-extralight uppercase text-[#1C1C1C]">Popular Mytineraries</h1>
        <div className="flex flex-nowrap w-full items-center justify-center gap-2 drop-shadow-xl
        lg:justify-between ">
            <Arrow direction="M15.75 19.5L8.25 12l7.5-7.5" 
            className="inline-flex" onClick={previousMobile} />
            
                {data.slice(counterFromMob,counterToMob).map(
                item => <Card
                            key={item.city} 
                            src={item.photo} 
                            city={item.city}
                        />
                )}
            
            <Arrow direction="M8.25 4.5l7.5 7.5-7.5 7.5"
                className="inline-flex" onClick={nextMobile} />
        </div>
    </div>
      
    </>
  );
}
