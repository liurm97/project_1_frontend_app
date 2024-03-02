"use client";
import { DashboardHeader } from "./DashboardHeader";
import { useLoaderData, useNavigate } from "react-router-dom";
import { SinglesColumns } from "./columns/SinglesColumns";
import { DoublesColumns } from "./columns/DoublesColumns";
import { SinglesDataTable } from "./dataTable/SinglesDataTable";
import { DoublesDataTable } from "./dataTable/DoublesDataTable";
import { Button } from "@/components/ui/Button";

type DashboardArgument = {
  categoryDescription: string;
  categoryColor: string;
  categoryType: string;
};

export const Dashboard = ({
  categoryDescription,
  categoryColor,
  categoryType,
}: DashboardArgument) => {
  const data = useLoaderData();
  const navigate = useNavigate();

  // Option 1) implement loading using useEffect..
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await fetch(
  //       "https://www.bwfshuttleapi.com/rankings/api/MS"
  //     );
  //     response.json().then((data) => {
  //       setPlayerData([...data]);
  //       setLoading(false);
  //     });
  //   };
  //   fetchData();
  // }, []);
  // const data = useLoaderData();
  return (
    <>
      <div className={"max-w-7xl p-6 mx-auto my-0"}>
        <DashboardHeader
          _categoryDescription={categoryDescription}
          _color={categoryColor}
        />
        <Button
          variant={"ghost"}
          className={"col-span-1 mb-4 mt-4 text-xl"}
          onClick={() => navigate("/filter")}
        >
          Back
        </Button>
        <div className="mx-auto py-10">
          {categoryType == "Single" ? (
            <SinglesDataTable columns={SinglesColumns} data={data} />
          ) : (
            <DoublesDataTable columns={DoublesColumns} data={data} />
          )}
        </div>
      </div>
      )
    </>
  );
};
