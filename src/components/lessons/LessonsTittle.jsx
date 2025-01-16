export default function LessonTittle({ tittle, lessonId }) {
    return (
        <div className="flex items-center justify-center mb-6">
            <div className="flex items-center bg-fuchsia-700 p-2 rounded-full">
                <p className="text-white text-lg font-bold mx-3">
                    Lección:
                </p>
                <div className="w-12 h-12 bg-white text-lg rounded-full flex items-center justify-center font-bold text-fuchsia-700">
                    {lessonId}
                </div>
            </div>
            <h1 className="ml-5 text-3xl font-extrabold text-fuchsia-600 text-center">
                {tittle}
            </h1>
        </div>
    );
};