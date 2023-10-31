import { UserProps } from "../types/types";

const usersList = ({ items }: UserProps) => {
  return (
    <div className="ml-1">
      {items.map((item) => (
        <div key={item.name} className="w-full l mb-2 bg-slate-400">
          <h2>{item.name}</h2>
          <p>{item.email}</p>
          <p>{item.joined}</p>
        </div>
      ))}
    </div>
  );
};

export default usersList;
