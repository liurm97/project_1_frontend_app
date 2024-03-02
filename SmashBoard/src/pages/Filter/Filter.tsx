import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useNavigate } from "react-router-dom";
import "../../global.css";
import { Button } from "@/components/ui/Button";
import { useState } from "react";

export const Filter = () => {
  const [categoryAbbre, setCategoryAbbre] = useState("MS");
  const [categoryType, setCategoryType] = useState("Single");
  console.log("categoryType", categoryType);
  const navigate = useNavigate();
  return (
    <>
      <main className="filter-container">
        <div className="filter-wrapper">
          <h1 className={"text-4xl"}>
            What Badminton Category are you interested in?
          </h1>
          <Select
            defaultValue="Men Single"
            onValueChange={(value) => {
              switch (value) {
                case "Men Single":
                  setCategoryAbbre("MS");
                  break;

                case "Men Double":
                  setCategoryAbbre("MD");
                  setCategoryType(() => "Double");
                  break;

                case "Women Single":
                  setCategoryAbbre("WS");
                  break;

                case "Women Double":
                  setCategoryAbbre("WD");
                  break;

                case "Mixed Double":
                  setCategoryAbbre("XD");
                  break;

                default:
                  break;
              }
            }}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Expand" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel className={"text-lg"}>Categories</SelectLabel>
                <SelectItem value="Men Single">Men Single</SelectItem>
                <SelectItem value="Women Single">Women Single</SelectItem>
                <SelectItem value="Men Double">Men Double</SelectItem>
                <SelectItem value="Women Double">Women Double</SelectItem>
                <SelectItem value="Mixed Double">Mixed Double</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>

          <Button
            className={"text-3xl"}
            variant={"ghost"}
            onClick={() => {
              if (categoryAbbre == "MS") navigate("/dashboard/MS");
              if (categoryAbbre == "WS") navigate("/dashboard/WS");
              if (categoryAbbre == "MD") navigate("/dashboard/MD");
              if (categoryAbbre == "WD") navigate("/dashboard/WD");
              if (categoryAbbre == "XD") navigate("/dashboard/XD");
            }}
          >
            Go
          </Button>
        </div>
      </main>
    </>
  );
};
