import LinkCities from "./LinkCities";
import LinkHome from "./LinkHome";
import LinkLogin from "./LinkLogin";


export default function NavBar() {
  
    return (
        <>
            <nav className="justify-between hidden p-4
            md:flex 
            md:gap-6 
            md:items-center">
                <LinkHome />
                <LinkCities />
                <LinkLogin />
            </nav>
        </>
    );
}
