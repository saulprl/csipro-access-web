import { useUser } from "reactfire";

import { Header } from "@/components/header/header";
import { QRGenerator } from "@/components/qr-generator/qr-generator";
import { Splash } from "@/components/splash/splash";

export const QRCodePage = () => {
  const { status: userStatus, data: userData, error: userError } = useUser();

  if (userStatus === "loading") {
    return <Splash loading />;
  }

  if (userStatus === "error") {
    return <Splash message={userError?.message ?? "Something went wrong"} />;
  }

  if (!userData) {
    return <Splash message="You don't seem to be logged in" />;
  }

  return (
    <div className="flex min-h-screen w-full flex-col items-center">
      <Header title="QR Code" />
      <div className="flex w-full flex-col items-center justify-center gap-2 px-4 py-2 sm:max-w-sm md:max-w-md lg:max-w-lg">
        <h1 className="text-center text-lg">
          Show your QR code on the scanner
        </h1>
        <QRGenerator user={userData} />
        <p className="text-center text-sm">
          Your code with regenerate every 20 seconds
        </p>
      </div>
    </div>
  );
};
