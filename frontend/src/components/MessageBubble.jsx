import { User, Bot, AlertCircle } from "lucide-react";

function MessageBubble({ role, content, error }) {
  const isUser = role === "user";

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"} animate-fade-in`}>
      <div
        className={`flex items-start space-x-3 max-w-[80%] ${
          isUser ? "flex-row-reverse space-x-reverse" : ""
        }`}
      >
        
        {/* Avatar */}
        <div
          className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
            isUser
              ? "bg-gradient-to-br from-blue-600 to-indigo-600"
              : "bg-gradient-to-br from-purple-600 to-pink-600"
          }`}
        >
          {isUser ? (
            <User className="w-5 h-5 text-white" />
          ) : (
            <Bot className="w-5 h-5 text-white" />
          )}
        </div>

        {/* Message Content */}
        <div
          className={`px-5 py-3 rounded-2xl shadow-sm ${
            isUser
              ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-tr-sm"
              : error
              ? "bg-red-50 text-red-700 border border-red-200 rounded-tl-sm"
              : "bg-white text-gray-800 border border-gray-200 rounded-tl-sm"
          }`}
        >
          {error && (
            <div className="flex items-center space-x-2 mb-2">
              <AlertCircle className="w-4 h-4" />
              <span className="text-xs font-semibold">Error</span>
            </div>
          )}
          
          <div className="whitespace-pre-wrap break-words leading-relaxed">
            {content || (
              <span className="inline-flex items-center space-x-1">
                <span className="w-2 h-2 bg-current rounded-full animate-bounce"></span>
                <span className="w-2 h-2 bg-current rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></span>
                <span className="w-2 h-2 bg-current rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></span>
              </span>
            )}
          </div>
        </div>
      </div>

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
          animation: fade-in 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}

export default MessageBubble;