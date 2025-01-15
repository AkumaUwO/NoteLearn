import Lesson1 from "./staticLessons/lesson1";

export default function LessonsSecction({ lessonId }) {
    
    if (lessonId == '1') return(<Lesson1/>);
    
};