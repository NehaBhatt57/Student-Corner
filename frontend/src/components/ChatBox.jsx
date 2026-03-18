import { useState, useRef, useEffect } from "react";
import { streamQuestion } from "../services/api";
import MessageBubble from "./MessageBubble";
import { Send, Sparkles, Loader } from "lucide-react";

function ChatBox() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isStreaming, setIsStreaming] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim() || isStreaming) return;

    const userMessage = {
      role: "user",
      content: input,
    };

    const updated = [...messages, userMessage];
    setMessages(updated);

    const aiMessage = {
      role: "assistant",
      content: "",
    };

    setMessages([...updated, aiMessage]);
    setInput("");
    setIsStreaming(true);

    try {
      await streamQuestion(input, (chunk) => {
        setMessages((prev) => {
          const last = prev[prev.length - 1];
          const updatedLast = {
            ...last,
            content: last.content + chunk,
          };
          return [...prev.slice(0, -1), updatedLast];
        });
      });
    } catch (error) {
      setMessages((prev) => {
        const last = prev[prev.length - 1];
        const updatedLast = {
          ...last,
          content: "Sorry, I encountered an error. Please try again.",
          error: true,
        };
        return [...prev.slice(0, -1), updatedLast];
      });
    } finally {
      setIsStreaming(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg flex flex-col h-[600px] border border-gray-100 overflow-hidden">
      
      {/* Header */}
      <div className="p-5 border-b border-gray-100 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="font-bold text-gray-800 text-lg">AI Assistant</h3>
            <p className="text-xs text-gray-500">Ask me anything about your PDF</p>
          </div>
        </div>
      </div>

      {/* Messages Container */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-gray-50">
        {messages.length === 0 ? (
          <div className="flex items-center justify-center h-full">
            <div className="text-center space-y-3 max-w-md">
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full flex items-center justify-center">
                <Sparkles className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="font-semibold text-gray-700 text-lg">Start a Conversation</h4>
              <p className="text-sm text-gray-500">
                Upload a PDF and ask questions to get instant AI-powered answers
              </p>
            </div>
          </div>
        ) : (
          <>
            {messages.map((msg, index) => (
              <MessageBubble
                key={index}
                role={msg.role}
                content={msg.content}
                error={msg.error}
              />
            ))}
            <div ref={messagesEndRef} />
          </>
        )}
      </div>

      {/* Input Area */}
      <div className="p-4 border-t border-gray-100 bg-white">
        <div className="flex gap-3">
          <div className="flex-1 relative">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask about your PDF..."
              rows="1"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none transition-all"
              style={{ minHeight: '48px', maxHeight: '120px' }}
            />
          </div>

          <button
            onClick={sendMessage}
            disabled={!input.trim() || isStreaming}
            className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 focus:ring-4 focus:ring-blue-200 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
          >
            {isStreaming ? (
              <Loader className="w-5 h-5 animate-spin" />
            ) : (
              <Send className="w-5 h-5" />
            )}
          </button>
        </div>

        <p className="text-xs text-gray-500 mt-2 text-center">
          Press Enter to send • Shift + Enter for new line
        </p>
      </div>
    </div>
  );
}

export default ChatBox;