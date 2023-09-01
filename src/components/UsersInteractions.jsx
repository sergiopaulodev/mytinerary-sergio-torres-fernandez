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
            <button onClick={handlerShowHide}>⬇️</button>
        </div> :
    // DropDown shown
        <>
        <div className="flex justify-between w-[40vw] mb-4">
            <Like />
            <button onClick={handlerShowHide}>⬆️</button>
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
