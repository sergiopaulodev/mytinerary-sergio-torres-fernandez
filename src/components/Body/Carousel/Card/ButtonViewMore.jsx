import { Link as Anchor } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
export default function ButtonViewMore( {id} ) {
  return (
    <>
        <Anchor to={'/citydetails/' + id} 
        className="bg-[#4F46E5] flex justify-center text-white w-[60%] ml-2 mb-2 rounded-md
            hover:transition 
            hover:delay-150 
            hover:duration-300 
            hover:ease-in-out
            hover:bg-white
            hover:text-[#4F46E5]">
            <p>View More</p>
        </Anchor>
    </>
  );
}
