import React from "react";

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
                <div className={` flex flex-col hover:cursor-pointer`}>
                  {child}
                </div>
              </>
            );
          })
        : null}
    </div>
  );
}
