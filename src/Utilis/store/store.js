import {configureStore} from '@reduxjs/toolkit'
import appReducer from './appSlice'
import searchListSlice from './searchListSlice'

const store = configureStore({

    reducer:{
        app:appReducer,
        searchCache:searchListSlice
    }
})


export default store