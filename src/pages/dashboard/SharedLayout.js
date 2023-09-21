import Costumer from "../../components/Costumer";
import Navbar from "../../components/Navbar";
import Reveneu from "../../components/Reveneu";
import SalesMapping from "../../components/SalesMapping";
import ServiceLevel from "../../components/ServiceLevel";
import { SideBar } from "../../components/SideBar";
import Target from "../../components/Target";
import TodaySales from "../../components/TodaySales";
import TopProduct from "../../components/TopProduct";
import Visitor from "../../components/Visitor";
import Wrapper from "./SharedWrapper";

const SharedLayout = ({ open }) => {
  return (
    <>
      <Wrapper>
        <main className="dashboard ">
          <SideBar />

          <div>
            <Navbar />
            <div className="dashboard-page bg-[#f9fafbff] ">
              <div className="grid lg:grid-cols-10 grid-cols-1 gap-4 ">
                <TodaySales />
                <Visitor />
                <Reveneu />
                <Costumer />
                <Target />
                <TopProduct />
                <SalesMapping />
                <ServiceLevel />
              </div>
            </div>
          </div>
        </main>
      </Wrapper>
    </>
  );
};

export default SharedLayout;
