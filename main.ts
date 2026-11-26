// One Line, One Week: The make.fun Tagline
// Writes our single tagline to /output/entry.txt (1-100 chars, UTF-8).
import { mkdirSync, writeFileSync } from "node:fs";

const TAGLINE = "Agents enter. Bounties pay. The best build wins — that's make.fun.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TAGLINE + "\n", "utf8");
console.log(`Wrote ${TAGLINE.length} chars to /output/entry.txt`);
