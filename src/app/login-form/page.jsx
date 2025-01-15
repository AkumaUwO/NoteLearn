"use client"

import { useState, useContext } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

import { UserContex } from "@/contexts/UserContext";

import { user_Login } from "@/api/user.api";

import VariableInput from "@/components/ui/formsElements/VariableInput";
import SubmitButton from "@/components/ui/formsElements/SubmitButton";

export default function LoginPage() {


    /**************************{ Declaraciones }**************************/


    const loginDataObjTemplate = {
        username: '',
        password: ''
    }

    const router = useRouter();

    const { setUserData } = useContext(UserContex);

    const [loginData, setLoginData] = useState(loginDataObjTemplate);
    const [credentialsError, setCredentialsError] = useState([false, '']);
    const [showPassword, setShowPassword] = useState(false);


    /**************************{ Funciones }**************************/


    const updateLoginData = (key, newValue) => {
        setLoginData((prevLoginData) => ({
            ...prevLoginData,
            [key]: newValue
        }));
    };

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();

            if (!loginData.username || !loginData.password) {
                setCredentialsError([true, "Rellene todos los campos."]);
                return;
            }

            const loginResult = await user_Login({
                username: loginData.username.toLowerCase(),
                password: loginData.password
            });

            if(!loginResult.dataUser) {
                setCredentialsError([true, "Error al iniciar sesión verifique sus datos."]);
                return;
            };

            setUserData(loginResult.dataUser);
            router.push("/");
        } catch (error) {
            console.error(error);
        }
    };

    /**************************{ Return }**************************/

    return (
        <section className="h-fit w-full py-14">
            <div className="w-full m-auto h-fit p-5 sm:bg-sectionThemeBackground sm:border border-sectionThemeBorder sm:rounded-2xl sm:shadow-lg sm:shadow-sectionThemeShadow sm:w-96">

                <h1 className="m-auto w-fit p-2 text-2xl font-bold">Iniciar Sesión</h1>

                <form onSubmit={handleSubmit} className="mt-2">

                    <h2 className="text-center font-bold text-red-500">{credentialsError[1]}</h2>

                    {/* Username Input */}
                    <div className="mt-6">
                        <label htmlFor="username" className="font-bold">
                            Nombre de Usuario:
                        </label>
                        <VariableInput
                            type={"text"}
                            id={"username"}
                            value={loginData.username}
                            setStateFunction={(e) => updateLoginData("username", e.target.value)}
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
                            setStateFunction={(e) => updateLoginData("password", e.target.value)}
                            error={credentialsError[0]}
                            autoComplete={"off"}
                        />

                        <button type="button" onClick={() => { setShowPassword(!showPassword) }} className="block ml-auto text-sm font-bold">Mostar Contraseña</button>
                    </div>


                    {/* Login Button */}
                    <div className="mt-6">
                        <SubmitButton text={'Iniciar Sesión'} styles={"w-full"} />
                    </div>
                </form>

                {/* Register Link */}
                <div className="mt-6 text-center">
                    <p className="text-sm text-gray-500">
                        ¿No tienes una cuenta? {' '}
                        <Link href="/signup-form" className="font-bold text-blue-500">
                            Regístrate
                        </Link>
                    </p>
                </div>
            </div>
        </section>
    );
};