import { Button } from "@/components/ui/Button";
import {
  Card,
  CardHeader,
  CardDescription,
  CardContent,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import { countryMapper } from "@/utils/countryMapper";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

export const PlayerCard = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const playerData = location.state.playerData;
  const [isDoubles, setIsDoubles] = useState(
    Object.keys(playerData).length > 8
  );
  console.log("isDoubles", isDoubles);
  console.log("playerData", playerData);
  console.log(playerData.country);
  let mappedCountryCode: string | undefined;
  isDoubles
    ? (mappedCountryCode = countryMapper(playerData.country.split("/")[0]))
    : (mappedCountryCode = countryMapper(playerData.country));
  console.log(mappedCountryCode);
  return (
    <div className={"max-w-screen-xl mx-auto p-12"}>
      <Button
        variant={"ghost"}
        className={"col-span-1 mb-4 text-xl"}
        onClick={() => navigate("..")}
      >
        Back
      </Button>
      {isDoubles ? (
        // ------- Doubles Layout ------ //

        // Player 1
        <div className={"grid grid-cols-4"}>
          <Card className={"col-span-3"}>
            <CardHeader>
              <div>
                <CardTitle>
                  {playerData.player1}
                  <Button
                    variant={"destructive"}
                    className="ml-4 text-lg"
                    onClick={() => {
                      const player1FormatName = playerData.player1
                        .replace(" ", "-")
                        .toLowerCase();
                      window.open(
                        `https://bwfbadminton.com/player/${playerData.member_id1}/${player1FormatName}`,
                        "_blank"
                      );
                    }}
                  >
                    BWF Player Info
                  </Button>
                </CardTitle>
                <CardDescription>
                  {playerData.country.split("/")[0]}
                </CardDescription>
                <img
                  src={`https://flagsapi.com/${mappedCountryCode}/shiny/64.png`}
                  alt={`Picture of ${mappedCountryCode} country flag`}
                ></img>
              </div>
            </CardHeader>
            <CardContent>
              <p>World Rank {playerData.rank}</p>
              <p>Attained {playerData.points} Points</p>
            </CardContent>
            <CardFooter>
              <p>Previous Rank {playerData.prev_rank}</p>
            </CardFooter>
          </Card>
          <div className={"col-span-1"}>
            <img
              src={`https://img.bwfbadminton.com/image/upload/t_96_player_profile/v1697764072/assets/players/thumbnail/${playerData.member_id1}.png`}
              alt={`Picture of ${playerData.player}`}
              className={"rounded-lg"}
            />
          </div>
          {/* // Player 2 */}
          <Card className={"col-span-3 col-start-2 row-span-2 flex flex-col"}>
            <CardHeader>
              <div>
                <CardTitle>
                  {playerData.player2}
                  <Button
                    variant={"destructive"}
                    className="ml-4 text-lg"
                    onClick={() => {
                      const player2FormatName = playerData.player2
                        .replace(" ", "-")
                        .toLowerCase();
                      window.open(
                        `https://bwfbadminton.com/player/${playerData.member_id2}/${player2FormatName}`,
                        "_blank"
                      );
                    }}
                  >
                    BWF Player Info
                  </Button>
                </CardTitle>

                <CardDescription>
                  {playerData.country.split("/")[0]}
                </CardDescription>
                <img
                  src={`https://flagsapi.com/${mappedCountryCode}/shiny/64.png`}
                  alt={`Picture of ${mappedCountryCode} country flag`}
                ></img>
              </div>
            </CardHeader>
            <CardContent>
              <p>World Rank {playerData.rank}</p>
              <p>Attained {playerData.points} Points</p>
            </CardContent>
            <CardFooter>
              <p>Previous Rank {playerData.prev_rank}</p>
            </CardFooter>
          </Card>
          <div className={"col-span-1 col-start-1 row-span-1 grid"}>
            <img
              src={`https://img.bwfbadminton.com/image/upload/t_96_player_profile/v1697764072/assets/players/thumbnail/${playerData.member_id2}.png`}
              alt={`Picture of ${playerData.player}`}
              className={"rounded-lg"}
            />
          </div>
        </div>
      ) : (
        // ------- Singles Layout ------ //
        <div className={"grid grid-cols-4"}>
          <Card className={"col-span-3"}>
            <CardHeader>
              <div>
                <CardTitle>
                  {playerData.player}
                  <Button
                    variant={"destructive"}
                    className="ml-4 text-lg"
                    onClick={() => {
                      const playerFormatName = playerData.player
                        .replace(" ", "-")
                        .toLowerCase();
                      window.open(
                        `https://bwfbadminton.com/player/${playerData.member_id}/${playerFormatName}`,
                        "_blank"
                      );
                    }}
                  >
                    BWF Player Info
                  </Button>
                </CardTitle>
                <CardDescription>{playerData.country}</CardDescription>
                <img
                  src={`https://flagsapi.com/${mappedCountryCode}/shiny/64.png`}
                  alt={`Picture of ${playerData.country} country flag`}
                ></img>
              </div>
            </CardHeader>
            <CardContent>
              <p>World Rank {playerData.rank}</p>
              <p>Attained {playerData.points} Points</p>
            </CardContent>
            <CardFooter>
              <p>Previous Rank {playerData.prev_rank}</p>
            </CardFooter>
          </Card>
          <div className={"col-span-1"}>
            <img
              src={`https://img.bwfbadminton.com/image/upload/t_96_player_profile/v1697764072/assets/players/thumbnail/${playerData.member_id}.png`}
              alt={`Picture of ${playerData.player}`}
              className={"rounded-lg"}
            />
          </div>
        </div>
      )}
    </div>
  );
};
