import { type ReactNode } from "react";

type HeaderProps = {
  children: ReactNode;
};

const Header = ({ children }: HeaderProps) => {
  return <header>{children}</header>;
};

export default Header;
