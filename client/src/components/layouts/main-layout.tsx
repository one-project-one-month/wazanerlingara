import useOnboarding from "@/features/onboarding/hooks";
import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

export default function MainLayout() {
  const { completed } = useOnboarding();
  const location = useLocation();
  const navigate = useNavigate()
  useEffect(() => {
    if (!completed && location.pathname !== 'onboarding') {
      navigate('/onboarding', { replace: true });
    }
  }, [completed, navigate, location])




  return (
    <div className="h-dvh w-dvw py-4 px-6 bg-black text-white overflow-x-hidden">
      <main>
        <Outlet />
      </main>
    </div>
  );
}
