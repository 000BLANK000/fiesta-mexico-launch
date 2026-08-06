import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";
import { PhotoPlaceholder } from "@/components/photo-placeholder";

const title = "Gallery | La Fiesta Mexico — Cincinnati, OH";
const description =
  "A look at La Fiesta Mexico: our food and our dining room in Forest Park, Cincinnati.";


export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: GalleryPage,
});

const groups = [
  {
    id: "food",
    heading: "The food",
    photos: [
      "Alambre tacos close-up",
      "Sizzling fajita skillet",
      "Street taco trio with lime",
      "Cheese enchiladas with red sauce",
      "Fajita burrito, cut open",
      "Chocolate flan slice",
      "Churros with condensed milk",
      "House margarita on the rocks",
    ],
  },
  {
    id: "atmosphere",
    heading: "Our dining room",
    photos: [
      "Dining room from the entrance",
      "Booth seating with family",
      "Bar area and margarita glasses",
      "Storefront on W Kemper Rd",
      "Kitchen team plating an order",
    ],
  },
  {
    id: "events",
    heading: "Gatherings",
    photos: [
      "Large group celebration table",
      "Birthday sombrero moment",
      "Weekday lunch rush",
    ],
  },
];


function GalleryPage() {
  return (
    <div className="pb-24 sm:pb-0">
      <PageHeader
        eyebrow="Real photos coming soon"
        title="Gallery"
        intro="Every block below marks a spot for a real photo of our food, our dining room and our regulars — no stock photography here."
      />

      <div className="mx-auto mt-10 max-w-6xl space-y-14 px-4 lg:px-8">
        {groups.map((group) => (
          <section key={group.id} aria-labelledby={`${group.id}-heading`}>
            <h2 id={`${group.id}-heading`} className="text-2xl font-semibold sm:text-3xl">
              {group.heading}
            </h2>
            <div className="mt-3 h-1 w-16 rounded-full tile-band" aria-hidden="true" />
            <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {group.photos.map((photo) => (
                <li key={photo}>
                  <PhotoPlaceholder label={photo} ratio="square" />
                </li>
              ))}
            </ul>
          </section>
        ))}

        <p className="rounded-xl border border-dashed border-border bg-muted/50 p-6 text-sm text-muted-foreground">
          Photos will be supplied by the restaurant. Until then these labeled blocks stay in place so
          nothing on this site pretends to be a real photo of La Fiesta Mexico.
        </p>
      </div>
    </div>
  );
}
