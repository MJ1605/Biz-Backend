import type { Route } from "./+types/main";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Biz Backend" },
    { name: "description", content: "main" },
  ];
}

export async function loader({ request }: Route.LoaderArgs) {
  
}

export default function MainPage() {
  return <div>Main Page</div>;
}
