"use client"

import Link from "next/link";

import GenericButton from "@/components/ui/utility/GenericButton";

export default function Home() {

  return (
    <section className="w-full h-full p-5">
      <div className="text-center">
        <Link href={"/lessons-menu"}>
          <GenericButton
            text={"Lecciones"}
          />
        </Link>
        <Link href={"/lessons-menu/test-page/1"}>
          <GenericButton
            text={"test"}
          />
        </Link>
      </div>
    </section>
  );
}
