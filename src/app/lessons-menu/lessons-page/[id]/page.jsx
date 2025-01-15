"use client"

import { useParams } from "next/navigation";

import LessonsSecction from "@/components/lessons/lessonsSection";

export default function LessonsPage() {

    const lessonId = useParams();
    
    return(
        <LessonsSecction lessonId={lessonId.id}/>
    );
};