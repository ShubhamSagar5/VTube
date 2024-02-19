import React, { useContext, useState } from "react";
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



const Header = () =>{
    
    const [searchQuery,setSearchQuery] = useState("")

    const {loading,mobileMenu} = useSelector((store)=> store?.app)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const searchQueryHandler = (e) =>{
        if( (e?.key === "Enter" || e === 'searchButton') && searchQuery?.length > 0 ){
            navigate(`/searchResults/${searchQuery}`)
        }

    }
    
    const mobileMenuToggle = () => {
        
    }


    return(
        <div>

        </div>
    )
}


export default Header