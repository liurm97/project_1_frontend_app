import {
  Card,
  CardHeader,
  CardDescription,
  CardContent,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";

export const PlayerCard = ({ player, country, rank, points, prev_rank }) => {
  return (
    <>
      <Card>
        <CardHeader>
          <div>
            <CardTitle>{player}</CardTitle>
            <CardDescription>{country}</CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <p>World Rank {rank}</p>
          <p>Attained {points} Points</p>
        </CardContent>
        <CardFooter>
          <p>Previous Rank {prev_rank}</p>
        </CardFooter>
      </Card>
    </>
  );
};
