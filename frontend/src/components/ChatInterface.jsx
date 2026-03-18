import { useState } from "react";
import axios from "axios";

function ChatInterface(){

 const [messages,setMessages] = useState([])
 const [input,setInput] = useState("")

 const sendMessage = async ()=>{

  const newMessages=[
   ...messages,
   {role:"user",content:input}
  ]

  setMessages(newMessages)

  const res = await axios.post(
//    "http://localhost:8000/qa/ask",
   "https://student-corner-backend-7xw9.onrender.com/qa/ask",
   {question:input}
  )

  setMessages([
   ...newMessages,
   {role:"assistant",content:res.data.answer}
  ])

  setInput("")
 }

 return(

  <div className="flex flex-col h-full">

   <div className="flex-1 overflow-y-auto p-4">

    {messages.map((msg,i)=>(
     <div key={i}
      className={`p-3 my-2 rounded 
      ${msg.role==="user"
      ?"bg-blue-500 text-white ml-auto"
      :"bg-gray-200"}
      max-w-xl`}
     >
      {msg.content}
     </div>
    ))}

   </div>

   <div className="p-3 flex gap-2">

    <input
     value={input}
     onChange={(e)=>setInput(e.target.value)}
     className="flex-1 border p-2 rounded"
     placeholder="Ask about the PDF..."
    />

    <button
     onClick={sendMessage}
     className="bg-blue-600 text-white px-4 py-2 rounded"
    >
     Send
    </button>

   </div>

  </div>
 )
}

export default ChatInterface