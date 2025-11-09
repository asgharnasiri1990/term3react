import { useEffect, useState, useRef } from "react";

export default function Stats({ text, input, updateProgress }) {
  const [wpm, setWpm] = useState(0);
  const [accuracy, setAccuracy] = useState(100);
  const startTimeRef = useRef(null);

  useEffect(() => {
    if (!input.length) return;
    if (!startTimeRef.current) startTimeRef.current = Date.now();

    const wordsTyped = input.trim().split(/\s+/).length;
    const minutes = (Date.now() - startTimeRef.current) / 1000 / 60;
    const newWpm = Math.round(wordsTyped / minutes);

    let correct = 0;
    for (let i = 0; i < input.length; i++) {
      if (input[i] === text[i]) correct++;
    }
    const newAccuracy = Math.round((correct / text.length) * 100);

    setWpm(newWpm);
    setAccuracy(newAccuracy);

    if (updateProgress) updateProgress(newWpm, newAccuracy);
  }, [input, text, updateProgress]);

  return (
    <div className="flex gap-8 text-lg mb-4">
      <div>WPM: <span className="font-bold">{wpm}</span></div>
      <div>Accuracy: <span className="font-bold">{accuracy}%</span></div>
    </div>
  );
}
