import cn from "classnames";
import {
  ButtonHTMLAttributes,
  FC,
  forwardRef,
  JSXElementConstructor,
  useRef
} from "react";
import mergeRefs from "react-merge-refs";

import s from "./Button.module.css";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string
  className?: string
  type?: "submit" | "reset" | "button"
  Component?: string | JSXElementConstructor<any>
  width?: string | number
  variant?: "primary"
}

const Button: FC<Props> = forwardRef((props, buttonRef) => {
  const { className, variant, children, width, style = {}, Component = "button", ...rest } = props
  const ref = useRef<typeof Component>(null)

  const rootClassName = cn(
    s.root,
    {
      [s.primary]: variant === "primary",
    },
    className
  )

  return (
    <div
      className={rootClassName}
      style={{
        width,
        ...style,
      }}
    >
      <Component ref={mergeRefs([ref, buttonRef])} {...rest}>
        {children}
      </Component>
    </div>
  )
})

export default Button
