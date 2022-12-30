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
                  className={` mx-auto w-[80vw] md:w-[60vw] xl:w-[40vw] flex flex-col pt-[160px]`}
                >
                  {child}
                </div>
                <Spacer />
              </>
            );
          })
        : null}
    </div>
  );
}
