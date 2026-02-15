export default function ChatLayout() {
  return (
   <main className="flex flex-col h-full bg-[#343541] text-[#ECECF1]">
      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto px-4 pt-28">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-2xl font-medium">AI Contact Center Agent</h1>
          <p className="mt-3 text-sm">How can I help you today?</p>
        </div>
      </div>

      {/* Floating Input Area */}
      <div className="px-4 pb-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center bg-[#40414F] rounded-[24px] px-2 py-1 min-h-[42px]">
            <textarea
              rows={1}
              placeholder="Message AI Contact Center..."
              className="flex-1 bg-transparent outline-none resize-none 
                   text-[10px] leading-[22px] 
                   placeholder:text-[#9CA3AF]"
            />

            <button className="ml-2 text-[#9CA3AF] hover:text-white transition">
              ➤
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
