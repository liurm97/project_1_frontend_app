type DashboardHeaderArgument = {
  _categoryDescription: string;
  _color: string;
};

export const DashboardHeader = ({
  _categoryDescription,
  _color,
}: DashboardHeaderArgument) => {
  return (
    <>
      <header>
        <h1 className={"text-4xl"}>
          <span className={_color}>{_categoryDescription}</span> Dashboard
        </h1>
      </header>
    </>
  );
};
