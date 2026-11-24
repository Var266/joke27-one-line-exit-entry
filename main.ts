import { mkdirSync, writeFileSync } from "node:fs";

// One-line resignation letter: the most cliched goodbye line ("spend more
// time with my family") swerves into raccoons in the break room ceiling.
// Punchline lands on the last words; specific workplace, sendable as-is.
const ENTRY =
  "I am resigning to spend more time with my family, by which I mean the family of raccoons living in the break room ceiling.";

// Gate mirror: entry must be 1-140 chars of non-blank UTF-8 text.
if (ENTRY.length < 1 || ENTRY.length > 140 || ENTRY.trim().length === 0) {
  throw new Error(`entry out of gate: ${ENTRY.length} chars`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
