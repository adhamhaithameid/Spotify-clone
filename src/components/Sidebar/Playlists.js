function Playlists() {
  // Custom playlist names
  const playlists = [
    "Morning Coffee",
    "Workout Motivation",
    "Chill Evening",
    "Road Trip Mix",
    "90s Throwbacks",
    "Study Session",
    "Party Anthems",
    "Acoustic Covers",
    "Running Playlist",
    "Relaxing Jazz",
    "Indie Discoveries",
    "Coding Focus",
  ];

  return (
    <nav className="mx-6 mt-2 py-2 flex-auto border-t border-white border-opacity-20 overflow-auto">
      <ul>
        {playlists.map((playlist, index) => (
          <li key={index}>
            <a
              href="#"
              className="text-s text-link hover:text-white flex h-8 items-center"
            >
              {playlist}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Playlists;
