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
            <div className='flex h-full bg-[#dfeff2]'>
                <div className='sm:w-3/4 flex justify-center items-center'>
                    <img src="/images/icon.svg" className='w-[200px] object-cover  hidden sm:block' />
                </div>
                <section className=' bg-white h-full w-full sm:w-3/4 rounded-l-3xl'>
                    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                        <div className="sm:mx-auto sm:w-full sm:max-w-sm">

                            <h2 className="mt-10  text-3xl font-semibold leading-9 tracking-tight text-black mb-7">Faça seu login</h2>
                            <p className='text-2x 1 text-[#b7b7b7]'>Digite seu Email institucional e o seu RM nos campos abaixo e clique em entrar para fazer seu login</p>
                        </div>

                        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                            <form className="space-y-6" action="#" method='post' onSubmit={(e) => { e.preventDefault(); handleLogin(); }}>
                                <div>
                                    <div className="relative z-0">
                                        <input onChange={(e) => { setEmail(e.target.value) }} name="email" type="email" autoComplete="email" id="email" className="border-b-[#b7b7b7] block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#b7b7b7] focus:outline-none focus:ring-0 focus:border-[#b7b7b7] peer" placeholder=" " />
                                        <label htmlFor="email" className="absolute text-sm font-medium text-[#b7b7b7] dark:text-[#cacaca] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-[#b7b7b7] peer-focus:dark:text-[#b7b7b7] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">
                                            E-mail
                                        </label>
                                    </div>
                                    {/* <div className="mt-2">
                                        <input onChange={(e) => { setEmail(e.target.value) }} name="email" type="email" autoComplete="email" className="block w-full rounded-md border-0 border-b border-b-black bg-transparent rounded-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6" />
                                    </div> */}
                                </div>

                                <div>
                                    <div className="flex  flex-col justify-between">
                                        <div className="relative z-0">
                                            <input onChange={(e) => { setPassword(e.target.value) }} type="password" autoComplete="current-password" id="password" className="border-b-[#b7b7b7] block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-black dark:focus:border-[#b7b7b7] focus:outline-none focus:ring-0 focus:border-[#b7b7b7] peer" placeholder=" " />
                                            <label htmlFor="password" className="absolute text-sm font-medium text-[#b7b7b7] dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-[#b7b7b7] peer-focus:dark:text-[#b7b7b7] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">
                                                Senha
                                            </label>
                                        </div>
                                    </div>
                                    <div className="text-sm mt-5 ">
                                        <a href="#" className="font-semibold text-gray-600 hover:text-[#005C6D]">Esqueceu a senha?</a>
                                    </div>
                                    {/* <div className="mt-2">
                                        <input onChange={(e) => { setPassword(e.target.value) }} name="password" type="password" autoComplete="current-password" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                    </div> */}
                                </div>

                                <div>
                                    <button type="submit" className="flex w-full justify-center rounded-full bg-[#005C6D] px-3 py-1.5 text-xl font-semibold leading-8 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 ">{loading ? <Icon icon={"hugeicons:loading-03"} height={"32px"} /> : "Entrar"}</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            </div>
        </div>

    )
}