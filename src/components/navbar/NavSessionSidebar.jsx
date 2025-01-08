"use client"

import SidebarMenuLi from "./SidebarMenuLi";

export default function NavSessionSidebar({ sessionSidebar, toggleSidebar }) {

    return (
        <menu>
            {sessionSidebar &&
                <div className="fixed inset-0 bg-black opacity-50 z-10"
                    onClick={toggleSidebar} >
                </div>
            }

            <div
                className={`fixed right-0 top-20 h-full w-screen sm:w-64 bg-white p-6 transform transition-transform duration-300 ease-in-out z-40 ${sessionSidebar ? 'translate-x-0' : 'translate-x-full'}`}
            >
                <h1 className="text-2xl font-semibold mb-4">Menú de Sesión</h1>
                <ul>
                    <div>
                        <SidebarMenuLi
                            text={"Iniciar Sesión"}
                            href={"/login-form"}
                            onClick={toggleSidebar}
                        />

                        <SidebarMenuLi
                            text={"Registrarse"}
                            href={"/signup-form"}
                            onClick={toggleSidebar}
                        />
                    </div>
                </ul>
            </div>
        </menu>
    )
}