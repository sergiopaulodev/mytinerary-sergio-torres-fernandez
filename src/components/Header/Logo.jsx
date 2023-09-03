import { Link as Anchor } from 'react-router-dom';


// eslint-disable-next-line react/prop-types
export default function Logo({ src }) {
  

    return (
    <>
        <Anchor to={'/'} className="flex w-3/4">
    
                <img src={src} alt="" className="p-2 transition-transform transform duration-300 ease-in-out rounded-3xl w-[12rem]
                hover:scale-110
                hover:" />
                
        
        </Anchor>    
        {/* <div className="flex items-end bg-cover h-[9.8rem]" style={{ backgroundImage: `url(${src})`}}>
            <h2 className="flex font-bold text-[#1C1C1C]
            xl:text-4xl 
            text-3xl" >{name}
            </h2>
        </div> */}
    </>
    );
}
