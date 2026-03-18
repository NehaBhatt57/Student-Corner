import { useState } from "react";
import { generateMCQ } from "../services/api";
import { Sparkles, Loader, CheckCircle, Download, RefreshCw } from "lucide-react";

function MCQGenerator() {
  const [text, setText] = useState("");
  const [mcqs, setMcqs] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const generate = async () => {
    if (!text.trim()) {
      setError("Please enter some text to generate MCQs");
      return;
    }

    setLoading(true);
    setError("");
    setMcqs("");

    try {
      const res = await generateMCQ(text);
      setMcqs(res.data.mcqs);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to generate MCQs. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const downloadMCQs = () => {
    const blob = new Blob([mcqs], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "generated-mcqs.txt";
    a.click();
    URL.revokeObjectURL(url);
  };

  const resetForm = () => {
    setText("");
    setMcqs("");
    setError("");
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
      
      {/* Header */}
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
          <Sparkles className="w-6 h-6 text-white" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-800">MCQ Generator</h2>
          <p className="text-sm text-gray-500">Create multiple-choice questions from your content</p>
        </div>
      </div>

      {/* Input Section */}
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Enter Your Text or Content
          </label>
          <textarea
            rows="8"
            value={text}
            onChange={(e) => {
              setText(e.target.value);
              setError("");
            }}
            placeholder="Paste your study material, notes, or any text content here. The AI will analyze it and generate relevant multiple-choice questions..."
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none resize-none transition-all"
          />
          <p className="text-xs text-gray-500 mt-2">
            Minimum 100 characters recommended for best results
          </p>
        </div>

        {/* Error Message */}
        {error && (
          <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm">
            {error}
          </div>
        )}

        {/* Generate Button */}
        <button
          onClick={generate}
          disabled={loading || !text.trim()}
          className="w-full bg-gradient-to-r from-orange-600 to-red-600 text-white py-3 rounded-xl font-semibold hover:from-orange-700 hover:to-red-700 focus:ring-4 focus:ring-orange-200 transition-all duration-200 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? (
            <>
              <Loader className="w-5 h-5 animate-spin" />
              <span>Generating MCQs...</span>
            </>
          ) : (
            <>
              <Sparkles className="w-5 h-5" />
              <span>Generate MCQs</span>
            </>
          )}
        </button>
      </div>

      {/* Results Section */}
      {mcqs && (
        <div className="mt-8 space-y-4 animate-fade-in">
          
          {/* Success Banner */}
          <div className="flex items-center space-x-3 p-4 bg-green-50 border border-green-200 rounded-xl">
            <CheckCircle className="w-5 h-5 text-green-600" />
            <p className="text-sm font-semibold text-green-700">
              MCQs generated successfully!
            </p>
          </div>

          {/* MCQs Display */}
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 relative">
            <pre className="text-sm text-gray-800 whitespace-pre-wrap font-mono leading-relaxed">
              {mcqs}
            </pre>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <button
              onClick={downloadMCQs}
              className="flex-1 bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 focus:ring-4 focus:ring-blue-200 transition-all duration-200 flex items-center justify-center space-x-2"
            >
              <Download className="w-5 h-5" />
              <span>Download MCQs</span>
            </button>

            <button
              onClick={resetForm}
              className="flex-1 bg-gray-200 text-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-300 focus:ring-4 focus:ring-gray-200 transition-all duration-200 flex items-center justify-center space-x-2"
            >
              <RefreshCw className="w-5 h-5" />
              <span>Generate New</span>
            </button>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.4s ease-out;
        }
      `}</style>
    </div>
  );
}

export default MCQGenerator;