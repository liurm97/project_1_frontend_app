import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type DashboardHeaderArgument = {
  _category: string;
  _color: string;
};
export const DashboardHeader = ({
  _category,
  _color,
}: DashboardHeaderArgument) => {
  // console.log(_category, _color)
  return (
    <>
      <header className={"bg-green-200"}>
        <h1 className={"text-4xl"}>
          <span className={_color}>{_category}</span> Dashboard
        </h1>
        <div className={"flex"}>
          <Select
            defaultValue="Men Single"
            // onValueChange={(value) => {
            //   setCategory(value);
            // }}
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
          <Select
            defaultValue="Men Single"
            // onValueChange={(value) => {
            //   setCategory(value);
            // }}
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
        </div>
      </header>
    </>
  );
};
