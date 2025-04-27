"use client";

import type React from "react";
import type { LoaderProps } from "../../types/Loader.types";

const Loader: React.FC<LoaderProps> = ({
  size = 40,
  color = "#0d9488",
  speed = 2,
}) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "2rem",
      }}
    >
      <div
        style={{
          width: `${size}px`,
          height: `${size}px`,
          borderRadius: "50%",
          border: `4px solid rgba(0, 0, 0, 0.1)`,
          borderLeftColor: color,
          animation: `spin ${1 / speed}s linear infinite`,
        }}
      />
      <style>{`
        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};

export default Loader;
