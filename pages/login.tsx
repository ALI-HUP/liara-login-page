"use client";

import React from "react";
import Image from "next/image";
import myImage from "../public/wp9675652-american-psycho-hd-wallpapers.jpg";
import Link from "next/link";
import { useLoginStore } from "../zustand/loginStore";
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from "@mui/material/FormControlLabel";
import Input from '@mui/joy/Input';
import Key from '@mui/icons-material/Key';
import EmailIcon from '@mui/icons-material/Email';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useForm } from "react-hook-form";



export default function Page(): React.JSX.Element {
  const { setEmail, setPassword, setRememberMe } = useLoginStore();
  const { register, handleSubmit, watch } = useForm({
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    }
  });

  const rememberMe = watch("rememberMe");

const onSubmit = (data: { email: string; password: string; rememberMe: boolean; }) => {
  const storedCredentials = JSON.parse(localStorage.getItem('userCredentials') || '{}');

  if (data.email === storedCredentials.email && data.password === storedCredentials.password) {
    
    setEmail(data.email);
    setPassword(data.password);
    setRememberMe(data.rememberMe);

    toast.success("Login successful!");
    
  } else {
    toast.error("Login failed!");
  }
};


  const notify = (message: string, type: "default" | "success" | "error" = "default") => {
    switch(type) {
      case "success":
        toast.success(message);
        break;
      case "error":
        toast.error(message);
        break;
      default:
        toast(message);
    }
  };


  return (
    <body>
      <ToastContainer />
      
      <div className="bg-img"></div>

      <div className="window">

            <Image src={myImage} alt="Description" className="hi-img"/>
            <span className="welcome-create">
              Login form
            </span>


            <form className="form-tag" action="" method="" onSubmit={handleSubmit(onSubmit)}>

                <Input 
                    placeholder="Email"
                    className="input"
                    type="email"
                    // name="email" 
                    // required 
                    // value={email} 
                    // onChange={handleEmailChange}
                    {...register("email", { required: true })}
                    startDecorator={<EmailIcon fontSize="small"/>}
                />


                <Input
                    placeholder="Password"
                    className="input"
                    type="password"
                    // name="password" 
                    // required 
                    // value={password} 
                    // onChange={handlePasswordChange}
                    {...register("password", { required: true })}
                    startDecorator={<Key fontSize="small"/>}
                />


                  <div className="remember-div">
                      <FormControlLabel 
                          control={<Checkbox {...register("rememberMe")} 
                          checked={rememberMe} />}
                          label="Remember me" 
                          className="remember-label"
                      />
                  </div>


                  <div className="button-div">
                    
                      <Button 
                          variant="contained" 
                          className="sub-button" 
                          type="submit">
                            Submit
                      </Button>

                      <Button variant="contained" className="forgot-button">
                          <Link href="/forgot" className="forgot-pass-text">
                            forgot password
                          </Link>
                      </Button>

                  </div>
                    
            </form>


          <div className="signup-link-div">
            <p>Do not have an account?? 
              <Link href="/signUp" className="signup-text">
                   Sign up
              </Link>
            </p>
          </div>


      </div>
    </body>
  )
}