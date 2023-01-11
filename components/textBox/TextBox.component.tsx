import React from "react";
import OpenArrow from "../icons/OpenArrow.component";
import { AnimatePresence, motion } from "framer-motion";

export default function TextBox({
  open,
  setOpen,
  header,
  children,
  component,
}: {
  open: boolean;
  setOpen: Function;
  header: string;
  children: React.ReactNode;
  component: string;
}) {
  return (
    <div
      className={`py-[60px] px-[10vw] lg:px-[30vw] 3xl:px-[40vw] ${
        open ? "" : " bg-primary text-white"
      } `}
      onClick={() => setOpen(component)}
    >
      <div className="flex justify-between items-center">
        <h2
          className={`font-header font-extrabold text-2xl text-center lg:text-4xl ${
            open ? "text-primary" : "text-white"
          }`}
        >
          {header}
        </h2>
        <OpenArrow open={open} />
      </div>

      <AnimatePresence initial={false}>
        {open ? (
          <>
            <motion.div
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{
                visible: { opacity: 1, height: "auto", marginTop: "56px" },
                hidden: { opacity: 0, height: 0, marginTop: 0 },
              }}
              transition={{ duration: 0.3 }}
              className={`text-left flex flex-col gap-5 font-text   mx-auto`}
            >
              {children}
            </motion.div>
          </>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
