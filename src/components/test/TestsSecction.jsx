import Test3 from "./staticTests/Test3";
import Test4 from "./staticTests/Test4";

export default function TestsSection({ testId, testTittle, setStart }) {
    if (testId == 3) return (<Test3 setStart={setStart} testId={3} testTittle={testTittle}/>)
    if (testId == 4) return (<Test4 setStart={setStart} testId={4} testTittle={testTittle}/>)
};