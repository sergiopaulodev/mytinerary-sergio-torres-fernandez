import { createReducer } from "@reduxjs/toolkit";
import activities_action from "../actions/activities";
const { read_activities_from_itinerary } = activities_action

const initial_state = {
    activities: []
}

const activity_reducer = createReducer(
    initial_state,
    builder => builder
        .addCase(
            read_activities_from_itinerary.fulfilled,
            (state, action) => {
                let new_state = {
                    ...state,
                    activities: action.payload.activities
                }
                return new_state
            }
        )
)

export default activity_reducer