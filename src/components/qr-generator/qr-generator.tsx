import axios from "axios";
import { User } from "firebase/auth";
import { FC, useState } from "react";
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
      const idToken = await user.getIdToken(true);
      axios.get("http://localhost:3000/api/users/token", {
        params: {
          idToken,
        },
      });
    },
  });

  if (isLoading) {
    return <Progress value={33} />;
  }

  if (error) {
    return <Splash message="Something went wrong while getting the token" />;
  }

  return <div className="aspect-square w-full rounded-md bg-white"></div>;
};
