"use client";

import React from "react";
import Image from "next/image";
import myImage from "../../public/wp9675652-american-psycho-hd-wallpapers.jpg";
import useForgotStore  from "../../zustand/forgotStore";
import Button from '@mui/material/Button';
import Input from '@mui/joy/Input';
import EmailIcon from '@mui/icons-material/Email';
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export default function Forgot(): React.JSX.Element {
  
  const { setEmail } = useForgotStore();
  const { register, handleSubmit } = useForm({
    defaultValues: {
      email: '',
    }
  });

  const onSubmit = (data: { email: string; }) => {
    const storedCredentials = JSON.parse(localStorage.getItem('userCredentials') || '{}');
    
    if (data.email === storedCredentials.email) {
      setEmail(data.email);
      
      toast.info("If this email is registered, you will receive a new password!");
    } else {

      toast.info("If this email is registered, you'll receive a new password!");
    }

    console.log(data);
  };


  return (
    <body>
      <ToastContainer />
      
      <div className="bg-img"></div>

      <div className="window">

          <Image src={myImage} alt="Description" className="hi-img" />

          <span className="welcome-create">
              Receive new password
          </span>


          <form className="form-tag" action="" method="" onSubmit={handleSubmit(onSubmit)}>

                <Input 
                    placeholder="Send to this email"
                    className="input"
                    variant="soft"
                    type="email"
                    // name="email" 
                    // required 
                    // value={email}
                    // onChange={handleEmailChange}
                    {...register("email", { required: "Email is required" })}
                    startDecorator={<EmailIcon fontSize="small"/>}
                />


                <div className="button-div">
                  <Button type="submit" variant="contained" className="sub-button">
                      Send
                  </Button>
                </div>

          </form>

      </div>
    </body>
  )
}