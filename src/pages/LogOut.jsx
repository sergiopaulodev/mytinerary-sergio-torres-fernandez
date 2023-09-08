import { Link as Anchor } from 'react-router-dom'

export default function LogOut() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen w-full bg-gradient-to-r from-green-400 to-blue-500 opacity-80">
       <div className='flex flex-col bg-gray-300 rounded-xl opacity-90 p-16 items-center'>
       <p className="text-2xl font-semibold p-6">You have logged out</p>
            <div className='flex gap-2 items-center'>
                <span className='text-xl text-[#1C1C1C]'>Would you like to return to</span><Anchor to="/" className="text-2xl font-bold opacity-90 text-[#1C1C1C]"
                > Home
                </Anchor>
                <span className='text-xl text-[#1C1C1C]'>or</span>
                <Anchor to="auth/account" className="text-2xl font-bold opacity-90 text-[#1C1C1C]">
                Login
            </Anchor>

            </div>
       </div>
    </div>
  );
}
