import Header from '../Header/Header.jsx';


// eslint-disable-next-line react/prop-types
export default function Banner({src}) {
    src = 'https://images.pexels.com/photos/731217/pexels-photo-731217.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200'
  return (
    <>
        <div className="bg-center bg-no-repeat bg-cover h-2/5" style={{backgroundImage:`url(${src})`}}>
            <Header />
            <div className="flex justify-center items-center">
                <div className="flex flex-col items-center justify-center gap-4">
                    <h2 className='text-4xl text-black  font-bold'>Cities</h2>
                    <p className='text-2xl text-black font-semibold italic text-center mb-4'>Collection of the most beautiful places and experience</p>
                </div>
            </div>
        </div>
      
    </>
  );
}
