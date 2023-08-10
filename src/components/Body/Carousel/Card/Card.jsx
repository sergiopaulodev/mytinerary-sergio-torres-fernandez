import Location from './Location';
// import ButtonViewMore from './ButtonViewMore';


// eslint-disable-next-line react/prop-types
export default function Card({ src, city }) {
  return (
    <>
      <div className='flex flex-col justify-between w-80 h-40 bg-center bg-no-repeat shadow-2xl bg-cover rounded-md
      md:w-full' style={{backgroundImage:`url(${src})`}}>
            <Location city={city} />
            {/* <ButtonViewMore/> */}

      </div>
    </>
  );
}
