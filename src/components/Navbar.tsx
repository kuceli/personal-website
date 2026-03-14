import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "@/assets/1-NoBackground.png";
import { NavLink } from "@/components/NavLink";

const links = [
  { label: "About", href: "about" },
  { label: "Experience", href: "experience" },
  { label: "Projects", href: "projects" },
  { label: "Education", href: "education" },
  { label: "Contact", href: "contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="flex items-center justify-between px-6 md:px-12 lg:px-32 h-16">
        <a href="#" className="h-full py-2 flex items-center">
          <img
            src={logo}
            alt="Kuceli Susan Englama"
            className="h-full w-auto object-contain"
          />
        </a>

        <div className="hidden md:flex gap-2">
          {links.map(({ label, href }) => (
            <NavLink
              key={label}
              to={`#${href}`}
              className="relative px-5 py-2 text-sm font-medium text-foreground
              transition-colors duration-300
              hover:text-white
              before:content-[''] before:absolute before:inset-0
              before:bg-foreground before:scale-x-0 before:origin-left
              before:transition-transform before:duration-300
              hover:before:scale-x-100
              before:-z-10
              rounded-md"
            >
              {label}
            </NavLink>
          ))}
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-foreground"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-border bg-background"
          >
            <div className="flex flex-col px-6 py-4 gap-4">
              {links.map(({ label, href }) => (
                <NavLink
                  key={label}
                  to={`#${href}`}
                  onClick={() => setOpen(false)}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors font-medium"
                >
                  {label}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
