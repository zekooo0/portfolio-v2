import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import React from "react";

const page = () => {
  return (
    <div className="flex min-h-screen">
      {/* left */}
      <div>
        <Navbar />
      </div>
      {/* right */}
      <div className="flex-1">
        {/* top */}
        <div>
          <Header />
        </div>
        {/* bottom */}
        <div></div>
      </div>
    </div>
  );
};

export default page;
