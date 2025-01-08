export default function NavSession({ sessionSidebar, toggleSidebar }) {

    return (
        <div className="right-0 space-x-4 flex text-right">
            <h2 className="m-auto text-white text-lg font-semibold cursor-pointer" onClick={toggleSidebar}>
                Nombre de usuario aqui
            </h2>

            <button onClick={toggleSidebar}>
                <i className={`ri-account-circle-fill text-5xl mr-2 transition-all sm:text-6xl ${sessionSidebar ? "text-cyan-300" : "text-white"}`} />
            </button>
        </div>
    );
};