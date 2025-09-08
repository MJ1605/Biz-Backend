import { Button, createTheme, TextField, ThemeProvider } from "@mui/material";
import type { Route } from "./+types/login";
import { useNavigate } from "react-router";
import { account } from "~/appwrite";
import { darktheme } from "~/themes";
import { useState } from "react";
export function meta({}: Route.MetaArgs) {
  return [
    { title: "Biz Backend" },
    { name: "description", content: "login" },
  ];
}

export default function CreateAccountPage() {
  const navigate = useNavigate();
  const [username, SetUsername] = useState("");
  const [password, SetPassword] = useState("");
  const [email, SetEmail] = useState("");

  const handleCreateAccount = ()=>{
    console.log("username:" + username + " Password: " + password);
  }

  const validateEmail = (value: string) => {
    // simple regex for email
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  };

  return (
    <ThemeProvider theme={darktheme}>
      <div className="w-screen h-screen flex justify-center items-center bg-neutral-950">
        <div className="bg-neutral-900 w-fit h-fit border-neutral-700 p-2 border-2 rounded-2xl">
          <p className="text-3xl text-center">Create Account</p>
          <div className="flex items-center gap-2 m-2">
            <p className="w-24">Username:</p>
            <TextField size="small" onChange={(e)=>SetUsername(e.target.value)} label="Username"></TextField>
          </div>
          <div className="flex items-center gap-2 m-2">
            <p className="w-24">Email:</p>
            <TextField size="small" onChange={(e)=>{
              var validEmail = validateEmail(e.target.value);
              if (validEmail)
                SetEmail(e.target.value);
              else
              {
                SetEmail("Error");
              }
            }} label="Email" type="email" error={email == "Error"} helperText={email == "Error" ? "Enter a valid email" : ""}></TextField>
          </div>
          <div className="flex items-center gap-2 m-2">
            <p className="w-24">Password:</p> 
            <TextField size="small" onChange={(e)=>SetPassword(e.target.value)} label="Password" type="password"></TextField>
          </div>
          <div className="flex justify-around m-1 mt-2">
            <Button variant="outlined" onClick={()=>{handleCreateAccount()}}>Create</Button>
            <Button variant="outlined" onClick={()=>{navigate("/")}}>Back</Button>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}
