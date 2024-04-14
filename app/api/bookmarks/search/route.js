import connectDB from "../../../../config/database";
import Property from "../../../../models/Property";

export const GET = async (request) => {
  console.log("I am in");
  try {
    await connectDB();
    const { searchParams } = new URL(request.url);
    console.log("sp", searchParams);
    const location = searchParams.get("location");
    const propertType = searchParams.get("propertyType");
    console.log(location, propertType);
    const locationPattern = new RegExp(location, "i");
    let query = {
      $or: [
        { name: locationPattern },
        { description: locationPattern },
        { "location.street": locationPattern },
        { "location.city": locationPattern },
        { "location.state": locationPattern },
        { "location.zipcode": locationPattern },
      ],
    };
    if (propertType && propertType !== "All") {
      const typePattern = new RegExp(propertType, "i");
      query.type = typePattern;
    }

    console.log("QueryType->", query);
    const properties = await Property.find(query);
    return new Response(JSON.stringify(properties, { status: 200 }));
  } catch (error) {
    console.log(error);
    return new Response(
      JSON.stringify("something went wrong", { status: 500 })
    );
  }
};
