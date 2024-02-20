import {configureStore} from '@reduxjs/toolkit'
import appReducer from './appSlice'
import searchListSlice from './searchListSlice'
import LiveChatSlice from './LiveChatSlice'

const store = configureStore({

    reducer:{
        app:appReducer,
        searchCache:searchListSlice,
        chatMess:LiveChatSlice
    }
})


export default store