import { Link as Anchor } from 'react-router-dom'
export default function ButtonCallTo() {
  return (
    <>
        <Anchor to="/cities" className="flex py-4 px-5 justify-center md:w-1/2 items-center gap-1 bg-[#4F46E5] rounded-lg">
            <p className="text-2xl font-semibold text-white">View More</p>
        </Anchor >     
    </>
  );
}
