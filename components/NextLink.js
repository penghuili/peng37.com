import Link from "next/link";
import React from "react";

function NextLink({ href, target, margin, style, children }) {
  return (
    <Link
      href={href}
      target={target}
      style={{ color: "white", margin, ...(style || {}) }}
    >
      {children}
    </Link>
  );
}

export default NextLink;
