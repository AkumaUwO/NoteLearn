export default function SubmitButton({ styles, text, disabled, ...props }) {
    return (
        <button
            type="submit"
            className={`${styles} ${ disabled ? "bg-fuchsia-400 cursor-wait" : "bg-fuchsia-600 hover:bg-fuchsia-700"} text-lg text-white p-2 font-bold rounded-lg sm:text-base py-2 px-4 transition duration-300 ease-in-out  focus:outline-none`}
            disabled={disabled}
            {...props}
        >
            { text }
        </button>
    )
}