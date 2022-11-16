import React, { useState } from "react";

const SearchTour = ({ setSearch }) => {
  return (
    <div className="input_wrap">
      <input type="text" onChange={(e) => setSearch(e.target.value)} />
    </div>
  );
};

export default SearchTour;
