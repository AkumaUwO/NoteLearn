import Lesson1 from "./staticLessons/Lesson1";
import Lesson2 from "./staticLessons/Lesson2";
import Lesson3 from "./staticLessons/Lesson3";
import Lesson4 from "./staticLessons/Lesson4";
import Lesson5 from "./staticLessons/Lesson5";
import Lesson6 from "./staticLessons/Lesson6";
import Lesson7 from "./staticLessons/Lesson7";
import Lesson8 from "./staticLessons/Lesson8";
import Lesson9 from "./staticLessons/Lesson9";
import Lesson10 from "./staticLessons/Lesson10";
import Lesson11 from "./staticLessons/Lesson11";

export default function LessonsSecction({ lessonId }) {

    if (lessonId === '1') return (<Lesson1 lessonId={lessonId} />);
    if (lessonId === '2') return (<Lesson2 lessonId={lessonId} />);
    if (lessonId === '3') return (<Lesson3 lessonId={lessonId} />);
    if (lessonId === '4') return (<Lesson4 lessonId={lessonId} />);
    if (lessonId === '5') return (<Lesson5 lessonId={lessonId} />);
    if (lessonId === '6') return (<Lesson6 lessonId={lessonId} />);
    if (lessonId === '7') return (<Lesson7 lessonId={lessonId} />);
    if (lessonId === '8') return (<Lesson8 lessonId={lessonId} />);
    if (lessonId === '9') return (<Lesson9 lessonId={lessonId} />);
    if (lessonId === '10') return (<Lesson10 lessonId={lessonId} />);
    if (lessonId === '11') return (<Lesson11 lessonId={lessonId} />);

    return null;
};
