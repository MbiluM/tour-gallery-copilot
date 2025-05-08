import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import HouseCard from './components/HouseCard';
import Gallery from './components/Gallery';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Cart from './components/Cart';
import Confirmation from './components/Confirmation';
import PayGate from './components/PayGate';

function App() {
  const rooms = [
    {
      name: 'Main Bedroom',
      description: 'A luxurious room with a king-sized bed.',
      image: 'https://via.placeholder.com/300',
      price: 2900,
    },
    {
      name: 'Guest Room 1',
      description: 'A spacious room with a beautiful view.',
      image: 'https://via.placeholder.com/300',
      price: 2400,
    },
    {
      name: 'Guest Room 2',
      description: 'A cozy room perfect for relaxation.',
      image: 'https://via.placeholder.com/300',
      price: 2400,
    },
    {
      name: 'Guest Room 3',
      description: 'An elegant room with modern amenities.',
      image: 'https://via.placeholder.com/300',
      price: 2400,
    },
    {
      name: 'Entire House',
      description: 'Book the entire house for your stay.',
      image: 'https://via.placeholder.com/300',
      price: 10100,
    },
  ];

  const [cart, setCart] = useState([]); // Store multiple bookings in an array

  const handleAddToCart = (selectedRoom, checkInDate, checkOutDate, totalPrice) => {
    const newBooking = { selectedRoom, checkInDate, checkOutDate, totalPrice };
    setCart((prevCart) => [...prevCart, newBooking]); // Append the new booking to the cart
  };

  const handleConfirmBooking = () => {
    alert('Booking confirmed! Thank you for choosing The Randburg Residence.');
    setCart([]); // Clear the cart after confirmation
  };

  return (
    <Router>
      <div>
        {/* Navigation Bar */}
        <nav className="navbar">
          <ul>
            <li><Link to="/">Homepage</Link></li>
            <li><Link to="/book-now">Accommodations</Link></li>
            <li><Link to="/about-us">Overview</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/contact-us">Contact Us</Link></li>
          </ul>
        </nav>

        {/* Cart Display */}
        <Cart
          bookings={cart} // Pass the array of bookings to the Cart component
          onConfirm={handleConfirmBooking}
        />

        {/* Define Routes */}
        <Routes>
          <Route
            path="/"
            element={<h1>Welcome to Our Homepage</h1>}
          />
          <Route
            path="/book-now"
            element={
              <div>
                <HouseCard
                  name="Randburg Luxury Residence"
                  description="A luxurious mansion in Randburg, South Africa."
                  image="https://via.placeholder.com/300"
                  roomPrices={[2900, 2400, 2400, 2400]}
                  onBook={(selectedRoom, checkInDate, checkOutDate, totalPrice) =>
                    handleAddToCart(selectedRoom, checkInDate, checkOutDate, totalPrice)
                  }
                />
              </div>
            }
          />
          <Route
            path="/gallery"
            element={<Gallery rooms={rooms} />}
          />
          <Route
            path="/about-us"
            element={<AboutUs />}
          />
          <Route
            path="/contact-us"
            element={<ContactUs />}
          />
          <Route
            path="/confirmation"
            element={<Confirmation />}
          />
          <Route
            path="/paygate"
            element={<PayGate />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
