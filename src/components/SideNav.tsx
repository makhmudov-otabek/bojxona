"use client";
import Image from "next/image";
import Logo from "@/../public/logo.png";
import { MdHome } from "react-icons/md";
import { FaUserAlt, FaUsers } from "react-icons/fa";
import { HiMiniArrowsPointingIn } from "react-icons/hi2";
import { IoNewspaperSharp } from "react-icons/io5";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { GoFileDirectoryFill } from "react-icons/go";
import { PiFoldersFill } from "react-icons/pi";
import { RiRecycleFill } from "react-icons/ri";
import { ImTarget } from "react-icons/im";
import Link from "next/link";

import { usePathname } from "next/navigation";

function Top() {
  return (
    <div className="flex gap-3">
      <Image src={Logo} width={80} height={80} alt="Logo" />
      <p className="text-white text-4xl font-bold">
        Божхона <br />
        <span className="text-3xl font-medium tracking-[12px]">аудити</span>
      </p>
    </div>
  );
}

const menuItems = [
  {
    href: "/",
    label: "Bosh Sahifa",
    icon: <MdHome />,
  },
  {
    href: "/kompleksAudit",
    label: "Kompleks Audit",
    icon: <FaUsers />,
  },
  {
    href: "/maqsadliAudit",
    label: "Maqsadli Audit",
    icon: <HiMiniArrowsPointingIn />,
  },
  {
    href: "/indevidualAudit",
    label: "Indevidual Audit",
    icon: <FaUserAlt />,
  },
  {
    href: "/auditXujjatlari",
    label: "Audit Xujjatlari",
    icon: <GoFileDirectoryFill />,
  },
  {
    href: "/integratsiya",
    label: "Integratsiya",
    icon: <FaArrowRightArrowLeft />,
  },
  {
    href: "/hisobotlar",
    label: "Hisobotlar",
    icon: <IoNewspaperSharp />,
  },
  {
    href: "/mezonlar",
    label: "Mezonlar",
    icon: <RiRecycleFill />,
  },
  {
    href: "/nazoratTadbirlari",
    label: "Nazorat tadbirlari",
    icon: <ImTarget />,
  },
  {
    href: "/modullar",
    label: "Modullar",
    icon: <PiFoldersFill />,
  },
];

function NavMenu() {
  const pathName = usePathname();

  return (
    <div className="text-white pt-8">
      <ul>
        {menuItems.map((item) => {
          const isActive =
            item.href === "/"
              ? pathName === "/"
              : pathName.startsWith(item.href);
          return (
            <li key={item.href}>
              <Link
                className={`flex gap-2 items-center mb-2 w-full cursor-pointer :bg-amber-800 duration-200 p-2 rounded-md ${
                  isActive ? "bg-white text-[#203663]" : "hover:bg-[#ffffff30]"
                }`}
                href={item.href}
              >
                {item.icon}
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default function SideNav() {
  return (
    <div className="hidden md:block md:w-64 lg:w-72 bg-[#203663] min-h-screen p-4">
      <Top />
      <NavMenu></NavMenu>
    </div>
  );
}
