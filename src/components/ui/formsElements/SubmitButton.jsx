export default function SubmitButton({ styles, text, disabled, ...props }) {
    return (
        <button
            type="submit"
            className={`${ disabled ? "bg-fuchsia-400 cursor-wait" : ""} text-lg text-white p-2 font-bold  sm:text-base py-2 px-4 transition duration-300 ease-in-out  focus:outline-none ${styles || "rounded-lg"}`}
            disabled={disabled}
            {...props}
        >
            { text }
        </button>
    )
}