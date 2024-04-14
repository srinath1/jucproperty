import React from "react";
import { fetchProperties } from "../utils/requests";
import FeaturedPropertycard from "./FeaturedPropertycard";

const FeaturedProperties = async () => {
  const properties = await fetchProperties({ showFeatured: true });
  console.log("Properties", properties);
  return (
    properties.length > 0 && (
      <section className="bg-blue-50 px-4 pt-6 pb-10">
        <div className="container-xl lg:container m-auto">
          <h2 className="text-3xl font-bold text-blue-500 mb-6 text-center">
            Featured Properties
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {properties.map((property) => (
              <FeaturedPropertycard property={property} key={property._id} />
            ))}
          </div>
        </div>
      </section>
    )
  );
};

export default FeaturedProperties;
