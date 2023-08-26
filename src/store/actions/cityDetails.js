import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import apiUrl from "../../../apiUrl";



const read_cityDetails = createAsyncThunk (
    'read_cityDetails',

    async ( {id} ) => {
        try {
            let data = await axios.get(apiUrl + 'cities/citydetails/' + id)
            console.log(data.data.response)
            return{
                cityDetails: data.data.response,
                
            }
            
        } catch (error) {
            console.log(error);
            return{
                cityDetails: []
            }
        }
    }
)
const cityDetails_action = { read_cityDetails }
export default cityDetails_action;