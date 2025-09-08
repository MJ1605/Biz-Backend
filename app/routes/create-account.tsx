import { Button, createTheme, TextField, ThemeProvider } from "@mui/material";
import type { Route } from "./+types/login";
import { useNavigate } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Biz Backend" },
    { name: "description", content: "login" },
  ];
}

//theme for the whole webpage to use
export const darktheme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#90caf9"},
    background: {
      default: "#121212",
      paper: "#1e1e1e",
    },
  },
});

export default function LoginPage() {
  const navigate = useNavigate();

  return (
    <ThemeProvider theme={darktheme}>
      <div className="w-screen h-screen flex justify-center items-center bg-neutral-950">
        <div className="bg-neutral-900 w-fit h-fit border-neutral-700 p-2 border-2 rounded-2xl">
          <p className="text-3xl text-center">Create Account</p>
          <div className="flex items-center gap-2 m-2">
            <p className="w-24">Username:</p>
            <TextField size="small"></TextField>
          </div>
          <div className="flex items-center gap-2 m-2">
            <p className="w-24">Password:</p> 
            <TextField size="small"></TextField>
          </div>
          <div className="flex justify-around m-1 mt-2">
            <Button variant="outlined">Login</Button>
            <Button variant="outlined">Create Account</Button>
          </div>
            <Button variant="outlined" onClick={()=>{navigate("/dashboard")}}>Bypass Login</Button>
        </div>
      </div>
    </ThemeProvider>
  );
}
