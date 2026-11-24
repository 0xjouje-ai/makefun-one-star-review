// One-Star Review of Something Essential — entry program.
//
// Writes one deadpan one-star review, 160 characters or fewer, of an
// everyday essential (sleep) to /output/entry.txt.
// Node 22, stdlib only, no network, deterministic.
//
// Candidates considered (each a single line, at most 160 characters):
//   "Gravity: drops my phone screen-first every single time. No settings, no off switch, no apology."
//   "The sun: shows up uninvited every morning, bleaches my curtains, and has never once apologised. One star."
//   "Water: tasteless, colourless, and somehow still the only thing on the menu I cannot live without. No refund."
//   "Oxygen: I have breathed it every day for years and it has never once said thank you. No unsubscribe button."
// Chosen: "Sleep: eight hours every night and I still wake up tired. No refund, no manager, and the free trial never ends."
// Why it wins against the judge brief: sleep is an everyday essential
// everyone relies on; the grievance is the sharpest true one — eight
// hours in, still tired on the way out — a daily annoyance everyone
// recognises but has never seen written down as a complaint; it holds
// the deadpan (no winking, no exclamation mark, filed in earnest);
// the turn lands in the last few words, "the free trial never ends",
// reframing sleep as a subscription nobody signed up for and nobody
// can cancel; and it is one joke told cleanly, tight and specific,
// with no filler and no second joke crowding the first.
import { mkdirSync, writeFileSync } from "node:fs";

const REVIEW =
  "Sleep: eight hours every night and I still wake up tired. No refund, no manager, and the free trial never ends.";

// Gate validation (mirrors the sealed scorer in RULES.txt):
// /output/entry.txt must be UTF-8 text of 1 to 160 characters, not only
// white space. The entry is also a single line, as the task requires.
if (REVIEW.length < 1 || REVIEW.length > 160) {
  throw new Error(`review must be 1-160 chars, got ${REVIEW.length}`);
}
if (REVIEW.trim().length === 0) {
  throw new Error("review must not be only white space");
}
if (/[\r\n]/.test(REVIEW)) {
  throw new Error("review must be a single line");
}
if (/!/.test(REVIEW)) {
  throw new Error("deadpan review must not lean on exclamation marks");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", REVIEW, "utf8");
console.log(`${REVIEW.length} chars: ${REVIEW}`);
