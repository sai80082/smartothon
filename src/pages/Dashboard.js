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
import { FiMessageSquare, FiFolder, FiShoppingCart } from "react-icons/fi";
import { AiOutlineUser, AiOutlineHeart } from "react-icons/ai";
import { MdOutlineDashboard } from "react-icons/md";
import { TbReportAnalytics } from "react-icons/tb";

const Dashboard = () => {
  const menus = [
    { name: "Dashboard", link: "/", icon: MdOutlineDashboard },
    { name: "Cources", link: "/cources", icon: TbReportAnalytics, margin: true },
    { name: "Code", link: "/code", icon: FiFolder },
    { name: "Profile", link: "/profile", icon: AiOutlineUser },
    { name: "Messages", link: "/message", icon: FiMessageSquare },
  ];

  return (
    <div className="relative bg-light-selected w-full  text-left text-mini text-gray font-open-sans">

      <div className="flex">
        <Sidebar dataarr={menus}></Sidebar>
        <div className="xl:flex">
          <div className="flex flex-col px-8">
            <Search></Search>
            <Banner></Banner>
            <div className="lg:flex pt-8 justify-around">
              <Graph></Graph>
              <Progress></Progress>
            </div>
            <div className="flex">
              <Topperforming></Topperforming>
              <Messaages></Messaages>
            </div>
          </div>

          <div className="flex flex-col">

            <Calendar></Calendar>
            <Activity></Activity>
          </div>
        </div>

      </div>

    </div>
  );
};

export default Dashboard;
