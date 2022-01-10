import React from "react";
import { connectHits } from "react-instantsearch-dom";
import Card from "./Card";

function HitList({ hits }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
      {hits.map((hit) => (
        <Card key={hit.id} hit={hit} />
      ))}
    </div>
  );
}

const CustomHits = connectHits(HitList);
export default CustomHits;
