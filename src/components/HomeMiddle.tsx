"use client";

import { HiDotsVertical } from "react-icons/hi";
//chart
import {
  Area,
  AreaChart,
  CartesianGrid,
  Cell,
  Line,
  Pie,
  PieChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

// #region Sample data
const data = [
  {
    name: "Yan",
    uv: 0,
    pv: 0,
    amt: 2400,
  },
  {
    name: "Fev",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Mar",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Apr",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "May",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Iyn",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Iyl",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Avg",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Sen",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Okt",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Noy",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Dek",
    uv: 3490,
    pv: 4300,
    amt: 3200,
  },
];

// #endregion
const AreaChartExample = ({ isAnimationActive = true }) => {
  const lastIndex = data.length - 1;
  return (
    <AreaChart
      style={{
        width: "100%",
        maxWidth: "100%",
        maxHeight: "35vh",
        aspectRatio: 1.618,
      }}
      responsive
      data={data}
      margin={{ top: 10, right: 0, left: 0, bottom: 0 }}
    >
      <defs>
        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#0099ff" stopOpacity={0.2} />
          <stop offset="95%" stopColor="#0099ff" stopOpacity={0} />
        </linearGradient>
        <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#ff3300" stopOpacity={0.2} />
          <stop offset="95%" stopColor="#ff3300" stopOpacity={0} />
        </linearGradient>
      </defs>
      <CartesianGrid strokeDasharray="3 3" opacity={0.5} />
      <XAxis dataKey="name" padding={{ left: 10, right: 10 }} />
      <YAxis width="auto" padding={{ top: 20, bottom: 20 }} />
      <Tooltip />
      <Area
        type="monotone"
        dataKey="uv"
        stroke="#0099ff"
        fillOpacity={1}
        fill="url(#colorUv)"
        isAnimationActive={isAnimationActive}
        activeDot={false}
      />
      <Area
        type="monotone"
        dataKey="pv"
        stroke="#ff3300"
        fillOpacity={1}
        fill="url(#colorPv)"
        isAnimationActive={isAnimationActive}
        activeDot={false}
      />
      <Line
        type="monotone"
        dataKey="uv"
        stroke="#0099ff"
        fill="transparent"
        activeDot={(props) => {
          const { cx, cy } = props;
          return (
            <circle
              cx={cx}
              cy={cy}
              r={6}
              fill="transparent"
              stroke="#0099ff"
              strokeWidth={2}
            />
          );
        }}
        dot={(props: any) => {
          // props: { cx, cy, index, payload, value, ... }
          const { index, cx, cy } = props;
          if (index === 0 || index === lastIndex) {
            return (
              <circle
                cx={cx}
                cy={cy}
                r={6}
                fill="transparent"
                stroke="#0099ff"
                strokeWidth={2}
              />
            );
          }
          return null;
        }}
      />
      <Line
        type="monotone"
        dataKey="pv"
        stroke="#ff3300"
        activeDot={(props) => {
          const { cx, cy } = props;
          return (
            <circle
              cx={cx}
              cy={cy}
              r={6}
              fill="transparent"
              stroke="#ff3300"
              strokeWidth={2}
            />
          );
        }}
        dot={(props: any) => {
          // props: { cx, cy, index, payload, value, ... }
          const { index, cx, cy } = props;
          if (index === 0 || index === lastIndex) {
            return (
              <circle
                cx={cx}
                cy={cy}
                r={6}
                fill="transparent"
                stroke="#ff3300"
                strokeWidth={2}
              />
            );
          }
          return null;
        }}
      />
    </AreaChart>
  );
};

type Needle = {
  value: number;
  cx: number;
  cy: number;
};

const sharpChartNumber = ({ value, cx, cy }: Needle) => {
  const percentage = Math.trunc(value);

  return (
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
  const iR = 70;
  const oR = 120;
  const value = chartData[0].value;

  return (
    <PieChart width={"100%"} height={200} className="">
      <Pie
        width={10}
        height={10}
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
        paddingAngle={2}
      >
        {chartData.map((entry) => (
          <Cell
            className="cursor-pointer"
            key={`cell-${entry.name}`}
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

export default function HomeMiddle() {
  return (
    <div className="flex justify-between gap-4 p-4">
      <div className="flex-9 p-3 rounded-md shadow-[0px_0px_10px_rgba(0,0,0,0.25)]">
        <div className="flex justify-between items-center mb-4">
          <p>O`tkazilgan auditlar soni</p>
          <div className="flex gap-6">
            <p className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#0099ff] inline-block" />
              Ijobiy
            </p>
            <p className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#ff3300] inline-block" />
              Salbiy
            </p>
          </div>
        </div>
        <AreaChartExample />
      </div>
      <div className="flex-3 p-3 rounded-md shadow-[0px_0px_10px_rgba(0,0,0,0.25)]">
        <div>
          <div className="flex justify-between items-center w-full">
            <p>Sayyor audit</p>
            <HiDotsVertical />
          </div>
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
    </div>
  );
}
