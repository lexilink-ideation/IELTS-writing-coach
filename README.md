# IELTS Writing Coach

A static, GitHub Pages–ready site for step-by-step IELTS Writing practice, organized by CEFR level (A1–C2) and unit. Grading is rule-based JavaScript — no backend, no paid API.

## File structure

```
index.html                          dashboard: CEFR tabs + unit cards
css/style.css                       all styling
js/app.js                           dashboard renderer + feedback engine
data/units.js                       central list of every unit (index reads this)
units/a1-unit1-task2-opinion.html   Unit page
units/a1-unit2-task1-number.html    Unit page
units/a1-unit3-task1-compare.html   Unit page
```

## Deploying to GitHub Pages

1. Create a new GitHub repo (e.g. `ielts-writing-coach`).
2. Push everything in this folder to the repo root, keeping the structure above.
3. On GitHub: **Settings → Pages → Source → Deploy from branch**, pick `main` and `/ (root)`.
4. Your site goes live at `https://<username>.github.io/<repo-name>/`.

No build step, no dependencies — it's plain HTML/CSS/JS.

## Adding new units later

1. Open `data/units.js` and add a new object to `IELTS_UNITS`, e.g.:
   ```js
   {
     id: "a2-unit1-task2-opinion-reason",
     level: "A2",
     unitNumber: 1,
     title: "Opinion + Reason",
     taskType: "Task 2",
     skill: "Paragraph Building",
     description: "Build a two-sentence opinion paragraph with a reason.",
     href: "units/a2-unit1-task2-opinion-reason.html"
   }
   ```
2. Copy an existing file in `units/` as a starting template, rename it to match `href`, and edit the lesson content.
3. In that page's inline `<script>`, set a `unitConfig` object (id, minWords, keywordGroups, etc.) — this drives the automatic feedback.
4. Save. `index.html` reads `units.js` automatically, so the new unit appears under the correct CEFR tab with no other edits.

Keep every new topic IELTS-aligned (AI & homework, online classes, public transport, studying abroad, technology & aging, screen time, cities vs. countryside, environment, automation, etc.) — avoid generic beginner topics unrelated to IELTS themes.

## How the instant feedback works

`js/app.js` contains `IELTSFeedback.evaluateAnswer(text, config)`, a plain rule-based checker — it does not use AI. For each unit it checks, depending on what's configured:

- word count against a minimum
- capital letter at the start
- full stop at the end
- required keyword groups (topic words, numbers, target vocabulary)
- opinion phrases ("I think" / "I believe" / "In my opinion")
- comparison words ("more than" / "higher than" / "increased")
- the "increased from X to Y" sentence pattern
- linking words (bonus, doesn't affect the score)

Each check is pass/fail. The percentage of passed checks maps to a grade:

- 90%+ → Excellent
- 70–89% → Good
- 50–69% → Almost there
- below 50% → Needs more work

The feedback panel shows Task response, Grammar, Vocabulary, IELTS skill connection, and Next step, plus a full analysis with what went well, what to improve, and a suggested corrected version. Drafts and checklist state are saved in the browser's `localStorage`, so a student's work isn't lost on refresh.

Because there's no backend, this is intentionally simple pattern-matching feedback, not a full AI grader. If you later connect a real grading API, `evaluateAnswer` is the one function to replace or extend.
