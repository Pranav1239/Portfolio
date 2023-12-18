"use client"
const UserItem = ({ children, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="px-4 py-3 hover:bg-zinc-900 transition"
    >
      {children}
    </div>
  );
};

export default UserItem;
