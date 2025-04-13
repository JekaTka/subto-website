"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import type { ButtonProps } from "@/components/ui/button";

export interface RainbowButtonProps extends ButtonProps {}

export const RainbowButton = React.forwardRef<HTMLButtonElement, RainbowButtonProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <Button
        ref={ref}
        className={cn(
          "relative group/btn overflow-hidden",
          "before:absolute before:inset-0 before:bg-[length:100%_100%] before:bg-gradient-to-r before:from-indigo-500 before:via-purple-500 before:to-pink-500",
          "after:absolute after:inset-[2px] after:bg-white after:rounded-md after:transition-all after:duration-300 after:ease-out",
          "hover:before:bg-[length:800%_800%] hover:shadow-[0_0_16px_4px_rgba(0,0,0,0.15)]",
          className
        )}
        {...props}
      >
        <span className="relative z-10 text-black">{children}</span>
      </Button>
    );
  }
);

RainbowButton.displayName = "RainbowButton";
