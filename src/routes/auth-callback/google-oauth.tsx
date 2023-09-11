import {
  GoogleAuthProvider,
  getRedirectResult,
  signInWithCredential,
} from "firebase/auth";
import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "reactfire";

import { Splash } from "@/components/splash/splash";

export const GoogleOAuth = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  const handleGoogleCallback = useCallback(async () => {
    try {
      const result = await getRedirectResult(auth);
      if (!result) {
        throw new Error("Unable to sign in with Google");
      }

      const credential = GoogleAuthProvider.credentialFromResult(result);
      if (!credential) {
        throw new Error("Unable to sign in with Google");
      }

      await signInWithCredential(auth, credential);
    } catch (error) {
      console.error(error);
    } finally {
      navigate("/");
    }
  }, [auth, navigate]);

  useEffect(() => {
    void handleGoogleCallback();
  }, [handleGoogleCallback]);

  return <Splash loading message="Authenticating..." />;
};
