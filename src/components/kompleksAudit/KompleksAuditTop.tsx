import { GrMoney } from "react-icons/gr";
import Progress from "./ProgressBar";
import { FaRegCheckSquare } from "react-icons/fa";

export default function KompleksAuditTop() {
  return (
    <>
      <div className="flex-4 p-3 rounded-md shadow-[0px_0px_7px_rgba(0,0,0,0.25)]">
        <p className="uppercase text-center text-(--primary) mb-3">
          -------Xavflarni boshqarish tizimlari------
        </p>
        <div className="flex gap-10 text-sm">
          <p>Xavf yo`nalishi</p>
          <p>Xavf darajasi</p>
          <p>Ko`rsatgich</p>
        </div>

        <div className="flex gap-3 justify-between text-sm mt-4">
          <p className="flex-1 border-b border-gray-300 pb-1 ">
            Bojxona organi
          </p>
          <p className="flex-1 border-b text-center border-gray-300 pb-1 text-[#f6c23e]">
            O`rta
          </p>
          <div className="border-b text-center border-gray-300">
            <Progress value={45} />
          </div>
        </div>

        <div className="flex gap-3 justify-between text-sm mt-4">
          <p className="flex-1 border-b border-gray-300 pb-1 ">
            Bojxona organi
          </p>
          <p className="flex-1 border-b text-center border-gray-300 pb-1 text-[#009933]">
            Past
          </p>
          <div className="border-b text-center border-gray-300">
            <Progress
              value={45}
              bgColor="repeating-linear-gradient(135deg, rgba(255,255,255,0.25) 0 10px, rgba(255,255,255,0) 10px 20px), linear-gradient(180deg,#009933,#009933)"
            />
          </div>
        </div>

        <div className="flex gap-3 justify-between text-sm mt-4">
          <p className="flex-1 border-b border-gray-300 pb-1 ">
            Bojxona organi
          </p>
          <p className="flex-1 border-b text-center border-gray-300 pb-1 text-[#cc0000]">
            Salbiy
          </p>
          <div className="border-b text-center border-gray-300">
            <Progress
              value={45}
              bgColor="repeating-linear-gradient(135deg, rgba(255,255,255,0.25) 0 10px, rgba(255,255,255,0) 10px 20px), linear-gradient(180deg,#cc0000,#cc0000)"
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
            <GrMoney className="text-(--primary)" size={36} />
            <p className="text-sm mt-1">Undirilgan bojxona to`lovlari</p>
            <p className="text-2xl font-bold mt-3">25 000 000</p>
            <p className="text-sm">mln sum</p>
          </div>
          <div className="flex-1 flex flex-col justify-between items-center text-center p-2">
            <FaRegCheckSquare className="text-(--primary)" size={36} />
            <p className="text-sm mt-1">Berilgan imtiyozlar</p>
            <p className="text-2xl font-bold mt-3">5 000 000</p>
            <p className="text-sm">mln sum</p>
          </div>
        </div>
      </div>
    </>
  );
}
