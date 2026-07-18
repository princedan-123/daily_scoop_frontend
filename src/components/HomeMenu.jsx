import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function HomeMenu() {
  const [isOpen, setIsOpen] = useState(true);
  function handleMenu() {
    setIsOpen((prev) => !prev);
  }
  if (!isOpen) {
    return <Menu size={20} onClick={handleMenu} />;
  } else {
    return (
      <div className="relative">
        <X
          size={20}
          className="absolute top-3 right-2 cursor-pointer bg-white rounded-full shadow"
          onClick={handleMenu}
        />
        <div className="flex flex-col items-center shadow-lg rounded bg-white w-44 h-30 py-4">
          <div className="p-2 border-b-1 w-full flex flex-col items-center border-gray-300">
            Login
          </div>
          <div className="p-2 border-b-1 w-full flex flex-col items-center border-gray-300">
            Signup
          </div>
        </div>
      </div>
    );
  }
}
