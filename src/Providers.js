import React from "react";
import { Provider as AuthProvider } from "./context/AuthContext";
import { Routes } from "./Routes";

export const Providers = () => {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
};
