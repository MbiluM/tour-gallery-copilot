import React from 'react'; // Import React library
import TourCard from './TourCard'; // Import the TourCard component to display individual tour cards

function Gallery({ tours, onRemove }) { // Gallery component to display a list of tours
  return ( 
    <div className="tours-container"> 
      {tours.map((tour) => (
        <TourCard
          key={tour.id}
          id={tour.id}
          name={tour.name}
          info={tour.info}
          image={tour.image}
          price={tour.price}
          onRemove={onRemove}
        />
      ))}
    </div>
  );
}

export default Gallery; // Export the Gallery component to be used in other parts of the app