import { createReducer } from "@reduxjs/toolkit";
import users_action from "../actions/users";
const { read_user } = users_action

const initial_state = {
    users : []
}
const users_reducer = createReducer(
    initial_state,
    builder => builder
        .addCase(read_user.fulfilled,
            (state,action)=>{
                let newState = {
                    ...state,
                    users: action.payload.users
                }
                return newState
            })
)
export default users_reducer
