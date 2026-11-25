import { mkdirSync, writeFileSync } from "node:fs";

const word = "buffering" as const;

mkdirSync("/output", { recursive: true, mode: 0o755 });
writeFileSync("/output/entry.txt", word, { encoding: "utf8" });
