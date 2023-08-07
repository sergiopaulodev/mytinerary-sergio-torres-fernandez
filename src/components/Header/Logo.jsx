export default function Logo({ src, name }) {
  
    const urlLogo = 'https://media.istockphoto.com/vectors/travel-agency-tourism-app-and-trips-logo-adventure-tours-icon-and-vector-id980663202?k=6&m=980663202&s=170667a&w=0&h=y2cYWhEQPCsFqueBaCMSVQuV2N4jkf-u6KMTSIPmdnU='
    return (
    <>
        <div className="flex w-3/4">
            <div className=" flex items-center bg-cover h-44 opacity" style={{ backgroundImage: `url(${urlLogo})`}}>
                <h2 className="flex xl:text-4xl text-3xl font-bold text-[#1C1C1C]" >{name}</h2>
            </div>
            {/* <img src={ src } alt="my tinirery logo" className="w-24 h-auto" />  */}
        </div>    
    </>
    );
}
