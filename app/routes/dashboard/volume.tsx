import type { Route } from "./+types/settings";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Biz Backend" },
    { name: "description", content: "volume" },
  ];
}

export default function VolumePage() {
  return <div>Volume Page</div>;
}
