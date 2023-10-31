import { Link } from "react-router-dom";
import { RoomProps } from "../types/types";

const RoomsList = ({ items }: RoomProps) => {
  return (
    <div className="md:col-span-3 mb-2 md:mb-0">
      <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-4">
        {items.map((item) => (
          <Link
            to={item.id}
            key={item.id}
            className="bg-gray-400 rounded-xl px-2 h-20 flex justify-center items-center "
          >
            <h2 className="text-lg font-bold">{item.name}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RoomsList;
