import react from "react";

export const Metadata = ({ children }: { children: react.ReactNode }) => {
  return <section className="md:col-span-2">{children}</section>;
};
