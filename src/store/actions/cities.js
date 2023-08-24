//ACTIONS

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import apiUrl from '../../../apiUrl'

const read_carousel = createAsyncThunk(
    'read_carousel',
    async()=>{
        try {
            let data = await axios.get(apiUrl + 'cities/carousel')
        console.log(data);
        return {
            carousel: 'esto es el carousel de CITIES > ACTIONS'
        }
            
        } catch (error) {
            console.log(error);
            return{
                carousel: []
            }
        }

    }
)

const city_actions = { read_carousel }
export default city_actions