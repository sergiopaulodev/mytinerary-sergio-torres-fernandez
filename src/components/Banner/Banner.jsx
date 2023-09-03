
// eslint-disable-next-line react/prop-types
export default function Banner({src}) {
    src = 'https://images.pexels.com/photos/731217/pexels-photo-731217.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200'
  return (
    <>
        <div className="bg-fixed bg-bottom bg-no-repeat bg-cover min-h-[50vh] w-[100%] p-8" style={{backgroundImage:`url(${src})`}}>
            <div className="flex justify-center pt-[4rem]">
                <div className="flex flex-col items-center justify-center gap-4">
                    <h2 className='text-4xl text-white  font-bold bg-slate-800 rounded-md opacity-80 p-2'>Cities</h2>
                    <p className='text-2xl text-white font-semibold italic text-center mb-4 bg-slate-800 rounded-md opacity-80 p-2'>Collection of the most beautiful places and experience</p>
                </div>
            </div>
        </div>
      
    </>
  );
}
