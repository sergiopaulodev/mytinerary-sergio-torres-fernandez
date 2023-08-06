import Location from './Location';
import ButtonViewMore from './ButtonViewMore';

export default function Card({ src, city, url }) {
  return (
    <>
      <div className='bg-indigo-300  w-[10vw] h-[10vh] bg-center bg-no-repeat bg-cover  md:w-full flex flex-col justify-between shadow-2xl rounded-md min-h-[20vh] max-w-[40vw] min-w-[20vw]' style={{backgroundImage:`url(${src})`}}>
            <Location city={city} url={''} />
            <ButtonViewMore/>

      </div>
    </>
  );
}
