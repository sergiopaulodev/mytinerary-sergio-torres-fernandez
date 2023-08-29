import { configureStore } from "@reduxjs/toolkit";
import cities_reducer from "./reducers/cities";
import itinerary_reducer from "./reducers/itineraries";


 export default configureStore({
    reducer: {
        cities: cities_reducer,
        itineraries: itinerary_reducer,
        //recurso: recurso_reducer
    }
 })