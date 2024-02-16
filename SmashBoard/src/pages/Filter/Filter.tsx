import * as React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Link } from "react-router-dom";
import "../../global.css";
import { Button } from "@/components/ui/Button";
import { useState } from "react";
export const Filter = () => {
  const [category, setCategory] = useState("Men Single");
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
              setCategory(value);
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
          <Link state={category} to="/dashboard">
            <Button className={"text-3xl"} variant={"ghost"}>
              Go
            </Button>
          </Link>
        </div>
      </main>
    </>
  );
};
