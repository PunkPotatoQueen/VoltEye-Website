import Header from "./components/Header";
import EnergyCard from "./components/EnergyCard";
import DevicesList from "./components/DevicesList";
import AlertsCard from "./components/AlertsCard";
import TipsCard from "./components/TipsCard";
import WeeklyChart from "./components/WeeklyChart";
import SummaryCards from "./components/SummaryCards";

import { devices } from "./data/mockData";

export default function Home() {
  const total = devices.reduce((acc, d) => acc + d.power, 0);

  return (
    <main className="bg-gray-100 min-h-screen flex">

      {/* SIDEBAR */}
      <aside className="hidden md:flex flex-col w-64 bg-white shadow-lg p-6">
        <h1 className="text-xl font-bold text-blue-600 mb-6">
          VoltEye ⚡
        </h1>

        <nav className="space-y-3">
          <p className="text-blue-600 font-medium">Dashboard</p>
          <p className="text-gray-700 hover:text-blue-600 cursor-pointer">Dispositivos</p>
          <p className="text-gray-700 hover:text-blue-600 cursor-pointer">Relatórios</p>
          <p className="text-gray-700 hover:text-blue-600 cursor-pointer">Configurações</p>
        </nav>
      </aside>

      {/* CONTEÚDO */}
      <div className="flex-1 p-6">

        <Header />

        <SummaryCards />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">

          {/* ESQUERDA */}
          <div className="lg:col-span-2 space-y-6">
            <EnergyCard total={total} />
            <WeeklyChart />
            <DevicesList devices={devices} />
          </div>

          {/* DIREITA */}
          <div className="space-y-6">
            <AlertsCard />
            <TipsCard />
          </div>

        </div>

      </div>
    </main>
  );
}