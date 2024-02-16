import { DashboardBody } from "./DashboardBody";
import { DashboardHeader } from "./DashboardHeader";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { PlayerData } from "@/data/types/PlayerData";
import { useEffect } from "react";

export const Dashboard = () => {
  const location = useLocation();
  const [category, setCategory] = useState(location.state);
  const [color, setColor] = useState("");
  // const [playerData, setPlayerData] = useState<PlayerData[]>([])

  useEffect(() => {
    // console.log("Dashboard useEffect");
    // console.log("category", category);
    // Check Men or Women or Mixed category
    category.indexOf("Women") == 0 ? setColor(() => "text-red-500") : undefined;
    category.indexOf("Men") == 0 ? setColor(() => "text-blue-500") : undefined;
    category.indexOf("Mixed") == 0
      ? setColor(() => "text-purple-500")
      : undefined;

    // Read data from JSON
  }, []);
  return (
    <>
      <div className={"max-w-7xl p-6 mx-auto my-0 bg-red-500"}>
        <DashboardHeader _category={category} _color={color} />
        <DashboardBody _category={category} />
      </div>
    </>
  );
};
