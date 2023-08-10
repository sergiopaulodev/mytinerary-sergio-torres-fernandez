// eslint-disable-next-line react/prop-types
export default function Logo({ src, name }) {
  
    return (
    <>
        <div className="flex w-3/4">
            <div className="flex items-end bg-cover h-[9.8rem]" style={{ backgroundImage: `url(${src})`}}>
                <h2 className="flex font-bold text-[#1C1C1C]
                xl:text-4xl 
                text-3xl" >{name}
                </h2>
            </div>
            
        </div>    
    </>
    );
}
