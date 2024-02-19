import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchDataFromAPI } from "../Utilis/api";
import LeftNav from "./LeftNav";
import SearchResultsVideoCard from "./SearchResultsVideoCard";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "../Utilis/store/appSlice";

const SearchResults = () => {
   
    const [result,setResults] = useState
    const {searchQuery} = useParams()

    const {loading} = useSelector((store)=>store?.app?.loading)
    const dispatch = useDispatch()
   


    const fetchSearchResults = async() => {
        dispatch(setLoading())
        const data = await fetchDataFromAPI(`search/?q=${searchQuery}`)
        setResults(data?.contents)
        dispatch(setLoading())
    }


    useEffect(()=>{
        document.getElementById("root").classList.remove("custom-h");
        fetchSearchResults()
    },[])


    return (
        <div className="flex flex-row h-[calc(100%-56px)]">
            <LeftNav />
            <div className="grow w-[calc(100%-240px)] h-full overflow-y-auto bg-black">
                <div className="grid grid-cols-1 gap-2 p-5">
                    {result?.map((item) => {
                        if (item?.type !== "video") return false;
                        let video = item.video;
                        return (
                            <SearchResultsVideoCard
                                key={video.videoId}
                                video={video}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
}


export default SearchResults