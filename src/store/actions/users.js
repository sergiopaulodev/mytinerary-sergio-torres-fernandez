import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import apiUrl from "../../../apiUrl";


const signup = createAsyncThunk(
    'signup',
    async(obj)=>{
        try {
            console.log(obj.data);
            let data = await axios.post( apiUrl + "auth/register", obj.data )
            console.log(data);
            return {
                user: data.data.response,
                // token: data.data.response.token,
                messages: []
            }            
        
        } catch (error) {
            console.log(error);
            return{
                user: {},
                token: '',
                messages: error.response.data.messages || [error.response.data.message]
            }

        }
    }
)


const signin = createAsyncThunk(
    'signin',
    async(obj)=>{
        try {
            let data = await axios.post(apiUrl+'auth/login', obj.data)
            // console.log(data.data.response.token);
            localStorage.setItem('token', data.data.response.token)
            return {
                user: data.data.response.user,
                token: data.data.response.token,
                messages: []
            }
        } catch (error) {
            console.log(error.response.data.messages);
            return {
                user: {},
                token: '',
                messages: error.response.data.messages || [error.response.data.message]
            }
        }
    }
)

const signin_token = createAsyncThunk(
    'signin_token',
    async()=> {
        try {
            let token = localStorage.getItem('token')
            let authorization = { headers:{ 'Authorization':`Bearer ${token}` } }
            let data = await axios.post(apiUrl+'auth/token',null,authorization)
            localStorage.setItem('token',data.data.response.token)
            return {
                user: data.data.response.user,
                token: data.data.response.token
            }
        } catch (error) {
            console.log(error);
            return {
                user: {},
                token: ''
            }
        }
    }
)

const signout = createAsyncThunk(
    'signout',
    async()=> {
        try {
            let token = localStorage.getItem('token')
            let authorization = { headers:{ 'Authorization':`Bearer ${token}` } }
            // eslint-disable-next-line no-unused-vars
            let data = await axios.post(apiUrl+'auth/logout',null,authorization)
            localStorage.removeItem('token')
            return {
                user:{},
                token: ''
            }
        } catch (error) {
            console.log(error);
            return {
                user: {},
                token: ''
            }
        }
    }
)


const user_actions = { signup, signin, signin_token, signout }
export default user_actions
