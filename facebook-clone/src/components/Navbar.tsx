import { Search, Home, Users, Bell } from "lucide-react";

export default function Navbar() {
  return (
    <div className="bg-white shadow px-4 py-2 flex justify-between items-center sticky top-0 z-50">
      <h1 className="text-blue-600 text-2xl font-bold">facebook</h1>

      <div className="flex items-center bg-gray-100 px-3 py-1 rounded-full">
        <Search size={18} />
        <input
          className="bg-transparent outline-none ml-2"
          placeholder="Search Facebook"
        />
      </div>

      <div className="flex gap-6">
        <Home />
        <Users />
        <Bell />
      </div>
    </div>
  );
}
