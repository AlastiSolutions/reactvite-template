import { Outlet } from "react-router-dom";

export const RootLayout = () => {
  return (
    <div className="flex h-full min-h-full w-full min-w-full flex-col bg-white text-black">
      <Outlet />
    </div>
  );
};
