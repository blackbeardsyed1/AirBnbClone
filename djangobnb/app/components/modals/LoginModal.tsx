"use client";

import Modal from "./Modal";
import useLoginModal from "@/app/hooks/useLoginModal";
import { useState } from "react";
import CustomButton from "../forms/CustomButton";

const LoginModal = ()=>{
    const loginModal = useLoginModal()

    const content = (
        <>
        
        <form className="space-y-4">
                 <input placeholder="your email address" type="email" className="w-full h-[54px] border px-4 border-gray-300 rounded-xl"/>
                 <input placeholder="your password here" type="password" className="w-full h-[54px] border px-4 border-gray-300 rounded-xl"/>
                  
                  <div className="p-5 bg-airbnb text-white rounded-xl opacity-80">
                             Error Message
                  </div>

                 <CustomButton
                 label="Submit"
                 onClick={()=>console.log("Button Clicked")}/>
        </form>

        </>

    )
    return(
        <Modal
        content={content}
        isOpen={loginModal.isOpen}
        close={loginModal.close}
        label="Log in"
        
        />
    )
}

export default LoginModal;