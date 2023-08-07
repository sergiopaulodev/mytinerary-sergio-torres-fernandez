import LinkCities from "./LinkCities";
import LinkHome from "./LinkHome";
import LinkLogin from "./LinkLogin";


export default function NavBar() {
  
    return (
        <>
            <nav className="justify-between hidden md:flex md:gap-6 md:items-center mx-10">
                <LinkHome />
                <LinkCities />
                <LinkLogin />
            </nav>
        </>
    );
}
