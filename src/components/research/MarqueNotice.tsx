/**
 * Non-affiliation notice for model and make pages.
 *
 * Marque names and model names are used to identify the cars being written
 * about, nothing more. The two marques Chris asked for by name get the
 * registered owner spelled out; every other make gets the generic form so we
 * never guess at a corporate entity.
 */
const OWNERS: Record<string, string> = {
  Ferrari: "Ferrari S.p.A.",
  Porsche: "Dr. Ing. h.c. F. Porsche AG",
};

export function MarqueNotice({ make, className = "" }: { make: string; className?: string }) {
  const owner = OWNERS[make];
  return (
    <p className={`text-xs leading-relaxed ${className}`} style={{ color: "#9a9a8a" }}>
      Fully Sorted is an independent publisher and is not affiliated with, endorsed by or
      sponsored by {owner ?? make}. {make} and the model names on this
      page are trademarks of {owner ?? "their respective owners"} and are used here only to
      identify the cars being described.
    </p>
  );
}
