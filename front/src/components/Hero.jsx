import React from "react";

function Hero() {
  return (
    <div className=" h-[80vh] md:h-screen relative ">
      <div className=" w-full h-full flex items-center justify-center">
        <h1 className=" font-logo text-8xl md:text-9xl text-white  text-stroke -mt-52">
          BONCITO
        </h1>

        {/* image  */}
        <div className=" w-[450px] absolute bottom-0 right-0 left-0 mx-auto">
          <img
            src="https://res.cloudinary.com/dsdg8ke2n/image/upload/v1752171525/b7dc6d46-bd46-49f9-8f9c-668b917c7027_removalai_preview_la2pna.png"
            alt=""
            className=" w-full"
          />
        </div>

        {/* hastag  */}
        <div className="shadow-[1.5px_3.5px_0px_0px_#000000] absolute bottom-0 w-full bg-white border border-black py-2 rotate-6 md:rotate-2 scale-110">
          <div className=" flex items-center gap-4">
            <h1 className=" text-2xl">#</h1>
            <h1 className=" text-2xl">BONCITO</h1>
            <h1 className=" text-2xl">#</h1>
            <h1 className=" text-2xl">BONCITO</h1>
            <h1 className=" text-2xl">#</h1>
            <h1 className=" text-2xl">BONCITO</h1>
            <h1 className=" text-2xl">#</h1>
            <h1 className=" text-2xl">BONCITO</h1>
            <h1 className=" text-2xl">#</h1>
            <h1 className=" text-2xl">BONCITO</h1>
            <h1 className=" text-2xl">#</h1>
            <h1 className=" text-2xl">BONCITO</h1>
            <h1 className=" text-2xl">#</h1>
            <h1 className=" text-2xl">BONCITO</h1>
            <h1 className=" text-2xl">#</h1>
            <h1 className=" text-2xl">BONCITO</h1>
            <h1 className=" text-2xl">#</h1>
            <h1 className=" text-2xl">BONCITO</h1>
          </div>
        </div>
        <div className="shadow-[1.5px_3.5px_0px_0px_#000000] absolute bottom-0 w-full bg-white border border-black py-2 -rotate-2 scale-110">
          <div className=" flex items-center gap-4">
            <h1 className=" text-2xl">#</h1>
            <h1 className=" text-2xl">BONCITO</h1>
            <h1 className=" text-2xl">#</h1>
            <h1 className=" text-2xl">BONCITO</h1>
            <h1 className=" text-2xl">#</h1>
            <h1 className=" text-2xl">BONCITO</h1>
            <h1 className=" text-2xl">#</h1>
            <h1 className=" text-2xl">BONCITO</h1>
            <h1 className=" text-2xl">#</h1>
            <h1 className=" text-2xl">BONCITO</h1>
            <h1 className=" text-2xl">#</h1>
            <h1 className=" text-2xl">BONCITO</h1>
            <h1 className=" text-2xl">#</h1>
            <h1 className=" text-2xl">BONCITO</h1>
            <h1 className=" text-2xl">#</h1>
            <h1 className=" text-2xl">BONCITO</h1>
            <h1 className=" text-2xl">#</h1>
            <h1 className=" text-2xl">BONCITO</h1>
          </div>
        </div>
        {/* has end  */}
      </div>
    </div>
  );
}

export default Hero;
