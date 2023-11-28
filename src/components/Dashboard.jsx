import BuyerProfileChart from "./BuyerProfileChart";
import DashboardStartsGrid from "./DashboardStartsGrid";
import RecentOrders from "./RecentOrders";
import TransactionsChart from "./TransactionsChart";

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
      </div>
    </div>
  );
};

export default Dashboard;
