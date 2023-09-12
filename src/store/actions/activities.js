import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import apiUrl from "../../../apiUrl";

const read_activities_from_itinerary = createAsyncThunk(
    'read_activities_from_itinerary',
    
    async ( obj ) => {
        try {
            console.log(obj.itinerary_id)
            let data = await axios.get(apiUrl + 'activities?itinerary_id=' + obj.itinerary_id)
            console.log(data);
            return {
                activities: data.data.response
            }
        } catch (error) {
            console.log(error);
            return{
                activities: []
            }
        }
    }
)
const activities_action = { read_activities_from_itinerary }
export default activities_action