import React from "react";
import { MdOutlineDashboard } from "react-icons/md";
import { AiOutlineUser, AiOutlineHeart } from "react-icons/ai";
import { FiMessageSquare, FiFolder, FiShoppingCart } from "react-icons/fi";
import { TbReportAnalytics } from "react-icons/tb";
import Activity from "../components/activity/Activity";
import Banner from "../components/banner/Banner";
import Calendar from "../components/calendar/Calendar";
import Graph from "../components/graph/Graph";
import Messaages from "../components/messages/Messages";
import Profile from "../components/profile/Profile";
import Progress from "../components/progress/Progress";
import Search from "../components/search/Search";
import Sidebar from "../components/sidebar/Sidebar";
import Topperforming from "../components/top/Topperforming";

const Dashboard = () => {
  const menus = [
    { name: "Dashboard", link: "/", icon: MdOutlineDashboard },
    { name: "Cources", link: "/cources", icon: TbReportAnalytics, margin: true },
    { name: "Code", link: "/code", icon: FiFolder },
    { name: "Profile", link: "/profile", icon: AiOutlineUser },
    { name: "Messages", link: "/message", icon: FiMessageSquare },

  ];

  return (
    <div className="bg-light-selected w-[90%] text-mini text-gray font-open-sans">
      <div className="flex w-full">
        <Sidebar dataarr={menus} />

        <div className="xl:flex w-full gap-5 ">
          <div className="flex flex-col ">
            <Search />
            <Banner />
            <div className="lg:flex pt-8  ">
              <Graph />
              <div className="w-full flex justify-center mt-8"> 
              <Progress />
              </div>
            </div>
            <div className="lg:flex w-full mt-10">
              <div className="w-full flex justify-center"><Messaages /></div>
              <Topperforming />
            </div>
          </div>

          <div className="flex flex-col w-full mt-10">
            <div className="w-full flex justify-center">
              <Calendar />
            </div>
            <Activity />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
