import type { Route } from "./+types/settings";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Biz Backend" },
    { name: "description", content: "kpi" },
  ];
}

export default function KPIPage() {
  return (
    <div className="h-screen w-full">
      <div className="flex h-1/6 w-full flex-col">
        <div className="flex h-1/3 bg-amber-400 text-4xl p-2">KPI</div>
        <div className="flex h-2/3 bg-orange-700"></div>
      </div>
      <div className="flex h-5/6 w-full">
        <div className="flex w-1/2 h-full bg-blue-400"></div>
        <div className="flex w-1/2 h-full flex-col">
          <div className="flex w-full h-3/6 bg-fuchsia-600"></div>
          <div className="flex w-full h-3/6 bg-emerald-600"></div>
        </div>
      </div>
    </div>
  );
}
