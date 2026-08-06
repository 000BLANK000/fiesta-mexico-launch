export type MenuItem = {
  name: string;
  description?: string;
  vegetarian?: boolean;
  spicy?: boolean;
};

export type MenuCategory = {
  id: string;
  title: string;
  note?: string;
  items: MenuItem[];
};

/**
 * Dish names come from verified popular items and standard house categories.
 * Prices are intentionally placeholders until the restaurant confirms pricing.
 */
export const menu: MenuCategory[] = [
  {
    id: "lunch-specials",
    title: "Lunch Specials",
    note: "Served Monday – Friday until 3:00 PM",
    items: [
      { name: "Lunch Burrito", description: "Choice of steak or chicken, rice and beans." },
      { name: "Lunch Chimichanga", description: "Crisped flour tortilla, cheese sauce." },
      { name: "Lunch Enchiladas", description: "Two enchiladas with rice and beans." },
      { name: "Lunch Taco Plate", description: "Two tacos, rice and beans." },
      { name: "Lunch Quesadilla Rellena", description: "Grilled quesadilla with lettuce and sour cream." },
    ],
  },
  {
    id: "appetizers",
    title: "Appetizers",
    items: [
      { name: "Cheese Dip", vegetarian: true },
      { name: "Guacamole Dip", vegetarian: true },
      { name: "Bean Dip" },
      { name: "Nachos Supreme", description: "Beans, cheese, lettuce, sour cream." },
      { name: "Queso Fundido con Chorizo" },
      { name: "Jalapeño Poppers", vegetarian: true, spicy: true },
    ],
  },
  {
    id: "tacos",
    title: "Tacos",
    items: [
      { name: "Alambre Tacos", description: "House favorite — grilled steak, bacon, peppers, melted cheese." },
      { name: "Crispy Beef Tacos" },
      { name: "Soft Chicken Tacos" },
      { name: "Taco Salad" },
      { name: "Tacos al Carbon", description: "Grilled steak, onions, cilantro." },
    ],
  },
  {
    id: "street-tacos",
    title: "Street Tacos",
    note: "Corn tortillas, onions, cilantro, lime.",
    items: [
      { name: "Steak (Asada)" },
      { name: "Carnitas" },
      { name: "Barbacoa" },
      { name: "Chorizo", spicy: true },
      { name: "Chicken" },
      { name: "Al Pastor" },
      { name: "Shrimp" },
    ],
  },
  {
    id: "quesadillas",
    title: "Quesadillas",
    items: [
      { name: "Cheese Quesadilla", vegetarian: true },
      { name: "Quesadilla Rellena", description: "Choice of steak or chicken." },
      { name: "Veggie Quesadilla", description: "Grilled peppers, onions, mushrooms, spinach.", vegetarian: true },
      { name: "Shrimp Quesadilla" },
    ],
  },
  {
    id: "burritos",
    title: "Burritos",
    items: [
      { name: "Fajita Burrito", description: "House favorite — grilled steak or chicken with peppers and onions." },
      { name: "Burrito Deluxe" },
      { name: "Bean & Cheese Burrito", vegetarian: true },
      { name: "Burrito California", description: "Loaded with rice, beans and cheese sauce." },
    ],
  },
  {
    id: "combination-dinners",
    title: "Combination Dinners",
    note: "Served with rice and beans. Mix and match your favorites.",
    items: [
      { name: "Taco, Enchilada & Rice" },
      { name: "Cheese Enchiladas", description: "House favorite — three enchiladas with red sauce." },
      { name: "Chile Relleno & Taco", spicy: true },
      { name: "Burrito, Tamal & Enchilada" },
      { name: "Two Enchiladas & Chalupa" },
    ],
  },
  {
    id: "fajitas",
    title: "Fajitas",
    note: "Served sizzling with tortillas, rice, beans and all the fixings.",
    items: [
      { name: "Steak Fajitas" },
      { name: "Chicken Fajitas" },
      { name: "Shrimp Fajitas" },
      { name: "Fajitas Texanas", description: "Steak, chicken and shrimp." },
      { name: "Veggie Fajitas", vegetarian: true },
    ],
  },
  {
    id: "house-specials",
    title: "House Specials",
    items: [
      { name: "Molcajete", description: "Steak, chicken, chorizo and cactus in a stone bowl.", spicy: true },
      { name: "Carne Asada" },
      { name: "Chilaquiles", spicy: true },
      { name: "Alambre Plate", description: "Grilled steak, bacon, peppers and cheese." },
      { name: "Pollo Loco" },
    ],
  },
  {
    id: "steak",
    title: "Steak",
    items: [
      { name: "Steak Ranchero", spicy: true },
      { name: "Steak a la Mexicana", spicy: true },
      { name: "Steak Chipotle", spicy: true },
      { name: "Steak & Shrimp" },
    ],
  },
  {
    id: "chicken",
    title: "Chicken",
    items: [
      { name: "Pollo con Crema" },
      { name: "Pollo Ranchero", spicy: true },
      { name: "Arroz con Pollo" },
      { name: "Pollo Poblano" },
    ],
  },
  {
    id: "seafood",
    title: "Seafood",
    items: [
      { name: "Camarones a la Diabla", spicy: true },
      { name: "Camarones al Mojo de Ajo" },
      { name: "Tilapia Veracruzana" },
      { name: "Shrimp Cocktail" },
    ],
  },
  {
    id: "vegetarian",
    title: "Vegetarian",
    items: [
      { name: "Veggie Burrito", vegetarian: true },
      { name: "Spinach Enchiladas", vegetarian: true },
      { name: "Veggie Chimichanga", vegetarian: true },
      { name: "Cactus Tacos", vegetarian: true },
      { name: "Grilled Vegetable Plate", vegetarian: true },
    ],
  },
  {
    id: "salads",
    title: "Salads",
    items: [
      { name: "Grilled Chicken Salad" },
      { name: "Steak Salad" },
      { name: "Guacamole Salad", vegetarian: true },
      { name: "Garden Salad", vegetarian: true },
    ],
  },
  {
    id: "soups",
    title: "Soups",
    items: [
      { name: "Caldo de Pollo" },
      { name: "Caldo de Res" },
      { name: "Tortilla Soup" },
      { name: "Menudo", spicy: true },
    ],
  },
  {
    id: "side-orders",
    title: "Side Orders",
    items: [
      { name: "Mexican Rice", vegetarian: true },
      { name: "Refried Beans" },
      { name: "Sour Cream", vegetarian: true },
      { name: "Guacamole", vegetarian: true },
      { name: "Tamal" },
      { name: "Flour or Corn Tortillas", vegetarian: true },
    ],
  },
  {
    id: "desserts",
    title: "Desserts",
    items: [
      { name: "Chocolate Flan", description: "House favorite.", vegetarian: true },
      { name: "Churros with Condensed Milk", description: "House favorite.", vegetarian: true },
      { name: "Sopapilla", vegetarian: true },
      { name: "Fried Ice Cream", vegetarian: true },
    ],
  },
  {
    id: "non-alcoholic-drinks",
    title: "Non-Alcoholic Drinks",
    items: [
      { name: "Horchata", vegetarian: true },
      { name: "Jarritos", vegetarian: true },
      { name: "Mexican Coca-Cola", vegetarian: true },
      { name: "Agua de Jamaica", vegetarian: true },
      { name: "Coffee & Iced Tea", vegetarian: true },
    ],
  },
  {
    id: "margaritas-beer",
    title: "Margaritas & Beer",
    note: "Must be 21+ with valid ID.",
    items: [
      { name: "House Margarita (Rocks or Frozen)", vegetarian: true },
      { name: "Jumbo Margarita", vegetarian: true },
      { name: "Flavored Margaritas", description: "Strawberry, mango, lime.", vegetarian: true },
      { name: "Mexican Beer", description: "Draft and bottled selections.", vegetarian: true },
      { name: "Michelada", spicy: true, vegetarian: true },
    ],
  },
];

export const PRICE_PLACEHOLDER = "$--.--";
