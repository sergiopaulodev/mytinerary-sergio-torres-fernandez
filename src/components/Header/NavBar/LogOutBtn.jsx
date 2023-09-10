
import { Link as Anchor } from 'react-router-dom'
// eslint-disable-next-line react/prop-types
export default function LogOutBtn( {style, onClick}) {
    return (
        <>
            <div className="flex gap-4">
                <button className={style}>
                    <Anchor to='/auth/logout' onClick={onClick} className="text-gray-800 font-semibold
                    hover:text-red-600
                    hover:transition
                    hover:delay-100
                    hover:duration-100
                    hover:ease-in-out
                    ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>

                    </Anchor>
                </button>
            </div>
        </>
    );
}
