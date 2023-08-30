import { Link as Anchor} from 'react-router-dom'

// eslint-disable-next-line react/prop-types
export default function CityDetails( {city, smalldescription}) {
  
  return (
        <div className="flex self-center w-[60vw] h-[50vh] rounded-3xl bg-slate-50 opacity-70 shadow-lg mb-[7rem]">
            <div className="flex flex-col items-center justify-center gap-8">
                <Anchor to="/cities" className="text-xl self-start ml-2 mt-2 rounded-lg p-2
                    hover:delay-150 
                    hover:duration-300 
                    hover:ease-in-out
                    hover:bg-[#4F46E5]
                    hover:text-white
                ">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 16.811c0 .864-.933 1.405-1.683.977l-7.108-4.062a1.125 1.125 0 010-1.953l7.108-4.062A1.125 1.125 0 0121 8.688v8.123zM11.25 16.811c0 .864-.933 1.405-1.683.977l-7.108-4.062a1.125 1.125 0 010-1.953L9.567 7.71a1.125 1.125 0 011.683.977v8.123z" />
                    </svg>
                </Anchor>
                <h2 className="text-2xl font-semibold rounded-lg p-2">{city}</h2>

                <p className="text-lg italic font-semibold text-center w-[70%]">{smalldescription}</p>


            </div>
        </div>
  );
}
