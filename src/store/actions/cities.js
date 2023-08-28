//ACTIONS

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import apiUrl from '../../../apiUrl'

const read_carousel = createAsyncThunk(
    'read_carousel',
    async()=>{
        try {
            let data = await axios.get(apiUrl + 'cities/carousel')
        // console.log(data.data.data);
        return {
            carousel: data.data.data
        }
            
        } catch (error) {
            console.log(error);
            return{
                carousel: []
            }
        }

    }
)

const read_cities = createAsyncThunk(
    'read_cities',
    async ( obj ) => {
        try {
            console.log(obj.text);
            let data = await axios.get(apiUrl + 'cities?city=' + obj.text )
            console.log(data.data.response);
            return {
                cities: data.data.response
            }
            
        } catch (error) {
            console.log(error);
            return{
                cities: []
            }
        }
    }
 )
 
 const read_cityDetails = createAsyncThunk (
     'read_cityDetails',
     
     async ( {id} ) => {
         try {
             let data = await axios.get(apiUrl + 'cities/citydetails/' + id)
             console.log(data.data.response)
             return{
                 city: data.data.response,
                 
                }
                
            } catch (error) {
                console.log(error);
                return{
                    city: []
                }
            }
        }
        )
        
const read_itineraries = createAsyncThunk(
    'read_itineraries',
    async ( {id} ) => {
        try {
            console.log({id});
            let data = await axios.get(apiUrl + 'itineraries?city=' + id )
            console.log(data.data.response);
            return {
                itineraries: data.data.response
            }
            
        } catch (error) {
            console.log(error);
            return{
                itineraries: []
            }
        }
    }
    )

const cities_actions = { read_carousel, read_cities, read_cityDetails, read_itineraries }
export default cities_actions