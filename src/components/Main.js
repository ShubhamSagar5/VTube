import { useEffect } from "react"

import { useDispatch, useSelector } from "react-redux"
import { setLoading } from "../Utilis/store/appSlice"
import { fetchDataFromAPI, options } from "../Utilis/api"


const Main = () => {
    
    const {selectedCategory,loading,searchResults,mobileMenu} = useSelector((store)=>store.app)
  
    const dispatch = useDispatch()



const fetchSelectedCategory = async (query) => {
    dispatch(setLoading())
    const data = await fetchDataFromAPI(`search/?q=${query}`)
   
    
    console.log(data)
}

  useEffect(()=>{
       
    fetchSelectedCategory(selectedCategory) 
  },[selectedCategory])
    
    return (
        <div>

        </div>
    )
}

export default Main