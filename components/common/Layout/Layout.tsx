import React, { FC, useRef } from "react";

const Layout: FC = ({ children }) => {
  const ref = useRef<HTMLDivElement>(null)
  return <div ref={ref}>{children}</div>
}

export default Layout
