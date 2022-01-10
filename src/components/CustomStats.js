import { connectStats } from "react-instantsearch-dom";
import React from "react";

const Stats = ({ processingTimeMS, nbHits }) => (
  <p className="text-left">
    {nbHits.toLocaleString()} results found in{" "}
    {processingTimeMS.toLocaleString()}ms
  </p>
);

const CustomStats = connectStats(Stats);

export default CustomStats;
