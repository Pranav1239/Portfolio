import { useState } from "react";
import Dialog from "../Common/Dialog";
import { useSession, signOut } from "next-auth/react";
import { signIn } from "next-auth/react";
import UserItem from "../Header/UserItem";

export default function Login() {
  const [isDialogOpen, setDialogOpen] = useState(false);

  const openDialog = () => {
    setDialogOpen(true);
  };

  const closeDialog = () => {
    setDialogOpen(false);
  };
  return (
    <div className=" ">
      <UserItem onClick={openDialog}>Login</UserItem>

      {isDialogOpen && (
        <Dialog isOpen={isDialogOpen} onClose={closeDialog}>
          <h1 className="bg-bgbrand">Login With Google or Github Account</h1>
          <div className="flex bg-bgbrand flex-col gap-5 justify-center items-center mt-5">
            <div className="bg-bgbrand flex flex-col gap-5">
              <button
                type="button"
                onClick={() => signIn("google")}
                className=" login-with-google-btn"
              >
                Sign in with Google
              </button>
            </div>
          </div>
        </Dialog>
      )}
    </div>
  );
}
