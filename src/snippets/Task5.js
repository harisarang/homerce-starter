import React from "react";
import { Configure, InstantSearch } from "react-instantsearch-dom";
import CustomSearchBox from "../components/SearchBar";
import searchClient from "../TypesenseConfig";
import CustomStats from "../components/CustomStats";
import ListRefinements from "../components/RefinementList";
import CustomHits from "../components/HitList";

export default function Solution5() {
  return (
    <div className="mt-10 mb-32">
      <InstantSearch indexName="rent" searchClient={searchClient}>
        <CustomSearchBox />
        <div className="px-12 mt-3 h-10 flex justify-between items-center font-body font-semibold">
          <CustomStats />
          <ListRefinements />
        </div>
        <div className="flex justify-center mt-10">
          <CustomHits />
          <Configure hitsPerPage={6} />
        </div>
      </InstantSearch>
    </div>
  );
}
