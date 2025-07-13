import { Header } from "@/components/layout/header";
import { BalanceOverview } from "@/components/dashboard/balance-overview";
import { RecentTransactions } from "@/components/dashboard/recent-transactions";
import { StatsCard } from "@/components/ui/stats-card";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { DollarSign, Activity, Users, Coins } from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground font-inter transition-colors duration-300">
      <Header />
      <main className="container mx-auto p-4 space-y-6">
        <ThemeToggle />

        <BalanceOverview />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatsCard
            title="سعر NAWAH"
            value="$0.358"
            change="+12.5%"
            changeType="positive"
            icon={DollarSign}
          />
          <StatsCard
            title="حجم التداول (24س)"
            value="$2.4M"
            change="+8.2%"
            changeType="positive"
            icon={Activity}
          />
          <StatsCard
            title="عدد الحاملين"
            value="45,234"
            change="+156"
            changeType="positive"
            icon={Users}
          />
          <StatsCard
            title="الحد الأقصى للمعروض"
            value="1B NAWAH"
            changeType="neutral"
            icon={Coins}
          />
        </div>

        <RecentTransactions />
      </main>
    </div>
  );
}
