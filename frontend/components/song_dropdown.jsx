import React from 'react';

const SongDropdown = () => {
  return (
    <ul className="song-dropdown">
      <li>

      <ul>
        <li>
          <button>Play</button>
        </li>

        <li>
          <button>Delete</button>
        </li>
      </ul>

      </li>
    </ul>
  );
};

export default SongDropdown;
