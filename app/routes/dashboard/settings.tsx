import type { Route } from "./+types/settings";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Biz Backend" },
    { name: "description", content: "main" },
  ];
}

export default function SettingsPage() {
  return <div>Settings Page</div>;
}
