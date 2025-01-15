import Lesson1 from "./staticLessons/lesson1";
import Lesson2 from "./staticLessons/lesson2";

export default function LessonsSecction({ lessonId }) {
    
    if (lessonId === '1') return(<Lesson1 />);
    if (lessonId === '2') return(<Lesson2 />);
    
    return null;
};
