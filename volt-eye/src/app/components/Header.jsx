export default function Header() {
  return (
    <header className="flex justify-between items-center mb-6">
      <h2 className="text-2xl font-bold text-gray-800">
        Dashboard
      </h2>

      <div className="flex gap-4 text-xl">
        <button className="hover:scale-110 transition">🔔</button>
        <button className="hover:scale-110 transition">👤</button>
      </div>
    </header>
  );
}