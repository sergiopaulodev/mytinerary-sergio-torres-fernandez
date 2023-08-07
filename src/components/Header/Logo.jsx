export default function Logo({ src, name }) {
  
    return (
    <>
        <div className="flex w-3/4 items-center">
            <h2 className="flex xl:text-4xl text-3xl font-bold text-[#1C1C1C]">{name}</h2>
            <img src={ src } alt="my tinirery logo" className="w-24 h-auto" /> 
        </div>    
    </>
    );
}
