"use client";

import { useEffect } from "react";

const DEFAULT_CHATBASE_ID = "z2c2HSfKnCTh5J4650V0I";

declare global {
  interface Window {
    chatbase?: ((...args: unknown[]) => unknown) & { q?: unknown[][] };
  }
}

export function ChatbaseWidget() {
  useEffect(() => {
    const scriptId = process.env.NEXT_PUBLIC_CHATBASE_ID || DEFAULT_CHATBASE_ID;

    if (!window.chatbase || window.chatbase("getState") !== "initialized") {
      window.chatbase = (...args: unknown[]) => {
        if (!window.chatbase?.q) {
          window.chatbase!.q = [];
        }
        window.chatbase!.q!.push(args);
      };
    }

    if (document.getElementById(scriptId)) {
      return;
    }

    const script = document.createElement("script");
    script.src = "https://www.chatbase.co/embed.min.js";
    script.id = scriptId;
    script.setAttribute("domain", "https://www.chatbase.co");
    document.body.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  return null;
}
