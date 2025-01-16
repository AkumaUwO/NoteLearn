import Test2 from "./staticTests/Test2"

export default function TestsSection({ testId, setStart }) {
    if (testId === '2') return (<Test2 setStart={setStart} />)
};