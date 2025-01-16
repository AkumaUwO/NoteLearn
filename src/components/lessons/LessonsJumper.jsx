import Link from "next/link";

export default function LessonsJumper({ id, test }) {
    return (
        <div className="my-5 mx-auto w-fit h-fit flex items-center">
            {id > 1 ?
                <div className={`${test ? "w-[250px] flex justify-end" : ""}`}>
                    <Link
                        className={"mx-2 flex items-center"}
                        href={`/lessons-menu/lessons-page/${id - 1}`}
                    >
                        <i className="ri-arrow-left-s-line text-2xl font-bold text-fuchsia-800"></i>
                        <p className="font-bold underline decoration-2 decoration-fuchsia-500">
                            Anterior Lección
                        </p>
                    </Link>
                </div>
                :
                <div className="w-[120px] mx-2"></div>
            }

            <div className="w-12 h-12 bg-fuchsia-600 text-white text-lg rounded-full flex items-center justify-center">
                {id}
            </div>

            {test ?
                <Link
                    className="mx-2"
                    href={`/lessons-menu/test-page/${id}`}
                >
                    <div className="flex items-center bg-fuchsia-600 p-2 rounded-full hover:bg-fuchsia-500 transition-all duration-300 ease-in-out">
                        <p className="text-white text-lg font-bold mx-3">
                            Prueba lo Aprendido
                        </p>
                        <div className="w-8 h-8 bg-white text-lg rounded-full flex items-center justify-center font-bold">
                            <i className="ri-arrow-right-s-fill text-lg text-fuchsia-600"></i>
                        </div>
                    </div>
                </Link>
                :
                <Link
                    className="mx-2 flex items-center"
                    href={`/lessons-menu/lessons-page/${id + 1}`}
                >
                    <p className="font-bold underline decoration-2 decoration-fuchsia-500">Siguiente Lección</p>
                    <i className="ri-arrow-right-s-line text-2xl font-bold text-fuchsia-800"></i>
                </Link>
            }
        </div>
    );
};