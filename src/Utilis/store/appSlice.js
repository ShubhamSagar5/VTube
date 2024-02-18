import { createSlice } from "@reduxjs/toolkit";



const appSlice = createSlice({
    name:'app',
    initialState:{
        loading:false,
        searchResults:null,
        selectedCategory:'New',
        mobileMenu:false
    },
    reducers:{
        setLoading:(state,action) => {
            state.loading = true
        },
        setSearchresults:(state,action) => {
            state.searchResults = action.payload
        },
        setSelectedCategory:(state,action) => {
            state.selectedCategory = action.payload
        },
        setMobileMenu:(state) =>{
            state.mobileMenu = !state.mobileMenu
        }
    }
})



export const {setLoading,setSearchresults,setSelectedCategory,setMobileMenu} = appSlice.actions
export default appSlice.reducer