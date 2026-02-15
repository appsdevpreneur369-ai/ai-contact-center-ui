"use client"

import Sidebar from "@/components/layout/Sidebar"
import ChatLayout from "@/components/chat/ChatLayout"

export default function Home() {

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-[#343541] text-[#ECECF1]">

      <Sidebar/>
      <div className="flex-1 relative">
        <ChatLayout />
      </div>
    </div>
  )
}
