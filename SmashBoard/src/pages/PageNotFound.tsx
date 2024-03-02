import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const PageNotFound = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate("/");
    }, 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);
  return (
    <>
      <div
        className={
          "flex flex-col mt-40 gap-6 justify-center items-center text-5xl"
        }
      >
        <h1>404 Page Not Found</h1>
        <h1>Redirecting you to main page...</h1>
      </div>
    </>
  );
};
