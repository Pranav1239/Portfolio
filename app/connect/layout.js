export const metadata = {
  title: "Mughals Admin",
  description: "Mughals admin Dashboard",
};

const ConnectLayout = ({ children }) => {
  return (
    <div className="flex flex-col lg:flex-row gap-5">
      <div className="w-full">{children}</div>
    </div>
  );
};

export default ConnectLayout;
