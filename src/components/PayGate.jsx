import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function PayGate({ clearCart }) {
  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardHolderName: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPaymentDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handlePayment = (e) => {
    e.preventDefault();
    alert('Payment successful! Thank you for your booking.');
    clearCart(); // Clear the cart
    navigate('/'); // Redirect to the homepage
    window.location.reload(); // Refresh the page
  };

  return (
    <div className="paygate">
      <h1>Payment Gateway</h1>
      <p>Please enter your payment details to complete the booking.</p>
      <form onSubmit={handlePayment} className="payment-form">
        <div>
          <label htmlFor="cardHolderName">Cardholder Name:</label>
          <input
            type="text"
            id="cardHolderName"
            name="cardHolderName"
            value={paymentDetails.cardHolderName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="cardNumber">Card Number:</label>
          <input
            type="text"
            id="cardNumber"
            name="cardNumber"
            value={paymentDetails.cardNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="expiryDate">Expiry Date:</label>
          <input
            type="text"
            id="expiryDate"
            name="expiryDate"
            placeholder="MM/YY"
            value={paymentDetails.expiryDate}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="cvv">CVV:</label>
          <input
            type="text"
            id="cvv"
            name="cvv"
            value={paymentDetails.cvv}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Complete Payment</button>
      </form>
    </div>
  );
}

export default PayGate;