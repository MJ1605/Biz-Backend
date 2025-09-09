import type { Route } from "./+types/settings";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Biz Backend" },
    { name: "description", content: "kpi" },
  ];
}

export default function KPIPage() {
  return <div>KPI Page</div>;
}
