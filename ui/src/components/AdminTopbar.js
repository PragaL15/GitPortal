import React from "react";
import { Toolbar } from "primereact/toolbar";
import { Avatar } from "primereact/avatar";

export default function AdminTopBar({title}) {

  const endContent = (
    <>
      <div className="flex align-items-center">
        <Avatar
          image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png"
          shape="circle"
        />
        <span className="font-bold text-white ml-2">Amy Elsner</span>
      </div>
    </>
  );

  const startContent = (
    <h2 className="text-white font-bold text-xl">{title && title}</h2>
  )

  return (
    <div className="hidden md:block h-20 bg-side-blue fixed top-0 left-0 w-full">
      <Toolbar
        start={startContent}
        end={endContent}
        className="ml-52 bg-side-blue h-20 rounded-none"
      />
    </div>
  );
}
