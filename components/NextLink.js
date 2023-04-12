import Link from "next/link";
import React from "react";

function NextLink({ href, target, margin, style, className, children }) {
  return (
    <Link
      className={className}
      href={href}
      target={target}
      style={{ color: "white", margin, ...(style || {}) }}
    >
      {children}
    </Link>
  );
}

export default NextLink;
