"use client";

import { ColumnDef } from "@tanstack/react-table";

// This type is used to define the shape of our data.
export type DoublesStatistics = {
  country: string;
  member_id1: string;
  member_id2?: string;
  player1: string;
  player2?: string;
  points: number;
  prev_rank: number;
  rank: number;
  rank_change: number;
  tournaments: number;
};

export const DoublesColumns: ColumnDef<DoublesStatistics>[] = [
  {
    accessorKey: "rank",
    header: "Rank",
  },
  {
    accessorKey: "player1",
    header: "Player 1",
  },
  {
    accessorKey: "player2",
    header: "Player 2",
  },
  {
    accessorKey: "country",
    header: "Country",
  },
];
