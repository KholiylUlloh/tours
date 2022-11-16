import React, { useState, useEffect } from "react";
import Loading from "./components/Loading";
import data from "./components/mockData";
import Tours from "./components/Tours";
function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const getTours = async () => {
    setLoading(true);
    try {
      const tours = data;
      setLoading(false);
      setTours(tours);
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  };

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  useEffect(() => {
    setTimeout(() => {
      getTours();
    }, 1000);
  }, []);

  if (loading) {
    return <Loading />;
  }
  if (tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>no tours left</h2>
          <button className="btn" onClick={() => getTours()}>
            refresh
          </button>
        </div>
      </main>
    );
  }
  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
}

export default App;
