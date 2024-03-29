import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { setSelectedCategory } from "../Utilis/store/appSlice"
import LeftNavMenuItem from "./LeftNavMenuItem"
import React from "react"
import {categories} from '../Utilis/constant'

const LeftNav = () =>{
    
    const {selectedCategory,mobileMenu} = useSelector((store) => store?.app)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const clickHandler = (name,type) => {
        switch (type) {
            case "category":
                return dispatch(setSelectedCategory(name));
            case "home":
                return dispatch(setSelectedCategory(name));
            case "menu":
                return false;
            default:
                break;
        }
    };
    
    return (
        <div
        className={`md:block fixed w-[180px] md:w-[240px] -ml-1 md:ml-0 overflow-y-auto h-full py-4 bg-black  md:relative z-20 translate-x-[-240px] md:translate-x-0 transition-all ${
            mobileMenu ? "translate-x-2" : ""
        }`}
    >
        <div className="flex px-5 flex-col">
            {categories?.map((item) => {
                return (
                    <React.Fragment key={item.name}>
                        <LeftNavMenuItem
                            text={item.type === "home" ? "Home" : item.name}
                            icon={item.icon}
                            action={() => {
                                clickHandler(item.name, item.type);
                                navigate("/");
                            }}
                            className={`${
                                selectedCategory === item.name
                                    ? "bg-white/[0.15]"
                                    : ""
                            }`}
                        />
                        {item.divider && (
                            <hr className="my-5 border-white/[0.2]" />
                        )}
                    </React.Fragment>
                );
            })}
            <hr className="my-5 border-white/[0.2]" />
            
        </div>
    </div>
    )
}

export default LeftNav