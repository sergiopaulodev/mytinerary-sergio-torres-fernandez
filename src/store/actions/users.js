import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import apiUrl from "../../../apiUrl";

const read_user = createAsyncThunk(
    'read_user',
    async (obj) =>{
        try {
            // let data = await axios(apiUrl + obj.admin_id)
            // console.log(data);
            // return{
            //     users: data.data.response 
            // }
        } catch (error) {
            console.log(error);
            
        }
    }
)

const users_action = { read_user}
export default users_action