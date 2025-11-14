import KompleksAuditFooter from "@/components/kompleksAudit/KompleksAuditFooter";
import KompleksAuditMiddle from "@/components/kompleksAudit/KompleksAuditMiddle";
import KompleksAuditTop from "@/components/kompleksAudit/KompleksAuditTop";

export default function KompleksAudit() {
  return (
    <div className="p-4">
      <div className="p-4">
        <ol className="flex items-center w-full text-gray-900 font-medium ">
          <li className="flex w-full relative text-[#0099ff]  after:content-['']  after:w-full after:h-0.5  after:bg-[#0099ff] after:inline-block after:absolute lg:after:top-6 after:top-3 after:left-12">
            <div className="block whitespace-nowrap z-10">
              <span className="w-10 h-10 bg-[#203663] border-2 border-transparent rounded-full flex justify-center items-center mx-auto mb-3 text-lg text-white lg:w-13 lg:h-13">
                1
              </span>{" "}
              Umumiy malumot
            </div>
          </li>
          <li className="flex w-full relative text-gray-900  after:content-['']  after:w-full after:h-0.5  after:bg-gray-200 after:inline-block after:absolute lg:after:top-6 after:top-3 after:left-12">
            <div className="block whitespace-nowrap z-10">
              <span className="w-6 h-6 bg-indigo-50 border-2 border-[#203663] rounded-full flex justify-center items-center mx-auto mb-3 text-lg text-[#0099ff] lg:w-13 lg:h-13">
                2
              </span>{" "}
              Faolligi
            </div>
          </li>
          <li className="flex w-full relative text-gray-900  after:content-['']  after:w-full after:h-0.5  after:bg-gray-200 after:inline-block after:absolute lg:after:top-6  after:top-3 after:left-12">
            <div className="block whitespace-nowrap z-10">
              <span className="w-6 h-6 bg-gray-50 border-2 border-gray-200 rounded-full flex justify-center items-center mx-auto mb-3 text-lg  lg:w-13 lg:h-13">
                3
              </span>{" "}
              Xavf topshiriqlari
            </div>
          </li>
          <li className="flex relative text-gray-900">
            <div className="block whitespace-nowrap z-10">
              <span className="w-6 h-6 bg-gray-50 border-2 border-gray-200 rounded-full flex justify-center items-center mx-auto mb-3 text-lg  lg:w-13 lg:h-13">
                4
              </span>{" "}
              Xujjat rasmiylashtiruvi
            </div>
          </li>
        </ol>
      </div>
      <div className="flex justify-between gap-4 p-4">
        <KompleksAuditTop />
      </div>
      <div className="flex justify-between gap-4 p-4">
        <KompleksAuditMiddle />
      </div>{" "}
      <div className="flex justify-between gap-4 p-4">
        <KompleksAuditFooter />
      </div>
    </div>
  );
}
