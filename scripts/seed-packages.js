import { dbConnect } from "./dbConnect.js";
import Package from "../lib/models/Package.js";

async function seedPackages() {
  await dbConnect();

  await Package.deleteMany();

  await Package.insertMany([
    {
      title: "Kashmir 5N/6D",
      slug: "kashmir-5n6d",
      image: "/kashmir.jpg",
      price: 12999,
      duration: "5 Nights / 6 Days",
      highlights: [
        "Srinagar Dal Lake",
        "Gulmarg Snow Point",
        "Sonmarg Valley",
      ],
      itinerary: [
        "Arrival and sightseeing",
        "Gulmarg trip",
        "Sonmarg excursion",
        "Local market visit",
      ],
    },

    {
      title: "Goa Beach Tour",
      slug: "goa-beach-tour",
      image: "/goa.jpg",
      price: 9999,
      duration: "3 Nights / 4 Days",
      highlights: ["Baga Beach", "Nightlife", "Water Sports"],
      itinerary: ["Arrival", "North Goa", "South Goa", "Departure"],
    },
  ]);

  console.log("✔ Packages Seeded Successfully");
  process.exit();
}

seedPackages();
