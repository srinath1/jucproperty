import connectDB from "../../../../config/database";
import User from "../../../../models/User";
import Property from "../../../../models/Property";
import { getSessionUser } from "../../../../utils/getSessionUser";
export const dynamic = "force-dynamic";
export const POST = async (request) => {
  try {
    await connectDB();
    const { propertyId } = await request.json();
    const sessionUser = await getSessionUser();
    if (!sessionUser || !sessionUser.userId) {
      return new Response("User ID is required", { status: 401 });
    }
    const { userId } = sessionUser;
    const user = await User.findOne({ _id: userId });
    let isBookmarked = user.bookmarks.includes(propertyId);

    return new Response(JSON.stringify({ isBookmarked }, { status: 200 }));
  } catch (error) {
    console.log(error);
    return new Response("Something went wrong", { status: 500 });
  }
};

export const GET = async () => {
  try {
    await connectDB();

    const sessionUser = await getSessionUser();
    if (!sessionUser || !sessionUser.userId) {
      return new Response("User ID is required", { status: 401 });
    }
    const { userId } = sessionUser;
    const user = await User.findOne({ _id: userId });
    const bookmarks = await Property.find({ _id: { $in: user.bookmarks } });
    return new Response(JSON.stringify(bookmarks), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("Some thing went wrong", { status: 500 });
  }
};
