"use client";

import Link from "next/link";
import { useEffect } from "react";
import GenericButton from "@/components/ui/utility/GenericButton";
import AppLogo from "@/components/navbar/AppLogo"; // Importamos el componente AppLogo

export default function Home() {
  useEffect(() => {
    const fadeInElements = document.querySelectorAll(".fade-in");
    fadeInElements.forEach((el, index) =>
      setTimeout(() => el.classList.add("opacity-100", "translate-y-0"), index * 200)
    );
  }, []);

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <main className="flex-grow flex items-center justify-center px-4 py-6 sm:px-6 md:px-8">
        <section className="text-center space-y-6">
          {/* Logo */}
          <div className="flex justify-center mb-8 fade-in opacity-0 translate-y-5 transition duration-700">
            <AppLogo width="250" height="250" className="text-black" />
          </div>

          {/* Título */}
          <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 fade-in opacity-0 translate-y-5 transition duration-700">
            Bienvenido a NoteLearn
          </h2>

          {/* Descripción */}
          <p className="text-lg md:text-xl text-gray-700 mt-4 fade-in opacity-0 translate-y-5 transition duration-700">
            Lecciones y pruebas para mejorar tus habilidades musicales.
          </p>

          {/* Botones */}
          <div className="flex justify-center space-x-6 mt-8 fade-in opacity-0 translate-y-5 transition duration-700">
            <Link href="/lessons-menu">
              <GenericButton
                text={"Lecciones"}
                className="w-48 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg shadow-xl transform transition duration-300 hover:scale-105 hover:shadow-2xl font-bold"
              />
            </Link>
            <Link href="/lessons-menu/test-page/1">
              <GenericButton
                text={"Practica Ahora"}
                className="w-48 px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-lg shadow-xl transform transition duration-300 hover:scale-105 hover:shadow-2xl font-bold"
              />
            </Link>
          </div>
        </section>
      </main>

      {/* Footer Visual Sencillo */}
      <footer className="w-full py-6 bg-fuchsia-700">
        <div className="text-center text-white">
          <p className="text-sm font-light">
            © {new Date().getFullYear()} NoteLearn. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
