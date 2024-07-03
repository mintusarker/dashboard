import React from "react";
import { Link, Outlet } from "react-router-dom";
import { FaCartPlus, FaGoogle } from "react-icons/fa";
import { FaShop } from "react-icons/fa6";
import { BsExclamation } from "react-icons/bs";
import {
  MdDashboard,
  MdManageAccounts,
  MdOutlineTextsms,
  MdPayment,
} from "react-icons/md";
import { CgMenuLeft } from "react-icons/cg";
import { FcSettings } from "react-icons/fc";
import { FiBarChart2 } from "react-icons/fi";

const Dashboard = () => {
  return (
    <div>
      <div className="drawer drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center">
          {/* outlet */}
          <Outlet />
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="w-[240px] min-h-screen bg-[#F1F2F7] flex flex-col items-start">
            {/* Sidebar content here */}
            {/* <div className="text-lg my-4"> */}

            <li className="flex uppercase items-center p-7 gap-4">
              <FaGoogle className="bg-[#5A67BA] rounded-full"></FaGoogle>
              <p className="text-[#5A67BA]">goodfood</p>
            </li>

            <div className="w-full border bg-[#C8CBD9]"></div>

            <div className="p-8 text-[#273240]">
              <li>MENU</li>
              <li className=" mt-8 rounded-md">
                <Link className="flex items-center gap-2">
                  <FiBarChart2 className="text-[#A6ABC8] w-[15px] h-[15px]"></FiBarChart2>
                  Dashboard
                </Link>
              </li>
              <li className="mt-8 rounded-md">
                <Link className="flex items-center gap-2">
                  <FaCartPlus className="text-[#A6ABC8] w-[15px] h-[15px]"></FaCartPlus>
                  Food Order
                </Link>
              </li>
              <li className=" mt-6 rounded-md">
                <Link className="flex items-center gap-2">
                  <CgMenuLeft className="text-[#A6ABC8] w-[15px] h-[15px]"></CgMenuLeft>
                  Manage Menu
                </Link>
              </li>

              <li className="text-centerrounded-md mt-6">
                <Link className="flex items-center gap-2">
                  <MdOutlineTextsms className="text-[#A6ABC8] w-[15px] h-[15px]"></MdOutlineTextsms>
                  Customer Review
                </Link>
              </li>

              <li className="uppercase mt-10 mb-6">Others</li>

              <li className="rounded-md">
                <Link className="flex items-center gap-2">
                  <FcSettings className="text-[#A6ABC8] w-[15px] h-[15px]"></FcSettings>
                  settings
                </Link>
              </li>
              <li className=" mt-6 rounded-md">
                <Link className="flex items-center gap-2">
                  <MdPayment className="text-[#A6ABC8] w-[15px] h-[15px]"></MdPayment>
                  Payment
                </Link>
              </li>
              <li className=" mt-6 rounded-md">
                <Link className="flex items-center gap-2">
                  <MdManageAccounts className="text-[#A6ABC8] w-[15px] h-[15px]" />
                  Accounts
                </Link>
              </li>
              <li className=" mt-6 rounded-md">
                <Link className="flex items-center gap-2">
                  <BsExclamation className="text-slate-600 w-[15px] h-[15px] bg-[#A6ABC8] rounded"></BsExclamation>
                  Help
                </Link>
              </li>
            </div>
            {/* </div> */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
