import ButtonCallTo from "./ButtonCallTo";

export default function TextContent() {
  return (
    <>
        <div className="flex flex-col mb-16 lg:w-1/2 gap-10">
            <h1 className="flex xl:text-5xl text-4xl font-bold text-[#1C1C1C]">Find the perfect destination</h1>
            <ButtonCallTo />  
        </div>    
    </>
  );
}
