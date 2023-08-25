import { configureStore } from "@reduxjs/toolkit";
import city_reducer from "./reducers/cities";
import allCities_reducer from "./reducers/allCities";

 export default configureStore({
    reducer: {
        cities: city_reducer, allCities_reducer
        // itineraries:{ itineraries:[]},
        // users:{ users: []}
    }
 })