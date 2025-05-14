import React, { useState } from 'react';

function HouseCard({ name, description, image, roomPrices, onBook }) {
  const [selectedRoom, setSelectedRoom] = useState(null); // Selected room index
  const [checkInDate, setCheckInDate] = useState(''); // Check-in date
  const [checkOutDate, setCheckOutDate] = useState(''); // Check-out date
  const [bookEntireHouse, setBookEntireHouse] = useState(false); // Whether the entire house is booked
  const [isAddedToCart, setIsAddedToCart] = useState(false); // Track if the room is added to the cart

  // Get today's date in YYYY-MM-DD format
  const getTodayDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Add leading zero
    const day = String(today.getDate()).padStart(2, '0'); // Add leading zero
    return `${year}-${month}-${day}`;
  };

  // Calculate the number of days based on the check-in and check-out dates
  const calculateDays = () => {
    if (checkInDate && checkOutDate) {
      const checkIn = new Date(checkInDate);
      const checkOut = new Date(checkOutDate);
      const differenceInTime = checkOut - checkIn;
      const differenceInDays = differenceInTime / (1000 * 3600 * 24); // Convert milliseconds to days
      return differenceInDays > 0 ? differenceInDays : 0; // Ensure days are positive
    }
    return 0; // Default to 0 if dates are not selected
  };

  // Calculate the total price
  const calculateTotalPrice = () => {
    const days = calculateDays(); // Get the number of days
    if (bookEntireHouse) {
      // If booking the entire house, sum all room prices and multiply by days
      return roomPrices.reduce((total, price) => total + price, 0) * days;
    } else if (selectedRoom !== null) {
      // Multiply the price of the selected room by the number of days
      return roomPrices[selectedRoom] * days;
    }
    return 0; // Default to 0 if no room is selected
  };

  // Handle adding to cart
  const handleAddToCart = () => {
    const totalPrice = calculateTotalPrice();
    const days = calculateDays();
    if (days === 0 || (!bookEntireHouse && selectedRoom === null)) {
      alert('Please select valid check-in and check-out dates and a room or choose to book the entire house.');
      return;
    }
    const selectedRoomDetails = bookEntireHouse
      ? { name: 'Entire House', price: roomPrices.reduce((total, price) => total + price, 0) }
      : { name: `Room ${selectedRoom + 1}`, price: roomPrices[selectedRoom] };

    onBook(selectedRoomDetails, checkInDate, checkOutDate, totalPrice);
    setIsAddedToCart(true); // Mark as added to cart
    alert('Added to cart!');
  };

  // Handle resetting the form for a new booking
  const handleContinueBooking = () => {
    setSelectedRoom(null);
    setCheckInDate('');
    setCheckOutDate('');
    setBookEntireHouse(false);
    setIsAddedToCart(false); // Reset the button state
  };

  return (
    <div className="house-card">
      <img src={image} alt={name} className="house-image" />
      <div className="house-details">
        <h2>{name}</h2>
        <p>{description}</p>

        {/* Calendar for selecting check-in and check-out dates */}
        <div>
          <label>Check-In Date:</label>
          <input
            type="date"
            value={checkInDate}
            min={getTodayDate()} // Restrict to today or future dates
            onChange={(e) => setCheckInDate(e.target.value)}
          />
        </div>
        <div>
          <label>Check-Out Date:</label>
          <input
            type="date"
            value={checkOutDate}
            min={checkInDate || getTodayDate()} // Restrict to check-in date or future dates
            onChange={(e) => setCheckOutDate(e.target.value)}
          />
        </div>

        {/* Display the number of days selected */}
        <div>
          <h4>Number of Days: {calculateDays()}</h4>
        </div>

        {/* Room selection */}
        <div>
          <label>Select Room:</label>
          <select
            value={selectedRoom}
            onChange={(e) => setSelectedRoom(parseInt(e.target.value))}
            disabled={bookEntireHouse} // Disable room selection if booking the entire house
          >
            <option value={null}>Select a Room</option>
            {roomPrices.map((price, index) => (
              <option key={index} value={index}>
                Room {index + 1} - R{price} per night
              </option>
            ))}
          </select>
        </div>

        {/* Book entire house option */}
        <div>
          <label>
            <input
              type="checkbox"
              checked={bookEntireHouse}
              onChange={(e) => {
                setBookEntireHouse(e.target.checked);
                if (e.target.checked) setSelectedRoom(null); // Reset selected room if booking the entire house
              }}
            />
            Book Entire House
          </label>
        </div>

        {/* Display total price */}
        <h3>Total Price: R{calculateTotalPrice()}</h3>

        {/* Add to Cart or Continue Booking button */}
        {isAddedToCart ? (
          <button onClick={handleContinueBooking}>Continue Booking</button>
        ) : (
          <button onClick={handleAddToCart}>Add to Cart</button>
        )}
      </div>
    </div>
  );
}

export default HouseCard;