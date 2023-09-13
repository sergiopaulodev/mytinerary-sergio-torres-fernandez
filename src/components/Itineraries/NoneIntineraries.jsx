
// import src from '../../public/noneItineraries.png'
import src from '../../../public/noneItineraries.png'
export default function NoneIntineraries() {
  return (
    <>
        <div className='bg-gradient-to-t from-slate-400 flex flex-col justify-center items-center min-h-screen'>
           <div className='flex flex-col items-center bg-slate-50 p-8 w-[70vw] mb-8 rounded-lg'>
                    <img src={src} alt="none-itinerary" className='object-cover rounded-xl w-[15rem] mb-8' />
                    <h2 className="text-4xl bg-white rounded-b-xl text-center">There are no itineraries</h2>
           </div>
        </div>
    </>
  );
}
