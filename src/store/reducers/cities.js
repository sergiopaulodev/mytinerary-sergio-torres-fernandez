// REDUCERS
import { createReducer } from "@reduxjs/toolkit";
import cities_actions from "../actions/cities";
const { read_carousel, read_cities, read_cityDetails, read_itineraries } = cities_actions


const initial_state = {
    carousel: [],
    cities: [],
    city: {},
    itineraries:{}
}

const cities_reducer = createReducer(
    initial_state,
    builder => builder.addCase( // callback costructora de estados globales (agreaga como minimo un caso de reduccion por)
        read_carousel.fulfilled,
        (state,action) => { 
            let new_state = {
                ...state,       //a la copia del estado tengo que llenarl
                carousel: action.payload.carousel
            }
            return new_state
        }
    )
   .addCase(
            read_cities.fulfilled,
            (state, action) => {
                let new_state = {
                    ...state,
                    cities:action.payload.cities
                }
                return new_state
            }
        )
    .addCase(
        read_cityDetails.fulfilled,
        (state, action) => {
            let new_state = {
                ...state,
                // allCities: action.payload.allCities,
                city: action.payload.city
            }
            return new_state
        }
    )
    .addCase(
        read_itineraries.fulfilled,
        (state, action) => {
            let new_state = {
                ...state,
                itineraries:action.payload.itineraries
            }
            return new_state
        }
    )

)

export default cities_reducer