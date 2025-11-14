import Progress from "./ProgressBar";
import FlagTurkey from "@/../public/Flag-Turkey.webp";
import Image from "next/image";
import { HiOutlineUsers } from "react-icons/hi2";
import { IoWalletOutline } from "react-icons/io5";

export default function KompleksAuditMiddle() {
  return (
    <>
      <div className="flex-4 p-3 rounded-md shadow-[0px_0px_7px_rgba(0,0,0,0.25)]">
        <p className="uppercase text-center text-(--primary) mb-3">
          --------Exportda hamkor davlatlar---------
        </p>
        <div className="flex gap-10 text-sm">
          <p>Davlat nomi</p>
          <p>Qiymati</p>
          <p>Ulushi</p>
        </div>

        <div className="flex gap-3 justify-between text-sm mt-4">
          <div className="flex items-center gap-1 flex-1 border-b border-gray-300 pb-1">
            <Image src={FlagTurkey} alt="" width={20} height={10} />
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
            <Image src={FlagTurkey} alt="" width={20} height={10} />
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
            <Image src={FlagTurkey} alt="" width={20} height={10} />
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
          Bojxona to`lovlari
        </p>
        <div className="flex justify-between">
          <div className="flex-1 flex flex-col justify-between items-center text-center border-r border-gray-300 p-2">
            <HiOutlineUsers className="text-(--primary)" size={36} />
            <p className="text-sm mt-1">Tasischilar soni</p>
            <p className="text-2xl font-bold mt-3">2 ta</p>
          </div>
          <div className="flex-1 flex flex-col justify-between items-center text-center p-2">
            <IoWalletOutline className="text-(--primary)" size={36} />
            <p className="text-sm mt-1">Ustov fondi</p>
            <p className="text-2xl font-bold mt-3">5 000 000</p>
            <p className="text-sm">mln sum</p>
          </div>
        </div>
      </div>
    </>
  );
}
