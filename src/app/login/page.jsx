"use client"

import { useState } from 'react'
import { toast } from 'sonner'
import httpClient from './../../service/api'
import { useRouter } from 'next/navigation';
import { Icon } from '@iconify/react';

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const router = useRouter();

    const handleLogin = async (e) => {
        setLoading(true)
        try {
            if (!email)
                toast.warning("Por favor, preencha o e-mail.")
            if (!password)
                toast.warning("Por favor, preencha a senha.")
            if (!email || !password) {
                setLoading(false)
                return;
            }


            const response = await httpClient.post("auth", {
                email: email,
                password: password
            });
            setLoading(false)
            if (response.status == 200) {                
                localStorage.setItem("user_token", response.data.token)
                httpClient.defaults.headers.authorization = `Bearer ${response.data.token}`;
                router.push('/home', { scroll: false });
            }
            else if (response.status == 401)
                toast.warning("E-mail ou senha inválido :(");
            else
                toast.error("Algo deu errado, por favor contate um administrator!")

        }
        catch (error) {
            setLoading(false)
            var erro = await error;
        }
    }

    return (
        <div className="h-screen">
            <div className='flex h-full'>
                <img src="/images/backgroundLogin.png" className='hidden w-1/2 h-full object-cover sm:block' />
                <section className='bg-gray-100 h-full w-full'>
                    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                            <img className="mx-auto h-10 w-auto" src="/images/icon.svg" alt="Your Company" />
                            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Logue na sua conta</h2>
                        </div>

                        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                            <form className="space-y-6" action="#" method='post' onSubmit={(e) => { e.preventDefault(); handleLogin(); }}>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">E-mail</label>
                                    <div className="mt-2">
                                        <input onChange={(e) => { setEmail(e.target.value) }} name="email" type="email" autoComplete="email" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-white" />
                                    </div>
                                </div>

                                <div>
                                    <div className="flex items-center justify-between">
                                        <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Senha</label>
                                        <div className="text-sm">
                                            <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">Esqueceu a senha?</a>
                                        </div>
                                    </div>
                                    <div className="mt-2">
                                        <input onChange={(e) => { setPassword(e.target.value) }} name="password" type="password" autoComplete="current-password" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-white" />
                                    </div>
                                </div>

                                <div>
                                    <button type="submit" className="flex w-full justify-center rounded-md bg-red-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">{loading ? <Icon icon={"hugeicons:loading-03"} height={"24px"}/> : "Entrar"}</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            </div>
        </div>

    )
}