import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link as Anchor, useNavigate } from "react-router-dom";
import user_actions from "../store/actions/users";
import Swal from "sweetalert2";
const { signup } = user_actions

export default function Form2() {
  const name = useRef('');
  const lastName = useRef('');
  const country = useRef('');
  const photo = useRef('');
  const mail = useRef('');
  const password = useRef('');
  const dispatch = useDispatch()
  const navigate = useNavigate()


  const countries = ['Argentina', 'Chile','Brazil','Uruguay','Bolivia','Venezuela','Germany','Spain', 'England', 'Norway']

  const mail_logged = useSelector(store => store.users.user?.mail)

  async function handleSignUp() {
    try {
        
      let data = {
        name: name.current.value,
        lastName: lastName.current.value,
        country: country.current.value,
        photo: photo.current.value,
        mail: mail.current.value,
        password: password.current.value,
      };
      console.log(data.name);
      
      dispatch(signup({data}))
        .then(res =>{
            console.log(res);
            if (res.payload.user._id ) {
                Swal.fire({
                    icon: 'success',
                    title: 'You have been register',
                    showConfirmButton: false,
                    timer: 1500
                })
                navigate('/')
            } else if (res.payload.messages.length > 0) {
                Swal.fire({
                    icon: 'error',
                    title: 'Something has been wrong',
                    html: res.payload.messages.map(each => `<p key=${each.index} > ${each} </p>`).join('')
                })
            }
        })
        .catch(err=>console.log(err))
 
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="w-full flex justify-center bg-gradient-to-r from-gray-400 to-[#5c3481] py-8" >
        <div className="flex flex-col justify-center w-full  items-center min-h-screen bg-white  rounded-xl shadow-md
            sm:w-[80%]
            md:w-[50%]
        ">
            
            {mail_logged ?
            <>
            <form className="flex flex-col w-full items-center gap-4
                    sm:w-[90%]
                    md:w-[75%]
                    ">
                    <h2 className="text-xl font-semibold pb-8
                        md:text-2xl
                        ">
                        Create account</h2>
                    <div className="flex gap-8 w-4/5">
                        <input
                            ref={name}
                            type="text"
                            className="w-4/5 py-4 border-b-2 cursor-not-allowed bg-gray-300 opacity-50"
                            name="name"
                            id="name"
                            defaultValue=""
                            placeholder="name"
                        />
                        <input
                            ref={lastName}
                            type="text"
                            className="w-4/5 py-4 border-b-2 cursor-not-allowed bg-gray-300 opacity-50"
                            name="lastName"
                            id="lastName"
                            defaultValue=""
                            placeholder="last name"
                        />
                    </div>
                    <div className="flex gap-8 w-4/5">
                        
                        <select name="countries" id="countries" className="w-4/5 py-4 border-b-2 cursor-not-allowed bg-gray-300 opacity-50" ref={country}>
                            {countries.length > 0 &&
                            // eslint-disable-next-line react/jsx-key
                            countries.map(country => <option key={country} value={country}>{country}</option>)
                            
                            }
                            
                        </select>
                        <input
                            ref={photo}
                            type="text"
                            className="w-4/5 py-4 border-b-2 cursor-not-allowed bg-gray-300 opacity-50"
                            name="photo"
                            id="photo"
                            defaultValue=""
                            placeholder="photo"
                        />
                    </div>
                    <input
                        ref={mail}
                        type="text"
                        className="w-4/5 py-4 border-b-2 cursor-not-allowed bg-gray-300 opacity-50"
                        name="mail"
                        id="mail"
                        defaultValue=""
                        placeholder="e-mail"
                    />
                    <input
                        ref={password}
                        type="password"
                        className="w-4/5 py-4 border-b-2 cursor-not-allowed bg-gray-300 opacity-50"
                        name="password"
                        id="password"
                        defaultValue=""
                        placeholder="password"
                    />
                    <input
                        type="button"
                        className="text-white w-4/5 py-4 font-semibold text-center rounded-md mt-12 mb-4 cursor-not-allowed bg-gray-300 opacity-50"
                        value="Sign Up"
                        onClick={handleSignUp}
                    />
            </form>
            </>:
            <>
                <form className="flex flex-col w-full items-center gap-4
                    sm:w-[90%]
                    md:w-[75%]
                    ">
                    <h2 className="text-xl font-semibold pb-8
                        md:text-2xl
                        ">
                        Create account</h2>
                    <div className="flex gap-8 w-4/5">
                        <input
                            ref={name}
                            type="text"
                            className="w-4/5 py-4 border-b-2"
                            name="name"
                            id="name"
                            defaultValue=""
                            placeholder="name"
                        />
                        <input
                            ref={lastName}
                            type="text"
                            className="w-4/5 py-4 border-b-2"
                            name="lastName"
                            id="lastName"
                            defaultValue=""
                            placeholder="last name"
                        />
                    </div>
                    <div className="flex gap-8 w-4/5">
                        
                        <select name="countries" id="countries" className="w-4/5 py-4 border-b-2" ref={country}>
                            {countries.length > 0 ?
                            // eslint-disable-next-line react/jsx-key
                            countries.map(country => <option key={country} value={country}>{country}</option>)
                            :
                            null
                            }
                            
                        </select>
                        <input
                            ref={photo}
                            type="text"
                            className="w-4/5 py-4 border-b-2"
                            name="photo"
                            id="photo"
                            defaultValue=""
                            placeholder="photo"
                        />
                    </div>
                    <input
                        ref={mail}
                        type="text"
                        className="w-4/5 py-4 border-b-2"
                        name="mail"
                        id="mail"
                        defaultValue=""
                        placeholder="e-mail"
                    />
                    <input
                        ref={password}
                        type="password"
                        className="w-4/5 py-4 border-b-2"
                        name="password"
                        id="password"
                        defaultValue=""
                        placeholder="password"
                    />
                    <input
                        type="button"
                        className="bg-[#5c3481] text-white w-4/5 py-4 font-semibold text-center cursor-pointer rounded-md mt-12 mb-4"
                        value="Sign Up"
                        onClick={handleSignUp}
                    />
                </form>
            </>
            }
            
            
            <div className="flex flex-col items-center w-4/5 gap-2 px-4
                sm:w-[90%]
                md:w-[85%]
                ">
                <div className="flex flex-wrap gap-2 items-end">
                    <p>Already have an account?</p>
                    <Anchor
                    className="text-lg font-bold text-[#5c3481] cursor-pointer"
                    to='/auth/login'
                    >
                    Sign in
                    </Anchor>
                </div>
            </div>
        </div>
    </div>
  );
}
