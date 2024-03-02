"use client";

import { ColumnDef } from "@tanstack/react-table";

// This type is used to define the shape of our data.
export type SinglesStatistics = {
  country: string;
  member_id: string;
  player: string;
  points: number;
  prev_rank: number;
  rank: number;
  rank_change: number;
  tournaments: number;
};

export const SinglesColumns: ColumnDef<SinglesStatistics>[] = [
  {
    accessorKey: "rank",
    header: "Current Rank",
  },
  {
    accessorKey: "player",
    header: "Player",
  },
  {
    accessorKey: "country",
    header: "Country",
  },
];
