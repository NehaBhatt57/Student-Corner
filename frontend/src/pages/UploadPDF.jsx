import FileUpload from "../components/FileUpload";
import { Upload, CheckCircle, Zap } from "lucide-react";

function UploadPDF() {
  const features = [
    "Support for PDF files up to 50MB",
    "Instant processing and analysis",
    "Secure and private uploads",
    "Compatible with scanned documents"
  ];

  return (
    <div className="min-h-screen">
      <div className="max-w-4xl mx-auto px-6 py-12">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-4">
            <Zap className="w-4 h-4" />
            <span className="text-sm font-semibold">Fast & Secure</span>
          </div>
          
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Upload Your PDF Documents
          </h1>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Upload your study materials, lecture notes, or textbooks to unlock AI-powered insights and Q&A
          </p>
        </div>

        {/* Upload Component */}
        <div className="mb-12">
          <FileUpload />
        </div>

        {/* Features Grid */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
          <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">
            What You Can Do After Uploading
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start space-x-3 bg-white p-4 rounded-xl shadow-sm"
              >
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tips Section */}
        <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-xl p-6">
          <h4 className="font-semibold text-yellow-900 mb-2 flex items-center">
            <Upload className="w-5 h-5 mr-2" />
            Pro Tips
          </h4>
          <ul className="text-sm text-yellow-800 space-y-1 ml-7">
            <li>• Ensure your PDF is clear and readable for best AI analysis</li>
            <li>• Text-based PDFs work better than image-only scans</li>
            <li>• You can upload multiple documents and switch between them</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default UploadPDF;