import { Link as Anchor} from 'react-router-dom'

// eslint-disable-next-line react/prop-types
export default function CityDetails( {city, smalldescription, photo}) {
  
  return (
    <div className="flex flex-col justify-center bg-no-repeat bg-fixed bg-cover min-w-screen min-h-screen w-[100%]"  style={{backgroundImage: `url(${photo})`}}>
        <div className='flex justify-center'>
            <div className="flex rounded-3xl bg-slate-50 opacity-80 shadow-lg p-2 pb-4 mx-2
            md:p-8
            md:mx-0
            md:w-1/2
            ">
                <div className="flex flex-col items-center justify-start gap-8">
                    <div className='flex justify-between w-[70%]'>
                    <h2 className="text-2xl font-semibold rounded-lg p-2">{city}</h2>
                    <Anchor to="/cities" className="text-xl self-end ml-2 mt-2 rounded-lg p-2
                        hover:delay-150 
                        hover:duration-300 
                        hover:ease-in-out
                        hover:bg-[#4F46E5]
                        hover:text-white
                    ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
                        </svg>

                    </Anchor>
                    </div>
                    <p className="text-lg italic font-semibold text-center w-[70%]">{smalldescription}</p>



                </div>
            </div>
        </div>
    </div>
  );
}
