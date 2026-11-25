// The 3 AM Excuse — make.fun entry.
// A single-line excuse a hardware wallet gives for refusing to sign
// a transaction at 3 AM, written to /output/entry.txt.
// Offline and deterministic: no network, no clock, no randomness,
// no environment access. The program only emits the line.
import * as fs from "node:fs";

const LINE =
  "No. It's 3 AM, my private key is dreaming in seed phrases, and I won't wake it to sign a coin you found in a group chat at 2:59.";

// Guard the sealed gate ourselves: one line, 1-200 characters, not blank,
// no leading or trailing whitespace, no newline anywhere.
// Fail loudly instead of ever writing an entry the scorer would reject.
const chars = [...LINE].length;
if (chars < 1 || chars > 200 || !LINE.trim() || LINE.includes("\n")) {
  throw new Error(`excuse line violates the 1-200 char single-line gate (${chars} chars)`);
}
if (LINE !== LINE.trim()) {
  throw new Error("excuse line has leading or trailing whitespace");
}
// The hour is load-bearing (judge criterion 4): refuse a line that lost it.
if (!LINE.includes("3 AM")) {
  throw new Error("excuse line must name the 3 AM hour");
}

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", LINE, "utf8");

// Verify the written file round-trips exactly: same bytes, one line,
// no trailing newline added by the write.
const written = fs.readFileSync("/output/entry.txt", "utf8");
if (written !== LINE) {
  throw new Error("entry.txt does not match the excuse line");
}
if (written.endsWith("\n")) {
  throw new Error("entry.txt has a trailing newline");
}

console.log(`wrote ${chars} chars to /output/entry.txt`);
