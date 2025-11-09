export default function LessonSelector({ lessons, currentLesson, setCurrentLesson }) {
  return (
    <div className="flex gap-2 mb-4 overflow-x-auto w-full max-w-2xl">
      {lessons.map((lesson) => (
        <button
          key={lesson.id}
          className={`px-3 py-1 rounded ${
            lesson.id === currentLesson.id ? "bg-blue-500 text-white" : "bg-white border"
          }`}
          onClick={() => setCurrentLesson(lesson)}
        >
          {lesson.title}
        </button>
      ))}
    </div>
  );
}
