
import { Link as Anchor } from 'react-router-dom';

export default function FooterCities() {
  return (
    <>
      <Anchor to="/cities" className="text-xl font-semibold text-[#1C1C1C] rounded-lg px-4 py-2 opacity-90
      hover:text-white 
      hover:bg-[#1C1C1C]
      hover:transition
      hover:delay-100
      hover:duration-100
      hover:ease-in-out">
        Cities
      </Anchor>

    </>
  );
}
