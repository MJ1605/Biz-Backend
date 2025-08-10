import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Biz Backend" },
    { name: "description", content: "" },
  ];
}

export default function Home() {
  return <div>Home Page</div>;
}
