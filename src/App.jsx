import React, { useState } from "react";
import {
  HomeIcon,
  MagnifyingGlassIcon as SearchIcon,
  RectangleStackIcon as LibraryIcon,
  PlusIcon,
  HeartIcon,
  ArrowsRightLeftIcon as ShuffleIcon,
  ArrowPathIcon as RepeatIcon,
  BackwardIcon,
  PlayIcon,
  PauseIcon,
  ForwardIcon,
  SpeakerWaveIcon,
  DeviceTabletIcon as DeviceIcon,
  QueueListIcon as QueueIcon,
  BellIcon,
  ArrowDownTrayIcon as DownloadIcon,
} from "@heroicons/react/24/outline";

export default function SpotifyClone() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeTab, setActiveTab] = useState("All");

  const playlists = [
    "most depressing songs to ever exist",
    "Peaceful Mix",
    "wash.",
    "Bossa Nova Jazz Mix",
    "أحزان عمرو دياب❤️",
    "Arabic Coffee",
    "Bossa Nova",
    "sexy indie",
    "when you try your best but you don't succeed",
  ];



  return (
    <div className="flex flex-col h-screen bg-[#121212] text-white font-[circular] selection:bg-[#1ed760]/20">
      {/* HEADER */}
      <header className="sticky top-0 z-40 backdrop-blur-md bg-gradient-to-r from-[#000000]/80 via-[#0f0f0f]/80 to-[#000000]/60 shadow-md shadow-black/30">
        <div className="flex items-center justify-between px-6 py-3">
          <div className="flex items-center gap-4">
            <img src="/src/assets/Spotify Icons.png" alt="Spotify" className="w-8 h-8" />
            <button className="p-2 rounded-full bg-black/40 hover:bg-black/60 focus:ring-2 focus:ring-offset-2 focus:ring-[#1ed760]">
              <HomeIcon className="w-5 h-5" />
            </button>
            <div className="flex items-center bg-black/40 px-3 py-1 rounded-full w-[260px] focus-within:ring-2 focus-within:ring-[#1ed760]">
              <SearchIcon className="w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="What do you want to play?"
                className="ml-2 flex-1 bg-transparent placeholder-gray-500 text-sm focus:outline-none"
              />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 rounded-full hover:bg-black/40 focus:ring-2 focus:ring-offset-2 focus:ring-[#1ed760]">
              <DownloadIcon className="w-5 h-5" />
            </button>
            <button className="p-2 rounded-full hover:bg-black/40 focus:ring-2 focus:ring-offset-2 focus:ring-[#1ed760]">
              <BellIcon className="w-5 h-5" />
            </button>
            <img src="/src/assets/IMG_20240829_092143_410~4.JPG" alt="Profile" className="w-8 h-8 rounded-full ring-2 ring-transparent hover:ring-[#1ed760] transition" />
          </div>
        </div>
      </header>

      {/* BODY WRAPPER */}
      <div className="flex flex-1 overflow-hidden">
        {/* LEFT SIDEBAR */}
        <aside className="w-64 bg-[#040404] pt-6 flex flex-col overflow-y-auto scrollbar-thin scrollbar-thumb-[#333] scrollbar-track-transparent">
          <h2 className="px-6 text-2xl font-bold mb-6">Moods !!</h2>
          <div className="flex items-center gap-2 px-6 mb-4 text-sm text-gray-400 cursor-pointer hover:text-white">
            <SearchIcon className="w-4 h-4" />
            <span>Search</span>
          </div>
          <nav className="px-2 space-y-1 pb-6">
            {playlists.map((pl) => (
              <button
                key={pl}
                className="group w-full flex items-center gap-3 p-2 rounded hover:bg-white/5 focus:bg-white/10 focus:outline-none"
              >
                <div className="w-8 h-8 bg-white/10 rounded overflow-hidden group-hover:ring-1 group-hover:ring-white/30" />
                <span className="truncate text-sm text-gray-300 group-hover:text-white text-left">{pl}</span>
              </button>
            ))}
          </nav>
        </aside>

        {/* MAIN CONTENT */}
        <main className="flex-1 overflow-y-auto px-8 py-6 scrollbar-thin scrollbar-thumb-[#333] scrollbar-track-transparent smooth-scroll">
          {/* Tabs */}
          <div className="flex items-center gap-3 mb-8">
            {['All', 'Music', 'Podcasts'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-1.5 rounded-full text-sm transition-colors ${
                  activeTab === tab
                    ? `bg-white text-black font-medium`
                    : 'bg-white/10 hover:bg-white/20 text-gray-300'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Quick Links */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-10">
            {[
              'Liked Songs',
              '3am depression wave',
              'My Shazam Tracks',
              'CAS',
              'This Is Amr Diab',
              'الرجل الذي فقد قلبه',
              'most depressing songs to ever exist',
              'This Is Bahaa Sultan',
            ].map((item, idx) => (
              <div
                key={idx}
                className="relative group bg-[#181818] rounded-lg overflow-hidden hover:brightness-110 transition duration-200"
              >
                <span className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition" />
                <p className="p-4 text-sm font-medium truncate relative z-10">{item}</p>
              </div>
            ))}
          </div>

          {/* Picked For You */}
          <h3 className="text-2xl font-semibold mb-6">Picked for you</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 pb-10">
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="group bg-[#181818] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative">
                  <img
                    src={`https://picsum.photos/seed/pick${i}/400`}
                    alt="Picked"
                    className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"/>
                  <button className="absolute bottom-3 right-3 p-3 bg-[#1ed760] text-black rounded-full opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-2 transition-all">
                    <PlayIcon className="w-5 h-5" />
                  </button>
                </div>
                <div className="p-4 space-y-1">
                  <p className="font-medium truncate">Pop Rising</p>
                  <p className="text-xs text-gray-400 truncate">Who’s now and next in pop…</p>
                </div>
              </div>
            ))}
          </div>
        </main>

        {/* RIGHT SIDEBAR */}
        <aside className="w-80 bg-[#040404] pt-6 px-6 hidden xl:block overflow-y-auto scrollbar-thin scrollbar-thumb-[#333]">
          <h3 className="text-sm uppercase text-gray-400 mb-4">Liked Songs</h3>
          <div className="bg-[#181818] rounded-lg overflow-hidden mb-6 shadow-lg shadow-black/40">
            <img src="https://picsum.photos/seed/liked/400" alt="Liked" className="w-full h-48 object-cover" />
          </div>
          <h4 className="text-lg font-bold mb-1">El Hawa Sultan</h4>
          <p className="text-sm text-gray-400 mb-4">George Wassouf</p>
          <div className="space-y-2 text-sm">
            {[
              { label: 'George Wassouf', role: 'Main Artist' },
              { label: 'George Yazbak', role: 'Composer' },
              { label: "Bad'i Yazbek", role: 'Author' },
            ].map(({ label, role }) => (
              <div key={label} className="flex justify-between">
                <span>{label}</span>
                <span className="text-gray-500">{role}</span>
              </div>
            ))}
            <button className="block mt-4 text-sm text-[#1ed760] hover:underline">Unfollow</button>
          </div>
        </aside>
      </div>

      {/* FOOTER PLAYER */}
      <footer className="relative bg-[#181818] shadow-inner shadow-black/50">
        {/* progress */}
        <div className="absolute inset-x-0 top-0 h-0.5 bg-[#1ed760]" style={{ width: '45%' }} />
        <div className="flex items-center justify-between px-4 py-3 text-sm">
          {/* Track */}
          <div className="flex items-center gap-4 w-64 min-w-0">
            <img src="https://picsum.photos/seed/current/56" alt="track" className="w-14 h-14 rounded-sm shadow-md" />
            <div className="min-w-0">
              <p className="truncate">El Hawa Sultan</p>
              <p className="truncate text-gray-400 text-xs">George Wassouf</p>
            </div>
            <HeartIcon className="w-5 h-5 text-[#1ed760] cursor-pointer" />
          </div>

          {/* Controls */}
          <div className="flex flex-col items-center gap-2">
            <div className="flex items-center gap-5">
              <ShuffleIcon className="w-5 h-5 cursor-pointer hover:text-[#1ed760]" />
              <BackwardIcon className="w-5 h-5 cursor-pointer hover:text-[#1ed760]" />
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="p-2 bg-white text-black rounded-full hover:scale-105 active:scale-95 transition-transform shadow-md"
              >
                {isPlaying ? <PauseIcon className="w-6 h-6" /> : <PlayIcon className="w-6 h-6" />}
              </button>
              <ForwardIcon className="w-5 h-5 cursor-pointer hover:text-[#1ed760]" />
              <RepeatIcon className="w-5 h-5 cursor-pointer hover:text-[#1ed760]" />
            </div>
            <div className="flex items-center gap-2 text-xs text-gray-400">
              <span>1:09</span>
              <div className="relative w-72">
                <input
                  type="range"
                  min="0"
                  max="100"
                  className="w-full h-1 appearance-none bg-gray-600 rounded-full accent-[#1ed760] cursor-pointer hover:h-1.5"
                />
              </div>
              <span>7:02</span>
            </div>
          </div>

          {/* Utilities */}
          <div className="flex items-center gap-4 w-80 justify-end">
            <QueueIcon className="w-5 h-5 cursor-pointer hover:text-[#1ed760]" />
            <DeviceIcon className="w-5 h-5 cursor-pointer hover:text-[#1ed760]" />
            <SpeakerWaveIcon className="w-5 h-5" />
            <input
              type="range"
              min="0"
              max="100"
              className="h-1 w-24 appearance-none bg-gray-600 rounded-full accent-[#1ed760] cursor-pointer hover:h-1.5"
            />
          </div>
        </div>
        <div className="bg-[#1ed760] text-black text-center text-xs py-1 font-medium">Playing on Adhom’s MacBook Air</div>
      </footer>
    </div>
  );
}