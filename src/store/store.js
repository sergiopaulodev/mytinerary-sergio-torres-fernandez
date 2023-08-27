import { configureStore } from "@reduxjs/toolkit";
import city_reducer from "./reducers/cities";
// import allCities_reducer from "./reducers/allCities";
// import cityDetails_reducer from "./reducers/cityDetails";

 export default configureStore({
    reducer: {
        cities: city_reducer, 
                // allCities_reducer, 
                // cityDetails_reducer
        // itineraries:{ itineraries:[]},
        // users:{ users: []}
    }
 })