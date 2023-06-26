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
    <div className="relative bg-light-selected w-full  text-left text-mini text-gray font-open-sans">




      {/* 
      
     
      <Topperforming></Topperforming>
      
  <Messaages></Messaages>*/}
      <div className="flex">
        <Sidebar></Sidebar>
        <div className="lg:flex">
          <div className="flex flex-col px-8">
            <Search></Search>
            <Banner></Banner>
            <div className="lg:flex pt-8">
              <Graph></Graph>
              <Progress></Progress>
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
