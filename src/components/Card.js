import React from "react";

const imagesDirectory = "images/";

export default function Card({ hit }) {
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
            {/* {hit.project_name} */}
            Project Name comes here
            <p className="text-sm">Builder Name comes here</p>
          </p>

          <div className="flex items-center justify-between">
            <div className="flex w-auto items-center">
              <img
                className="w-0 h-0 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 xl:w-10 xl:h-10"
                src="images/icons/location.png"
                alt="Location Marker"
              />
              <div className="text-left sm:ml-5 text-xs xl:text-base font-body">
                Street name
                <br />
                City name
                <br />
                <p className="">
                  420 ft<sup>2</sup> - 69 BHK
                </p>
              </div>
            </div>

            <div className="w-auto">
              <button className="mb-1 rounded-full text-white text-xs px-2 sm:px-4 py-1 font-semibold font-body bg-gradient-to-r from-themeYellow to-themePink ">
                Contact
              </button>

              <p className="font-title text-lg lg:text-2xl mt-1">
                {/* ₹{priceFormatter(hit.price)} */}
                Price comes here
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
