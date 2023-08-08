import LinkHome from "../NavBar/LinkHome";
import LinkCities from "../NavBar/LinkCities";
import LinkLogin from "../NavBar/LinkLogin";

import { useState } from "react";

export default function HamMenu() {
  
    const [isChecked, setChecked] = useState(false)


            
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10 flex" 
              onClick={()=>{setChecked(!isChecked)}}
                  ><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
  
              {isChecked ?

                <div className="flex flex-col justify-between gap-6 mt-8 items-end ">
                    <LinkHome />
                    <LinkCities/>
                    <LinkLogin/>
                </div>

              : (null)
              }
                  
          </div>
    </>
  );
}
