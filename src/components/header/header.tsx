import { Link } from "react-router-dom";
import { useAuth } from "reactfire";

import { Navbar } from "../navbar/navbar";
import { Button } from "../ui/button";

export const Header = () => {
  const auth = useAuth();

  const handleSignOut = () => {
    void auth.signOut();
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-muted">
      <div className="container flex h-14 items-center gap-8">
        <Link to="/" className="flex items-center gap-2">
          <img
            src="/images/access-logo.svg"
            alt="Logo de CSI PRO Access"
            width={24}
          />
          <span className="flex gap-1 whitespace-nowrap">
            CSI PRO{" "}
            <span className="bg-white px-1 font-bold text-muted">ACCESS</span>
          </span>
        </Link>
        <Navbar />
        <div className="flex-grow" />
        <Button
          onClick={handleSignOut}
          className="bg-white text-muted hover:bg-destructive hover:text-white"
        >
          Sign out
        </Button>
      </div>
    </header>
  );
};
