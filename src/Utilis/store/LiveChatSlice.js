import { createSlice } from "@reduxjs/toolkit";
import { OFFSETCOUNT } from "../constant";



const LiveChatSlice = createSlice({
    name:'LiveChat',
    initialState:{
        message:[]
    },
    reducers:{
        addMessage:(state,action) => {
            state.message.splice(OFFSETCOUNT,1)
            state.message.unshift(action.payload)
        }
    }
})

export const {addMessage} = LiveChatSlice.actions
export default LiveChatSlice.reducer