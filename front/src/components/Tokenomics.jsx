import { SiSolana } from "react-icons/si";

function Tokenomics() {
  return (
    <div className=' relative h-screen bg-[url("https://res.cloudinary.com/dsdg8ke2n/image/upload/v1752169743/IMG_5521_kuzir5.png")] bg-no-repeat  bg-center bg-cover'>
      <div className=" absolute inset-0 bg-main bg-opacity-70">
        <div className=" w-full container mx-auto px-5 md:px-10 lg:px-20 flex flex-col justify-center h-full ">
          <h1 className=" text-stroke text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white">
            TOKENOMICS
          </h1>
          <div className=" w-max py-3 mt-3 px-8 rounded-full flex items-center gap-2 bg-white shadow-[1.5px_3.5px_0px_0px_#000000] border border-black">
            <h2 className=" text-2xl md:text-3xl lg:text-4xl">
              NETWORK SOLANA
            </h2>
            <SiSolana className=" size-10 text-blue-600" />
          </div>
          <div className=" w-max py-3 mt-3 px-8 rounded-full flex items-center gap-2 bg-white shadow-[1.5px_3.5px_0px_0px_#000000] border border-black">
            <a href="">
              <h2 className=" text-2xl md:text-3xl lg:text-4xl">
                LAUNCHED ON PUMP FUN
              </h2>
            </a>
          </div>
          <div className=" w-max py-3 mt-3 px-8 rounded-full flex items-center gap-2 bg-white shadow-[1.5px_3.5px_0px_0px_#000000] border border-black">
            <h2 className=" text-2xl md:text-3xl lg:text-4xl">TAX: 0%</h2>
          </div>
          <div className=" w-max py-3 mt-3 px-8 rounded-full flex items-center gap-2 bg-white shadow-[1.5px_3.5px_0px_0px_#000000] border border-black">
            <h2 className=" text-2xl md:text-3xl lg:text-4xl">
              SUPPLY: 1,000,000,000
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tokenomics;
