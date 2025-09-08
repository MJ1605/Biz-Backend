import { Button, createTheme, TextField, ThemeProvider } from "@mui/material";
import type { Route } from "./+types/login";
import { useNavigate } from "react-router";
import { account, ID } from "~/appwrite";
import { darktheme } from "~/themes";
import { useState } from "react";
export function meta({}: Route.MetaArgs) {
  return [
    { title: "Biz Backend" },
    { name: "description", content: "login" },
  ];
}

async function CreateAccount()
{

}

export default function CreateAccountPage() {
  const navigate = useNavigate();
  const [username, SetUsername] = useState("");
  const [password, SetPassword] = useState("");
  const [email, SetEmail] = useState("");
  const [errors, SetErrors] = useState({username:false, password: {required: false, length: false}, email:false})
  

  const handleCreateAccount = async ()=>{
    console.log("username:" + username + " Password: " + password);

    const newError = {
      username: username.trim() === "",
      password: {required: password.trim() === "", length: !(password.length >= 8 && password.length <= 265)},
      email: email.trim() === "",
    };
    SetErrors(newError);
    console.log(newError);

    if (Object.values(newError).some((value) => value === true))
    {
      console.log("got some blank entries")
      return;
    }
    else
    {
      try {
        const result = await account.create(ID.unique(), email, password, username);
        console.log("account created");
      } catch (err)
      {
        console.log(err);
      }
    }
    
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
            <p className="w-24">Name:</p>
            <TextField size="small" onChange={(e)=>SetUsername(e.target.value)} label="Name" error={errors.username} helperText={errors.username ? "Cannot be blank" : ""}></TextField>
          </div>
          <div className="flex items-center gap-2 m-2">
            <p className="w-24">Email:</p>
            <TextField size="small" onChange={(e)=>{
              var validEmail = validateEmail(e.target.value);
              if (validEmail)
                {
                  SetEmail(e.target.value);
                  SetErrors((prev) => ({...prev, email:false}));
                }
              else
              {
                SetErrors((prev) => ({...prev, email:true,}))
              }
            }} label="Email" type="email" error={errors.email} helperText={errors.email ? "Enter a valid email" : ""}></TextField>
          </div>
          <div className="flex items-center gap-2 m-2">
            <p className="w-24">Password:</p> 
            <TextField size="small" onChange={(e)=>SetPassword(e.target.value)} label="Password" type="password" error={errors.password.length || errors.password.required} helperText={errors.password.required
                                                                                                                                                                                                ? "Password cannot be blank"
                                                                                                                                                                                                : errors.password.length
                                                                                                                                                                                                ? "Password must be 8-25 characters long"
                                                                                                                                                                                                : ""}></TextField>
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
