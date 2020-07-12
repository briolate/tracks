import React from "react";
import { Provider as AuthProvider } from "./context/AuthContext";
import { Provider as LocationProvider } from "./context/LocationContext";
import { Provider as TrackProvider } from "./context/TrackContext";
import { Routes } from "./Routes";

export const Providers = () => {
  return (
    <TrackProvider>
      <LocationProvider>
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </LocationProvider>
    </TrackProvider>
  );
};
