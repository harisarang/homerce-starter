import React from "react";
import priceFormatter from "../utils/PriceFormatter";
import CustomHighlight from "./Highlight";

const imagesDirectory = "images/";

export default function Solution4({ hit }) {
  return (
    <div className="w-40 sm:w-56 md:w-64 lg:w-72 xl:w-96">
      <div className="rounded-2xl shadow-2xl">
        <img
          className="rounded-t-2xl"
          src={imagesDirectory + hit.image_url.split("/images/")[1]}
          alt={hit.project_name}
        />

        <div className="p-2 md:p-5">
          <p className="font-title text-left text-lg lg:text-2xl mb-3">
            <CustomHighlight attribute="project_name" hit={hit} />
            <p className="text-sm">
              <CustomHighlight attribute="builder_name" hit={hit} />
            </p>
          </p>

          <div className="flex items-center justify-between">
            <div className="flex w-auto items-center">
              <img
                className="w-0 h-0 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 xl:w-10 xl:h-10"
                src="images/icons/location.png"
                alt="Location Marker"
              />
              <div className="text-left sm:ml-5 text-xs xl:text-base font-body">
                <CustomHighlight attribute="street_name" hit={hit} />
                <br />
                <CustomHighlight attribute="city_facet" hit={hit} />
                <br />
                <p className="">
                  {hit.sqrft} ft<sup>2</sup> - {hit.bhk_facet} BHK
                </p>
              </div>
            </div>

            <div className="w-auto">
              <button className="mb-1 rounded-full text-white text-xs px-2 sm:px-4 py-1 font-semibold font-body bg-gradient-to-r from-themeYellow to-themePink ">
                Contact
              </button>

              <p className="font-title text-lg lg:text-2xl mt-1">
                ₹{priceFormatter(hit.price)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
