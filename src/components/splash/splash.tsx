import { useEffect, useState } from "react";

import { Branding } from "../ui/branding";
import { Progress } from "../ui/progress";

interface Props {
  message?: string;
  loading?: boolean;
}

export const Splash = ({ message, loading = false }: Props) => {
  const [progress, setProgress] = useState(27);

  useEffect(() => {
    if (loading) {
      const interval = setInterval(() => {
        setProgress(78);
      }, 1250);

      return () => clearInterval(interval);
    }
  });

  return (
    <main className="relative flex min-h-screen w-full flex-col items-center justify-center gap-16 bg-primary text-white">
      <img src="/images/access-logo.svg" className="w-64" />
      <div className="flex w-full flex-col items-center gap-2 md:w-2/3">
        {loading && <Progress value={progress} className="w-2/3" />}
        {message && <p className="w-2/3 text-center">{message}</p>}
      </div>
      <Branding />
    </main>
  );
};
