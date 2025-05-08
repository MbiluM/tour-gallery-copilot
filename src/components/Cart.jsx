import React from 'react';
import { useNavigate } from 'react-router-dom';

function Cart({ bookings }) {
  const navigate = useNavigate();

  // Calculate the total price of all bookings
  const totalCartPrice = bookings.reduce((total, booking) => total + booking.totalPrice, 0);

  if (bookings.length === 0) {
    return (
      <div className="cart">
        <h3>Your Cart</h3>
        <p>No bookings added yet.</p>
      </div>
    );
  }

  const handleConfirm = () => {
    navigate('/confirmation'); // Redirect to the Confirmation page
  };

  return (
    <div className="cart">
      <h3>Your Cart</h3>
      {bookings.map((booking, index) => (
        <div key={index} className="cart-item">
          <p><strong>Room:</strong> {booking.selectedRoom.name}</p>
          <p><strong>Check-In Date:</strong> {booking.checkInDate}</p>
          <p><strong>Check-Out Date:</strong> {booking.checkOutDate}</p>
          <p><strong>Total Price:</strong> R{booking.totalPrice}</p>
          <hr />
        </div>
      ))}
      {/* Display the total price of all bookings */}
      <h4><strong>Total Cart Price:</strong> R{totalCartPrice}</h4>
      <button onClick={handleConfirm}>Confirm Booking</button>
    </div>
  );
}

export default Cart;