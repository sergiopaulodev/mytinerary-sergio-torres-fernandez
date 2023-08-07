import Arrow from "./Arrow"
import Card from "./Card/Card";

export default function Carousel({data}) {

  return (
    <>
        <div className="flex w-1/2 items-center justify-center">
            <Arrow direction="M15.75 19.5L8.25 12l7.5-7.5" 
            className="inline-flex" />
            {data.slice(0,2).map(
                item => <Card
                            key={item.city} 
                            src={item.photo} 
                            city={item.city}
                        />
                )}
            <Arrow direction="M8.25 4.5l7.5 7.5-7.5 7.5"
                className="inline-flex"/>
        </div>
      
    </>
  );
}
