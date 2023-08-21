import { Link as Anchor } from 'react-router-dom';

export default function ButtonViewMore() {
  return (
    <>
        <Anchor to="/citydetails" className="bg-[#4F46E5] flex justify-center  text-white w-[60%] ml-2 mb-2 rounded-md">
            <p>View More</p>
        </Anchor>
    </>
  );
}
