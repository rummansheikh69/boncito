import { FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Navbar() {
  return (
    <div className=" fixed top-0 left-0 right-0 z-50">
      <div className=" w-full">
        <div className=" container mx-auto px-5 md:px-10 lg:px-20 mt-5">
          <div className=" bg-white rounded-xl px-5 py-2.5 flex items-center justify-between border border-black shadow-[1.5px_3.5px_0px_0px_#000000]">
            <h1 className=" font-logo text-4xl mt-2 md:mt-0">$BONCITO</h1>
            <div className="hidden md:flex items-center gap-10">
              <h1 className="text-xl">
                <a href="#about">ABOUT US</a>
              </h1>
              <h1 className="text-xl">
                <a href="#how">HOW TO BUY</a>
              </h1>
              <h1 className="text-xl">
                <a href="#token">TOKENOMICS</a>
              </h1>
            </div>

            <div className=" flex items-center gap-4">
              <a href="">
                <button className=" p-2 bg-buttonColor rounded-md border border-black shadow-[1.5px_3.5px_0px_0px_#000000]">
                  <FaTelegramPlane className=" text-white size-6" />
                </button>
              </a>
              <a href="https://x.com/BoncitoSol">
                <button className=" p-2 bg-buttonColor rounded-md border border-black shadow-[1.5px_3.5px_0px_0px_#000000]">
                  <FaXTwitter className=" text-white size-6" />
                </button>
              </a>
              <a href="">
                <button className=" p-2 bg-buttonColor rounded-md border border-black shadow-[1.5px_3.5px_0px_0px_#000000] text-white">
                  PUMP
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
