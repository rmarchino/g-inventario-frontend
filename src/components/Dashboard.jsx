import BuyerProfileChart from "./BuyerProfileChart";
import DashboardStartsGrid from "./Dashboard/DashboardStartsGrid";
import PopularProducts from "./Dashboard/PopularProducts";
import RecentOrders from "./Dashboard/RecentOrders";
import TransactionsChart from "./Dashboard/TransactionsChart";

const Dashboard = () => {
  return (
    <div className="flex flex-col gap-4">
      <DashboardStartsGrid />
      <div className="flex flex-row gap-4 w-full">
        <TransactionsChart />
        <BuyerProfileChart />
      </div>
      <div className="flex flex-row gap-4 w-full">
        <RecentOrders />
        <PopularProducts />
      </div>
    </div>
  );
};

export default Dashboard;
