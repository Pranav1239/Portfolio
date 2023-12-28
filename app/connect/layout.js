import Navbar from "@/components/Header/Navbar";
import "../../sass/contact.scss";
import "../../sass/connect.scss";

export const metadata = {
  title: "Pranav7-Connect",
  description: "Connect with me!! and conntact me",
};

const ConnectLayout = ({ children }) => {
  return (
    <div className="flex flex-col gap-5">
      <div className="w-full">{children}</div>
    </div>
  );
};

export default ConnectLayout;
