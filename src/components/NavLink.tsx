import { NavLink as RouterNavLink, NavLinkProps } from "react-router-dom";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface NavLinkCompatProps extends Omit<NavLinkProps, "className"> {
  className?: string;
  activeClassName?: string;
  pendingClassName?: string;
}

const NavLink = forwardRef<HTMLAnchorElement, NavLinkCompatProps>(
  (
    { className, activeClassName, pendingClassName, to, onClick, ...props },
    ref,
  ) => {
    const isSection = typeof to === "string" && to.startsWith("#");
    const sectionId = isSection ? to.slice(1) : null;

    return (
      <RouterNavLink
        ref={ref}
        to={isSection ? "" : to}
        onClick={(e) => {
          if (isSection && sectionId) {
            e.preventDefault();
            const el = document.getElementById(sectionId);
            el?.scrollIntoView({ behavior: "smooth" });
          }
          onClick?.(e);
        }}
        className={({ isActive, isPending }) =>
          cn(
            className,
            isActive && activeClassName,
            isPending && pendingClassName,
          )
        }
        {...props}
      />
    );
  },
);

NavLink.displayName = "NavLink";

export { NavLink };
