import React from "react";

function Footer() {
  return (
    <div className=" py-5 border-t-2 border-black">
      <div className="container mx-auto px-5 md:px-10 lg:px-20">
        <div className=" flex items-center justify-between">
          <h1 className=" text-2xl font-bold">Join Our Boncito Community</h1>
          <h1 className=" text-2xl font-bold"> © {new Date().getFullYear()}</h1>
        </div>
      </div>
    </div>
  );
}

export default Footer;
