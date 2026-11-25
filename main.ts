import { mkdirSync, writeFileSync } from "node:fs";

// One-line resignation letter, re-entry 2026-11-26. The previous line
// (raccoon family in the break room ceiling) slipped from 353/2321 in
// round 1 to 600/2838 in round 2, out of the top-500 heat. This line
// swaps the generic office for a specific job voice: an air traffic
// controller resigning in tower language, with the twist on the last
// three words. Picked pairwise from 14 fresh candidates in CANDIDATES.md
// (108 chars, inside the 1-140 gate, shorter than the slipped 122-char line).
const ENTRY =
  "As your air traffic controller, I resign: consider yourselves cleared for landing — permanently, without me.";

// Gate mirror: entry must be 1-140 chars of non-blank UTF-8 text.
if (ENTRY.length < 1 || ENTRY.length > 140 || ENTRY.trim().length === 0) {
  throw new Error(`entry out of gate: ${ENTRY.length} chars`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
