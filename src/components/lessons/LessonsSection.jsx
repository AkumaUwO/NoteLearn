import Lesson1 from "./staticLessons/Lesson1";
import Lesson2 from "./staticLessons/Lesson2";

export default function LessonsSecction({ lessonId }) {

    if (lessonId === '1') return (<Lesson1 lessonId={lessonId} />);
    if (lessonId === '2') return (<Lesson2 lessonId={lessonId} />);

    return null;
};
