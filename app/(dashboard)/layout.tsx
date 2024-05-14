import React from "react";

const Dashboardlayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col gap-y-4">
      <nav className="bg-black text-white">
        This is a shared navbar for the dashnoard segment
      </nav>
      {children}
    </div>
  );
};

export default Dashboardlayout;
