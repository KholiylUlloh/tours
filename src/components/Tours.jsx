import React, { useState } from "react";
import SearchTour from "./SearchTour";
import Tour from "./Tour";

const Tours = ({ tours, removeTour }) => {
  const [search, setSearch] = useState("");
  return (
    <section>
      <div className="title">
        <h2>Our Tours</h2>
        <div className="underline"></div>
      </div>
      <SearchTour setSearch={setSearch} />
      <div>
        {tours
          .filter((tour) => {
            if (search == "") {
              return tour;
            } else if (tour.name.toLowerCase().includes(search.toLowerCase())) {
              return tour;
            }
          })
          .map((t) => {
            return <Tour key={t.id} {...t} removeTour={removeTour} />;
          })}
      </div>
    </section>
  );
};

export default Tours;
