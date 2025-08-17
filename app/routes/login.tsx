import type { Route } from "./+types/login";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Biz Backend" },
    { name: "description", content: "login" },
  ];
}

export default function LoginPage() {
  return <div>Login Page</div>;
}
