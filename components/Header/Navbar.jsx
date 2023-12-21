import NavLinks from "./NavLinks";
import UserNav from "./NavMenu";
// import { useSession } from "next-auth/react";

export default  function Navbar() {
  // const { data: session } = useSession();
  return (
    <div className="flex justify-end items-center p-4">
      <div>
        <NavLinks />
      </div>
      <div>
        {/* <UserNav currentUser={session} /> */}
      </div>
    </div>
  );
}
