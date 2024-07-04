import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

const data = [
  {
    date: "01",
    uv: 4000,
    pv: 2400,
    amt: 2400
  },
  {
    date: "02",
    uv: 3000,
    pv: 1398,
    amt: 2210
  },
  {
    date: "03",
    uv: 2000,
    pv: 4800,
    amt: 2290
  },
  {
    date: "04",
    uv: 2780,
    pv: 3908,
    amt: 2000
  },
  {
    date: "05",
    uv: 1890,
    pv: 4800,
    amt: 2181
  },
  {
    date: "06",
    uv: 2390,
    pv: 3800,
    amt: 2500
  },
  {
    date: "07",
    uv: 3490,
    pv: 4300,
    amt: 2100
  },
  {
    date: "08",
    uv: 4000,
    pv: 2400,
    amt: 2400
  },
  {
    date: "09",
    uv: 3000,
    pv: 1398,
    amt: 2210
  },
  {
    date: "10",
    uv: 3500,
    pv: 8800,
    amt: 2290
  },
  {
    date: "11",
    uv: 2780,
    pv: 3908,
    amt: 2000
  },
  {
    date: "12",
    uv: 1890,
    pv: 4800,
    amt: 2181
  }
];


export default function App() {
  return (
   <div>

    <div>
      
    </div>
    <BarChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
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
   </div>
  );
}
