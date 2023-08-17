import CardCities from "../components/Body/Carousel/Card/CardCities";

export default function Cities() {
   
  return (
    // <div className="flex flex-col items-center w-full min-h-screen">
    //     <h1 className="flex justify-center items-start text-6xl text-[#1C1C1C] uppercase" >404 Error</h1>
    //     <p className="flex justify-center items-start text-3xl text-[#1C1C1C] uppercase">Page not found</p>
    // </div>
    <>
        <label htmlFor="" className="flex justify-center items-center mt-20">
            <input type="text" className="border-2 w-1/3 h-[45px] p-4" placeholder="Search your city" />
        </label>
        <div className="flex gap-8 justify-center mt-20 mx-14 mb-20">
            <CardCities />
            <CardCities />
            <CardCities />
            <CardCities />
        </div>
        <div className="flex gap-8 justify-center mt-20 mx-14 mb-20">
            <CardCities />
            <CardCities />
            <CardCities />
            <CardCities />
        </div>
    </>
  );
}
