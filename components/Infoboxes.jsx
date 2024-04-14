import React from "react";
import Infobox from "./Infobox";

const Infoboxes = () => {
  return (
    <section>
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
          <Infobox
            heading="For Renters"
            backgroundColor="bg-gray-100"
            buttonInfo={{
              text: "Browse Properties",
              link: "/properties",
              backgroundColor: "bg-black",
            }}
          >
            Find Your Dream Rental properties In Denmark
          </Infobox>
          <Infobox
            heading="For Property Owners"
            backgroundColor="bg-gray-100"
            buttonInfo={{
              text: "Add Property",
              link: "/properties/add",
              backgroundColor: "bg-blue-500",
            }}
          >
            For Property Owners In Denmark
          </Infobox>
        </div>
      </div>
    </section>
  );
};

export default Infoboxes;
