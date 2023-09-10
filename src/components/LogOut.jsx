import { Link as Anchor } from 'react-router-dom'

export default function LogOut() {
  return (
    <>
    <div className="flex flex-col p-6 justify-center items-center min-h-screen w-full bg-gradient-to-r from-green-400 to-blue-500 opacity-80">
        <div className='w-full flex flex-col gap-4 bg-gray-300 rounded-xl py-10 items-center
            sm:w-[75%]
            md:w-[70%]'>
            <p className="w-full text-2xl font-semibold text-center
                md:text-2xl
                md:p-6
                ">You have logged out</p>
            <div className='flex flex-col gap-2 items-center
                md:flex-row
                '>
                <span className='text-xl text-[#1C1C1C]'>Would you like to return to</span>
                <Anchor to="/" className="text-2xl font-bold text-[#1C1C1C]"
                > Home
                </Anchor>
                <span className='text-xl text-[#1C1C1C]'>or</span>
                <Anchor to="/auth" className="text-2xl font-bold text-[#1C1C1C]"
                > Login
                </Anchor>
            </div>
       </div>
    </div>
    </>
    
  )
}
