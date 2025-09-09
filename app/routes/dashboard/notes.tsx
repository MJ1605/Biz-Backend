import type { Route } from "./+types/settings";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Biz Backend" },
    { name: "description", content: "notes" },
  ];
}

export default function NotesPage() {
  return <div>Notes Page</div>;
}
