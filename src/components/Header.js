import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"

import ytLogo from "../images/yt-logo.png";
import ytLogoMobile from "../images/yt-logo-mobile.png";

import { SlMenu } from "react-icons/sl";
import { IoIosSearch } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";
import { FiBell } from "react-icons/fi";
import { CgClose } from "react-icons/cg";
import Loader  from '../Shared/Loader'
import { setLoading, setMobileMenu } from "../Utilis/store/appSlice";
import { YOUTUBE_SEARCH_SUGGESTION_API } from "../Utilis/api";



const Header = () =>{
    
    const [searchList,setSearchList] = useState([])

   

    const [searchQuery,setSearchQuery] = useState("")
 console.log(searchQuery)
    const {loading,mobileMenu} = useSelector((store)=> store?.app)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const searchQueryHandler = (e) =>{
        if( (e?.key === "Enter" || e === 'searchButton') && searchQuery?.length > 0 ){
            navigate(`/searchResult/${searchQuery}`)
        }

    }
    
    const mobileMenuToggle = () => {
        dispatch(setMobileMenu())
    }

    const { pathname } = useLocation();
    const pageName = pathname?.split("/")?.filter(Boolean)?.[0];


    const getSearchListData = async() => {
        const data = await fetch(YOUTUBE_SEARCH_SUGGESTION_API+searchQuery)
        const json = await data.json()
        console.log(json[1])
        setSearchList(json[1])
    }

    const handleSearchResult = (result) => {
       dispatch(setLoading())
       navigate(`/searchResult/${result}`)
       
       setSearchList([]) 
       dispatch(setLoading())
       console.log(result)
    }


    useEffect(()=>{

        const timer = setTimeout(()=>{
              getSearchListData()
        },200)
      

        return ()=>{
            clearTimeout(timer)
        } 

    },[searchQuery])


    return(
        <>
               <div className="sticky top-0 z-10 flex flex-row items-center justify-between h-14 px-4 md:px-5 bg-white dark:bg-black">
            {loading && <Loader />}

            <div className="flex h-5 items-center">
                {pageName !== "video" && (
                    <div
                        className="flex md:hidden md:mr-6 cursor-pointer items-center justify-center h-10 w-10 rounded-full hover:bg-[#303030]/[0.6]"
                        onClick={mobileMenuToggle}
                    >
                        {mobileMenu ? (
                            <CgClose className="text-white text-xl" />
                        ) : (
                            <SlMenu className="text-white text-xl" />
                        )}
                    </div>
                )}
                <Link to="/" className="flex h-5 items-center">
                    <img
                        className="h-full hidden dark:md:block"
                        src={ytLogo}
                        alt="Youtube"
                    />
                    <img
                        className="h-full md:hidden"
                        src={ytLogoMobile}
                        alt="Youtube"
                    />
                </Link>
            </div>
            <div className="group flex items-center">
                <div className="flex h-8 md:h-10 md:ml-10 md:pl-5 border border-[#303030] rounded-l-3xl group-focus-within:border-blue-500 md:group-focus-within:ml-5 md:group-focus-within:pl-0">
                    <div className="w-10 items-center justify-center hidden group-focus-within:md:flex">
                        <IoIosSearch className="text-white text-xl" />
                    </div>
                    <input
                        type="text"
                        className="bg-transparent outline-none text-white pr-5 pl-5 md:pl-0 w-44 md:group-focus-within:pl-0 md:w-64 lg:w-[500px]"
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onKeyUp={searchQueryHandler}
                        placeholder="Search"
                        // onFocus={()=>setShowsearchList(true)}
                        // onBlur={()=>setShowsearchList(false)}
                        value={searchQuery}
                    />
                </div>
                <button
                    className="w-[40px] md:w-[60px] h-8 md:h-10 flex items-center justify-center border border-l-0 border-[#303030] rounded-r-3xl bg-white/[0.1]"
                    onClick={() => searchQueryHandler("searchButton")}
                >
                    <IoIosSearch className="text-white text-xl" />
                </button>
            </div>
            <div className="flex items-center">
                <div className="hidden md:flex">
                    <div className="flex items-center justify-center h-10 w-10 rounded-full hover:bg-[#303030]/[0.6]">
                        <RiVideoAddLine className="text-white text-xl cursor-pointer" />
                    </div>
                    <div className="flex items-center justify-center ml-2 h-10 w-10 rounded-full hover:bg-[#303030]/[0.6]">
                        <FiBell className="text-white text-xl cursor-pointer" />
                    </div>
                </div>
                <div className="flex h-8 w-8 overflow-hidden rounded-full md:ml-4 ">
                    <img src="https://xsgames.co/randomusers/assets/avatars/female/67.jpg" />
                </div>
            </div>
        </div>
        {
            searchList.length > 1 && <div className= { `${searchList.length > 1 ? 'bg-[#242424]':'bg-black'} + text-white rounded-lg p-1 fixed z-50 md:mt-[5px] md:ml-[448px] md:w-64 w-[230px] lg:w-[550px] ml-[105px]` } >

                            <ul >{
                                searchList?.map((result)=> <li onClick={()=> handleSearchResult(result)} className="flex  shadow-lg  hover:bg-[#474747] p-2 px-2 border border-gray-900 rounded-lg mt-1">
                                <IoIosSearch className="text-white text-xl mx-2"  /> {result}
                                </li> )
                            }
                                
                          
                                

                            </ul>

        </div>
        }
        
        </>
     
    )
}


export default Header