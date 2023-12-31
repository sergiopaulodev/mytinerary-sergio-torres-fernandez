import Location from './Location';


// eslint-disable-next-line react/prop-types
export default function Card({ src, city, id }) {
  return (
    <>
      <div className='flex flex-col justify-between w-80 h-40 bg-center bg-no-repeat shadow-2xl bg-cover rounded-md
      transition-transform transform duration-300 ease-in-out
      hover:scale-110
      md:w-full' style={{backgroundImage:`url(${src})`}} id={id}>
            <Location city={city} />
      </div>
    </>
  );
}
