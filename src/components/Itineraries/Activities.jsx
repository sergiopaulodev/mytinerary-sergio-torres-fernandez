import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import activities_action from "../../store/actions/activities";
const { read_activities_from_itinerary } = activities_action


// eslint-disable-next-line react/prop-types
export default function Activities({itinerary_id}) {

    
    const activities = useSelector(store=>store.activities.activities)
    console.log(activities);
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch ( read_activities_from_itinerary ({itinerary_id}) )
        // eslint-disable-next-line react-hooks/exhaustive-deps
        },[]
    )


  return (

    <div key={itinerary_id} className="flex flex-wrap justify-center w-full gap-2 px-4
        ">        
        
        {activities?.map(each =>

        <div key={each._id} className="flex justify-center">
            {/* <div className="flex flex-col w-[14rem] h-[14rem] bg-cover bg-center rounded-2xl" */}
            <div className="flex flex-col justify-between items-center w-[13rem] h-[25vh] bg-center bg-no-repeat shadow-2xl bg-cover rounded-md
                "
                style={{backgroundImage:`url(${each.photo})`}}>
                {/* <p className="text-lg font-bold text-center italic">{each.name} </p> */}
                <p className="bg-slate-300 opacity-80 text-black px-2 rounded-md">{each.name} </p>
            </div>
        </div>
            )
        }
        
    </div>    

  );
}
