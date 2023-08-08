export default function Logo({ src, name }) {
  

    return (
    <>
        <div className="flex w-3/4">
            <div className=" flex items-center bg-cover h-44" style={{ backgroundImage: `url(${src})`}}>

                <h2 className="flex xl:text-4xl text-3xl font-bold text-[#1C1C1C]" >{name}</h2>
            </div>
            {/* <img src={ src } alt="my tinirery logo" className="w-24 h-auto" />  */}
        </div>    
    </>
    );
}
