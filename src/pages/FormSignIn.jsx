import { useRef } from "react";
import { Link as Anchor } from "react-router-dom";
//import axios from "axios";
//import apiUrl from "../apiUrl";

export default function Form() {
  const mail_signin = useRef("");
  const password_signin = useRef("");

  async function handleSignIn() {
    let data = {
      mail: mail_signin.current.value,
      password: password_signin.current.value,
    };
    console.log(data);
  }
  return (
    <div className="flex justify-center items-center min-h-screen w-full">
        <form className="flex flex-col w-1/2 items-start gap-8">
            <input
                ref={mail_signin}
                type="text"
                className="w-4/5 py-4"
                name="mail_signin"
                id="mail_signin"
                defaultValue=""
                placeholder="mail"
            />
            <input
                ref={password_signin}
                type="password"
                className="w-4/5 py-4"
                name="password_signin"
                id="password_signin"
                defaultValue=""
                placeholder="password"
            />
            <input
                type="button"
                className="bg-[#5c3481] text-white w-4/5 py-4 font-semibold text-center cursor-pointer rounded-md mt-12 mb-4"
                value="Sign in"
                onClick={handleSignIn}
            />
        <p>
            Do not you have an account?
            <Anchor
            className="text-xl font-bold text-[#5c3481] cursor-pointer"
            to='/auth/register_step2'
            >
            Sign up
            </Anchor>
        </p>
        </form>
    </div>
  );
}