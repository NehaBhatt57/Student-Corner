import axios from "axios";

const API = axios.create({
  // baseURL: "http://localhost:8000"
  baseURL: "https://student-corner-backend-7xw9.onrender.com"
});

/* Attach JWT token automatically */

API.interceptors.request.use((config) => {

  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;

});

/* API Calls */

export const uploadPDF = (formData) =>
  API.post("/pdf/upload", formData);

export const askQuestion = (question) =>
  API.post("/qa/ask", { question });

export const generateMCQ = (text) =>
  API.post("/mcq/generate", { text });


/* Streaming Response */

export async function streamQuestion(question, onChunk){

 const token = localStorage.getItem("token");

 const response = await fetch(
  // "http://localhost:8000/qa/stream",
  "https://student-corner-backend-7xw9.onrender.com/qa/stream",
  {
   method:"POST",
   headers:{
    "Content-Type":"application/json",
    "Authorization": `Bearer ${token}`
   },
   body:JSON.stringify({question})
  }
 )

 const reader = response.body.getReader()
 const decoder = new TextDecoder()

 while(true){

  const {done,value} = await reader.read()

  if(done) break

  const chunk = decoder.decode(value)

  onChunk(chunk)

 }

}