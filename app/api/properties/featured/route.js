import connectDB from "../../../../config/database";
import Property from "../../../../models/Property";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  try {
    await connectDB();

    const properties = await Property.find({ is_featured: true });

    return NextResponse.json(properties, { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("An error occurred", {
      status: 500,
    });
  }
};
