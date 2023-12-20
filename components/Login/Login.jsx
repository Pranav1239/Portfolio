import { useState } from "react";
import Dialog from "../Common/Dialog";

export default function Login() {
  const [isDialogOpen, setDialogOpen] = useState(false);

  const openDialog = () => {
    setDialogOpen(true);
  };

  const closeDialog = () => {
    setDialogOpen(false);
  };
  return (
    <div className=" flex justify-center">
      <button
        onClick={openDialog}
        className=" px-20 py-3 hover:bg-zinc-900 transition"
      >
        Login
      </button>

      {isDialogOpen && (
        <Dialog isOpen={isDialogOpen} onClose={closeDialog}>
          <h1 className="bg-bgbrand">Login With Google or Github Account</h1>
          <div className="flex bg-bgbrand flex-col gap-5 justify-center items-center mt-5">
            <div className="bg-bgbrand flex flex-col gap-5">
              <button type="button" className=" login-with-google-btn">
                Sign in with Google
              </button>
              <button type="button" className="login-with-github-btn">
                Sign in with Github
              </button>
            </div>
          </div>
        </Dialog>
      )}
    </div>
  );
}
