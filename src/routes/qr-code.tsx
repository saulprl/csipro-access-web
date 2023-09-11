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

  if (userStatus === "success" && !userData) {
    return <Splash message="You don't seem to be logged in" />;
  }

  return (
    <div className="flex min-h-screen w-full flex-col items-center">
      <Header title="QR Code" />
      <div className="flex flex-col items-center gap-4 p-4">
        <h1 className="text-center text-lg">
          Show your QR code on the scanner
        </h1>
        <QRGenerator user={userData!} />
      </div>
    </div>
  );
};
