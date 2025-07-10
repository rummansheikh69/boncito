import { FaDownload, FaEthereum, FaExchangeAlt } from "react-icons/fa";

function HowToBuy() {
  return (
    <div className=" py-10 relative">
      {/* images  */}
      <div className=" hidden md:block absolute bottom-0 left-0 w-80 border-t-4 border-r-4 rounded-tr-xl overflow-hidden border-black">
        <img
          src="https://res.cloudinary.com/dsdg8ke2n/image/upload/v1752169748/IMG_5520_inigoa.png"
          alt=""
          className=" w-full"
        />
      </div>
      <div className="hidden md:block absolute top-0 right-0 w-80 border-b-4 border-l-4 rounded-bl-xl overflow-hidden border-black">
        <img
          src="https://res.cloudinary.com/dsdg8ke2n/image/upload/v1752169740/IMG_5511_yofkm1.png"
          alt=""
          className=" w-full"
        />
      </div>
      {/* images end */}
      <h1 className=" text-6xl uppercase text-white text-stroke text-center font-logo">
        How To Buy $BONCITO
      </h1>
      <div className=" flex flex-col items-center mt-10 px-5 ">
        <div className=" lg:mr-64 bg-card p-5 flex flex-col items-center border-2 lg:w-96 border-black shadow-[1.5px_3.5px_0px_0px_#000000] rounded-lg">
          <div className=" p-2 rounded-xl bg-white border border-black shadow-[1.5px_3.5px_0px_0px_#000000]">
            <FaDownload className=" size-5 text-black" />
          </div>
          <h2 className=" text-xl text-white mt-1">Download Wallet</h2>
          <p className=" text-base text-center mt-1">
            Download MetaMask or your preferred wallet from the App store. If
            you're on a desktop, download the Google Chrome extension by
            visiting phantom.com
          </p>
        </div>
        <div className="  bg-card p-5 flex flex-col items-center border-2 lg:w-96 mt-5 md:-mt-5 border-black shadow-[1.5px_3.5px_0px_0px_#000000] rounded-lg">
          <div className=" p-2 rounded-xl bg-white border border-black shadow-[1.5px_3.5px_0px_0px_#000000]">
            <FaEthereum className=" size-5 text-black" />
          </div>
          <h2 className=" text-xl text-white mt-1">Get Some SOL</h2>
          <p className=" text-base text-center mt-1">
            Send some SOL on the base network to switch to Boncito. You can buy
            SOL through centralized exchanges.
          </p>
        </div>
        <div className="lg:-mr-64  bg-card p-5 flex flex-col items-center border-2 lg:w-96 mt-5 md:-mt-5 border-black shadow-[1.5px_3.5px_0px_0px_#000000] rounded-lg">
          <div className=" p-2 rounded-xl bg-white border border-black shadow-[1.5px_3.5px_0px_0px_#000000]">
            <FaExchangeAlt className=" size-5 text-black" />
          </div>
          <h2 className=" text-xl text-white mt-1">SWITCH ETH FOR SBABYPEPU</h2>
          <p className=" text-base text-center mt-1">
            Go to Phantom and add the official Boncito contract. Then switch SOL
            to BONCITO.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HowToBuy;
