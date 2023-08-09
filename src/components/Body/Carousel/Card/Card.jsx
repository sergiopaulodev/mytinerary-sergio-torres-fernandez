import Location from './Location';
import ButtonViewMore from './ButtonViewMore';


// eslint-disable-next-line react/prop-types
export default function Card({ src, city, url }) {
  return (
    <>
    {/* <div className='bg-indigo-500 w-80 h-40'>
        <p>Lorem</p>
    </div> */}
      <div className='w-80 h-40 bg-center bg-no-repeat bg-cover  md:w-full flex flex-col justify-between shadow-2xl rounded-md' style={{backgroundImage:`url(${src})`}}>
            <Location city={city} url={''} />
            {/* <ButtonViewMore/> */}

      </div>
    </>
  );
}
