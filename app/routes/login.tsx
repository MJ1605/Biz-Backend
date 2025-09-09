import { Backdrop, Button, CircularProgress, createTheme, TextField, ThemeProvider } from "@mui/material";
import type { Route } from "./+types/login";
import { useNavigate } from "react-router";
import { darktheme } from "~/themes";
import { useEffect, useState } from "react";
import { isLoggedIn, sleep, validateEmail } from "~/helpers";
import { account } from "~/appwrite";
import { AppwriteException } from "appwrite";
import { SiTicktick } from "react-icons/si";
import { MdError } from "react-icons/md";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Biz Backend" },
    { name: "description", content: "login" },
  ];
}

export default function LoginPage() {
  const navigate = useNavigate();
  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");
  const [errors, SetErrors] = useState({email: false, password: {length: false, required:false}});
  const [backdropOverlay, setBackdropOverlay] = useState(false);
  const [errortext, SetErrorText] = useState("");

  useEffect(() => {
    const checkLogin = async () => {
      const loggedIn = await isLoggedIn();
      if (loggedIn) 
        {
          navigate("/dashboard"); 
        }
    };

    checkLogin();
  }, [])
  
  const LoginWithEmail = async () => {
    const newErrors = {
      email: email.trim() === "",
      password: {required: password.trim() === "", length: !(password.length >= 8 && password.length <= 265)}
    }
    SetErrors(newErrors);

    if (Object.values(newErrors).some((value) => value === true))
    {
      console.log("got some blank entries")
      return;
    }
    else
    {
      setBackdropOverlay(true);
      try{
        const result = await account.createEmailPasswordSession(email, password);
        console.log("logged in");
        SetErrorText("Logging In...");
        await sleep(3000);
        setBackdropOverlay(false);
        navigate("/dashboard/")
      } catch (error : unknown) {
        if (error instanceof AppwriteException)
        {
          SetErrorText(error.message);
          console.log(error);
          await sleep(3000);
          setBackdropOverlay(false);
          SetErrorText("");
        }
        else
        {
          SetErrorText("Unknown Error, check the console");
          console.log(error);
          await sleep(3000);
          setBackdropOverlay(false);
          SetErrorText("");
        }
      }
    }
  };

  return (
    <ThemeProvider theme={darktheme}>
      <div className="w-screen h-screen flex justify-center items-center bg-neutral-950">
        <Backdrop open={backdropOverlay} className="flex flex-col" sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}>
          {errortext === "" ? <CircularProgress></CircularProgress> : errortext === "Logging In..." ? <SiTicktick className="text-4xl" /> : <MdError className="text-4xl"/>}
          <p>{errortext}</p>
        </Backdrop>
        <div className="bg-neutral-900 w-fit h-fit border-neutral-700 p-2 border-2 rounded-2xl">
          <p className="text-3xl text-center">Login</p>
          <div className="flex items-center gap-2 m-2">
            <p className="w-24">Email:</p>
            <TextField size="small" onChange={(e) => {
              if (validateEmail(e.target.value))
              {
                SetEmail(e.target.value);
                SetErrors((prev) => ({...prev, email:false}));
              }
              else
              {
                SetErrors((prev) => ({...prev, email:true}));
              }
              }} label="Email" error={errors.email} helperText={errors.email ? "Must be a valid email" : ""}></TextField>
          </div>
          <div className="flex items-center gap-2 m-2">
            <p className="w-24">Password:</p> 
            <TextField size="small" type="password" label="Password" onChange={(e)=>SetPassword(e.target.value)} error={errors.password.length || errors.password.required} helperText={errors.password.required ? "Password cannot be blank": errors.password.length? "Password must be 8-25 characters long": ""}></TextField>
          </div>
          <div className="flex justify-around m-1 mt-2">
            <Button variant="outlined" onClick={()=>LoginWithEmail()}>Login</Button>
            <Button variant="outlined"  onClick={()=>{navigate("/create-account")}}>Create Account</Button>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}
