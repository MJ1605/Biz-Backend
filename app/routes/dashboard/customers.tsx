import type { Route } from "./+types/settings";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Biz Backend" },
    { name: "description", content: "customers" },
  ];
}

export default function CustomersPage() {
  return <div>Customers Page</div>;
}
