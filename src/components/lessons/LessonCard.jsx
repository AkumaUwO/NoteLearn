export default function LesssonCard({ children, styles }) {
    return (
        <div className={`mx-auto mt-5 w-3/4 border rounded-xl border-2 shadow-lg px-4 py-2 bg-transparent ${styles}`}>
            {children}
        </div>
    );
};
