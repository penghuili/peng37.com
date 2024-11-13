import React from 'react';

export function Section({ children, hasGrid, p, style }) {
  return (
    <div
      style={{
        width: "100%",
        ...(hasGrid && {
          backgroundColor: "#f9f9f9",
          backgroundImage:
            "linear-gradient(to right, rgba(0, 0, 0, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 0, 0, 0.05) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }),
        padding: p,
        ...style,
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "600px",
          margin: "0 auto",
        }}
      >
        {children}
      </div>
    </div>
  );
}
