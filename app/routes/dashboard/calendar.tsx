import type { Route } from "./+types/settings";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Biz Backend" },
    { name: "description", content: "calendar" },
  ];
}

export default function CalendarPage() {
  return <div>Calendar Page</div>;
}
