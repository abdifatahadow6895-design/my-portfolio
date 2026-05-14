import type { ReactNode } from "react";

type Props = Readonly<{
  children: ReactNode;
  className?: string;
}>;

export default function Section({ children, className = "" }: Props) {
  return (
    <section
      className={`min-h-screen flex items-center justify-center px-6 py-16 ${className}`}
    >
      {children}
    </section>
  );
}
