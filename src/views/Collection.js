import { useState } from "react";
import Section from "components/Section";

function Collection() {
  const [activeTab, setActiveTab] = useState("playlists");

  // Custom library data
  const libraryPlaylists = [
    {
      id: 1,
      title: "Chill Vibes",
      description: "Relaxing tunes for your downtime",
      artist: "Alex Morgan",
      image:
        "https://images.unsplash.com/photo-1483412033650-1015ddeb83d1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      type: "album",
    },
    {
      id: 2,
      title: "Workout Mix",
      description: "High energy tracks to keep you motivated",
      artist: "Fitness Guru",
      image:
        "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      type: "album",
    },
    {
      id: 3,
      title: "Indie Discoveries",
      description: "Fresh indie tracks you'll love",
      artist: "Various Artists",
      image:
        "https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      type: "album",
    },
    {
      id: 4,
      title: "Jazz Classics",
      description: "Timeless jazz standards",
      artist: "Jazz Masters",
      image:
        "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      type: "album",
    },
    {
      id: 5,
      title: "Study Focus",
      description: "Concentration-enhancing instrumentals",
      artist: "Study Beats",
      image:
        "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      type: "album",
    },
  ];

  const libraryArtists = [
    {
      id: 1,
      title: "Emma Davis",
      description: "Artist",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      type: "artist",
    },
    {
      id: 2,
      title: "The Soundwaves",
      description: "Artist",
      image:
        "https://images.unsplash.com/photo-1501612780327-45045538702b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      type: "artist",
    },
    {
      id: 3,
      title: "Marcus Lee",
      description: "Artist",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      type: "artist",
    },
  ];

  const libraryPodcasts = [
    {
      id: 1,
      title: "Tech Today",
      description: "Latest in technology news",
      artist: "Sarah Chen",
      image:
        "https://images.unsplash.com/photo-1589903308904-1010c2294adc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      type: "podcast",
    },
    {
      id: 2,
      title: "Mindful Moments",
      description: "Daily meditation and mindfulness",
      artist: "Zen Master",
      image:
        "https://images.unsplash.com/photo-1508672019048-805c876b67e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      type: "podcast",
    },
  ];

  return (
    <div className="grid gap-y-8">
      <div className="border-b border-white border-opacity-20 mb-4">
        <nav className="flex gap-x-4 pb-1">
          <button
            className={`font-semibold text-sm ${
              activeTab === "playlists"
                ? "text-white border-b-2 border-white"
                : "text-link hover:text-white"
            } pb-3`}
            onClick={() => setActiveTab("playlists")}
          >
            Playlists
          </button>
          <button
            className={`font-semibold text-sm ${
              activeTab === "artists"
                ? "text-white border-b-2 border-white"
                : "text-link hover:text-white"
            } pb-3`}
            onClick={() => setActiveTab("artists")}
          >
            Artists
          </button>
          <button
            className={`font-semibold text-sm ${
              activeTab === "podcasts"
                ? "text-white border-b-2 border-white"
                : "text-link hover:text-white"
            } pb-3`}
            onClick={() => setActiveTab("podcasts")}
          >
            Podcasts
          </button>
        </nav>
      </div>

      {activeTab === "playlists" && (
        <Section title="Your Playlists" items={libraryPlaylists} />
      )}

      {activeTab === "artists" && (
        <Section title="Artists You Follow" items={libraryArtists} />
      )}

      {activeTab === "podcasts" && (
        <Section title="Your Podcasts" items={libraryPodcasts} />
      )}
    </div>
  );
}

export default Collection;
