import { useRef } from "react";
import { Link as Anchor } from "react-router-dom";
// import axios from "axios";
// import apiUrl from "../../apiUrl";
import { useDispatch, useSelector } from "react-redux";
import user_actions from "../store/actions/users";
const { signin } = user_actions

export default function Form() {
  const mail_signin = useRef("");
  const password_signin = useRef("");
  const disaptch = useDispatch()


  async function handlerSignIn() {
    // // console.log( mail_signin.current.value);
    // // console.log(password_signin.current.value);
    let data = {
      mail: mail_signin.current.value,
      password: password_signin.current.value,
    };
    
    let responseDispatch = disaptch(signin({data}))
    console.log(responseDispatch);


    // // await axios.post(
    // //     apiUrl + "auth/login", data //objeto con los datos para crear
    // //   );
    // // console.log(data);
  }

  

  const mail = useSelector(store =>store.users.user?.mail)
  console.log(mail);
  return (
    <div className="w-full flex justify-center bg-gradient-to-r from-gray-400 to-[#5c3481] py-8">
        <div className="flex flex-col justify-center w-full items-center min-h-screen bg-white rounded-xl shadow-md
            sm:w-[80%]
            md:w-[50%]
            ">
            {mail ? 
            <>
                <form className="flex flex-col w-full items-center gap-4
                        sm:w-[90%]
                        md:w-[75%]
                        ">
                    <h2 className="text-xl font-semibold pb-8
                        md:text-2xl
                        ">
                        Login</h2>
                    <input
                        ref={mail_signin}
                        type="text"
                        className="w-4/5 py-4 border-b-2 cursor-not-allowed bg-gray-300 opacity-50"
                        name="mail_signin"
                        id="mail_signin"
                        defaultValue=""
                        placeholder="mail"
                    />
                    <input
                        ref={password_signin}
                        type="password"
                        className="w-4/5 py-4 border-b-2  cursor-not-allowed bg-gray-300 opacity-50"
                        name="password_signin"
                        id="password_signin"
                        defaultValue=""
                        placeholder="password"
                    />
                    <input
                        type="button"
                        className="text-white w-4/5 py-4 font-semibold text-center rounded-md mt-12 mb-4 cursor-not-allowed bg-gray-300 opacity-50"
                        value="Sign in"
                        onClick={handlerSignIn}
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
                        Login</h2>
                    <input
                        ref={mail_signin}
                        type="text"
                        className="w-4/5 py-4 border-b-2"
                        name="mail_signin"
                        id="mail_signin"
                        defaultValue=""
                        placeholder="mail"
                    />
                    <input
                        ref={password_signin}
                        type="password"
                        className="w-4/5 py-4 border-b-2"
                        name="password_signin"
                        id="password_signin"
                        defaultValue=""
                        placeholder="password"
                    />
                    <input
                        type="button"
                        className="bg-[#5c3481] text-white w-4/5 py-4 font-semibold text-center cursor-pointer rounded-md mt-12 mb-4"
                        value="Sign in"
                        onClick={handlerSignIn}
                    />
                </form>            
            </>}
            
            <div className="flex flex-col items-center w-4/5 gap-2 px-4
                sm:w-[90%]
                md:w-[85%]
                ">
                    <div className="flex flex-wrap gap-2 items-end">
                        <p className="">
                            Do you not have an account?</p>
                        <Anchor
                            className="text-lg font-bold text-[#5c3481] cursor-pointer"
                            to='/auth/register'
                            >
                            Sign up
                        </Anchor>
                    </div>
            </div>
        </div>
    </div>
  );
}