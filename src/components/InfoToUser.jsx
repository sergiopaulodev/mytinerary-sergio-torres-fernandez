// eslint-disable-next-line react/prop-types
export default function InfoToUser({ userName, tags, duration, price }) {
  return (
    <>
      <div className="flex justify-between w-[40vw] mb-4">
            <div className="flex flex-col items-center">
                <p className="text-center text-[#1C1C1C]">User</p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 justify-center">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="text-center text-slate-400">{userName}</p> 
            </div>
            <div className="flex flex-col">
                <p className="text-center text-[#1C1C1C]">Hashtags</p>
                <p className="text-slate-400">{tags}</p> 
            </div>
            <div className="flex flex-col">
                <p className="text-center text-[#1C1C1C]">Duration</p>
                <p className="text-slate-400">{duration} min</p> 
            </div>
            <div className="flex flex-col">
                <p className="text-center text-[#1C1C1C]">Price</p>
                

            {
                price < 100 ? 
                <p className="">💵</p> :
                (price >= 100 && price < 200) ?
                <p className="">💵💵</p> :
                <p className="">💵💵💵</p>
            }                                
            
            </div>
        </div>
    </>
  );
}
