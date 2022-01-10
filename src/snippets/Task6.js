import { Configure, InstantSearch } from "react-instantsearch-dom";
import searchClient from "../TypesenseConfig";
import CustomSearchBox from "../components/SearchBar";
import CustomHits from "../components/HitList";
import Map from "../components/Map";
import ListRefinements from "../components/RefinementList";
import CustomStats from "../components/CustomStats";

function Solution6() {
  return (
    <div className="mt-10 mb-32">
      <InstantSearch
        indexName="cccf0bc0-86ee-4d49-b162-609c4e85c651"
        searchClient={searchClient}
      >
        <CustomSearchBox />
        <div className="px-12 mt-3 h-10 flex justify-between items-center font-body font-semibold">
          <CustomStats />
          <ListRefinements />
        </div>

        <div className="flex justify-center my-20 w-full">
          <Map />
        </div>
        <div className="flex justify-center mt-10">
          <CustomHits />
          <Configure hitsPerPage={6} />
        </div>
      </InstantSearch>
    </div>
  );
}

export default Solution6;
