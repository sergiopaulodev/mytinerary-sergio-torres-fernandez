// eslint-disable-next-line react/prop-types
export default function InfoToUser({ photo ,userName, tags, duration, price }) {
  return (
    <>
      <div className="flex justify-between w-[40vw] mb-4">
            <div className="flex flex-col items-center gap-2">
                <p className="text-center text-[#1C1C1C]">User</p>
                <img src={photo} alt="" className="w-[80px] h-[80px] object-cover rounded-full border-2 border-[#4F46E5]" />
                <p className="text-center text-slate-400">{userName}</p> 
            </div>
            <div className="flex flex-col justify-between items-center">
                <p className="text-center text-[#1C1C1C]">Hashtags</p>
                <p className="text-slate-400">{tags}</p> 
            </div>
            <div className="flex flex-col justify-between items-center">
                <p className="text-center text-[#1C1C1C]">Duration</p>
                <p className="text-slate-400">{duration} min</p> 
            </div>
            <div className="flex flex-col justify-between items-center">
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
