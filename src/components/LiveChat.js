import { useEffect, useState } from "react"
import store from "../Utilis/store/store"
import ChatMessage from "./ChatMessage"
import {useSelector,useDispatch} from 'react-redux'
import { addMessage } from "../Utilis/store/LiveChatSlice"
import { generateRandomProfilePicUrl, randomMessageGenerator, randomNameGenerator } from "../Utilis/constant"
import { LuSendHorizonal } from "react-icons/lu";

const LiveChat = () => {
   
   const chatMess = useSelector((store) => store?.chatMess?.message)
    const dispatch = useDispatch()

    const randomProfilePicUrl = generateRandomProfilePicUrl();

const [liveText,setLiveText] = useState('')

    useEffect(()=>{

        const timer = setInterval(()=>{
            dispatch(addMessage({
                name:randomNameGenerator(),
                message:randomMessageGenerator(10)
            }))
        },1500)


        return () => {
            clearInterval(timer)
        }

    },[])
   
    return (
        <div className=" border border-white h-[448px] rounded-lg  bg-black text-white">
            <div className=" w-full h-[380px]  overflow-y-scroll no-scrollbar flex flex-col-reverse">
         
         {
            chatMess?.map((c,index)=> <ChatMessage name={c.name} message={c.message}/> )
         }  
            
        
            
</div>
            <div>
                <form action="" className="p-2 bg-black" onSubmit={(e)=> {
                                   e.preventDefault()
               const userName =  prompt('Enter Your Name')
                dispatch(addMessage({
                    name:userName,
                    message:liveText
                }))
                setLiveText('')
                }

                }>
                <input type="text" value={liveText} onChange={(e)=> setLiveText(e.target.value)} className="border bg-[#242424] text-white border-white w-[250px] rounded-lg p-1" placeholder="chat.."/>
           <button className="px-3 mx-4 py-2  rounded-full bg-[#242424] text-white"><LuSendHorizonal /></button>
                </form>
            </div>
        </div>
    )
}


export default LiveChat