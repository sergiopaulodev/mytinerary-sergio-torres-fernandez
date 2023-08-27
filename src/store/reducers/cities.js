// REDUCERS
import { createReducer } from "@reduxjs/toolkit";
import cities_actions from "../actions/cities";
const { read_carousel, read_cities, read_cityDetails } = cities_actions


const initial_state = {
    carousel: [],
    cities: [],
    city: {}
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

)

export default cities_reducer

//import { createReducer } from "@reduxjs/toolkit";import city_actions from "../actions/cities";const { read_carousel } = city_actionsconst initial_state = {    carousel: []}const city_reducer = createReducer(    initial_state,                  //estado incial    builder => builder.addCase(     //callback contructora de estados globales (agrega (mín) un caso de reduccion para cada accion)        read_carousel,              //accion a reducir        (state,action)=> {          //callback que depende del estado y la accion y es la encargada de reducir los estados            let new_state = {                ...state,           //a la copia del estado tengo que "llenarle" la propiedad carousel con los datos que me envía la accion                carousel: action.payload.carousel            }            return new_state        //retorno el nuevo estado para que se actualice la vista        }    ))export default city_reducer