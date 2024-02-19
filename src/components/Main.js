import { useEffect } from "react"

import { useDispatch, useSelector } from "react-redux"
import { setLoading, setSearchresults } from "../Utilis/store/appSlice"
import { fetchDataFromAPI, options } from "../Utilis/api"
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom"
import Feed from "./Feed"
import SearchResults from "./SearchResults"
import VideoDetails from "./VideoDetails"
import Header from "./Header"





const Main = () => {
    
    const {selectedCategory,loading,searchResults,mobileMenu} = useSelector((store)=>store.app)
  
    const dispatch = useDispatch()



const fetchSelectedCategory = async (query) => {
    dispatch(setLoading())
    const data = await fetchDataFromAPI(`search/?q=${query}`)
    dispatch(setSearchresults(data))
    
    console.log(data)
}

  // useEffect(()=>{
       
  //   fetchSelectedCategory(selectedCategory) 
  // },[selectedCategory])
    
    return (
        <div>
        <Header/>
          <Outlet/>
        </div>
    )
}

export default Main