import bcrypt from "bcryptjs";
const data = {
  users: [
    {
      name: "Gal",
      email: "gal123@gmail.com",
      password: bcrypt.hashSync("1234", 8),
      isAdmin: true,
    },
    {
      name: "Dan",
      email: "dan@gmail.com",
      password: bcrypt.hashSync("4567", 8),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: "White top freezer refrigerator 495 liters Bosch",
      model: "KDN65VW2PL",
      originalPrice: 1135,
      currentPrice: 930,
      category: "Refrigerators",
      brandIcon: "/icons/Bosch.png",
      image: "/images/Bosch_Refrigerator.png",
      brand: "Bosch",
      rating: 4.5,
      numReviews: 10,
      countInStock: 5,
      description:
        "Keep foods fresh and ready for cooking with this Bosch 800 Series two-door refrigerator",
    },
    {
      name: "Built-in oven 13 operating modes CRYSTAL",
      model: "BO72CS",
      originalPrice: 621,
      currentPrice: 584,
      brandIcon: "/icons/Bosch.png",
      image: "/images/Bosch_Oven.png",
      category: "Ranges, Cooktops & Ovens",
      brand: "Bosch",
      rating: 4,
      numReviews: 16,
      countInStock: 10,
      description:
        "This 4.3 cu. ft. capacity single wall oven will fit your kitchen without remodeling",
    },
    {
      name: "Samsung washing machine front opening 6 kg 1200 rpm",
      model: "WW6SJ3283LW",
      originalPrice: 447,
      currentPrice: 395,
      category: "Washing machines and dryers",
      brandIcon: "/icons/Samsung.png",
      image: "/images/Samsung_Washing_Machine.png",
      brand: "Samsung",
      rating: 3.5,
      numReviews: 6,
      countInStock: 12,
      description: "Do laundry your way.",
    },
    {
      name: "Black Roborock S7 Robotic Vacuum Cleaner",
      model: "S7",
      originalPrice: 732,
      currentPrice: 696,
      category: "Vacuum Cleaners & Floor Care",
      brandIcon: "/icons/Roborock.png",
      image: "/images/Roborock_Vacuum.png",
      brand: "Samsung",
      rating: 4.5,
      numReviews: 16,
      countInStock: 8,
      description:
        "Smart robotic vacuum cleaner with Sonic Mopping cleaning technology, extremely quiet, has a Wi-Fi connection and also includes rinsing / wiping capability",
    },
    {
      name: "Digital microwave 22 liters ME732 Samsung white",
      model: "ME732",
      originalPrice: 149,
      currentPrice: 119,
      category: "Microwaves",
      brandIcon: "/icons/Samsung.png",
      image: "/images/Samsung_Microwive.png",
      brand: "Samsung",
      rating: 3.5,
      numReviews: 20,
      countInStock: 10,
      description:
        "The Samsung Countertop Microwave makes preparing multiple dishes effortless with the large 1.9 cu. ft. capacity, accommodating even your largest dishes",
    },
    {
      name: "Nutria Ninja Smart Shaker Auto IQ BN498 Ninja NINJA",
      model: "BN498",
      originalPrice: 169,
      currentPrice: 141,
      category: "Blenders & Juicers",
      brandIcon: "/icons/Ninja.png",
      image: "/images/Ninja_Blender.png",
      brand: "Ninja",
      rating: 4.5,
      numReviews: 14,
      countInStock: 20,
      description:
        "The Ninja® Professional Plus Blender DUO® with Auto-iQ® features a new modern design and a more powerful motor than Ninja's original Professional Blender DUO",
    },
    {
      name: "Sony - TV 55 SONY LED FULL ARRAY",
      model: "55XH9096BAE",
      originalPrice: 1349,
      currentPrice: 1294,
      category: "TVs",
      brandIcon: "/icons/Sony.png",
      image: "/images/Sony_TV.png",
      brand: "Sony",
      rating: 4.5,
      numReviews: 14,
      countInStock: 20,
      description:
        "Everything you watch becomes more detailed and immersive with true-to-life 4K HDR, powered by the all-new Cognitive Processor XR™. Feel the intensity of the sun and experience all the stars of the night sky with Full Array LED and XR Contrast Booster 5. With outstanding picture quality, a flush bezel design, and HDMI 2.1 for next-gen gaming, the X90J 4K HDR LED TV is ready for everything.",
    },
    {
      name: "Crystal ,Front dryer 9 kg CRYSTAL",
      model: "AD92300B",
      originalPrice: 499,
      currentPrice: 466,
      category: "Washing machines and dryers",
      brandIcon: "/icons/Crystal.png",
      image: "/images/Crystal_Washing_Machine.png",
      brand: "Crystal",
      rating: 3,
      numReviews: 7,
      countInStock: 13,
      description:
        "Remove wrinkles and quickly refresh items with steam in 10 minutes with instant refresh cycle",
    },
  ],
};
export default data;
