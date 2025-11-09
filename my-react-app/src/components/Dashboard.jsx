export default function Dashboard({ progress }) {
  return (
    <div className="w-full max-w-2xl bg-white p-4 rounded shadow mb-4">
      <h2 className="text-xl font-bold mb-2">داشبورد پیشرفت</h2>
      <ul className="space-y-1">
        {progress.map((p) => (
          <li key={p.id} className="flex justify-between border-b py-1">
            <span>{p.title}</span>
            <span>WPM: {p.wpm} | Accuracy: {p.accuracy}%</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
