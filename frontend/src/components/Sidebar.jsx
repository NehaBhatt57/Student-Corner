function Sidebar(){

 const chats=[
  "Operating System Notes",
  "Networking PDF",
  "AI Lecture"
 ]

 return(

  <div className="w-60 bg-gray-900 text-white p-4">

   <h2 className="text-lg mb-4">
    Chat History
   </h2>

   {chats.map((chat,i)=>(
    <div
     key={i}
     className="p-2 hover:bg-gray-700 rounded cursor-pointer"
    >
     {chat}
    </div>
   ))}

  </div>
 )
}

export default Sidebar