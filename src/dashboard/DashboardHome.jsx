import React from "react";
import { GoSearch } from "react-icons/go";
import img1 from "../assets/Emoticon.png";
import img2 from "../assets/Group 245.png";
import img3 from "../assets/Group 23.png";
import img4 from "../assets/Group 23 (2).png";
import img5 from "../assets/Group 23 (1).png";
import { HiChevronDown } from "react-icons/hi";
import { CiBellOn } from "react-icons/ci";
import { FaArrowUp } from "react-icons/fa";
import {
  BarChart,
  Bar,
  XAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
} from "recharts";
import { FaArrowDown } from "react-icons/fa6";
import Rating from "./Rating";

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

const data3 = [
  {
    id: "1",
    img: img2,
    name: "Fresh salad Bowl",
    price: 45.0,
  },
  {
    id: "2",
    img: img3,
    name: "Chicken Noodles",
    price: 75.0,
  },
  {
    id: "3",
    img: img4,
    name: "Smooths Fruits",
    price: 45.0,
  },
  {
    id: "4",
    img: img5,
    name: "Hot Chicken Wings",
    price: 45.0,
  },
];

const data4 = [
  {
    month: "01",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    month: "02",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    month: "03",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    month: "04",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    month: "05",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    month: "06",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
];

const DashboardHome = () => {
  return (
    <div className="mb-20">
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

      <div className="flex flex-wrap mx-16 divide-x-2 border-b-2">
        <div className="pb-12 flex-initial lg:w-[60%]">
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

          <div style={{ width: "100%", height: 300 }}>
            <ResponsiveContainer>
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
            </ResponsiveContainer>
          </div>
        </div>

        <div className="ml-[59px] pl-9 flex-initial lg:w-[30%]">
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

          <div style={{ width: "100%", height: 300 }}>
            <ResponsiveContainer>
              <PieChart width={300} height={300}>
                <Pie
                  data={data1}
                  cx={150}
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
            </ResponsiveContainer>
          </div>
        </div>
      </div>


      <div className="mx-16 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-12">

        <div className="border-e-2 py-12">
        <Rating></Rating>
        </div>

        <div className="w-auto border-e-2 py-12 px-9">
          <div className="mb-9">
            <p className="font-semibold text-xs mb-2">Most Ordered Food</p>
            <p className="text-xs">Adipiscing elit, sed do eiusmod tempor</p>
          </div>

          <div className="mt-14">
            {data3.map((data) => (
              <div
                key={data?.id}
                className="flex items-center justify-between border-b py-7"
              >
                <div className="flex items-center gap-4">
                  <div>
                    <img src={data?.img} alt="" />
                  </div>
                  <div className="text-xs font-normal">{data?.name}</div>
                </div>
                <div className="text-xs font-normal">IDR {data?.price}.000</div>
              </div>
            ))}
          </div>
        </div>

        <div className="py-12">
          <div className="flex flex-wrap justify-between">
            <div>
              <p className="text-xs font-semibold">Order</p>
              <h3 className="font-semibold my-2">2.568</h3>
              <h4 className="flex items-center gap-1 text-xs mb-4">
                <span className="flex items-center gap-2 text-red-600">
                  <FaArrowDown></FaArrowDown> 2.1%
                </span>
                <p>vs last week</p>
              </h4>
              <p className="text-xs">Sales from 1-6 Dec, 2020</p>
            </div>
            <div>
              <button className="font-semibold text-sm w-28 rounded-sm bg-slate-100 h-8 shadow-sm shadow-slate-300 text-blue-400">
                View Report
              </button>
            </div>
          </div>

          <div className="mt-7" style={{ width: "100%", height: 300 }}>
            <ResponsiveContainer>
              <LineChart
                width={400}
                height={300}
                data={data4}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="2 2" />
                <XAxis dataKey="month" />
                <Tooltip />
                <Legend />
                <Line dataKey="pv" stroke="#8884d8" />
                <Line dataKey="uv" stroke="#82ca9d" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
