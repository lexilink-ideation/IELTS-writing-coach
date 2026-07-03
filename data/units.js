/* ==========================================================================
   IELTS Writing Coach — central unit list
   --------------------------------------------------------------------------
   This file is the single source of truth for every unit on the site.
   index.html reads this array to build the CEFR level tabs and unit cards
   automatically. To add a new unit:

     1. Add a new object to IELTS_UNITS below.
     2. Create the matching page in /units/.
     3. Save. index.html will pick it up automatically — no other edits
        needed.

   Do not delete CEFR_LEVELS — it defines the tab order even for levels
   that have zero units yet (they'll show a "coming soon" state).
   ========================================================================== */

const IELTS_UNITS = [
  // ---------------------------- A1 ----------------------------
  {
    id: "a1-unit1-task2-opinion",
    level: "A1",
    unitNumber: 1,
    title: "Writing One Opinion Sentence",
    taskType: "Task 2",
    skill: "Opinion Writing",
    description: "Write one simple opinion sentence using I think / I believe / In my opinion.",
    href: "units/a1-unit1-task2-opinion.html"
  },
  {
    id: "a1-unit2-task1-number",
    level: "A1",
    unitNumber: 2,
    title: "Describing One Number",
    taskType: "Task 1",
    skill: "Data Description",
    description: "Describe one number from data using a simple, accurate sentence.",
    href: "units/a1-unit2-task1-number.html"
  },
  {
    id: "a1-unit3-task1-compare",
    level: "A1",
    unitNumber: 3,
    title: "Comparing Two Numbers",
    taskType: "Task 1",
    skill: "Comparison",
    description: "Compare two numbers using language like \"increased from...to...\".",
    href: "units/a1-unit3-task1-compare.html"
  },
  {
    id: "a1-unit4-task1-trend",
    level: "A1",
    unitNumber: 4,
    title: "Describing a Simple Trend",
    taskType: "Task 1",
    skill: "Trend Description",
    description: "Describe a simple trend using \"went up\", \"went down\", or \"stayed the same\".",
    href: "units/a1-unit4-task1-trend.html"
  },
  {
    id: "a1-unit5-task2-reason",
    level: "A1",
    unitNumber: 5,
    title: "Opinion with One Reason",
    taskType: "Task 2",
    skill: "Reason Expansion",
    description: "Expand a basic opinion sentence into opinion + reason using \"because\".",
    href: "units/a1-unit5-task2-reason.html"
  },

  // ---------------------------- A2 ----------------------------
  {
    id: "a2-unit1-task2-opinion-reason",
    level: "A2",
    unitNumber: 1,
    title: "Opinion + Reason",
    taskType: "Task 2",
    skill: "Paragraph Building",
    description: "Build a two-sentence opinion paragraph with a supporting reason.",
    href: "units/a2-unit1-task2-opinion-reason.html"
  },

  // ---------------------------- B1 ----------------------------
  {
    id: "b1-unit1-task2-opinion-paragraph",
    level: "B1",
    unitNumber: 1,
    title: "Full Opinion Paragraph",
    taskType: "Task 2",
    skill: "Opinion + Two Reasons + Example",
    description: "Build a 4-5 sentence paragraph: opinion, two sequenced reasons, and one example.",
    href: "units/b1-unit1-task2-opinion-paragraph.html"
  },

  // ---------------------------- B2 ----------------------------
  {
    id: "b2-unit1-task2-advantages-disadvantages",
    level: "B2",
    unitNumber: 1,
    title: "Advantages and Disadvantages",
    taskType: "Task 2",
    skill: "Balanced Argument",
    description: "Write one short paragraph per side of an issue, plus a brief closing opinion.",
    href: "units/b2-unit1-task2-advantages-disadvantages.html"
  },

  // ---------------------------- C1 ----------------------------
  {
    id: "c1-unit1-task2-counter-point",
    level: "C1",
    unitNumber: 1,
    title: "Argument with Counter-Point",
    taskType: "Task 2",
    skill: "Nuanced Argumentation",
    description: "Acknowledge an opposing view before rebutting it and stating the consequence.",
    href: "units/c1-unit1-task2-counter-point.html"
  },

  // ---------------------------- C2 ----------------------------
  {
    id: "c2-unit1-task2-hedging-nuance",
    level: "C2",
    unitNumber: 1,
    title: "Sophisticated Argumentative Essay",
    taskType: "Task 2",
    skill: "Hedging and Nuance",
    description: "Use hedging language and a balanced, qualified conclusion in a nuanced argumentative response.",
    href: "units/c2-unit1-task2-hedging-nuance.html"
  }
];

// Fixed tab order — every level shows up even with 0 units.
const CEFR_LEVELS = ["A1", "A2", "B1", "B2", "C1", "C2"];
