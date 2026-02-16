"use client";

import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { ChatMessage } from "@/types/chat";
import MessageList from "./MessageList";
import ChatInput from "./ChatInput";
import useAutoScroll from "@/hooks/useAutoScroll";

export default function ChatLayout() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const bottomRef = useAutoScroll(messages);
  const [streamingId, setStreamingId] = useState<string | null>(null);

  const handleSend = (text: string) => {
    const userMessage: ChatMessage = {
      id: uuidv4(),
      role: "user",
      content: text,
    };

    const assistantId = uuidv4();

    const assistantMessage: ChatMessage = {
      id: assistantId,
      role: "assistant",
      content: "",
    };

    setMessages((prev) => [...prev, userMessage, assistantMessage]);
    setStreamingId(assistantId);

    const fullResponse = `
### Thank you for your message 👋

You said:

> ${text}

Our AI Contact Center Agent is reviewing your request.
  `;

    let index = 0;

    const interval = setInterval(() => {
      index++;

      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === assistantId
            ? { ...msg, content: fullResponse.slice(0, index) }
            : msg,
        ),
      );

      if (index >= fullResponse.length) {
        clearInterval(interval);
        setStreamingId(null);
      }
    }, 20);
  };

  return (
    <main className="flex flex-col h-full bg-[#212121] text-[#ECECF1]">
      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto">
        {messages.length === 0 ? (
          <div className="flex items-center justify-center h-full">
            <div className="text-center">
              <h1 className="text-[32px] font-semibold tracking-tight">
                AI Contact Center Agent
              </h1>
              <p className="mt-3 text-sm text-[#9CA3AF]">
                How can I help you today?
              </p>
            </div>
          </div>
        ) : (
          <MessageList messages={messages} streamingId={streamingId} />
        )}

        <div ref={bottomRef} />
      </div>
      {/* Floating Input Area */}
      <ChatInput onSend={handleSend} />
    </main>
  );
}
