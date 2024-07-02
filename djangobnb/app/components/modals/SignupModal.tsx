"use client";

import Modal from "./Modal";
import useSignupModal from "@/app/hooks/useSignupModal";
import { useState } from "react";
import { useRouter } from "@/node_modules/next/navigation";
import CustomButton from "../forms/CustomButton";
import apiService from "@/app/services/apiService";

const SignupModal = ()=>{
    const router = useRouter();
    const signupModal = useSignupModal();
    const [email, setEmail] = useState('');
    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');
    const [errors, setErrors] = useState<string[]>([]);

    const submitSignup = async () => {
        const formData = {
            email: email,
            password1: password1,
            password2: password2
        }

        const response = await apiService.post('/api/auth/register/', formData);

        if (response.access) {
            // handleLogin(response.user.pk, response.access, response.refresh);

            signupModal.close();

            router.push('/')
        } else {
            const tmpErrors: string[] = Object.values(response).map((error: any) => {
                return error;
            })

            setErrors(tmpErrors);
        }
    }

    const content = (
        <>
        
        <form 
        className="space-y-4">
                 <input onChange={(e)=> setEmail(e.target.value)}  placeholder="your email address" type="email" className="w-full h-[54px] border px-4 border-gray-300 rounded-xl"/>
                 <input onChange={(e)=> setPassword1(e.target.value)} placeholder="your password here" type="password" className="w-full h-[54px] border px-4 border-gray-300 rounded-xl"/>
                 <input onChange={(e)=> setPassword2(e.target.value)} placeholder="Repeat password" type="password" className="w-full h-[54px] border px-4 border-gray-300 rounded-xl"/>
                 
                 {errors.map((error, index) => {
                    return (
                        <div 
                            key={`error_${index}`}
                            className="p-5 bg-airbnb text-white rounded-xl opacity-80"
                        >
                            {error}
                        </div>
                    )
                })}

                 <CustomButton
                 label="Submit"
                 onClick={submitSignup}/>
        </form>

        </>

    )
    return(
        <Modal
        content={content}
        isOpen={signupModal.isOpen}
        close={signupModal.close}
        label="Sign up"
        
        />
    )
}

export default SignupModal;