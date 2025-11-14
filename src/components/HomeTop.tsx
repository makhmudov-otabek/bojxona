"use client";

import { it } from "node:test";
import { FiLayers } from "react-icons/fi";
import { HiDotsVertical } from "react-icons/hi";
import { Label, Pie, PieChart } from "recharts";

const firstRingValue = Math.floor(Math.random() * 100);
const secondRingValue = Math.floor(Math.random() * 100);
const thirdRingValue = Math.floor(Math.random() * 100);

const grayRing = [{ value: 100 }];

const data = [
  {
    name: "Undirilgan",
    value: firstRingValue,
    fill: "#0099ff",
    sum: "82 mlrd",
    label: `${firstRingValue}%`,
  },
  {
    name: "Nazoratda",
    value: secondRingValue,
    fill: "#ff9900",
    sum: "44 mlrd",
    label: `${secondRingValue}%`,
  },
  {
    name: "Bartaraf etilgan",
    value: thirdRingValue,
    fill: "#009999",
    sum: "35 mlrd",
    label: `${thirdRingValue}%`,
  },
];

function PieChartWithPaddingAngle({
  item,
}: {
  item: { value: number; fill: string; label?: string };
}) {
  const visible = Math.max(0, Math.min(100, item.value));
  const rest = 100 - visible;

  const ringData = [
    { name: "visible", value: visible, fill: item.fill },
    { name: "rest", value: rest, fill: "transparent" },
  ];

  return (
    <PieChart
      style={{
        width: "100%",
        maxWidth: "100px",
        maxHeight: "130px",
        aspectRatio: 1,
      }}
      responsive
    >
      <Pie
        data={grayRing}
        dataKey="value"
        cx="50%"
        cy="50%"
        innerRadius="75%"
        outerRadius="90%"
        stroke="none"
        fill="#e6e6e6"
      >
        <Label position="center" fill="#666" fontSize={14}>
          {item.label ?? `${visible}%`}
        </Label>
      </Pie>

      <Pie
        data={ringData}
        dataKey="value"
        cx="50%"
        cy="50%"
        innerRadius="75%"
        outerRadius="90%"
        paddingAngle={3}
        cornerRadius={50}
        stroke="none"
        startAngle={90}
        endAngle={-270}
      />
    </PieChart>
  );
}

export default function HomeTop() {
  return (
    <div className="flex justify-between gap-4 p-4">
      <div className="flex-9 p-3 rounded-md shadow-[0px_0px_10px_rgba(0,0,0,0.25)] flex justify-between">
        <div className="flex flex-col justify-between pr-4 border-r border-gray-300">
          <div className="flex gap-5 justify-between items-center">
            <p className="text-lg">Jami Summa</p>
            <FiLayers size={26} />
          </div>
          <p className="text-3xl font-bold">160,2mlrd</p>
        </div>

        {data.map((item, idx) => {
          return (
            <div
              key={item.name}
              className={`flex-1 flex gap-5 pr-1 justify-center items-center ${
                idx + 1 < data.length ? "border-r border-gray-300" : ""
              }`}
            >
              <PieChartWithPaddingAngle item={item} />
              <div className="text-center h-full flex flex-col justify-between">
                <p className={`text-[13px]`} style={{ color: item.fill }}>
                  {item.name}
                </p>
                <p className="text-2xl">{item.sum}</p>
                <p className="text-[13px]">qiymati</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex-3 p-3 rounded-md shadow-[0px_0px_10px_rgba(0,0,0,0.25)]">
        <div className="flex justify-between items-center w-full">
          <p>Sayyor audit</p>
          <HiDotsVertical />
        </div>
        <div className="flex">
          <div className="flex-1 py-5 h-full text-center px-4 border-r border-gray-300">
            <p>30 ta</p>
            <p className="text-xs">Salbiy yakunlangan</p>
          </div>
          <div className="flex-1 py-5 h-full px-4 text-center">
            <p>10 ta</p>
            <p className="text-xs">Ijobiy yakunlangan</p>
          </div>
        </div>
      </div>
    </div>
  );
}
