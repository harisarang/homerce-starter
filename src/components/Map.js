import React, { useState } from "react";
import {
  GoogleMapsLoader,
  GeoSearch,
  Marker,
} from "react-instantsearch-dom-maps";

function Map() {
  return (
    <div className="hitsMap">
      <GoogleMapsLoader apiKey="AIzaSyBVG1AFgOTC7nAqOFY3Tmb1KAUqoWRzuUo">
        {(google) => (
          <GeoSearch google={google}>
            {({ hits }) => (
              <div>
                {hits.map((hit) => (
                  <>
                    <Marker key={hit.id} hit={hit} />
                  </>
                ))}
              </div>
            )}
          </GeoSearch>
        )}
        {}
      </GoogleMapsLoader>
    </div>
  );
}

export default Map;
