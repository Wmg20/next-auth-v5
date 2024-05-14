import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import LoginButton from "@/components/auth/login-button";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

export default function Home() {
  return (
    <div className="flex flex-1 h-full flex-col items-center justify-center">
      <div className=" space-y-6 text-center">
        <div>
          <h1
            className={cn(
              "text-green-500 text-6xl font-semibold drop-shadow-md",
              font.className
            )}
          >
            Auth V5
          </h1>
          <p className="text-muted-foreground text-lg mt-2">
            Simple Authenticaton Service - Auth V5
          </p>
        </div>
        <div>
          <LoginButton>
            <Button variant={"secondary"} size={"lg"}>
              Sign In
            </Button>
          </LoginButton>
        </div>
      </div>
    </div>
  );
}
