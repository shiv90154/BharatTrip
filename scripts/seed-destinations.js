import { dbConnect } from "./dbConnect.js";
import Destination from "../lib/models/Destination.js";

async function seedDestinations() {
  await dbConnect();

  await Destination.deleteMany();

  await Destination.insertMany([
    {
      title: "Kashmir",
      slug: "kashmir",
      image: "/kashmir.jpg",
      shortDescription: "Heaven on Earth with beautiful valleys.",
    },
    {
      title: "Manali",
      slug: "manali",
      image: "/manali.jpg",
      shortDescription: "Snow-covered hills & adventure sports.",
    },
    {
      title: "Goa",
      slug: "goa",
      image: "/goa.jpg",
      shortDescription: "Best beaches and nightlife experience.",
    },
  ]);

  console.log("✔ Destinations Seeded Successfully");
  process.exit();
}

seedDestinations();
