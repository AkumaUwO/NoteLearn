import Test3 from "./staticTests/Test3";
import Test4 from "./staticTests/Test4";
import IntervalsTest from "./staticTests/IntervalsTest";

export default function TestsSection({ testId, testTittle, setStart }) {
    if (testId == 3) return (<Test3 setStart={setStart} testId={3} testTittle={testTittle}/>);
    if (testId == 4) return (<Test4 setStart={setStart} testId={4} testTittle={testTittle}/>);
    if (testId == 6) return (<IntervalsTest setStart={setStart} testId={6} testTittle={testTittle} interval={2}/>);
    if (testId == 7) return (<IntervalsTest setStart={setStart} testId={7} testTittle={testTittle} interval={3}/>);
    if (testId == 8) return (<IntervalsTest setStart={setStart} testId={8} testTittle={testTittle} interval={4}/>);
    if (testId == 9) return (<IntervalsTest setStart={setStart} testId={9} testTittle={testTittle} interval={5}/>);
    if (testId == 10) return (<IntervalsTest setStart={setStart} testId={10} testTittle={testTittle} interval={6}/>);
    if (testId == 11) return (<IntervalsTest setStart={setStart} testId={11} testTittle={testTittle} interval={7}/>);
};