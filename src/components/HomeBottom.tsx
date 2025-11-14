"use client";
import { Cell, Pie, PieChart, Tooltip } from "recharts";

type Needle = {
  value: number;
  cx: number;
  cy: number;
};

const sharpChartNumber = ({ value, cx, cy }: Needle) => {
  const percentage = Math.trunc(value);

  return (
    <>
      <text
        x={180}
        y={140}
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize={36}
        fill={"black"}
        fontWeight="bold"
      >
        {percentage} ta
      </text>
    </>
  );
};

const chartValue =
  Math.floor(Math.random() * 90) + Math.floor(Math.random() * 10);

const chartData = [
  {
    name: "A",
    value: chartValue,
    color: "#ff9900",
  },
  { name: "B", value: 100 - chartValue, color: "#0099ff" },
];

function SharpChart() {
  const cx = 180;
  const cy = 150;
  const iR = 125;
  const oR = 140;
  const value = chartData[0].value;

  return (
    <PieChart width={350} height={200} className="">
      <Pie
        width={350}
        height={150}
        dataKey="value"
        startAngle={180}
        endAngle={0}
        data={chartData}
        cx={cx}
        cy={cy}
        innerRadius={iR}
        outerRadius={oR}
        fill="#fff"
        stroke="none"
        paddingAngle={1}
        cornerRadius={10}
      >
        {chartData.map((entry) => (
          <Cell
            key={`cell-${entry.name}`}
            className="cursor-pointer"
            fill={entry.color}
          />
        ))}
      </Pie>
      {sharpChartNumber({ value, cx, cy })}
      <Tooltip
        contentStyle={{
          background: "#ff9900",
          color: "white",
        }}
      />
    </PieChart>
  );
}

export default function HomeBottom() {
  return (
    <div className="flex justify-between gap-4 p-4 ">
      <div className="flex-3 p-3 rounded-md shadow-[0px_0px_10px_rgba(0,0,0,0.25)]"></div>
      <div className="flex-1 p-3 rounded-md shadow-[0px_0px_10px_rgba(0,0,0,0.25)]">
        <SharpChart />
        <div className="flex justify-between items-center mb-4">
          <p className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#ff9900] inline-block" />
            Salbiy yakunlangan
          </p>
          <p>{chartValue} ta</p>
        </div>
        <div className="flex justify-between items-center">
          <p className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#0099ff] inline-block" />
            Ijobiy yakunlangan
          </p>
          <p>{100 - chartValue} ta</p>
        </div>
      </div>
    </div>
  );
}
