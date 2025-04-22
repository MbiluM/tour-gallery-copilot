import React from 'react'; // Import React library

function TourCard({ id, name, info, image, price, onRemove }) { 
  // TourCard component to display individual tour details
  return ( // Add the return statement to render the JSX
    <div className="tour-card">
      {/* Display the tour image */}
      <img src={image} alt={name} className="tour-image" />
      
      {/* Display the tour details */}
      <div className="tour-details">
        <h2>{name}</h2> {/* Display the tour name */}
        <p>{info}</p> {/* Display the tour description */}
        <h3>${price}</h3> {/* Display the tour price */}
        
        {/* Button to remove the tour */}
        <button onClick={() => onRemove(id)}>Not Interested</button>
      </div>
    </div>
  );
}

export default TourCard; // Export the TourCard component to be used in other parts of the app
