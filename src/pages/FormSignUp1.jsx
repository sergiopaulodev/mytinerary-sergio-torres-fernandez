import { useRef } from "react";
import axios from "axios";
import apiUrl from "../../apiUrl";
import { Link as Anchor } from "react-router-dom";

export default function Form1() {
  const name = useRef("");
  const lastName = useRef("");
  const country = useRef("");
  const photo = useRef("");
  const mail = useRef("");
  const password = useRef("");
  
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
      await axios( //en step1 deberia loggearme al poner mis datos, elegir bien cual es la peticion de axios
        apiUrl + "auth/", //url del endpoind read_one 
        data //objeto con los datos para crear
      );
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="flex justify-center items-center min-h-screen w-full">
        <form className="flex flex-col w-1/2 items-start gap-4">
            <h2 className="text-xl font-semibold pb-4
                md:text-2xl">
                Log in to your account</h2>
            <div className="flex w-full justify-start gap-16
            md:w-4/5">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <g clipPath="url(#clip0_0_292)">
                        <path d="M31.688 16.3686C31.688 15.2809 31.5998 14.1874 31.4117 13.1174H16.32V19.2787H24.9623C24.6037 21.2659 23.4514 23.0237 21.7641 24.1408V28.1386H26.9201C29.9478 25.3519 31.688 21.2365 31.688 16.3686Z" fill="#4285F4"/>
                        <path d="M16.32 32.0011C20.6352 32.0011 24.2744 30.5843 26.9259 28.1385L21.7699 24.1408C20.3354 25.1167 18.4835 25.6693 16.3259 25.6693C12.1517 25.6693 8.61246 22.8532 7.34257 19.0671H2.02197V23.1883C4.73812 28.5912 10.2704 32.0011 16.32 32.0011Z" fill="#34A853"/>
                        <path d="M7.33673 19.067C6.66651 17.0799 6.66651 14.9282 7.33673 12.941V8.81976H2.02201C-0.247327 13.3408 -0.247327 18.6673 2.02201 23.1883L7.33673 19.067Z" fill="#FBBC04"/>
                        <path d="M16.32 6.33288C18.6011 6.29761 20.8057 7.15596 22.4578 8.73156L27.0258 4.16349C24.1333 1.44734 20.2943 -0.0459547 16.32 0.00107822C10.2704 0.00107822 4.73812 3.41096 2.02197 8.81974L7.33669 12.941C8.6007 9.14897 12.1458 6.33288 16.32 6.33288Z" fill="#EA4335"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_0_292">
                        <rect width="32" height="32" fill="white"/>
                        </clipPath>
                    </defs>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 62 62" fill="none">
                    <g clipPath="url(#clip0_0_297)">
                        <path d="M62 31C62 13.8792 48.1208 0 31 0C13.8792 0 0 13.8792 0 31C0 46.4728 11.3362 59.2978 26.1562 61.6234V39.9609H18.2852V31H26.1562V24.1703C26.1562 16.4009 30.7845 12.1094 37.8654 12.1094C41.256 12.1094 44.8047 12.7148 44.8047 12.7148V20.3438H40.8958C37.045 20.3438 35.8438 22.7335 35.8438 25.1875V31H44.4414L43.067 39.9609H35.8438V61.6234C50.6638 59.2978 62 46.4728 62 31Z" fill="#1877F2"/>
                        <path d="M43.067 39.9609L44.4414 31H35.8438V25.1875C35.8438 22.736 37.045 20.3438 40.8958 20.3438H44.8047V12.7148C44.8047 12.7148 41.2572 12.1094 37.8654 12.1094C30.7845 12.1094 26.1562 16.4009 26.1562 24.1703V31H18.2852V39.9609H26.1562V61.6234C29.3659 62.1255 32.6341 62.1255 35.8438 61.6234V39.9609H43.067Z" fill="white"/>
                    </g>
  <defs>
    <clipPath id="clip0_0_297">
      <rect width="62" height="62" fill="white"/>
    </clipPath>
  </defs>
                </svg>
            </div>
            
            <p className="text-center text-2xl font-thin w-4/5">o</p>
            <p className="w-4/5 flex justify-between">
                    Already have an account?
                    <Anchor
                    className="text-lg font-bold text-[#5c3481] cursor-pointer"
                    to='/auth/signin'
                    >
                    Sign in
                    </Anchor>
            </p>
            
            <input
                ref={mail}
                type="text"
                className="w-4/5 py-4 text border-b-2"
                name="mail"
                id="mail"
                defaultValue=""
                placeholder="e-mail"
            />
            <input
                ref={password}
                type="password"
                className="w-4/5 py-4 text border-b-2"
                name="password"
                id="password"
                defaultValue=""
                placeholder="password"
            />
            <input
                type="button"
                className="bg-[#5c3481] text-white w-4/5 py-4 font-semibold text-center cursor-pointer rounded-md mt-12 mb-4"
                value="Continue"
                onClick={handleSignUp}
            />
            <div className="flex flex-col w-full gap-2 pt-2
            md:w-4/5">
                <p className="w-4/5 flex font-semibold">Sign up with email</p>
                <p className="w-full
                    md:flex
                    md:justify-between
                    ">
                    Do you not have an account?
                <Anchor
                    className="text-lg font-bold text-[#5c3481] cursor-pointer"
                    to='/auth/register_step2'
                    >
                    Sign up
                </Anchor>
                </p>
                {/* <p className="w-full flex flex-col justify-between gap-2
                md:flex-row">
                    Already have an account?
                    <Anchor
                    className="text-lg font-bold text-[#5c3481] cursor-pointer"
                    to='/auth/signin'
                    >
                    Sign in
                    </Anchor>
                </p> */}
            </div>
        </form>
        
    </div>
  );
}