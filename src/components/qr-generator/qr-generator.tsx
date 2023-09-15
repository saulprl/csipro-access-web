import axios from "axios";
import { User } from "firebase/auth";
import { FC, useState } from "react";
import QRCode from "react-qr-code";
import { useQuery } from "react-query";

import { Splash } from "../splash/splash";
import { Progress } from "../ui/progress";

interface Props {
  user: User;
}

export const QRGenerator: FC<Props> = ({ user }) => {
  const [encryptedData, setEncryptedData] = useState<string>();
  const { isLoading, error, data } = useQuery({
    queryKey: ["qr-token"],
    queryFn: async () => {
      return axios.get("http://148.225.50.130:3000/api/users/generate-token", {
        params: {
          uid: "oXBMtmcv2RSoTfuBwiJMNNAtHFK2",
        },
      });
    },
    refetchInterval: 20000,
  });

  if (isLoading) {
    return <Progress value={33} />;
  }

  if (error) {
    return <Splash message="Something went wrong while getting the token" />;
  }

  return (
    <div className="flex aspect-square w-full items-center justify-center rounded-md bg-white p-2">
      <QRCode value={data!.data!.token} className="h-full w-full" />
    </div>
  );
};
