import { FaXTwitter } from "react-icons/fa6";
import { MdOutlineArrowOutward } from "react-icons/md";

function About() {
  return (
    <div id="about" className=" pt-16 ">
      <div className=" w-full h-full flex flex-col gap-16 items-center justify-center">
        <div className=" relative truncate text-center lg:w-3/4 px-4 py-3 rounded-full bg-white shadow-[1.5px_3.5px_0px_0px_#000000] border border-black">
          <a href="https://pump.fun/coin/FCgwRn7aoBxJLeyHaZqFZ6QvYPBrjsWDb1PWg7zApump">
            <p className=" truncate w-4/5 md:w-full">
              CA: FCgwRn7aoBxJLeyHaZqFZ6QvYPBrjsWDb1PWg7zApump
            </p>
          </a>
          <a href="https://pump.fun/coin/FCgwRn7aoBxJLeyHaZqFZ6QvYPBrjsWDb1PWg7zApump">
            <div className="absolute right-4 top-1/2 -translate-y-1/2 border border-black rounded-full p-1.5 shadow-[1.5px_3.5px_0px_0px_#000000]">
              <MdOutlineArrowOutward className=" " />
            </div>
          </a>
        </div>
        <div className=" container mx-auto px-5 md:px-10 lg:px-20">
          <div className="relative  p-10 bg-card border-4 border-black rounded-[40px] w-full flex flex-col gap-10 items-center">
            {/* time image  */}
            <div className=" absolute top-10 left-10 md:left-1/4 w-16 -rotate-12">
              <img src="/time.webp" alt="" className=" w-full" />
            </div>
            {/* time image  */}
            <div className=" absolute bottom-10 right-0 w-1/2">
              <img src="/about.webp" alt="" className=" w-full" />
            </div>
            <h1 className=" text-6xl font-bold text-white text-end">
              STORY $BONCITO
            </h1>
            <div className=" w-full px-5 py-10 bg-white rounded-[35px] border-4 border-black">
              <div className=" lg:w-2/4">
                <p className=" text-xl leading-none text-zinc-800">
                  The origins of $BONCITO and why it was created (e.g., a team
                  of meme enthusiasts, the idea to combine humor with
                  blockchain).
                </p>
                <br />
                <p className=" text-xl leading-none text-zinc-800">
                  Vision: Our goal is to make crypto accessible, entertaining,
                  and memorable for everyone.
                </p>
                <br />
                <p className=" text-xl leading-none text-zinc-800">
                  Mascot Introduction: A fun character or symbol that represents
                  $BONCITO, possibly with a short, funny backstory.
                </p>
              </div>
              <div className=" flex items-center gap-4 mt-4">
                <a href="https://x.com/BoncitoSol">
                  <button className=" p-2 bg-[#00B600] rounded-md border border-black shadow-[1.5px_3.5px_0px_0px_#000000]">
                    <FaXTwitter className=" text-white size-6" />
                  </button>
                </a>
                <a href="">
                  <button className=" p-2 bg-[#00B600] rounded-md border border-black shadow-[1.5px_3.5px_0px_0px_#000000] text-white">
                    PUMP
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
