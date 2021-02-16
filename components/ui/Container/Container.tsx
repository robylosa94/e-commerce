import cn from "classnames";
import { FC } from "react";

import s from "./Container.module.css";

interface Props {
  className?: string
}

const Container: FC<Props> = ({ children, className }) => {
  const rootClassName = cn(s.root, className)

  return <div className={rootClassName}>{children}</div>
}

export default Container
