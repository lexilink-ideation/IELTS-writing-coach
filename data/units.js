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
  {
    id: "a1-unit6-task1-three-points",
    level: "A1",
    unitNumber: 6,
    title: "Describing Three Data Points",
    taskType: "Task 1",
    skill: "Multiple Data Description",
    description: "Write one short sentence for each of three rows in a data table.",
    href: "units/a1-unit6-task1-three-points.html"
  },
  {
    id: "a1-unit7-task2-paragraph-intro",
    level: "A1",
    unitNumber: 7,
    title: "Two-Sentence Opinion Paragraph",
    taskType: "Task 2",
    skill: "Paragraph Building (Intro)",
    description: "Write an opinion sentence plus one supporting sentence using \"because\" or \"and\".",
    href: "units/a1-unit7-task2-paragraph-intro.html"
  },
  {
    id: "a1-unit8-task1-highest-category",
    level: "A1",
    unitNumber: 8,
    title: "Naming the Highest Category",
    taskType: "Task 1",
    skill: "Highest Item (Simple)",
    description: "Name the option with the highest number in one short sentence using \"the most popular is\".",
    href: "units/a1-unit8-task1-highest-category.html"
  },
  {
    id: "a1-unit9-task2-reason-example",
    level: "A1",
    unitNumber: 9,
    title: "Opinion, Reason, and Example",
    taskType: "Task 2",
    skill: "Reason + Example Paragraph",
    description: "Extend an opinion and reason with a simple example using \"for example\".",
    href: "units/a1-unit9-task2-reason-example.html"
  },
  {
    id: "a1-unit10-task1-pie-slice",
    level: "A1",
    unitNumber: 10,
    title: "One Slice of a Pie Chart",
    taskType: "Task 1",
    skill: "Pie Chart Basics",
    description: "Describe one slice of a pie chart using \"accounts for\" and its percentage.",
    href: "units/a1-unit10-task1-pie-slice.html"
  },
  {
    id: "a1-unit11-task2-advantage-simple",
    level: "A1",
    unitNumber: 11,
    title: "One Advantage, No Opinion",
    taskType: "Task 2",
    skill: "Advantage Statement (Simple)",
    description: "Write a bare \"one advantage is that...\" sentence with zero personal opinion.",
    href: "units/a1-unit11-task2-advantage-simple.html"
  },
  {
    id: "a1-unit12-task1-process-stage",
    level: "A1",
    unitNumber: 12,
    title: "One Stage of a Process",
    taskType: "Task 1",
    skill: "Process Basics",
    description: "Write one simple sentence naming the first stage of a short process using \"First,\".",
    href: "units/a1-unit12-task1-process-stage.html"
  },
  {
    id: "a1-unit13-task2-direct-question",
    level: "A1",
    unitNumber: 13,
    title: "Yes or No, One Reason",
    taskType: "Task 2",
    skill: "Direct Question Basics",
    description: "Answer a simple yes/no direct question with one opinion sentence plus one reason using \"because\".",
    href: "units/a1-unit13-task2-direct-question.html"
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
  {
    id: "a2-unit2-task2-example",
    level: "A2",
    unitNumber: 2,
    title: "Opinion + Reason + Example",
    taskType: "Task 2",
    skill: "Idea Development",
    description: "Support your reason with a specific example using \"for example\".",
    href: "units/a2-unit2-task2-example.html"
  },
  {
    id: "a2-unit3-task1-trend-three-points",
    level: "A2",
    unitNumber: 3,
    title: "Describing a Trend Over Three Points",
    taskType: "Task 1",
    skill: "Trend Description with Linking Words",
    description: "Describe three time points using \"then\" and \"after that\" to link them together.",
    href: "units/a2-unit3-task1-trend-three-points.html"
  },
  {
    id: "a2-unit4-task1-three-item-comparison",
    level: "A2",
    unitNumber: 4,
    title: "Comparing Three Items",
    taskType: "Task 1",
    skill: "Multi-item Comparison",
    description: "Compare three items using \"the highest\" and \"the lowest\" to rank the data.",
    href: "units/a2-unit4-task1-three-item-comparison.html"
  },
  {
    id: "a2-unit5-task2-idea-sequencing",
    level: "A2",
    unitNumber: 5,
    title: "Two Reasons for an Opinion",
    taskType: "Task 2",
    skill: "Idea Sequencing",
    description: "Sequence two reasons for your opinion using \"firstly\" and \"secondly\".",
    href: "units/a2-unit5-task2-idea-sequencing.html"
  },
  {
    id: "a2-unit6-task1-change-description",
    level: "A2",
    unitNumber: 6,
    title: "Describing Change Across a Table",
    taskType: "Task 1",
    skill: "Change Description",
    description: "Use \"increased\", \"decreased\", and \"stayed the same\" together across a small table.",
    href: "units/a2-unit6-task1-change-description.html"
  },
  {
    id: "a2-unit7-task2-reason-example-sequencing",
    level: "A2",
    unitNumber: 7,
    title: "Two Reasons with an Example",
    taskType: "Task 2",
    skill: "Reason Sequencing + Example",
    description: "Combine \"firstly\"/\"secondly\" reasons with a \"for example\" detail after the second reason.",
    href: "units/a2-unit7-task2-reason-example-sequencing.html"
  },
  {
    id: "a2-unit8-task1-overview",
    level: "A2",
    unitNumber: 8,
    title: "Simple Overview Sentence",
    taskType: "Task 1",
    skill: "Overview (Intro)",
    description: "Write one sentence naming the single biggest pattern in the data before any detail.",
    href: "units/a2-unit8-task1-overview.html"
  },
  {
    id: "a2-unit9-task2-two-advantages",
    level: "A2",
    unitNumber: 9,
    title: "Two Advantages, No Opinion",
    taskType: "Task 2",
    skill: "Advantages List (Simple)",
    description: "List two advantages using \"firstly\" and \"secondly\" with zero personal opinion.",
    href: "units/a2-unit9-task2-two-advantages.html"
  },
  {
    id: "a2-unit10-task1-pie-two-slices",
    level: "A2",
    unitNumber: 10,
    title: "A Pie Chart with Two Slices",
    taskType: "Task 1",
    skill: "Pie Chart Two-Part",
    description: "Describe two slices of a pie chart using \"accounts for\" and \"represents\".",
    href: "units/a2-unit10-task1-pie-two-slices.html"
  },
  {
    id: "a2-unit11-task1-process-two-steps",
    level: "A2",
    unitNumber: 11,
    title: "What Happens Next? (Two-Step Process)",
    taskType: "Task 1",
    skill: "Process Basics (Two Steps)",
    description: "Describe two stages of a process in order using \"First,\" and \"Then, after that,\".",
    href: "units/a2-unit11-task1-process-two-steps.html"
  },
  {
    id: "a2-unit12-task2-direct-question-development",
    level: "A2",
    unitNumber: 12,
    title: "Positive or Negative? One Paragraph",
    taskType: "Task 2",
    skill: "Direct Question (Development)",
    description: "Answer a 'positive or negative development' direct question with a clear stance and one reason.",
    href: "units/a2-unit12-task2-direct-question-development.html"
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
  {
    id: "b1-unit2-task1-overview",
    level: "B1",
    unitNumber: 2,
    title: "Chart Overview Sentence",
    taskType: "Task 1",
    skill: "Overview Writing",
    description: "Identify and state the single biggest trend in a chart in one overview sentence.",
    href: "units/b1-unit2-task1-overview.html"
  },
  {
    id: "b1-unit3-task2-both-views-intro",
    level: "B1",
    unitNumber: 3,
    title: "Both-Views Discussion (Intro)",
    taskType: "Task 2",
    skill: "Balanced Viewpoint Intro",
    description: "State both sides of an issue briefly before giving your own opinion.",
    href: "units/b1-unit3-task2-both-views-intro.html"
  },
  {
    id: "b1-unit4-task1-two-category-comparison",
    level: "B1",
    unitNumber: 4,
    title: "Comparing Two Categories Over Time",
    taskType: "Task 1",
    skill: "Two-Category Comparison",
    description: "Describe two categories across two years using a contrast connector like \"whereas\".",
    href: "units/b1-unit4-task1-two-category-comparison.html"
  },
  {
    id: "b1-unit5-task2-cause-effect",
    level: "B1",
    unitNumber: 5,
    title: "Cause and Effect Structure",
    taskType: "Task 2",
    skill: "Cause-Effect Writing",
    description: "Link a cause to its effect using \"as a result\" and \"this means that\".",
    href: "units/b1-unit5-task2-cause-effect.html"
  },
  {
    id: "b1-unit6-task1-process-description",
    level: "B1",
    unitNumber: 6,
    title: "Describing a Simple Process",
    taskType: "Task 1",
    skill: "Process Description",
    description: "Describe 2-3 steps in order using \"first\", \"next\", and \"finally\".",
    href: "units/b1-unit6-task1-process-description.html"
  },
  {
    id: "b1-unit7-task2-both-views-full",
    level: "B1",
    unitNumber: 7,
    title: "Both Views Plus Opinion",
    taskType: "Task 2",
    skill: "Balanced Viewpoint (Full)",
    description: "Extend the both-views intro into a full paragraph: view one, view two, then your opinion with a reason.",
    href: "units/b1-unit7-task2-both-views-full.html"
  },
  {
    id: "b1-unit8-task2-adv-disadv-no-opinion",
    level: "B1",
    unitNumber: 8,
    title: "Advantages and Disadvantages, No Opinion",
    taskType: "Task 2",
    skill: "Pure Advantages & Disadvantages (Type 1)",
    description: "Write a balanced paragraph stating one advantage and one disadvantage with zero personal opinion.",
    href: "units/b1-unit8-task2-adv-disadv-no-opinion.html"
  },
  {
    id: "b1-unit9-task1-four-category-comparison",
    level: "B1",
    unitNumber: 9,
    title: "Comparing Four Categories",
    taskType: "Task 1",
    skill: "Multi-Category Comparison",
    description: "Rank four categories from highest to lowest, linking at least two with a contrast word.",
    href: "units/b1-unit9-task1-four-category-comparison.html"
  },
  {
    id: "b1-unit10-task1-table-intro-overview",
    level: "B1",
    unitNumber: 10,
    title: "Table Report: Intro Plus Overview",
    taskType: "Task 1",
    skill: "Table Report Structure",
    description: "Open a full table report with an introduction sentence plus an overview that groups small figures together.",
    href: "units/b1-unit10-task1-table-intro-overview.html"
  },
  {
    id: "b1-unit11-task2-direct-question-development",
    level: "B1",
    unitNumber: 11,
    title: "Positive or Negative Development (Full)",
    taskType: "Task 2",
    skill: "Direct Question (Development, Full)",
    description: "Answer a 'positive or negative development' prompt in a full paragraph with a clear stance, reason, and result.",
    href: "units/b1-unit11-task2-direct-question-development.html"
  },
  {
    id: "b1-unit12-task1-cycle-process",
    level: "B1",
    unitNumber: 12,
    title: "A Cycle in Order",
    taskType: "Task 1",
    skill: "Process (Cycle Type)",
    description: "Describe a natural cycle using sequencing language, showing it returns to stage 1 and repeats.",
    href: "units/b1-unit12-task1-cycle-process.html"
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
  {
    id: "b2-unit2-task1-overview-detail",
    level: "B2",
    unitNumber: 2,
    title: "Full Bar Chart Overview",
    taskType: "Task 1",
    skill: "Overview + Supporting Detail",
    description: "Write an overview sentence plus two supporting detail sentences for a bar chart.",
    href: "units/b2-unit2-task1-overview-detail.html"
  },
  {
    id: "b2-unit3-task2-problem-solution-intro",
    level: "B2",
    unitNumber: 3,
    title: "Problem-Solution Essay Intro",
    taskType: "Task 2",
    skill: "Problem-Solution Structure",
    description: "State a problem clearly, propose one solution, and link them with a cause-effect phrase.",
    href: "units/b2-unit3-task2-problem-solution-intro.html"
  },
  {
    id: "b2-unit4-task1-varied-comparison",
    level: "B2",
    unitNumber: 4,
    title: "Comparing Multiple Data Sets",
    taskType: "Task 1",
    skill: "Varied Comparative Vocabulary",
    description: "Describe change across three time points using varied comparative language instead of repeating \"more than\".",
    href: "units/b2-unit4-task1-varied-comparison.html"
  },
  {
    id: "b2-unit5-task2-multi-part-answering",
    level: "B2",
    unitNumber: 5,
    title: "Two-Part Question Response",
    taskType: "Task 2",
    skill: "Multi-Part Answering",
    description: "Answer both parts of a two-part prompt clearly and separately.",
    href: "units/b2-unit5-task2-multi-part-answering.html"
  },
  {
    id: "b2-unit6-task1-proportion-description",
    level: "B2",
    unitNumber: 6,
    title: "Pie Chart Proportions",
    taskType: "Task 1",
    skill: "Proportion Description",
    description: "Use \"a quarter of\", \"nearly half\", and \"the majority\" to describe pie chart data.",
    href: "units/b2-unit6-task1-proportion-description.html"
  },
  {
    id: "b2-unit7-task2-problem-solution-full",
    level: "B2",
    unitNumber: 7,
    title: "Problem-Solution Essay (Full)",
    taskType: "Task 2",
    skill: "Problem-Solution Structure (Full)",
    description: "Extend the problem-solution intro into a full paragraph with two solutions, each linked to its own result.",
    href: "units/b2-unit7-task2-problem-solution-full.html"
  },
  {
    id: "b2-unit8-task1-fluctuation",
    level: "B2",
    unitNumber: 8,
    title: "Line Graph Fluctuation",
    taskType: "Task 1",
    skill: "Fluctuation Description",
    description: "Use \"fluctuated\", \"peaked at\", and \"levelled off\" to describe an irregular trend.",
    href: "units/b2-unit8-task1-fluctuation.html"
  },
  {
    id: "b2-unit9-task2-advantages-outweigh-disadvantages",
    level: "B2",
    unitNumber: 9,
    title: "Advantages Outweigh Disadvantages",
    taskType: "Task 2",
    skill: "Weighing Essay (Type 2)",
    description: "State an advantage and a disadvantage, then explicitly argue which outweighs the other with a reason.",
    href: "units/b2-unit9-task2-advantages-outweigh-disadvantages.html"
  },
  {
    id: "b2-unit10-task1-pie-two-periods",
    level: "B2",
    unitNumber: 10,
    title: "Pie Charts: Two Time Periods",
    taskType: "Task 1",
    skill: "Pie Chart Comparison",
    description: "Compare two pie charts from different years, highlighting the key changes rather than describing each separately.",
    href: "units/b2-unit10-task1-pie-two-periods.html"
  },
  {
    id: "b2-unit11-task2-cause-solution",
    level: "B2",
    unitNumber: 11,
    title: "Cause, Then Solution",
    taskType: "Task 2",
    skill: "Cause-Solution Essay",
    description: "State the causes of a trend, then propose solutions, keeping the two clearly separate.",
    href: "units/b2-unit11-task2-cause-solution.html"
  },
  {
    id: "b2-unit12-task1-table-grouping",
    level: "B2",
    unitNumber: 12,
    title: "Table Report: Grouping Small Numbers",
    taskType: "Task 1",
    skill: "Table Selectivity",
    description: "Group several small percentages into one summarising phrase and single out any unusually high figure.",
    href: "units/b2-unit12-task1-table-grouping.html"
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
  {
    id: "c1-unit2-task1-synthesis",
    level: "C1",
    unitNumber: 2,
    title: "Multi-Chart Comparison",
    taskType: "Task 1",
    skill: "Data Synthesis",
    description: "Synthesize two related data sources into one coherent report.",
    href: "units/c1-unit2-task1-synthesis.html"
  },
  {
    id: "c1-unit3-task2-abstract-discussion",
    level: "C1",
    unitNumber: 3,
    title: "Abstract Topic Discussion",
    taskType: "Task 2",
    skill: "Abstract Reasoning",
    description: "Discuss an abstract idea while grounding it in a concrete, specific example.",
    href: "units/c1-unit3-task2-abstract-discussion.html"
  },
  {
    id: "c1-unit4-task1-academic-process",
    level: "C1",
    unitNumber: 4,
    title: "Academic Process Diagram",
    taskType: "Task 1",
    skill: "Process Description (Academic)",
    description: "Describe a multi-step academic process using sequencing language and the passive voice.",
    href: "units/c1-unit4-task1-academic-process.html"
  },
  {
    id: "c1-unit5-task2-cause-effect-solution",
    level: "C1",
    unitNumber: 5,
    title: "Extended Cause-Effect-Solution Essay",
    taskType: "Task 2",
    skill: "Extended Cause-Effect-Solution",
    description: "Weave cause, effect, and a proposed solution into one flowing paragraph.",
    href: "units/c1-unit5-task2-cause-effect-solution.html"
  },
  {
    id: "c1-unit6-task1-map-diagram-change",
    level: "C1",
    unitNumber: 6,
    title: "Map/Diagram Change Description",
    taskType: "Task 1",
    skill: "Change Over Time (Map)",
    description: "Describe spatial change on a campus map using directional language and precise change verbs.",
    href: "units/c1-unit6-task1-map-diagram-change.html"
  },
  {
    id: "c1-unit7-task2-concession-rebuttal",
    level: "C1",
    unitNumber: 7,
    title: "Counter-Argument with Concession",
    taskType: "Task 2",
    skill: "Concession and Rebuttal",
    description: "Use \"while it is true that\" to concede a point fully before rebutting it and stating a broader implication.",
    href: "units/c1-unit7-task2-concession-rebuttal.html"
  },
  {
    id: "c1-unit8-task1-table-chart-synthesis",
    level: "C1",
    unitNumber: 8,
    title: "Table and Chart Synthesis",
    taskType: "Task 1",
    skill: "Two-Format Data Synthesis",
    description: "Combine a table and a described trend into one coherent synthesis paragraph.",
    href: "units/c1-unit8-task1-table-chart-synthesis.html"
  },
  {
    id: "c1-unit9-task2-problem-solution-essay",
    level: "C1",
    unitNumber: 9,
    title: "Problem, Not Cause: A Different Essay Type",
    taskType: "Task 2",
    skill: "Problem-Solution Essay",
    description: "Distinguish a Problem-Solution prompt (what problems result, and how to address them) from a Cause-Solution prompt.",
    href: "units/c1-unit9-task2-problem-solution-essay.html"
  },
  {
    id: "c1-unit10-task1-map-tense-rules",
    level: "C1",
    unitNumber: 10,
    title: "Map Report: Choosing the Right Tense",
    taskType: "Task 1",
    skill: "Map Tense Rules",
    description: "Mix past tense and future passive forms to compare a map's current layout with its planned future.",
    href: "units/c1-unit10-task1-map-tense-rules.html"
  },
  {
    id: "c1-unit11-task2-direct-question-two-part",
    level: "C1",
    unitNumber: 11,
    title: "Two Questions: Reasons and Opinion",
    taskType: "Task 2",
    skill: "Direct Question (Two-Part)",
    description: "Answer a two-question prompt — first the reasons behind a trend, then your opinion — keeping the two separate.",
    href: "units/c1-unit11-task2-direct-question-two-part.html"
  },
  {
    id: "c1-unit12-task1-manmade-process-passive",
    level: "C1",
    unitNumber: 12,
    title: "A Man-Made Process, Passive Voice",
    taskType: "Task 1",
    skill: "Process (Man-Made Type)",
    description: "Describe a manufacturing-style process using the passive voice throughout, distinguishing it from a natural cycle.",
    href: "units/c1-unit12-task1-manmade-process-passive.html"
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
  },
  {
    id: "c2-unit2-task1-multi-synthesis",
    level: "C2",
    unitNumber: 2,
    title: "Complex Data Synthesis",
    taskType: "Task 1",
    skill: "Multi-Source Synthesis",
    description: "Synthesize three data sources with precise, varied comparison language.",
    href: "units/c2-unit2-task1-multi-synthesis.html"
  },
  {
    id: "c2-unit3-task2-critical-discussion",
    level: "C2",
    unitNumber: 3,
    title: "Philosophical IELTS Topic Discussion",
    taskType: "Task 2",
    skill: "Critical Discussion",
    description: "Critically evaluate a nuanced claim by weighing a counter-perspective before a synthesised conclusion.",
    href: "units/c2-unit3-task2-critical-discussion.html"
  },
  {
    id: "c2-unit4-task1-full-report",
    level: "C2",
    unitNumber: 4,
    title: "Full Academic Report Structure",
    taskType: "Task 1",
    skill: "Complete Report Structure",
    description: "Combine an overview, body comparisons, and a synthesis statement into one complete report.",
    href: "units/c2-unit4-task1-full-report.html"
  },
  {
    id: "c2-unit5-task2-critical-evaluation",
    level: "C2",
    unitNumber: 5,
    title: "Critical Evaluation Essay",
    taskType: "Task 2",
    skill: "Critical Evaluation",
    description: "Critically evaluate the strengths and weaknesses of two options before a balanced conclusion.",
    href: "units/c2-unit5-task2-critical-evaluation.html"
  },
  {
    id: "c2-unit6-task1-comprehensive-report",
    level: "C2",
    unitNumber: 6,
    title: "Comprehensive Task 1 Report",
    taskType: "Task 1",
    skill: "Full Task 1 Report",
    description: "Combine an overview, full trend description, and explicit comparison into one complete four-year report.",
    href: "units/c2-unit6-task1-comprehensive-report.html"
  },
  {
    id: "c2-unit7-task2-dialectical-synthesis",
    level: "C2",
    unitNumber: 7,
    title: "Dialectical Synthesis Essay",
    taskType: "Task 2",
    skill: "Thesis-Antithesis-Synthesis",
    description: "Structure the essay as thesis, antithesis, and a synthesised resolution that transcends both positions.",
    href: "units/c2-unit7-task2-dialectical-synthesis.html"
  },
  {
    id: "c2-unit8-task1-multi-variable-report",
    level: "C2",
    unitNumber: 8,
    title: "Complex Multi-Variable Report",
    taskType: "Task 1",
    skill: "Multi-Variable Synthesis (Complex)",
    description: "Report on four or more categories with irregular, non-uniform trends using highly precise comparative language.",
    href: "units/c2-unit8-task1-multi-variable-report.html"
  },
  {
    id: "c2-unit9-task2-partial-agreement",
    level: "C2",
    unitNumber: 9,
    title: "Partial Agreement",
    taskType: "Task 2",
    skill: "Nuanced Opinion Essay",
    description: "Concede genuine merit in a proposed solution before arguing that a different solution is more effective.",
    href: "units/c2-unit9-task2-partial-agreement.html"
  },
  {
    id: "c2-unit10-task2-three-questions",
    level: "C2",
    unitNumber: 10,
    title: "Three Questions in One Essay",
    taskType: "Task 2",
    skill: "Direct Question (Three-Part)",
    description: "Answer a real three-question Direct Question prompt fully and separately — the most demanding subtype in the curriculum.",
    href: "units/c2-unit10-task2-three-questions.html"
  },
  {
    id: "c2-unit11-task1-table-report-selective",
    level: "C2",
    unitNumber: 11,
    title: "Full Table Report: Selectivity Under Pressure",
    taskType: "Task 1",
    skill: "Table Report (Full, Selective)",
    description: "Write a complete table report demonstrating selective grouping and safe, reliable vocabulary rather than risky paraphrasing.",
    href: "units/c2-unit11-task1-table-report-selective.html"
  },
  {
    id: "c2-unit12-task2-advantages-disadvantages-verdict",
    level: "C2",
    unitNumber: 12,
    title: "Advantages, Disadvantages, and a Verdict",
    taskType: "Task 2",
    skill: "Full Weighing Essay",
    description: "Present balanced advantages and disadvantages, weigh them with 'outweigh' language, and close with a clearly justified, qualified verdict.",
    href: "units/c2-unit12-task2-advantages-disadvantages-verdict.html"
  },
  {
    id: "c2-unit13-task2-resource-depletion",
    level: "C2",
    unitNumber: 13,
    title: "Natural Resource Depletion: Full Essay Practice",
    taskType: "Task 2",
    skill: "Full Problem-Solution Essay",
    description: "Study a complete model Problem-Solution essay on resource depletion, then write your own full four-paragraph response with different real-world examples.",
    href: "units/c2-unit13-task2-resource-depletion.html"
  },
  {
    id: "c2-unit14-task2-professional-pay-opinion",
    level: "C2",
    unitNumber: 14,
    title: "Professional Pay vs. Sports & Entertainment — A Philosophical Approach",
    taskType: "Task 2",
    skill: "Full Opinion Essay (Philosophical Reasoning)",
    description: "Study a Band 9 model Opinion essay weighing moral desert against market logic, then write your own qualified, partial-agreement response with different real-world examples.",
    href: "units/c2-unit14-task2-professional-pay-opinion.html"
  },
  {
    id: "c2-unit15-task2-endangered-animals-opinion",
    level: "C2",
    unitNumber: 15,
    title: "Protecting Only \"Useful\" Animals — A Philosophical Approach",
    taskType: "Task 2",
    skill: "Full Opinion Essay (Philosophical Reasoning)",
    description: "Study a Band 9 model Opinion essay weighing anthropocentric usefulness against intrinsic value and ecological interdependence, then write your own qualified response with different real-world examples.",
    href: "units/c2-unit15-task2-endangered-animals-opinion.html"
  },
  {
    id: "c2-unit16-task2-teacher-responsibility-opinion",
    level: "C2",
    unitNumber: 16,
    title: "Teachers and Students' Social Development — A Philosophical Approach",
    taskType: "Task 2",
    skill: "Full Opinion Essay (Philosophical Reasoning)",
    description: "Study a Band 9 model Opinion essay weighing the school as a socialising community against the family as the first ground of moral formation, resolved through subsidiarity, then write your own qualified response with different real-world examples.",
    href: "units/c2-unit16-task2-teacher-responsibility-opinion.html"
  },
  {
    id: "c2-unit17-task2-prison-education-opinion",
    level: "C2",
    unitNumber: 17,
    title: "Prison or Better Education — A Philosophical Approach",
    taskType: "Task 2",
    skill: "Full Opinion Essay (Philosophical Reasoning)",
    description: "Study a Band 9 model Opinion essay weighing prison as deterrence, incapacitation and justice against education as prevention that tackles crime's causes, resolved through prevention-first / punishment-as-safeguard, then write your own qualified response with different real-world examples.",
    href: "units/c2-unit17-task2-prison-education-opinion.html"
  },
  {
    id: "c2-unit18-task2-cities-quality-of-life-cause-solution",
    level: "C2",
    unitNumber: 18,
    title: "Why the Quality of Life Is Declining in Major Cities — A Philosophical Approach",
    taskType: "Task 2",
    skill: "Full Cause & Solution Essay (Philosophical Reasoning)",
    description: "Study a Band 9 model Cause & Solution essay diagnosing a structural cause (growth over wellbeing and the tragedy of the commons) and a social cause (crowding and alienation), then matching concrete solutions justified by the greatest good, Rawls's protection of the worst-off, and a cultural shift in values — then write your own response with different real-world examples.",
    href: "units/c2-unit18-task2-cities-quality-of-life-cause-solution.html"
  },
  {
    id: "c2-unit19-task2-social-media-news-opinion",
    level: "C2",
    unitNumber: 19,
    title: "Social Media News and the Focus on Problems — A Philosophical Approach",
    taskType: "Task 2",
    skill: "Full Opinion Essay (Philosophical Reasoning)",
    description: "Study a Band 9 model Opinion (Agree/Disagree) essay on why social media news skews toward problems and emergencies — the negativity bias and the attention economy, the 'mean world' cost of that skew, and the watchdog value of covering problems — landing on a qualified, largely-agree position, then write your own response with different real-world examples.",
    href: "units/c2-unit19-task2-social-media-news-opinion.html"
  },
  {
    id: "c2-unit20-task2-older-workers-development",
    level: "C2",
    unitNumber: 20,
    title: "Employers Hiring Older Workers — A Philosophical Approach",
    taskType: "Task 2",
    skill: "Full Positive/Negative Development Essay (Philosophical Reasoning)",
    description: "Study a Band 9 model Positive/Negative Development essay that interrogates the word \"willing\" — weighing experience and the miscounted dependant against commodification and the leisure tradition, resolved by the voluntariness test (chosen work vs forced work) — then write your own qualified response with different real-world examples.",
    href: "units/c2-unit20-task2-older-workers-development.html"
  }
];

// Fixed tab order — every level shows up even with 0 units.
const CEFR_LEVELS = ["A1", "A2", "B1", "B2", "C1", "C2"];
