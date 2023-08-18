
export default function CityDetails(city, country, photo) {
    city = 'Buenos Aires'
    country = 'Argentina'
    photo = 'https://media.gettyimages.com/id/961785206/es/foto/argentina-buenos-aires-centro-de-la-ciudad-con-los-coches-del-tr%C3%A1fico-en-la-noche-cerca-del.jpg?s=612x612&w=0&k=20&c=Er0qFeukrBdSXE34bghrMowHGcq_AHcR2ut-4e_Qovw='
  return (
    <>
      <div className="flex justify-center">
        <div className="flex flex-col items-center justify-center">
            <h2 className="text-2xl font-semibold">{city}</h2>
            <h3 className="text-2xl font-semibold">{country}</h3>
            <img src={photo} alt={city} className="w-2/5" />
            <p className="text-lg uppercase">under construction</p>
        </div>
      </div>
    </>
  );
}
