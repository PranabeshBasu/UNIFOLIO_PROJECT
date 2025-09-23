import React, { useState, useRef, useEffect } from "react";

const CareerGuidance = () => {
  const [messages, setMessages] = useState([
    { from: "ai", text: "Hello! How can I help you with your career today?" },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMessage = { from: "user", text: input.trim() };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    // Simulate AI response
    setTimeout(() => {
      const aiMessage = { from: "ai", text: `This is AI guidance for: ${userMessage.text}` };
      setMessages((prev) => [...prev, aiMessage]);
      setLoading(false);
    }, 1000);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") sendMessage();
  };

  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-bold">AI Career Guidance</h2>

      <div className="bg-white p-4 rounded-xl shadow-md h-80 overflow-y-auto flex flex-col gap-2">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`p-2 rounded max-w-[75%] break-words ${
              msg.from === "ai" ? "bg-gray-100 self-start" : "bg-indigo-100 self-end"
            }`}
          >
            {msg.text}
          </div>
        ))}
        {loading && <div className="text-gray-500 italic">AI is typing...</div>}
        <div ref={messagesEndRef} />
      </div>

      <div className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Type a message..."
          className="flex-1 border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />
        <button
          onClick={sendMessage}
          className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition-colors"
        >
          Send
        </button>
      </div>
    </section>
  );
};

export default CareerGuidance;
