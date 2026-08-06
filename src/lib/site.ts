export const site = {
  name: "La Fiesta Mexico",
  tagline: "Authentic Mexican cooking in Forest Park since 2014",
  street: "1195 W Kemper Rd",
  city: "Cincinnati",
  neighborhood: "Forest Park",
  state: "OH",
  zip: "45240",
  phoneDisplay: "(513) 648-0578",
  phoneHref: "tel:+15136480578",
  orderUrl: "https://www.lafiestamexicocincy.com/rs/index_home.action",
  facebookUrl: "https://www.facebook.com/search/top?q=la%20fiesta%20mexico%20cincinnati",
  mapsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=1195+W+Kemper+Rd+Cincinnati+OH+45240",
  mapEmbedUrl:
    "https://www.google.com/maps?q=1195+W+Kemper+Rd,+Cincinnati,+OH+45240&output=embed",
} as const;

export const addressLine = `${site.street}, ${site.city} (${site.neighborhood}), ${site.state} ${site.zip}`;

export const hours = [
  { days: "Monday – Saturday", time: "11:00 AM – 9:30 PM" },
  { days: "Sunday", time: "11:00 AM – 9:00 PM" },
] as const;

export const services = [
  "Dine-in",
  "Carry-out",
  "Curbside pickup",
  "Delivery",
  "Outdoor seating",
  "Large group reservations",
  "Daily specials",
  "Taco Tuesday",
  "Margaritas & Mexican beer",
] as const;
