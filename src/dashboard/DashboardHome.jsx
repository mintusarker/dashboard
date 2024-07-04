import React, { useCallback, useState } from "react";
import { GoSearch } from "react-icons/go";
import img1 from "../assets/Emoticon.png";
import { HiChevronDown } from "react-icons/hi";
import { CiBellOn } from "react-icons/ci";
import { FaArrowUp } from "react-icons/fa";
import Rechart from "./Rechart";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Sector,
  PieChart,
  Pie,
  Cell,
  RadialBar,
} from "recharts";

const data = [
  {
    date: "01",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    date: "02",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    date: "03",
    uv: 2000,
    pv: 4800,
    amt: 2290,
  },
  {
    date: "04",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    date: "05",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    date: "06",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    date: "07",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    date: "08",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    date: "09",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    date: "10",
    uv: 3500,
    pv: 8800,
    amt: 2290,
  },
  {
    date: "11",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    date: "12",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
];

const data1 = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
];
const COLORS = ["#8593ED", "#C7CEFF", "#5A6ACF"];

// const renderActiveShape = (props) => {
//   const RADIAN = Math.PI / 180;
//   const {
//     cx,
//     cy,
//     midAngle,
//     innerRadius,
//     outerRadius,
//     startAngle,
//     endAngle,
//     fill,
//     payload,
//     percent,
//     value,
//   } = props;
//   const sin = Math.sin(-RADIAN * midAngle);
//   const cos = Math.cos(-RADIAN * midAngle);
//   const sx = cx + (outerRadius + 10) * cos;
//   const sy = cy + (outerRadius + 10) * sin;
//   const mx = cx + (outerRadius + 30) * cos;
//   const my = cy + (outerRadius + 30) * sin;
//   const ex = mx + (cos >= 0 ? 1 : -1) * 22;
//   const ey = my;
//   const textAnchor = cos >= 0 ? "start" : "end";

//   return (
//     <g>
//       <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
//         {payload.name}
//       </text>
//       <Sector
//         cx={cx}
//         cy={cy}
//         innerRadius={innerRadius}
//         outerRadius={outerRadius}
//         startAngle={startAngle}
//         endAngle={endAngle}
//         fill={fill}
//       />
//       <Sector
//         cx={cx}
//         cy={cy}
//         startAngle={startAngle}
//         endAngle={endAngle}
//         innerRadius={outerRadius + 6}
//         outerRadius={outerRadius + 10}
//         fill={fill}
//       />
//       <path
//         d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
//         stroke={fill}
//         fill="none"
//       />
//       <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
//       <text
//         x={ex + (cos >= 0 ? 1 : -1) * 12}
//         y={ey}
//         textAnchor={textAnchor}
//         fill="#333"
//       >{`PV ${value}`}</text>
//       <text
//         x={ex + (cos >= 0 ? 1 : -1) * 12}
//         y={ey}
//         dy={18}
//         textAnchor={textAnchor}
//         fill="#999"
//       >
//         {`(Rate ${(percent * 100).toFixed(2)}%)`}
//       </text>
//     </g>
//   );
// };

const DashboardHome = () => {
  // const [activeIndex, setActiveIndex] = useState(0);
  // const onPieEnter = useCallback(
  //   (_, index) => {
  //     setActiveIndex(index);
  //   },
  //   [setActiveIndex]
  // );

  return (
    <div className="">
      <div className="flex flex-wrap items-center justify-between mx-12">
        <div className="flex items-center justify-between bg-[#F6F6FB] w-[625px] h-[32px] rounded-md px-4 my-6">
          <input
            className=" h-[32px] bg-[#F6F6FB] outline-none"
            placeholder="search"
            type="text"
          />
          <GoSearch></GoSearch>
        </div>

        <div>
          <div className="flex w-[218px] h-[32px] items-center justify-between">
            <div className="flex items-center gap-3">
              <img
                src={img1}
                alt=""
                className="w-8 h-8 p-2 rounded-full bg-[#FFE6CC]"
              />
              <div className="flex items-center justify-center gap-1">
                <button className="font-[400] text-[12px]">
                  Delicious Burger
                </button>
                <HiChevronDown />
              </div>
            </div>

            <div>
              <CiBellOn className="w-5 h-7 text-[#B0C3CC]" />
              <p className="w-[6px] h-[6px] bg-[#EC5252] rounded-full relative -top-5 -right-3"></p>
            </div>
          </div>

          <div></div>
        </div>
      </div>
      <div className="w-full border bg-[#C8CBD9]"></div>

      <p className="w-24 h-6 mt-10 mx-16 font-medium leading-5 tracking-[0.5px]">
        Dashboard
      </p>

      <div className="grid grid-cols-2 mx-16 divide-x-2">
        <div className=""> 
          <div className="mt-6 flex flex-wrap justify-between">
            <div>
              <p className="text-xs font-semibold">Revenue</p>
              <h3 className="font-semibold my-2">IDR 7.852.000</h3>
              <h4 className="flex items-center gap-1 text-xs mb-4">
                <span className="flex items-center gap-2 text-[#149D52]">
                  <FaArrowUp></FaArrowUp> 2.1%
                </span>
                <p>vs last week</p>
              </h4>
              <p className="text-xs">Sales from 1-12 Dec, 2020</p>
            </div>
            <div>
              <button className="font-semibold text-sm w-28 rounded-sm bg-slate-100 h-8 shadow-sm shadow-slate-300 text-blue-400">
                View Report
              </button>
            </div>
          </div>

          <div className="">
            {/* <ResponsiveContainer width="100%" height="100%"> */}
            <BarChart
              width={600}
              height={300}
              data={data}
              margin={{
                top: 60,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <XAxis
                dataKey="date"
                axisLine={false}
                tickLine={false}
                interval={0}
                height={1}
                scale="band"
              />
              <Tooltip />
              <Legend />
              <Bar dataKey="pv" fill="#5A6ACF" />
              <Bar dataKey="uv" fill="#E6E8EC" />
            </BarChart>
            {/* </ResponsiveContainer> */}
          </div>
        </div>


        <div className="ml-12 px-9">
        <div className="mt-6 flex flex-wrap items-center justify-between">
            <div>
              <p className="text-xs font-semibold">Order Time</p>
              <p className="text-xs">From 1-6 Dec, 2020</p>
            </div>
            <div>
              <button className="font-semibold text-sm w-28 rounded-sm bg-slate-100 h-8 shadow-sm shadow-slate-300 text-blue-400">
                View Report
              </button>
            </div>
          </div>
          <PieChart width={300} height={400}>
            <Pie
              data={data1}
              cx={200}
              cy={200}
              innerRadius={60}
              outerRadius={80}
              fill="#8884d8"
              paddingAngle={0}
              dataKey="value"
            >
              <Legend />
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
