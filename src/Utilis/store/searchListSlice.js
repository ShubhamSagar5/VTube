import { createSlice } from "@reduxjs/toolkit";



const searchListSlice = createSlice({
    name:'searchList',
    initialState:{
       
    },
    reducers:{
        addCache:(state,action) => {
            state = Object.assign(state,action.payload)
        }
    }
})

export const {addCache} = searchListSlice.actions
export default searchListSlice.reducer