'use client'
import React, { useCallback, useState } from 'react'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
type Variant = 'LOGIN' | 'REGISTER'
const AuthForm = () => {
    const [variant,setVariant] = useState<Variant>('LOGIN');
    const [isLoading,setIsLoading] = useState(false);
    const toggleVariant = useCallback(()=>{
        if(variant === 'LOGIN'){
            setVariant('REGISTER');
        }else{
            setVariant('LOGIN');
        }
    },[variant])

    const {
        register,handleSubmit,formState:{
            errors
        }
    } = useForm<FieldValues>({
        defaultValues:{
            name:"",
            email:"",
            password:""
        }
    })
    const onSubmit:SubmitHandler<FieldValues> = (data)=>{
        setIsLoading(true);

        if(variant ==='REGISTER'){
            //Todo axios register
        }else{
            //todo nextauth signin
        }
    }
  return (
    <div>AuthForm</div>
  )
}

export default AuthForm