import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="h-dvh w-dvw py-4 px-6 overflow-x-hidden">
      <Outlet />
    </div>
  );
}
