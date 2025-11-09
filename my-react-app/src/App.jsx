import { useState, useEffect } from "react";
import LessonSelector from "./components/LessonSelector";
import TypingArea from "./components/TypingArea";
import Stats from "./components/Stats";
import Dashboard from "./components/Dashboard";
import { lessons } from "./data/lessons";

export default function App() {
  const [currentLesson, setCurrentLesson] = useState(lessons[0]);
  const [input, setInput] = useState("");
  const [progress, setProgress] = useState(() => {
    const saved = localStorage.getItem("typingProgress");
    return saved ? JSON.parse(saved) : lessons.map(l => ({ id: l.id, title: l.title, wpm: 0, accuracy: 0 }));
  });

  const updateProgress = (wpm, accuracy) => {
    const newProgress = progress.map(p =>
      p.id === currentLesson.id ? { ...p, wpm, accuracy } : p
    );
    setProgress(newProgress);
    localStorage.setItem("typingProgress", JSON.stringify(newProgress));
  };

  return (
    <div className="h-screen flex flex-col items-center justify-start bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-4">UType Clone - تمرین تایپ</h1>

      <LessonSelector
        lessons={lessons}
        currentLesson={currentLesson}
        setCurrentLesson={(lesson) => {
          setCurrentLesson(lesson);
          setInput("");
        }}
      />

      <TypingArea text={currentLesson.text} input={input} setInput={setInput} />

      <Stats text={currentLesson.text} input={input} updateProgress={updateProgress} />

      <Dashboard progress={progress} />
    </div>
  );
}
