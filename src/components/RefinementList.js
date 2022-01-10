import React from "react";
import { connectCurrentRefinements } from "react-instantsearch-dom";

const RefinementList = ({ items, currentRefinement, refine }) => (
  <div>
    {items.map((item, i) => {
      if (item.id === "boundingBox") {
        item.label = "Map Boundary";
      }
      console.log(item);

      return (
        <div key={item.label}>
          <button
            href="#"
            className="w-auto flex items-center rounded-full shadow-md bg-gradient-to-r from-themeYellow to-themePink px-3 py-1 font-body text-white"
            onClick={(event) => {
              event.preventDefault();
              refine(item.value);
            }}
          >
            {item.label}
            &nbsp;&nbsp;
            <ion-icon name="trash"></ion-icon>
          </button>
        </div>
      );
    })}
  </div>
);

const CustomRefinementList = connectCurrentRefinements(RefinementList);

function ListRefinements() {
  return (
    <div className="">
      <CustomRefinementList />
    </div>
  );
}
export default ListRefinements;
