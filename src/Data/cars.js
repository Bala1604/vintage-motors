const vintageImage = (id) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1400&q=85`;

const cars = [
  {
    id: 1,
    year: 1967,
    brand: "Ford",
    name: "Mustang",
    category: "Muscle Car",
    price: 98000,
    engine: "289 cu in V8",
    transmission: "4-Speed Manual",
    image: vintageImage("photo-1568625455627-5b0115abb84f"),
    description:
      "The definitive American pony car of the 1960s, combining long-hood proportions with unmistakable performance character.",
    story:
      "The 1967 Mustang represents one of the most recognizable chapters in American automotive design."
  },

  {
    id: 2,
    year: 1967,
    brand: "Dodge",
    name: "Challenger",
    category: "Muscle Car",
    price: 118000,
    engine: "V8",
    transmission: "4-Speed Manual",
    image: vintageImage("photo-1774726940351-d5286cf0c530"),
    description:
      "A dramatic American muscle coupe with a commanding stance and raw performance character.",
    story:
      "The Challenger became an enduring symbol of the golden age of American muscle."
  },

  {
    id: 3,
    year: 1957,
    brand: "Chevrolet",
    name: "Bel Air",
    category: "American Classic",
    price: 125000,
    engine: "283 cu in V8",
    transmission: "3-Speed Manual",
    image: vintageImage("photo-1726587837158-b7a96475be99"),
    description:
      "A masterpiece of 1950s American styling, defined by chrome details, sweeping lines and iconic tailfins.",
    story:
      "The 1957 Bel Air remains one of the most celebrated symbols of America's post-war automotive optimism."
  },

  {
    id: 4,
    year: 1961,
    brand: "Jaguar",
    name: "E-Type",
    category: "British Sports Car",
    price: 185000,
    engine: "3.8L Inline-6",
    transmission: "4-Speed Manual",
    image: vintageImage("photo-1759526437000-968f720493c9"),
    description:
      "A legendary British sports car celebrated for its elegant proportions, long bonnet and extraordinary presence.",
    story:
      "The E-Type became one of the defining shapes of 1960s British automotive design."
  },

  {
    id: 5,
    year: 1980,
    brand: "BMW",
    name: "323i",
    category: "German Classic",
    price: 69000,
    engine: "2.3L Inline-6",
    transmission: "5-Speed Manual",
    image: vintageImage("photo-1581055926930-cfc6afbe04df"),
    description:
      "A period BMW executive sports sedan combining restrained German design with a naturally aspirated inline-six.",
    story:
      "The E21 generation helped establish the character that would define BMW's compact executive cars."
  },

  {
    id: 6,
    year: 1966,
    brand: "Porsche",
    name: "911",
    category: "German Sports Car",
    price: 165000,
    engine: "2.0L Flat-6",
    transmission: "5-Speed Manual",
    image: vintageImage("photo-1750942651174-c13e2a1b7fb1"),
    description:
      "An elegant early 911 representing Porsche's distinctive rear-engine sports-car philosophy.",
    story:
      "The early 911 established a design language that would become one of the most enduring in automotive history."
  },

  {
    id: 7,
    year: 1967,
    brand: "Volvo",
    name: "Amazon",
    category: "Swedish Classic",
    price: 54000,
    engine: "1.8L Inline-4",
    transmission: "4-Speed Manual",
    image: vintageImage("photo-1569272518652-a60d8a3f4a35"),
    description:
      "A beautifully restrained Swedish classic known for its durability, clean lines and distinctive character.",
    story:
      "The Amazon became one of Volvo's most memorable designs of the 1960s."
  },

  {
    id: 8,
    year: 1967,
    brand: "Chevrolet",
    name: "Caprice",
    category: "American Luxury",
    price: 68000,
    engine: "396 cu in V8",
    transmission: "3-Speed Automatic",
    image: vintageImage("photo-1632892685757-93f20683be00"),
    description:
      "A full-size American classic combining imposing proportions with period luxury and effortless road presence.",
    story:
      "The 1967 Caprice represented the American preference for large, comfortable and richly appointed automobiles."
  },

  {
    id: 9,
    year: 1955,
    brand: "Toyota",
    name: "Crown",
    category: "Japanese Classic",
    price: 58000,
    engine: "1.5L Inline-4",
    transmission: "3-Speed Manual",
    image: vintageImage("photo-1747851184898-fe1a92986d63"),
    description:
      "A pioneering Japanese sedan representing the beginning of Toyota's long-running Crown legacy.",
    story:
      "The Toyopet Crown was introduced in 1955 and became one of Toyota's foundational passenger-car nameplates."
  },

  {
    id: 10,
    year: 1988,
    brand: "Hindustan Motors",
    name: "Ambassador",
    category: "Indian Classic",
    price: 32000,
    engine: "1.5L Inline-4",
    transmission: "4-Speed Manual",
    image: vintageImage("photo-1679861044038-e277f642c8d5"),
    description:
      "An unmistakable Indian automobile whose stately proportions became part of the country's motoring heritage.",
    story:
      "The Ambassador remained a familiar presence on Indian roads for generations."
  },

  {
    id: 11,
    year: 1964,
    brand: "Aston Martin",
    name: "DB5",
    category: "British Grand Tourer",
    price: 275000,
    engine: "4.0L Inline-6",
    transmission: "5-Speed Manual",
    image: vintageImage("photo-1603468369457-93d35b09790d"),
    description:
      "An elegant British grand tourer defined by polished proportions, refined engineering and timeless presence.",
    story:
      "The DB5 became one of the most recognizable grand tourers of the 1960s."
  },

  {
    id: 12,
    year: 1977,
    brand: "Datsun",
    name: "Sunny",
    category: "Japanese Classic",
    price: 38000,
    engine: "1.2L Inline-4",
    transmission: "4-Speed Manual",
    image: vintageImage("photo-1743808180715-d7e825adb12e"),
    description:
      "A charming Japanese classic capturing the practical and understated character of 1970s motoring.",
    story:
      "The Sunny represents the growing influence of Japanese engineering during the 1970s."
  }
];

/*
  IMPORTANT:
  Every car below has:
  - unique ID
  - unique model
  - unique image
*/

const imageIds = cars.map((car) => car.image);

if (new Set(imageIds).size !== imageIds.length) {
  throw new Error(
    "Vintage Motors Error: Duplicate car image detected in cars.js"
  );
}

const carIds = cars.map((car) => car.id);

if (new Set(carIds).size !== carIds.length) {
  throw new Error(
    "Vintage Motors Error: Duplicate car ID detected in cars.js"
  );
}

export const isVintageCar = (car) =>
  Number(car.year) >= 1950 && Number(car.year) <= 1988;

export default cars;