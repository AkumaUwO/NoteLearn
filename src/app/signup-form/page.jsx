"use client"

import { useState, useContext } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

import { registerUser } from "@/api/user.api";

import { UserContex } from "@/contexts/UserContext";

import VariableInput from "@/components/ui/formsElements/VariableInput";
import SubmitButton from "@/components/ui/formsElements/SubmitButton";

export default function SingInPage() {


    /**************************{ Declaraciones }**************************/


    const registerDataObjTemplate = {
        name: '',
        username: '',
        password: '',
        repeatPassword: ''
    }

    const router = useRouter();

    const { setUserData } = useContext(UserContex);

    const [registerData, setregisterData] = useState(registerDataObjTemplate);
    const [credentialsError, setCredentialsError] = useState([false, '']);
    const [showPassword, setShowPassword] = useState(false);


    /**************************{ Funciones }**************************/

    const updateRegisterData = (key, newValue) => {
        setregisterData((prevregisterData) => ({
            ...prevregisterData,
            [key]: newValue
        }));
    };

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();

            if (registerData.password !== registerData.repeatPassword) {
                setCredentialsError([true, 'Las contraseñas no coinciden.']);
                return;
            }

            const userData = {
                name: registerData.name,
                username: registerData.username.toLowerCase(),
                password: registerData.password
            };

            const registerResult = await registerUser(userData);

            if (!registerResult.dataUser) {
                setCredentialsError([true, registerResult.message]);
                return
            };

            sessionStorage.setItem("user", JSON.stringify(registerResult.dataUser));

            setUserData(registerResult.dataUser);
            router.push("/lessons-menu");
        } catch (error) {
            console.error("handleSubmit error: ", error);
        };
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
                            value={registerData.name}
                            setStateFunction={(e) => updateRegisterData("name", e.target.value)}
                            error={credentialsError[0]}
                            autoComplete={"off"}
                        />
                    </div>

                    {/* Username Input */}
                    <div className="mt-6">
                        <label htmlFor="username" className="font-bold">
                            Nombre de Usuario:
                        </label>
                        <VariableInput
                            type={"text"}
                            id={"username"}
                            value={registerData.username}
                            setStateFunction={(e) => updateRegisterData("username", e.target.value)}
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
                            value={registerData.password}
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
                            value={registerData.repeatPassword}
                            setStateFunction={(e) => updateRegisterData("repeatPassword", e.target.value)}
                            error={credentialsError[0]}
                            autoComplete={"off"}
                        />

                        <button type="button" onClick={() => { setShowPassword(!showPassword) }} className="block ml-auto text-sm font-bold">Mostar Contraseña</button>

                    </div>


                    {/* Login Button */}
                    <div className="mt-6">
                        <SubmitButton text={'Registarse'} styles={"w-full px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full transform transition duration-300 hover:scale-105"} />
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