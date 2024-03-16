"use client";

import React from "react";
import Image from "next/image";
import myImage from "../../public/wp9675652-american-psycho-hd-wallpapers.jpg";
import { useSignupStore } from "../../zustand/signupStore";
import Button from '@mui/material/Button';
import Input from '@mui/joy/Input';
import Stack from '@mui/joy/Stack';
import LinearProgress from '@mui/joy/LinearProgress';
import Key from '@mui/icons-material/Key';
import Person from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export default function Signup(): React.JSX.Element {
  const { setEmail, setUserName, setPassword } = useSignupStore();
  const { register, handleSubmit, watch } = useForm({
    defaultValues: {
      userName: '',
      email: '',
      password: '',
    }
  });

  const onSubmit = (data: { userName: string; email: string; password: string; }) => {

    setUserName(data.userName);
    setEmail(data.email);
    setPassword(data.password);

    localStorage.setItem('userCredentials', JSON.stringify({ email: data.email, password: data.password }));

    toast.success("Signup successful!");

    console.log(data);
  };

  const password = watch("password");
  const minLength = 12;

  
  return (
    <body>
      <ToastContainer />

      <div className="bg-img"></div>

      <div className="window">

        <Image src={myImage} alt="Description" className="hi-img" />

        <span className="welcome-create">
            Create your account
        </span>


        <form className="form-tag" action="" method="" onSubmit={handleSubmit(onSubmit)}>

              <Input 
                  placeholder="User name"
                  className="input"
                  variant="soft"
                  type="name"
                  // name="user-name" 
                  // required 
                  // value={userName} 
                  // onChange={handleUserNameChange}
                  {...register("userName", { required: true })}
                  startDecorator={<Person fontSize="small"/>}
              />

              <Input 
                  placeholder="Email"
                  className="input"
                  variant="soft"
                  type="email"
                  // name="email" 
                  // required 
                  // value={email} 
                  // onChange={handleEmailChange}
                  {...register("email", { required: true })}
                  startDecorator={<EmailIcon fontSize="small"/>}
              />

              <Stack className="input" spacing={0.5} sx={{ '--hue': Math.min(password.length * 10, 120) }}>

                  <Input
                    className="input"
                    type="password"
                    placeholder="Password"
                    startDecorator={<Key fontSize="small"/>}
                    // value={password}
                    // onChange={handleCombinedChange}
                    // name="password"
                    // required
                    {...register("password", { required: true })}

                  />
                    
                    <LinearProgress
                      determinate
                      size="sm"
                      value={Math.min((password.length * 100) / minLength, 100)}
                      sx={{ bgcolor: 'background.level3', color: 'hsl(var(--hue) 80% 40%)' }}
                    />
              </Stack>


            <div className="button-div">
              <Button variant="contained" className="sub-button" type="submit">
                  Submit
              </Button>
            </div>

        </form>

      </div>
    </body>
  )
}