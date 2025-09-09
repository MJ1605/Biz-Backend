import type { Route } from "./+types/settings";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Biz Backend" },
    { name: "description", content: "habits" },
  ];
}

export default function HabitsPage() {
  return <div>Habits Page</div>;
}
