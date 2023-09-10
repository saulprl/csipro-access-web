import { Header } from "@/components/header/header";

export const MainApp = () => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center bg-primary">
      <Header />
      <div className="relative flex min-h-screen w-full flex-col items-center justify-between bg-primary md:max-w-md"></div>
    </div>
  );
};
