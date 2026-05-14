export default function Sidebar() {
  return (
    <div className="hidden md:block w-64 p-4">
      <ul className="space-y-4">
        <li className="font-semibold">🏠 Home</li>
        <li>👥 Friends</li>
        <li>📺 Watch</li>
        <li>🛒 Marketplace</li>
      </ul>
    </div>
  );
}
