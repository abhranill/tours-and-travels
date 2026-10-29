export type Category = "All" | "Beach" | "Adventure" | "Cultural" | "Luxury" | "Wildlife";

export interface Destination {
  id: string;
  name: string;
  country: string;
  tours: number;
  image: string;
  tall?: boolean;
}

export interface Tour {
  id: string;
  title: string;
  location: string;
  days: number;
  price: number;
  oldPrice?: number;
  rating: number;
  reviews: number;
  category: Exclude<Category, "All">;
  image: string;
  highlights: string[];
  groupSize: string;
  badge?: string;
  tags: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  trip: string;
  quote: string;
  rating: number;
  initials: string;
}

export const destinations: Destination[] = [
  {
    id: "santorini",
    name: "Santorini",
    country: "Greece",
    tours: 14,
    tall: true,
    image:
      "https://images.pexels.com/photos/17034836/pexels-photo-17034836.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    id: "kyoto",
    name: "Kyoto",
    country: "Japan",
    tours: 9,
    image:
      "https://images.pexels.com/photos/16226405/pexels-photo-16226405.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    id: "bali",
    name: "Bali",
    country: "Indonesia",
    tours: 18,
    image:
      "https://images.pexels.com/photos/36810327/pexels-photo-36810327.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    id: "swiss",
    name: "Swiss Alps",
    country: "Switzerland",
    tours: 11,
    tall: true,
    image:
      "https://images.pexels.com/photos/37305917/pexels-photo-37305917.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    id: "rome",
    name: "Rome",
    country: "Italy",
    tours: 16,
    image:
      "https://images.pexels.com/photos/20392471/pexels-photo-20392471.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    id: "dubai",
    name: "Dubai",
    country: "UAE",
    tours: 12,
    image:
      "https://images.pexels.com/photos/19664340/pexels-photo-19664340.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
];

export const tours: Tour[] = [
  {
    id: "maldives-escape",
    tags: ["maldives","island","honeymoon"],
    title: "Maldives Overwater Escape",
    location: "North Malé Atoll, Maldives",
    days: 6,
    price: 2490,
    oldPrice: 2890,
    rating: 4.9,
    reviews: 312,
    category: "Luxury",
    badge: "Best Seller",
    groupSize: "2–8 guests",
    image:
      "https://images.pexels.com/photos/3293192/pexels-photo-3293192.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    highlights: ["Overwater villa", "Sunset dolphin cruise", "Private snorkelling"],
  },
  {
    id: "bali-bliss",
    tags: ["bali","indonesia","ubud"],
    title: "Bali Temples & Rice Terraces",
    location: "Ubud & Uluwatu, Indonesia",
    days: 8,
    price: 1290,
    rating: 4.8,
    reviews: 487,
    category: "Cultural",
    groupSize: "Up to 12 guests",
    image:
      "https://images.pexels.com/photos/15994332/pexels-photo-15994332.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    highlights: ["Tegallalang terraces", "Balinese cooking class", "Kecak fire dance"],
  },
  {
    id: "alps-trek",
    tags: ["swiss alps","switzerland","alps","mountains","hiking"],
    title: "Grand Alpine Trek",
    location: "Interlaken & Zermatt, Switzerland",
    days: 7,
    price: 2150,
    rating: 4.9,
    reviews: 204,
    category: "Adventure",
    badge: "New",
    groupSize: "Up to 10 guests",
    image:
      "https://images.pexels.com/photos/28670240/pexels-photo-28670240.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    highlights: ["Matterhorn views", "Glacier Express ride", "Alpine chalet stays"],
  },
  {
    id: "safari",
    tags: ["safari","tanzania","africa","serengeti"],
    title: "Serengeti Great Migration Safari",
    location: "Serengeti & Ngorongoro, Tanzania",
    days: 9,
    price: 3450,
    oldPrice: 3900,
    rating: 5.0,
    reviews: 158,
    category: "Wildlife",
    groupSize: "Up to 6 guests",
    image:
      "https://images.pexels.com/photos/22591015/pexels-photo-22591015.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    highlights: ["Big Five game drives", "Hot-air balloon safari", "Luxury tented camp"],
  },
  {
    id: "machu",
    tags: ["peru","machu picchu","inca","hiking"],
    title: "Inca Trail to Machu Picchu",
    location: "Cusco & Sacred Valley, Peru",
    days: 10,
    price: 1890,
    rating: 4.8,
    reviews: 276,
    category: "Adventure",
    groupSize: "Up to 14 guests",
    image:
      "https://images.pexels.com/photos/36459302/pexels-photo-36459302.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    highlights: ["4-day classic trek", "Sunrise at Sun Gate", "Sacred Valley markets"],
  },
  {
    id: "tropics",
    tags: ["thailand","phuket","island","beach"],
    title: "Tropical Island Hopper",
    location: "Phuket & Phi Phi, Thailand",
    days: 7,
    price: 1150,
    rating: 4.7,
    reviews: 529,
    category: "Beach",
    groupSize: "Up to 16 guests",
    image:
      "https://images.pexels.com/photos/9259687/pexels-photo-9259687.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    highlights: ["Maya Bay longtail trip", "Beachfront resort", "Thai street-food tour"],
  },
  {
    id: "kyoto-classic",
    tags: ["kyoto","japan","tokyo","osaka"],
    title: "Kyoto in Cherry Blossom Season",
    location: "Kyoto, Nara & Osaka, Japan",
    days: 8,
    price: 2380,
    rating: 4.9,
    reviews: 341,
    category: "Cultural",
    badge: "Limited",
    groupSize: "Up to 10 guests",
    image:
      "https://images.pexels.com/photos/31855372/pexels-photo-31855372.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    highlights: ["Private tea ceremony", "Fushimi Inari at dawn", "Ryokan with onsen"],
  },
  {
    id: "dubai-lux",
    tags: ["dubai","uae","abu dhabi","desert"],
    title: "Dubai Skyline & Desert Luxe",
    location: "Dubai & Abu Dhabi, UAE",
    days: 5,
    price: 1750,
    rating: 4.8,
    reviews: 198,
    category: "Luxury",
    groupSize: "2–10 guests",
    image:
      "https://images.pexels.com/photos/14362375/pexels-photo-14362375.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    highlights: ["Burj Khalifa At The Top", "Desert glamping", "Yacht dinner cruise"],
  },
  {
    id: "rome-tuscany",
    tags: ["rome","italy","tuscany","florence","pisa"],
    title: "Rome & Tuscany Grand Tour",
    location: "Rome, Florence & Pisa, Italy",
    days: 9,
    price: 2050,
    rating: 4.8,
    reviews: 412,
    category: "Cultural",
    groupSize: "Up to 12 guests",
    image:
      "https://images.pexels.com/photos/18463143/pexels-photo-18463143.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    highlights: ["Skip-the-line Colosseum", "Chianti wine tasting", "Private Vatican tour"],
  },
  {
    id: "santorini-sunsets",
    tags: ["santorini", "greece", "greek islands", "mykonos", "honeymoon"],
    title: "Santorini & Greek Island Sunsets",
    location: "Santorini & Mykonos, Greece",
    days: 7,
    price: 1980,
    rating: 4.9,
    reviews: 265,
    category: "Beach",
    badge: "Top Rated",
    groupSize: "2–10 guests",
    image:
      "https://images.pexels.com/photos/18774878/pexels-photo-18774878.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    highlights: ["Caldera-view suite", "Catamaran sunset cruise", "Volcanic wine tasting"],
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Amelia Hartley",
    location: "London, UK",
    trip: "Maldives Overwater Escape",
    quote:
      "Every detail was handled flawlessly — from the seaplane transfer to the surprise anniversary dinner on the sandbank. Horizon turned our honeymoon into something we'll talk about forever.",
    rating: 5,
    initials: "AH",
  },
  {
    id: "t2",
    name: "Daniel Okafor",
    location: "Toronto, Canada",
    trip: "Serengeti Great Migration Safari",
    quote:
      "Our guide knew the land like the back of his hand. We saw the river crossing on day three and a leopard in a tree at sunset. Worth every penny and then some.",
    rating: 5,
    initials: "DO",
  },
  {
    id: "t3",
    name: "Priya Raman",
    location: "Singapore",
    trip: "Kyoto in Cherry Blossom Season",
    quote:
      "I was nervous about travelling solo but the small group felt like family by day two. The ryokan stay and private tea ceremony were pure magic.",
    rating: 5,
    initials: "PR",
  },
  {
    id: "t4",
    name: "Marcus & Elena Weber",
    location: "Munich, Germany",
    trip: "Inca Trail to Machu Picchu",
    quote:
      "Challenging, breathtaking, perfectly paced. The porters and chef were incredible and reaching the Sun Gate at sunrise is a moment we will never forget.",
    rating: 5,
    initials: "MW",
  },
];

export const categories: Category[] = ["All", "Beach", "Adventure", "Cultural", "Luxury", "Wildlife"];
