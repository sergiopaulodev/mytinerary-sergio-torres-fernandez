import HamMenu from "./HamMenu/HamMenu";
import Logo from "./Logo";
import NavBar from "./NavBar/NavBar";

export default function Header() {
  return (
    <>
      <div className="flex justify-between  mx-10 mt-4 mb-5
      md:items-center 
      lg:mx-10">

        <Logo src={ 'https://media.istockphoto.com/vectors/travel-agency-tourism-app-and-trips-logo-adventure-tours-icon-and-vector-id980663202?k=6&m=980663202&s=170667a&w=0&h=y2cYWhEQPCsFqueBaCMSVQuV2N4jkf-u6KMTSIPmdnU=' } name={"My Tinerary"} />

        <HamMenu />
        <NavBar />
      </div>
    </>
  );
}
