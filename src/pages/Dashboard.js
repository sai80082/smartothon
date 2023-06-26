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
  return (
    <div className="relative bg-light-selected w-full h-[1024px] overflow-hidden text-left text-mini text-gray font-open-sans">
      <div className="absolute top-[0px] left-[0px] bg-aliceblue w-[1440px] h-[1024px]" />
      <div className="absolute top-[0px] left-[1058px] rounded-tl-11xl rounded-tr-none rounded-br-none rounded-bl-11xl bg-light-selected w-[382px] h-[1024px]" />

      <img
        className="absolute h-[2.92%] w-[1.67%] top-[5.18%] right-[22.43%] bottom-[91.9%] left-[75.9%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/notification.svg"
      />
      <Profile></Profile>
      <Search></Search>
      <Banner></Banner>
      <Calendar></Calendar>
      <Activity></Activity>
      <Progress></Progress>
      <Topperforming></Topperforming>
      <Graph></Graph>
      <Messaages></Messaages>
      <Sidebar></Sidebar>
    </div>
  );
};

export default Dashboard;
