import { useState } from "react";

export default function SearchBar({text}) {

    const [reEffect, setReEffect] = useState(true)

    function handlerFilter() {
        setReEffect(!reEffect)
    }
  return (
    <>
        <label htmlFor="" className="flex justify-center items-center mt-20 mb-10">
           <div className="flex justify-start w-[60%] items-center border-2 px-2 rounded-lg
           md:w-1/2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-gray-500">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
            <input ref={text} type="text" id="text" onKeyUp={handlerFilter} className="w-full h-[45px] p-4 border-none outline-none hover:outline-none" placeholder="Search your city" />
           </div>

        </label>
    </>
  );
}
