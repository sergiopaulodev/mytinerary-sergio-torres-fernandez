import ButtonCallTo from "./ButtonCallTo";

export default function TextContent() {
  return (
    <>
        <div className="flex flex-col mb-16 lg:w-1/2 gap-10">
            <h1 className="flex xl:text-5xl text-4xl font-bold text-[#1C1C1C]">Find the perfect destination</h1>
            <p className="xl:text-2xl text-xl font-semibold text-[#1C1C1C]">Our app will help you find the perfect path for your next trip. With an easy-to-use interface and a host of itinerary options, planning your next trip has never been easier.</p> 
            <ButtonCallTo />  
        </div>    
    </>
  );
}
