import Progress from "./ProgressBar";
import FlagKazakhstan from "@/../public/Flag_Kazakhstan.svg.webp";
import Image from "next/image";
import { HiOutlineUsers } from "react-icons/hi2";
import { IoWalletOutline } from "react-icons/io5";

export default function KompleksAuditFooter() {
  return (
    <>
      <div className="flex-4 p-3 rounded-md shadow-[0px_0px_7px_rgba(0,0,0,0.25)]">
        <p className="uppercase text-center text-(--primary) mb-3">
          --------Importda hamkor davlatlar---------
        </p>
        <div className="flex gap-10 text-sm">
          <p>Davlat nomi</p>
          <p>Qiymati</p>
          <p>Ulushi</p>
        </div>

        <div className="flex gap-3 justify-between text-sm mt-4">
          <div className="flex items-center gap-1 flex-1 border-b border-gray-300 pb-1">
            <Image src={FlagKazakhstan} alt="" width={20} height={10} />
            <p>Turkiya</p>
          </div>

          <p className="flex-1 border-b text-center border-gray-300 pb-1 ">
            565 232
          </p>
          <div className="flex gap-2 border-b text-center border-gray-300">
            <p>50%</p>
            <Progress
              value={45}
              bgColor="repeating-linear-gradient(135deg, rgba(255,255,255,0.25) 0 10px, rgba(255,255,255,0) 10px 20px), linear-gradient(180deg,#bfbfbf,#bfbfbf)"
            />
          </div>
        </div>

        <div className="flex gap-3 justify-between text-sm mt-4">
          <div className="flex items-center gap-1 flex-1 border-b border-gray-300 pb-1">
            <Image src={FlagKazakhstan} alt="" width={20} height={10} />
            <p>Turkiya</p>
          </div>
          <p className="flex-1 border-b text-center border-gray-300 pb-1">
            120 545
          </p>
          <div className="flex gap-2 border-b text-center border-gray-300">
            <p>50%</p>
            <Progress
              value={45}
              bgColor="repeating-linear-gradient(135deg, rgba(255,255,255,0.25) 0 10px, rgba(255,255,255,0) 10px 20px), linear-gradient(180deg,#bfbfbf,#bfbfbf)"
            />
          </div>
        </div>

        <div className="flex gap-3 justify-between text-sm mt-4">
          <div className="flex items-center gap-1 flex-1 border-b border-gray-300 pb-1">
            <Image src={FlagKazakhstan} alt="" width={20} height={10} />
            <p>Turkiya</p>
          </div>
          <p className="flex-1 border-b text-center border-gray-300 pb-1 ">
            156 201
          </p>
          <div className="flex gap-2 border-b text-center border-gray-300">
            <p>50%</p>
            <Progress
              value={45}
              bgColor="repeating-linear-gradient(135deg, rgba(255,255,255,0.25) 0 10px, rgba(255,255,255,0) 10px 20px), linear-gradient(180deg,#bfbfbf,#bfbfbf)"
            />
          </div>
        </div>
      </div>

      <div className="flex-4 p-3 rounded-md shadow-[0px_0px_7px_rgba(0,0,0,0.25)]">
        <p className="uppercase text-center text-(--primary) mb-3">
          -Bojxona postlarida rasmiylashtiruv-
        </p>
        <div className="flex gap-10 text-sm">
          <p>Post nomi</p>
          <p>BYUD soni</p>
          <p>Ulushi</p>
        </div>

        <div className="flex gap-3 justify-between text-sm mt-4">
          <p className="flex-1 border-b border-gray-300 pb-1 ">
            Bojxona organi
          </p>
          <p className="flex-1 border-b text-center border-gray-300 pb-1 ">
            565 232
          </p>
          <div className="flex gap-2 border-b text-center border-gray-300">
            <p>50%</p>
            <Progress
              value={45}
              bgColor="repeating-linear-gradient(135deg, rgba(255,255,255,0.25) 0 10px, rgba(255,255,255,0) 10px 20px), linear-gradient(180deg,#bfbfbf,#bfbfbf)"
            />
          </div>
        </div>

        <div className="flex gap-3 justify-between text-sm mt-4">
          <p className="flex-1 border-b border-gray-300 pb-1 ">
            Bojxona organi
          </p>
          <p className="flex-1 border-b text-center border-gray-300 pb-1">
            120 545
          </p>
          <div className="flex gap-2 border-b text-center border-gray-300">
            <p>50%</p>
            <Progress
              value={45}
              bgColor="repeating-linear-gradient(135deg, rgba(255,255,255,0.25) 0 10px, rgba(255,255,255,0) 10px 20px), linear-gradient(180deg,#bfbfbf,#bfbfbf)"
            />
          </div>
        </div>

        <div className="flex gap-3 justify-between text-sm mt-4">
          <p className="flex-1 border-b border-gray-300 pb-1 ">
            Bojxona organi
          </p>
          <p className="flex-1 border-b text-center border-gray-300 pb-1 ">
            156 201
          </p>
          <div className="flex gap-2 border-b text-center border-gray-300">
            <p>50%</p>
            <Progress
              value={45}
              bgColor="repeating-linear-gradient(135deg, rgba(255,255,255,0.25) 0 10px, rgba(255,255,255,0) 10px 20px), linear-gradient(180deg,#bfbfbf,#bfbfbf)"
            />
          </div>
        </div>
      </div>
      <div className="flex-4 p-3 rounded-md shadow-[0px_0px_7px_rgba(0,0,0,0.25)]">
        <p className="uppercase text-center text-(--primary) mb-3">
          BHB holatlari
        </p>

        <div className="flex gap-4">
          <div className="relative size-40">
            <svg
              className="rotate-[135deg] size-full"
              viewBox="0 0 36 36"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* <!-- Background Circle (Gauge) --> */}
              <circle
                cx="18"
                cy="18"
                r="16"
                fill="none"
                className="stroke-current text-[#ff9900]"
                strokeWidth="1.5"
                stroke-dasharray="75 100"
                stroke-linecap="round"
              ></circle>

              {/* <!-- Gauge Progress --> */}
              <circle
                cx="18"
                cy="18"
                r="16"
                fill="none"
                className="stroke-current text-[#0099ff] "
                strokeWidth="1.5"
                stroke-dasharray="37.5 100"
                stroke-linecap="round"
              ></circle>
            </svg>

            <div className="flex flex-col justify-center  w-[110px] h-[110px] rounded-full bg-amber-200 absolute top-1/2 start-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
              <span className="text-xl font-bold ">50 ta</span>
            </div>
          </div>
          <div className="h-full flex flex-col gap-10 justify-between">
            <div>
              <p className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#0099ff] inline-block" />
                Mamuriy
              </p>
              <p>20 ta 90% ga nisbatan</p>
            </div>

            <div className="h-full">
              <p className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#ff9900] inline-block" />
                Jinoiy
              </p>
              <p>30 ta 90% ga nisbatan</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
