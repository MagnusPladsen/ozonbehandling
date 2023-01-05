import React from "react";
import Spacer from "../spacer/Spacer.component";

export default function SiteWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {children
        ? React.Children.map(children, (child) => {
            return (
              <>
                <div
                  className={` flex flex-col hover:cursor-pointer`}
                >
                  {child}
                </div>
                <div className="bg-white w-[80vw] mx-auto h-[2px]"></div>
              </>
            );
          })
        : null}
    </div>
  );
}
