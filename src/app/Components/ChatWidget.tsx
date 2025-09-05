// src/app/components/ChatWidget.tsx
"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { XMarkIcon, ChatBubbleLeftRightIcon, PaperAirplaneIcon } from "@heroicons/react/24/solid";

interface Message {
  id: number;
  text: string;
  sender: "user" | "bot";
}

const autoReplies = [
  "Hi there! 👋 How can I assist you today?",
  "Our doctors are available 24/7. Would you like to book an appointment?",
  "We provide world-class healthcare facilities 🏥",
  "Thank you for reaching out! We'll get back to you shortly 🙌"
];

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const chatEndRef = useRef<HTMLDivElement | null>(null);

  // Auto scroll to bottom when messages update
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = () => {
    if (input.trim() === "") return;

    const newMessage: Message = {
      id: Date.now(),
      text: input,
      sender: "user"
    };

    setMessages(prev => [...prev, newMessage]);
    setInput("");

    // Auto-reply after 1.5 seconds
    setTimeout(() => {
      const randomReply = autoReplies[Math.floor(Math.random() * autoReplies.length)];
      const botMessage: Message = {
        id: Date.now(),
        text: randomReply,
        sender: "bot"
      };
      setMessages(prev => [...prev, botMessage]);
    }, 1500);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  return (
    <>
      {/* Floating Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg transition-colors z-50"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <ChatBubbleLeftRightIcon className="h-6 w-6" />
      </motion.button>

      {/* Chat Popup */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-20 right-6 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl z-50 flex flex-col border border-gray-200"
          >
            {/* Header */}
            <div className="flex justify-between items-center bg-blue-600 text-white px-4 py-3 rounded-t-2xl">
              <h3 className="font-semibold text-lg">HealthPlus Support</h3>
              <button onClick={() => setIsOpen(false)}>
                <XMarkIcon className="h-6 w-6" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 overflow-y-auto max-h-80 bg-gray-50">
              {messages.length === 0 ? (
                <p className="text-center text-gray-400">Start a conversation 👋</p>
              ) : (
                messages.map(msg => (
                  <div
                    key={msg.id}
                    className={`mb-3 flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`px-4 py-2 rounded-2xl max-w-xs text-sm ${
                        msg.sender === "user"
                          ? "bg-blue-600 text-white rounded-br-none"
                          : "bg-gray-200 text-gray-800 rounded-bl-none"
                      }`}
                    >
                      {msg.text}
                    </div>
                  </div>
                ))
              )}
              <div ref={chatEndRef} />
            </div>

            {/* Input */}
            <div className="flex items-center p-3 border-t border-gray-200">
              <input
                type="text"
                placeholder="Type a message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className="flex-1 px-3 py-2 text-sm border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                onClick={sendMessage}
                className="ml-2 bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full transition-colors"
              >
                <PaperAirplaneIcon className="h-5 w-5 rotate-45" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatWidget;
