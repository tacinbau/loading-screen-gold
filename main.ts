// Loading Screen Gold: A Tip in 200 Characters
// Writes one loading-screen tip (at most 200 characters) to /output/entry.txt.
// The tip is aimed at stressed developers and the AI coding agents working
// alongside them, mid-build.

import { mkdirSync, writeFileSync } from "node:fs";

const TIP =
  "Tip: the agent rewrote your code in 9 seconds. You'll spend 40 minutes proving it wrong. That's not a bug \u2014 that's the job now.";

// The sealed gate accepts 1-200 characters, not only white space.
// Refuse to write an invalid entry rather than ship one silently.
if (TIP.length === 0 || TIP.length > 200 || TIP.trim().length === 0) {
  throw new Error(`tip is ${TIP.length} characters; the gate needs 1-200`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TIP, "utf8");
