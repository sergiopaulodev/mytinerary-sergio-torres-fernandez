import { useRef } from "react";
import axios from "axios";
import apiUrl from "../../apiUrl";
import { Link as Anchor } from "react-router-dom";

export default function Form2() {
  const name = useRef("");
  const lastName = useRef("");
  const country = useRef("");
  const photo = useRef("");
  const mail = useRef("");
  const password = useRef("");

  const countries = ['Argentina', 'Chile','Brasil','Uruguay','Bolivia','Venezuela','Germany','Spain', 'England', 'Norway']
  
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
      await axios.post(
        apiUrl + "auth/register", //url del endpoind de creacion, CORREGIR
        data //objeto con los datos para crear
      );
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="flex justify-center items-center min-h-screen w-full">
        <form className="flex flex-col w-1/2 items-start gap-8">
            <h2 className="text-xl  font-semibold pb-6
                md:text-2xl
                ">Create account</h2>
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
                    {/* <input
                        ref={country}
                        type="select"
                        className="w-4/5 py-4 border-b-2"
                        name="country"
                        id="country"
                        defaultValue=""
                        placeholder="country"
                    /> */}
                    <select name="countries" id="countries" className="w-4/5 py-4 border-b-2">
                        {countries.length > 0 ?
                        countries.map(country => {
                            <option key={country} value={country}>{console.log(country)}</option>

                        })
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
                    className="bg-[#5c3481] text-white w-4/5 py-4 font-semibold text-center cursor-pointer rounded-md"
                    value="Sign Up"
                    onClick={handleSignUp}
                />
                <p className="w-4/5 flex justify-between">
                    Already have an account?
                    <Anchor
                    className="text-lg font-bold text-[#5c3481] cursor-pointer"
                    to='/auth/signin'
                    >
                    Sign in
                    </Anchor>
                </p>
        </form>
    </div>
  );
}