import React from "react";
import { connectSearchBox } from "react-instantsearch-dom";

function SearchBar({ currentRefinement, refine }) {
  return (
    <div className="w-full px-10">
      <div className="w-full border border-gray-200 shadow-md rounded-md px-5 py-3 flex items-center">
        <ion-icon name="search"></ion-icon>
        <input
          className="w-full mx-5 focus:outline-none font-body placeholder:font-body"
          type="search"
          placeholder="Search by Property Name, Builder, City"
          value={currentRefinement}
          onChange={(event) => refine(event.currentTarget.value)}
        />
      </div>
    </div>
  );
}

const CustomSearchBox = connectSearchBox(SearchBar);
export default CustomSearchBox;
