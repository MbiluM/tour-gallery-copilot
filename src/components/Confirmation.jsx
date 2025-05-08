import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Confirmation() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    idNumber: '',
    email: '',
    phone: '',
  });

  const [error, setError] = useState(''); // State to track validation errors
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Validate ID number length
    if (name === 'idNumber' && value.length > 13) {
      return; // Prevent input if length exceeds 13
    }

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate ID number length
    if (formData.idNumber.length !== 13) {
      setError('ID Number must be exactly 13 digits.');
      return;
    }

    // Clear any previous errors and redirect to the PayGate page
    setError('');
    navigate('/paygate');
  };

  return (
    <div className="confirmation">
      <h1>Confirmation</h1>
      <p>Please provide the following information to complete the booking.</p>
      <form onSubmit={handleSubmit} className="confirmation-form">
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="idNumber">ID Number:</label>
          <input
            type="text"
            id="idNumber"
            name="idNumber"
            value={formData.idNumber}
            onChange={handleChange}
            required
          />
        </div>
        {error && <p className="error">{error}</p>} {/* Display validation error */}
        <div>
          <label htmlFor="email">Email Address:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="phone">Phone Number:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Pay Now</button>
      </form>
    </div>
  );
}

export default Confirmation;