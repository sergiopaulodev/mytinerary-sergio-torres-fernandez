import Body from "../components/Body/Body";
import Hero from "../components/Header/Hero";

export default function Home() {
  return (
    <>

        <div className="min-h-screen min-w-full flex flex-col justify-evenly bg-gradient-to-t from-indigo-100">
            <Hero/>
            <Body/>
        </div>

    </>
  );
}
