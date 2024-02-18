// import { DashboardBody } from "./DashboardBody";
import { DashboardHeader } from "./DashboardHeader";
import { useLoaderData, useNavigate } from "react-router-dom";
// import DashboardBody from "./DashboardBody";
import { SinglesColumns, SinglesStatistics } from "./columns/SinglesColumns";
import { DoublesColumns, DoublesStatistics } from "./columns/DoublesColumns";
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
  const navigate = useNavigate();
  const data = useLoaderData() as SinglesStatistics[] | DoublesStatistics[];
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
    </>
  );
};
