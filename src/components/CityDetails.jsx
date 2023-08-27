import { Link as Anchor} from 'react-router-dom'

// eslint-disable-next-line react/prop-types
export default function CityDetails( {city, smalldescription}) {
  
  return (
        <div className="flex self-center w-[60vw] h-[50vh] rounded-3xl bg-slate-50 opacity-70 shadow-lg mb-[7rem]">
            <div className="flex flex-col items-center justify-center gap-8">
                <h2 className="text-2xl font-semibold rounded-lg p-2">{city}</h2>
                {/* <img src={data.photo} alt={data.city} id={data._id} className="object-cover w-1/2 h-[9rem] rounded-xl shadow-xl" /> */}
                <p className="text-lg italic font-semibold text-center w-[70%]">{smalldescription}</p>
                {/* <h3 className="text-2xl font-semibold p-2 ">{country}</h3> */}
                <Anchor to="/cities" className="text-xl font-semibold uppercase bg-slate-100 shadow-xl rounded-lg p-2
                    hover:delay-150 
                    hover:duration-300 
                    hover:ease-in-out
                    hover:bg-[#4F46E5]
                    hover:text-white
                ">go back</Anchor>
            </div>
        </div>
  );
}
