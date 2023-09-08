import { configureStore } from "@reduxjs/toolkit";
import cities_reducer from "./reducers/cities";
import itinerary_reducer from "./reducers/itineraries";
import user_reducer from "./reducers/users";


 export default configureStore({
    reducer: {
        cities: cities_reducer,
        itineraries: itinerary_reducer,
        users: user_reducer

    }
 })