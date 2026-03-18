import { useState } from "react";
import ChatBox from "../components/ChatBox";
import FileUpload from "../components/FileUpload";
import PDFViewer from "../components/PDFViewer";
import { FileText, MessageCircle } from "lucide-react";

function AskAI() {
  const [pdfFile, setPdfFile] = useState(null);

  return (
    <div className="min-h-screen">
      <div className="max-w-[1920px] mx-auto">
        
        {/* Page Header */}
        <div className="px-6 py-8 bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Ask AI Assistant</h1>
            <p className="text-gray-600">
              Upload your PDF document and get instant AI-powered answers to your questions
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex h-[calc(100vh-180px)]">
          
          {/* Left Side - Upload & Chat */}
          <div className="w-full lg:w-1/2 p-6 space-y-6 overflow-y-auto">
            
            {/* File Upload Section */}
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <FileText className="w-5 h-5 text-blue-600" />
                <h2 className="text-lg font-semibold text-gray-800">Step 1: Upload Document</h2>
              </div>
              <FileUpload onFileUpload={setPdfFile} />
            </div>

            {/* Chat Section */}
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <MessageCircle className="w-5 h-5 text-purple-600" />
                <h2 className="text-lg font-semibold text-gray-800">Step 2: Ask Questions</h2>
              </div>
              <ChatBox />
            </div>
          </div>

          {/* Right Side - PDF Viewer */}
          <div className="hidden lg:block lg:w-1/2 border-l border-gray-200 bg-gray-50">
            <PDFViewer file={pdfFile} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AskAI;