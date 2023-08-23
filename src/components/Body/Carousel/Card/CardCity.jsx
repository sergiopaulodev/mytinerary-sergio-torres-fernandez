import ButtonViewMore from './ButtonViewMore'
import LocationCities from './LocationCities';


// eslint-disable-next-line react/prop-types
export default function CardCity({ src, city, country, id }) {
    // src = 'https://media.gettyimages.com/id/961785206/es/foto/argentina-buenos-aires-centro-de-la-ciudad-con-los-coches-del-tr%C3%A1fico-en-la-noche-cerca-del.jpg?s=612x612&w=0&k=20&c=Er0qFeukrBdSXE34bghrMowHGcq_AHcR2ut-4e_Qovw='
    // city = 'Buenos Aires'
  return (
    <>
    <div className='flex flex-col w-[80%] h-64 justify-between bg-center bg-no-repeat shadow-2xl bg-cover rounded-md
      md:w-1/3 
      md:h-64
      lg:w-1/4 
      lg:h-64'
      style={{backgroundImage:`url(${src})`}} >
          <LocationCities city={city} country={country} />
          <ButtonViewMore id={id} />
    </div>
  </>
  );
}
