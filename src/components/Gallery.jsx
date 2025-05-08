import React, { useState } from 'react';

function Gallery({ rooms }) {
  const [selectedRoom, setSelectedRoom] = useState(null); // State to track the selected room

  return (
    <div className="gallery">
      <h1>Gallery</h1>
      <div className="gallery-grid">
        {rooms.map((room, index) => (
          <div
            key={index}
            className="gallery-item"
            onClick={() => setSelectedRoom(room)} // Set the selected room on click
          >
            <img src={room.image} alt={room.name} />
            <h3>{room.name}</h3>
            <p>Price: R{room.price}</p> {/* Display price in South African Rand */}
          </div>
        ))}
      </div>

      {/* Display selected room details */}
      {selectedRoom && (
        <div className="selected-room">
          <h2>{selectedRoom.name}</h2>
          <img src={selectedRoom.image} alt={selectedRoom.name} />
          <p>{selectedRoom.description}</p>
          <p>Price: R{selectedRoom.price}</p> {/* Display price in South African Rand */}
        </div>
      )}
    </div>
  );
}

export default Gallery;