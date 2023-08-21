import ButtonViewMore from './ButtonViewMore'
import LocationCities from './LocationCities';


// eslint-disable-next-line react/prop-types
export default function CardCities({ src, city }) {
    // src = 'https://media.gettyimages.com/id/961785206/es/foto/argentina-buenos-aires-centro-de-la-ciudad-con-los-coches-del-tr%C3%A1fico-en-la-noche-cerca-del.jpg?s=612x612&w=0&k=20&c=Er0qFeukrBdSXE34bghrMowHGcq_AHcR2ut-4e_Qovw='
    // city = 'Buenos Aires'
  return (
    <>
      <div className='flex flex-col justify-between w-80 h-40 bg-center bg-no-repeat shadow-2xl bg-cover rounded-md
      md:w-full' style={{backgroundImage:`url(${src})`}}>
            <LocationCities city={city} />
            <ButtonViewMore />
      </div>
    </>
  );
}
