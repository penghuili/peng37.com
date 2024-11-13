import Typography from "@douyinfe/semi-ui/lib/es/typography";
import React from "react";

export function Link({ href, onClick, target, children, style, small, m }) {
  return (
    <Typography.Text
      link={{
        href,
        target,
      }}
      onClick={onClick}
      size={small ? "small" : undefined}
      underline
      style={{
        margin: m || "0",
        ...(style || {}),
      }}
    >
      {children}
    </Typography.Text>
  );
}
