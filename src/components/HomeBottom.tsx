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
        x={145}
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
  const cx = 140;
  const cy = 150;
  const iR = 100;
  const oR = 110;
  const value = chartData[0].value;

  return (
    <PieChart width={"100%"} height={200} className="">
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
    <div className="flex justify-between gap-4 p-4">
      <div className="flex-9 flex justify-between gap-3 p-3 rounded-md shadow-[0px_0px_10px_rgba(0,0,0,0.25)]">
        <div className="flex-1">
          <div className="relative overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-base ">
            <div className="w-full">
              <h3 className="text-lg font-semibold ml-3 text-slate-800">
                Xududlar
              </h3>
            </div>
            <div className="relative flex flex-col w-full h-full overflow-scroll text-gray-700 bg-white shadow-md rounded-lg bg-clip-border">
              <table className="w-full text-left table-auto min-w-max">
                <thead>
                  <tr>
                    <th className="p-4 border-b border-slate-300 bg-slate-50">
                      <p className="block text-sm font-normal leading-none text-slate-500">
                        Nomi
                      </p>
                    </th>
                    <th className="p-4 border-b border-slate-300 bg-slate-50">
                      <p className="block text-sm font-normal leading-none text-slate-500">
                        Soni
                      </p>
                    </th>
                    <th className="p-4 border-b border-slate-300 bg-slate-50">
                      <p className="block text-sm font-normal leading-none text-slate-500">
                        Ijobiy
                      </p>
                    </th>
                    <th className="p-4 border-b border-slate-300 bg-slate-50">
                      <p className="block text-sm font-normal leading-none text-slate-500">
                        Summasi
                      </p>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-slate-50">
                    <td className="p-4 border-b border-slate-200">
                      <p className="block text-sm text-slate-800">Buxoro</p>
                    </td>
                    <td className="p-4 border-b border-slate-200">
                      <p className="block text-sm text-slate-800">Manager</p>
                    </td>
                    <td className="p-4 border-b border-slate-200">
                      <p className="block text-sm text-slate-800">88</p>
                    </td>
                    <td className="p-4 border-b border-slate-200">
                      <p className="block text-sm text-slate-800">100</p>
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-4 border-b border-slate-200">
                      <p className="block text-sm text-slate-800">Navoiy</p>
                    </td>
                    <td className="p-4 border-b border-slate-200">
                      <p className="block text-sm text-slate-800">Developer</p>
                    </td>
                    <td className="p-4 border-b border-slate-200">
                      <p className="block text-sm text-slate-800">87</p>
                    </td>
                    <td className="p-4 border-b border-slate-200">
                      <p className="block text-sm text-slate-800">200</p>
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-4 border-b border-slate-200">
                      <p className="block text-sm text-slate-800">Toshkent</p>
                    </td>
                    <td className="p-4 border-b border-slate-200">
                      <p className="block text-sm text-slate-800">Executive</p>
                    </td>
                    <td className="p-4 border-b border-slate-200">
                      <p className="block text-sm text-slate-800">56</p>
                    </td>
                    <td className="p-4 border-b border-slate-200">
                      <p className="block text-sm text-slate-800">159</p>
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-4 border-b border-slate-200">
                      <p className="block text-sm text-slate-800">Andijon</p>
                    </td>
                    <td className="p-4 border-b border-slate-200">
                      <p className="block text-sm text-slate-800">Developer</p>
                    </td>
                    <td className="p-4 border-b border-slate-200">
                      <p className="block text-sm text-slate-800">56</p>
                    </td>
                    <td className="p-4 border-b border-slate-200">
                      <p className="block text-sm text-slate-800">120</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-3 p-3 rounded-md shadow-[0px_0px_10px_rgba(0,0,0,0.25)]">
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
