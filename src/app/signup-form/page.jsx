"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

import VariableInput from "@/components/ui/formsElements/VariableInput";
import SubmitButton from "@/components/ui/formsElements/SubmitButton";

export default function SingInPage() {


    /**************************{ Declaraciones }**************************/


    const loginDataObjTemplate = {
        name: '',
        userName: '',
        password: '',
        repeatPassword: ''
    }

    const router = useRouter();

    const [loginData, setLoginData] = useState(loginDataObjTemplate);
    const [credentialsError, setCredentialsError] = useState([false, '']);
    const [showPassword, setShowPassword] = useState(false);


    /**************************{ Funciones }**************************/


    const updateRegisterData = (key, newValue) => {
        setLoginData((prevLoginData) => ({
            ...prevLoginData,
            [key]: newValue
        }));
    };

    const handleSubmit = async (e) => {

        e.preventDefault();

    };

    /**************************{ Return }**************************/

    return (
        <section className="h-fit w-full py-14">
            <div className="w-full m-auto h-fit p-5 sm:bg-sectionThemeBackground sm:border border-sectionThemeBorder sm:rounded-2xl sm:shadow-lg sm:shadow-sectionThemeShadow sm:w-96">

                <h1 className="m-auto w-fit p-2 text-2xl font-bold">Registro</h1>

                <form onSubmit={handleSubmit} className="mt-2">

                    <h2 className="text-center font-bold text-red-500">{credentialsError[1]}</h2>

                    {/* Username Input */}
                    <div className="mt-6">
                        <label htmlFor="name" className="font-bold">
                            Ingresa tu Nombre:
                        </label>
                        <VariableInput
                            type={"text"}
                            id={"name"}
                            value={loginData.name}
                            setStateFunction={(e) => updateRegisterData("name", e.target.value)}
                            error={credentialsError[0]}
                            autoComplete={"off"}
                        />
                    </div>

                    {/* Username Input */}
                    <div className="mt-6">
                        <label htmlFor="userName" className="font-bold">
                            Nombre de Usuario:
                        </label>
                        <VariableInput
                            type={"text"}
                            id={"userName"}
                            value={loginData.userName}
                            setStateFunction={(e) => updateRegisterData("userName", e.target.value)}
                            error={credentialsError[0]}
                            autoComplete={"off"}
                        />
                    </div>



                    {/* Password Input */}
                    <div className="mt-6">
                        <label htmlFor="password" className="font-bold">
                            Contraseña:
                        </label>
                        <VariableInput
                            type={`${showPassword ? "text" : "password"}`}
                            id={"password"}
                            value={loginData.password}
                            setStateFunction={(e) => updateRegisterData("password", e.target.value)}
                            error={credentialsError[0]}
                            autoComplete={"off"}
                        />

                        <label htmlFor="repeatPassword" className="font-bold">
                            Repita su Contraseña:
                        </label>
                        <VariableInput
                            type={`${showPassword ? "text" : "password"}`}
                            id={"repeatPassword"}
                            value={loginData.repeatPassword}
                            setStateFunction={(e) => updateRegisterData("repeatPassword", e.target.value)}
                            error={credentialsError[0]}
                            autoComplete={"off"}
                        />

                        <button type="button" onClick={() => { setShowPassword(!showPassword) }} className="block ml-auto text-sm font-bold">Mostar Contraseña</button>

                    </div>


                    {/* Login Button */}
                    <div className="mt-6">
                        <SubmitButton text={'Registarse'} styles={"w-full"} />
                    </div>
                </form>

                {/* Register Link */}
                <div className="mt-6 text-center">
                    <p className="text-sm text-gray-500">
                        ¿Ya tienes una cuenta? {' '}
                        <Link href="/login-form" className="font-bold text-blue-500">
                            Inicia Sesión
                        </Link>
                    </p>
                </div>
            </div>
        </section>
    );
};