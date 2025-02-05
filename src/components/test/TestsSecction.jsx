import Test3 from "./staticTests/Test3"

export default function TestsSection({ testId, setStart }) {
    if (testId === '3') return (<Test3 setStart={setStart} />)
};