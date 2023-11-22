import { ReactNode } from "react";

interface Infobox {
  mode: "hint" | "warning";
  children: ReactNode;
}

export const Infobox = ({ mode, children }: Infobox) => {
  //info, warning,
  if (mode === "hint") {
    return (
      <aside className="infobox infobox-hint">
        <p>{children}</p>
      </aside>
    );
  }

  return (
    <aside className="infobox infobox-warning warning--medium">
      <h2>Warning</h2>
      <p>{children}</p>
    </aside>
  );
};

export default Infobox;
