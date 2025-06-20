import React from "react";

export default function Home() {
  return (
    <main className="flex h-screen w-screen">
      {/* DAW 편집 영역 */}
      <section className="w-[70%] h-full bg-gray-900 flex items-center justify-center">
        <div className="text-white text-2xl font-bold">DAW 편집 영역 (오디오 트랙, 이펙트 등)</div>
      </section>
      {/* GPT 채팅창 */}
      <aside className="w-[30%] h-full bg-white border-l border-gray-300 flex flex-col">
        <div className="flex-1 flex flex-col p-6">
          <div className="text-gray-900 text-xl font-semibold mb-4">GPT 채팅창</div>
          <div className="flex-1 bg-gray-100 rounded p-4 mb-4 overflow-y-auto">채팅 메시지 영역</div>
          <form className="flex gap-2">
            <input
              type="text"
              className="flex-1 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="GPT에게 오디오 편집을 요청해보세요..."
              disabled
            />
            <button
              type="button"
              className="bg-blue-500 text-white px-4 py-2 rounded font-semibold opacity-50 cursor-not-allowed"
              disabled
            >
              전송
            </button>
          </form>
        </div>
      </aside>
    </main>
  );
}
