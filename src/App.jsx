import { useState, useEffect } from 'react'; // Import React hooks for state and effect management
import './App.css'; // Import the CSS file for styling
import Gallery from './components/Gallery'; // Import the Gallery component to display the list of tours

function App() { // Main App component
  const [tours, setTours] = useState([]); // State to manage the list of tours
  const [loading, setLoading] = useState(true); // State to manage the loading state
  const [error, setError] = useState(null);  // State to manage the list of tours, loading state, and error state

  const fetchTours = async () => { // Function to fetch tours from the API
    setLoading(true); // Set loading to true before fetching
    setError(null); // Reset error before fetching
    try {
      const response = await fetch('https://www.course-api.com/react-tours-project');
      if (!response.ok) {
        throw new Error(`Failed to fetch tours: ${response.statusText}`); // If the response is not ok, throw an error
      }
      const data = await response.json(); // Parse the JSON response
      setTours(data);      // Update the tours state with the fetched data
    } catch (err) {
      setError(err.message || 'Something went wrong while fetching tours.');// If an error occurs, update the error state with the error message
    } finally {
      setLoading(false);// Set loading to false after the fetch is complete (success or failure)

    }
  };
  // useEffect to fetch tours when the component mounts
  useEffect(() => {
    fetchTours();
  }, []);
  // Function to remove a tour from the list
  // Accepts the `id` of the tour to be removed
  const removeTour = (id) => {
    setTours(tours.filter((tour) => tour.id !== id));
  };
  // Conditional rendering: If the app is in the loading state, display a loading message
  if (loading) {
    return <h2>Loading...</h2>;
  }
  // Conditional rendering: If there is an error, display the error message and a retry button
  if (error) {
    return (
      <div>
        <h2>Error: {error}</h2>
        <button onClick={fetchTours} className="refresh-button">
          Refresh
        </button>
      </div>
    );
  }
  // Conditional rendering: If no tours are left, display a message and a refresh button
  if (tours.length === 0) {
    return (
      <div>
        <h2>No Tours Left</h2>
        <button onClick={fetchTours} className="refresh-button">
          Refresh
        </button>
      </div>
    );
  }
  // Render the Gallery component with the list of tours
  return (
    <div>
      <h1>Our Tours</h1>
      <Gallery tours={tours} onRemove={removeTour} />
    </div>
  );
}

export default App; // Export the App component as the default export

