import Link from "next/link";

export const links = (href, children) => (
  <Link href={href} passHref>
    {children}
  </Link>
);
