import { permanentRedirect } from "next/navigation";

// Sort it moved into the Research Hub (2026-10-15). This keeps any shared
// /sort-it link working.
export default function SortItPage() {
  permanentRedirect("/research/models");
}
