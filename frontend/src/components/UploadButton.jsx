function UploadButton({onUpload}){

 return(

  <label className="bg-green-600 text-white px-4 py-2 rounded cursor-pointer">

   Upload PDF

   <input
    type="file"
    hidden
    onChange={(e)=>onUpload(e.target.files[0])}
   />

  </label>

 )
}

export default UploadButton