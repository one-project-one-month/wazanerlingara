import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import installIcon from "@/assets/svg/install-icon.svg";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{
    outcome: "accepted" | "dismissed";
  }>;
}

export default function InstallButton() {
  const [promptEvent, setPromptEvent] =
    useState<BeforeInstallPromptEvent | null>(null);
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    const installed =
      window.matchMedia("(display-mode: standalone)").matches ||
      (window.navigator as any).standalone === true;

    setIsInstalled(installed);
  }, []);
  console.log("button is rendered");
  useEffect(() => {
    const handler = (e: BeforeInstallPromptEvent) => {
      console.log("INSTALL EVENT FIRED");

      e.preventDefault();

      setPromptEvent(e);
    };

    window.addEventListener("beforeinstallprompt", handler as EventListener);

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handler as EventListener,
      );
    };
  }, []);

  const handleInstall = async () => {
    if (!promptEvent) return;

    console.log("PROMPT OPENING");

    await promptEvent.prompt();

    const choice = await promptEvent.userChoice;

    console.log(choice.outcome);

    setPromptEvent(null);
  };
  if (isInstalled) return null;
  if (!promptEvent) {
    return (
      <div className="h-18 flex items-center justify-center text-gray-400 text-sm border border-white/10 rounded-xl px-4">
        Install option not available right now
      </div>
    );
  }

  return (
    <Button
      onClick={handleInstall}
      className="h-18 flex items-center justify-center text-2xl tracking-wide"
    >
      <span className="inline-flex items-center gap-2">
        <img src={installIcon} alt="install-icon" className="size-8" />
        <span>Install Game</span>
      </span>
    </Button>
  );
}
