import ButtonCallTo from "./ButtonCallTo";

export default function TextContent() {
  return (
    <>
        <div className="flex flex-col mb-16 gap-10 
        lg:w-1/2 ">
            <h1 className="flex text-3xl font-bold text-[#1C1C1C]
            xl:text-4xl ">Find the perfect destination</h1>
            <p className="flex justify-start text-xl text-[#1C1C1C] font">Our app will help you find the perfect path for your next trip. With an easy-to-use interface and a host of itinerary options, planning your next trip has never been easier.</p>
            <ButtonCallTo />  
        </div>    
    </>
  );
}
