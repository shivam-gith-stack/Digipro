import { useState } from "react";
import { X, MessageSquare, Send } from "lucide-react";
import axios from "axios";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Hi 👋! What can I help you with today?" },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { role: "user", content: input };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await axios.post("https://digipro-2.onrender.com/api/chat", {
        messages: updatedMessages,
      });

      const reply = res.data.reply || "Sorry, I couldn't understand that.";
      setMessages([...updatedMessages, { role: "assistant", content: reply }]);
    } catch (error) {
      console.error("Chat error:", error);
      setMessages([
        ...updatedMessages,
        { role: "assistant", content: "Error: Unable to connect to the chatbot." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* 🟡 Floating Chat Bubble — Slightly Down from Top-Right */}
      {!isOpen && (
        <div
          onClick={() => setIsOpen(true)}
          className="fixed z-[9999] cursor-pointer group transition-all duration-300
          top-20 right-6
          w-68 sm:w-72 bg-gradient-to-br from-amber-500 to-orange-600 text-white 
          rounded-2xl rounded-br-none p-4 shadow-2xl border border-white/20 relative
          hover:shadow-[0_0_25px_rgba(245,158,11,0.5)] hover:scale-105"
          style={{ position: 'fixed' }}
        >
          {/* Message bubble tail */}
          <div className="absolute -bottom-2 right-0 w-4 h-4 bg-amber-500 transform rotate-45"></div>
          
          <div className="flex items-start gap-3 relative z-10">
            <div className="bg-white/20 p-2 rounded-full">
              <MessageSquare size={20} className="text-white" />
            </div>
            <div className="flex-1">
              <p className="font-semibold text-base">Lumivex Assistant</p>
              <p className="text-xs text-white/90 leading-snug mt-1">
                Chat with us! We're here to help 🚀
              </p>
            </div>
          </div>
        </div>
      )}

      {/* 💬 Chat Window — Slightly Down from Top-Right */}
      {isOpen && (
        <div
          className="fixed z-[9999] bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col
          top-20 right-6 w-80 max-w-[90vw] h-96"
          style={{ position: 'fixed' }}
        >
          {/* Header */}
          <div className="bg-gradient-to-br from-amber-500 to-orange-600 text-white p-4 rounded-t-2xl flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="bg-white/20 p-1 rounded-full">
                <MessageSquare size={16} className="text-white" />
              </div>
              <h2 className="font-semibold text-base">Lumivex Assistant</h2>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="hover:bg-white/20 p-1 rounded-full transition"
            >
              <X size={18} className="text-white" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`p-3 rounded-2xl max-w-[80%] ${
                    msg.role === "user"
                      ? "bg-gradient-to-br from-amber-500 to-orange-500 text-white rounded-br-none"
                      : "bg-white border border-gray-200 text-gray-800 rounded-tl-none shadow-sm"
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-white border border-gray-200 rounded-2xl rounded-tl-none p-3 shadow-sm">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-amber-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-amber-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-amber-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-3 border-t border-gray-200 bg-white rounded-b-2xl">
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="Type your message..."
                className="flex-1 border border-gray-300 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                disabled={loading}
              />
              <button
                onClick={handleSend}
                disabled={loading || !input.trim()}
                className="bg-gradient-to-br from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 disabled:from-gray-400 disabled:to-gray-400 text-white p-2 rounded-xl transition-all duration-200 disabled:cursor-not-allowed"
              >
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );  
};

export default Chatbot;
