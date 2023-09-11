import { Outlet } from "react-router-dom";

import { Header } from "@/components/header/header";

export const MainApp = () => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center bg-primary">
      <Outlet />
    </div>
  );
};
