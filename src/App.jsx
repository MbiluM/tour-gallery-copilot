import { useState, useEffect } from 'react';
import './App.css';
import Gallery from './components/Gallery';

function App() {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchTours = async () => {
    setLoading(true);
    setError(null); // Reset error before fetching
    try {
      const response = await fetch('https://www.course-api.com/react-tours-project');
      if (!response.ok) {
        throw new Error(`Failed to fetch tours: ${response.statusText}`);
      }
      const data = await response.json();
      setTours(data);
    } catch (err) {
      setError(err.message || 'Something went wrong while fetching tours.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  const removeTour = (id) => {
    setTours(tours.filter((tour) => tour.id !== id));
  };

  if (loading) {
    return <h2>Loading...</h2>;
  }

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

  return (
    <div>
      <h1>Our Tours</h1>
      <Gallery tours={tours} onRemove={removeTour} />
    </div>
  );
}

export default App;
