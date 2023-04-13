import React from "react";

export default function SiteWrapperHome({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="bg-white w-[80vw] mx-auto h-[2px]"></div>
      {children
        ? React.Children.map(children, (child) => {
            return (
              <>
                <div className={` flex flex-col hover:cursor-pointer`}>
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
