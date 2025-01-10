export default function GenericButton({
    text,
    type,
    buttonFunction,
    disabledCondition,
    styles,
    ...props
}) {
    return (
        <button
            className={`text-lg text-white font-bold rounded-full sm:text-base transition duration-300 ease-in-out focus:outline-none ${disabledCondition ? "bg-fuchsia-400 cursor-wait" : "bg-fuchsia-700 hover:bg-fuchsia-500"} ${styles || "py-2 px-4"}`}
            type={type || "button"}
            onClick={buttonFunction}
            disabled={disabledCondition}
            {...props}
        >
            {text}
        </button>
    );
}
