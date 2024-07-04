import React from "react";
import { Link, Outlet } from "react-router-dom";
import { FaCartPlus, FaGoogle } from "react-icons/fa";
import { BsExclamation } from "react-icons/bs";
import { MdManageAccounts, MdOutlineTextsms, MdPayment } from "react-icons/md";
import { CgMenuLeft } from "react-icons/cg";
import { FcSettings } from "react-icons/fc";
import { FiBarChart2 } from "react-icons/fi";

const Dashboard = () => {
  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
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

            <li className="flex uppercase items-center p-7 gap-4">
              <FaGoogle className="bg-[#5A67BA] rounded-full w-[24px] h-[24px] p-[6px]"></FaGoogle>
              <p className="text-[#5A67BA] font-[700] text-[11px] tracking-[0.5px]">goodfood</p>
            </li>

            <div className="w-full border bg-[#C8CBD9]"></div>

            <div className="mx-auto text-[#273240]">
              <li className="mb-6 mt-12 font-[400] text-[11px] leading-3 tracking-[1px]">MENU</li>
              <li className=" rounded-md w-[200px] h-[42px] hover:bg-slate-300 hover:text-[#5A6ACF] px-2 pt-2">
                <Link className="flex items-center gap-5">
            
                  <FiBarChart2 className="text-[#A6ABC8] w-[15px] h-[15px]"></FiBarChart2>
                  Dashboard
                </Link>
              </li>
              <li className="rounded-md w-[200px] h-[42px]  hover:bg-slate-300 hover:text-[#5A6ACF] px-2 pt-2">
                <Link className="flex items-center gap-5">
                  <FaCartPlus className="text-[#A6ABC8] w-[15px] h-[15px]"></FaCartPlus>
                  Food Order
                </Link>
              </li>
              <li className="rounded-md w-[200px] h-[42px]  hover:bg-slate-300 hover:text-[#5A6ACF] px-2 pt-2">
                <Link className="flex items-center gap-5">
                  <CgMenuLeft className="text-[#A6ABC8] w-[15px] h-[15px]"></CgMenuLeft>
                  Manage Menu
                </Link>
              </li>

              <li className="rounded-md w-[200px] h-[42px]  hover:bg-slate-300 hover:text-[#5A6ACF] px-2 pt-2">
                <Link className="flex items-center gap-5">
                  <MdOutlineTextsms className="text-[#A6ABC8] w-[15px] h-[15px]"></MdOutlineTextsms>
                  Customer Review
                </Link>
              </li>

              <li className="uppercase mt-10 mb-6 font-[400] text-[11px] leading-3 tracking-[1px]">Others</li>

              <li className="rounded-md w-[200px] h-[42px]  hover:bg-slate-300 hover:text-[#5A6ACF] px-2 pt-2">
                <Link className="flex items-center gap-5">
                  <FcSettings className="text-[#A6ABC8] w-[15px] h-[15px]"></FcSettings>
                  settings
                </Link>
              </li>
              <li className="rounded-md w-[200px] h-[42px]  hover:bg-slate-300 hover:text-[#5A6ACF] px-2 pt-2">
                <Link className="flex items-center gap-5">
                  <MdPayment className="text-[#A6ABC8] w-[15px] h-[15px]"></MdPayment>
                  Payment
                </Link>
              </li>
              <li className="rounded-md w-[200px] h-[42px]  hover:bg-slate-300 hover:text-[#5A6ACF] px-2 pt-2">
                <Link className="flex items-center gap-5">
                  <MdManageAccounts className="text-[#A6ABC8] w-[15px] h-[15px]" />
                  Accounts
                </Link>
              </li>
              <li className="rounded-md w-[200px] h-[42px]  hover:bg-slate-300 hover:text-[#5A6ACF] px-2 pt-2">
                <Link className="flex items-center gap-5">
                  <BsExclamation className="text-slate-600 w-[15px] h-[15px] bg-[#A6ABC8] rounded"></BsExclamation>
                  Help
                </Link>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
