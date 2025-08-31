import { Button } from "@mui/material";
import type { Route } from "./+types/login";
import { useNavigate } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Biz Backend" },
    { name: "description", content: "login" },
  ];
}

export default function LoginPage() {
  const navigate = useNavigate();

  return (
  <div>
    <div>Login Page</div>
    <Button variant="outlined" onClick={()=>{navigate("/dashboard")}}>Bypass Login</Button>
  </div>
);
}
