/* eslint-disable check-file/filename-naming-convention */
import { Toaster } from "react-hot-toast";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useSigninCheck } from "reactfire";

import { Splash } from "./components/splash/splash";
import { Login } from "./routes/login";
import { MainApp } from "./routes/main-app";
import { ProtectedRoute } from "./routes/protected-route";

function App() {
  const { status, data, error } = useSigninCheck();

  if (status === "loading") {
    return <Splash loading />;
  }

  if (status === "error") {
    return <Splash message={error?.message ?? "Something went wrong"} />;
  }

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-between bg-muted font-sans text-white">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<ProtectedRoute isAuthenticated={data.signedIn} />}
          >
            <Route path="/" element={<Navigate to="/app" replace />} />
            <Route path="/app/*" element={<MainApp />} />
          </Route>
          <Route
            path="/login"
            element={data.signedIn ? <Navigate to="/" /> : <Login />}
          />
        </Routes>
      </BrowserRouter>
      <Toaster position="bottom-center" />
    </main>
  );
}

export default App;
