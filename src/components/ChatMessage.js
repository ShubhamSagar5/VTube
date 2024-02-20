import { generateRandomProfilePicUrl } from "../Utilis/constant";



const ChatMessage = ({name,message}) => {
    
    const randomProfilePicUrl = generateRandomProfilePicUrl();
    
    return (
        <>
  <div className=" flex shadow-sm p-1 m-2">
                    <img className="h-7 rounded-full" src={randomProfilePicUrl} />
      <span className=" font-bold mx-1"> {name}</span>
      <span className="ml-1">{message}</span>
      </div>      <div className=" w-80 ml-3 border border-x-1 border-[#242424]"/>

        </>
      
    )
}


export  default ChatMessage