"use client"

import Link from "next/link";

import GenericButton from "@/components/ui/utility/GenericButton";

export default function Home() {

  return (
    <section className="w-full h-full p-5">
      <div>
        <Link href={"/tests-menu"}>
          <GenericButton
            text={"Pruebas"}
          />
        </Link>
      </div>
    </section>
  );
}
