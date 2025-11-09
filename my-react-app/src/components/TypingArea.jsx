export default function TypingArea({ text, input, setInput }) {
  return (
    <textarea
      className="w-full max-w-2xl p-3 mb-4 rounded border shadow focus:outline-none focus:ring-2 focus:ring-blue-400"
      rows={4}
      value={input}
      onChange={(e) => setInput(e.target.value)}
      placeholder="شروع به تایپ کنید..."
    />
  );
}
