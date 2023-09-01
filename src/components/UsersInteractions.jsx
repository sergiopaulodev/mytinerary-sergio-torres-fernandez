import { useState } from "react";
import Activities from "./Activities";
import Like from "./Like";
import InfoToUser from "./InfoToUser";

// eslint-disable-next-line react/prop-types
export default function UsersInteractions( {photo ,userName, tags, duration, price} ) {
    // {photo ,userName, tags, duration, price}
    const [show, setShow] = useState(false)
    
    function handlerShowHide(){
        setShow(!show)
    }


    return (
    <>
        { show ?
    //DropDown hidden
        <div className="flex justify-between w-[40vw] mb-4">
            <Like />
            <button onClick={handlerShowHide}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
</button>
        </div> :
    // DropDown shown
        <>
        <div className="flex justify-between w-[40vw] mb-4">
            <Like />
            <button onClick={handlerShowHide}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
            </svg>

            </button>
        </div>
    {/* user information */}

        <InfoToUser photo={photo} userName={userName} tags={tags} duration={duration} price={price}  />
        {/* photo={photo} userName={userName} tags={tags} duration={duration} price={price} */}
        
        <Activities />
        </>

    }      
    </>
  );
}
