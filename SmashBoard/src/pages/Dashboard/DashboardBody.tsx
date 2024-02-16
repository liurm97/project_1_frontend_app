import { PlayerData } from "@/data/types/PlayerData";
import { PlayerCard } from "./PlayerCard";
import { useEffect, useState } from "react";
type DashboardBodyArgument = {
  _category: string;
};

export const DashboardBody = ({ _category }: DashboardBodyArgument) => {
  const [playersData, setPlayersData] = useState<PlayerData[]>([]);
  useEffect(() => {
    console.log("_category", _category);
    let fileNameAbbreviation: string;
    switch (_category) {
      case "Men Single":
        fileNameAbbreviation = "MS";
        break;
      case "Men Double":
        fileNameAbbreviation = "MD";
        break;
      case "Women Single":
        fileNameAbbreviation = "WS";
        break;
      case "Women Double":
        fileNameAbbreviation = "WD";
        break;
      case "Mixed Double":
        fileNameAbbreviation = "XD";
        break;
      default:
        break;
    }
    console.log("fileNameAbbreviation", fileNameAbbreviation);
    fetch(`src/data/json/${fileNameAbbreviation}Players.json`)
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        setPlayersData([...data]);
      });
    console.log("useeffecet");
  }, []);

  return (
    <>
      <main className={"bg-blue-200"}>
        <div className={"grid grid-cols-5 justify-items-stretch"}>
          <div className={"col-span-1"}>MenuBar</div>
          <div className={"col-span-4"}>
            <div className={""}>
              {playersData.map((player) => (
                <PlayerCard
                  key={player.member_id}
                  player={player.player}
                  country={player.country}
                  rank={player.rank}
                  points={player.points}
                  prev_rank={player.prev_rank}
                />
              ))}
              {/* (
                  <PlayerCard key={crypto.randomUUID()} args={player} />
                ) */}
              {/* {playersData && <PlayerCard />} */}
              {/* <PlayerCard /> */}
            </div>
            {/* <div className={""}>
          <PlayerCard />
          </div>
          <div className={""}>
          <PlayerCard />
          </div>
          <div className={""}>
          <PlayerCard />
          </div> */}
          </div>
          {/* <PlayerCard />
          <PlayerCard />
          <PlayerCard />
          <PlayerCard />
          <PlayerCard />
          <PlayerCard /> */}
        </div>
      </main>
    </>
  );
};
