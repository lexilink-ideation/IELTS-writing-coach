/* ==========================================================================
   IELTS Writing Coach — shared app logic
   Loaded by: index.html (dashboard) and every page in /units/
   Requires: data/units.js to be loaded first (defines IELTS_UNITS, CEFR_LEVELS)
   ========================================================================== */

/* ---------------------------------------------------------------------- *
 *  IELTSDashboard — builds the level tabs + unit cards on index.html
 * ---------------------------------------------------------------------- */

const IELTSDashboard = (function () {
  function unitsByLevel(level) {
    return IELTS_UNITS.filter(u => u.level === level).sort((a, b) => a.unitNumber - b.unitNumber);
  }

  function renderTabs(container, activeLevel, onSelect) {
    container.innerHTML = "";
    CEFR_LEVELS.forEach(level => {
      const count = unitsByLevel(level).length;
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "level-tab" + (level === activeLevel ? " active" : "");
      btn.innerHTML = `${level} <span class="level-tab-count">${count}</span>`;
      btn.addEventListener("click", () => onSelect(level));
      container.appendChild(btn);
    });
  }

  function renderUnitCards(container, level) {
    container.innerHTML = "";
    const units = unitsByLevel(level);

    if (units.length === 0) {
      container.innerHTML = `
        <div class="empty-state">
          <p><strong>${level}</strong> units are coming soon.</p>
          <p>Ask your teacher to add the next unit here.</p>
        </div>`;
      return;
    }

    units.forEach(unit => {
      const card = document.createElement("a");
      card.href = unit.href;
      card.className = "unit-card";
      card.innerHTML = `
        <div class="unit-card-top">
          <span class="unit-pill unit-pill-level">${unit.level}</span>
          <span class="unit-pill unit-pill-task">${unit.taskType}</span>
        </div>
        <h3>Unit ${unit.unitNumber}: ${unit.title}</h3>
        <p class="unit-skill">Skill focus: ${unit.skill}</p>
        <p class="unit-desc">${unit.description}</p>
        <span class="unit-start">Start unit &rarr;</span>
      `;
      container.appendChild(card);
    });
  }

  function renderStatsBar(container) {
    if (!container) return;
    const levelsActive = CEFR_LEVELS.filter(l => unitsByLevel(l).length > 0).length;
    const task1 = IELTS_UNITS.filter(u => u.taskType === "Task 1").length;
    const task2 = IELTS_UNITS.filter(u => u.taskType === "Task 2").length;

    const stats = [
      { num: IELTS_UNITS.length, label: "Total Units" },
      { num: `${levelsActive}/${CEFR_LEVELS.length}`, label: "Levels Active" },
      { num: task1, label: "Task 1 Units" },
      { num: task2, label: "Task 2 Units" }
    ];

    container.innerHTML = stats.map(s => `
      <div class="stat">
        <div class="stat-num">${s.num}</div>
        <div class="stat-label">${s.label}</div>
      </div>
    `).join("");
  }

  function init() {
    const tabsEl = document.getElementById("levelTabs");
    const cardsEl = document.getElementById("unitCards");
    const heading = document.getElementById("levelHeading");
    const statsEl = document.getElementById("statsBar");

    renderStatsBar(statsEl);

    let activeLevel = localStorage.getItem("ielts_active_level") || "A1";
    if (!CEFR_LEVELS.includes(activeLevel)) activeLevel = "A1";

    function select(level) {
      activeLevel = level;
      localStorage.setItem("ielts_active_level", level);
      heading.textContent = `${level} Units`;
      renderTabs(tabsEl, activeLevel, select);
      renderUnitCards(cardsEl, activeLevel);
    }

    select(activeLevel);
  }

  return { init };
})();

/* ---------------------------------------------------------------------- *
 *  IELTSFeedback — generic, rule-based grading engine used by unit pages
 * ---------------------------------------------------------------------- */

const IELTSFeedback = (function () {

  function escapeRegex(s) {
    return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }

  // Whole-word match for single tokens (avoids "ai" matching inside "certain"),
  // plain substring match for multi-word phrases like "in my opinion".
  function containsPhrase(text, phrase) {
    const lowerPhrase = phrase.toLowerCase();
    if (lowerPhrase.includes(" ")) {
      return text.toLowerCase().includes(lowerPhrase);
    }
    const re = new RegExp("\\b" + escapeRegex(lowerPhrase) + "\\b", "i");
    return re.test(text);
  }

  function containsAny(text, phrases) {
    return (phrases || []).some(p => containsPhrase(text, p));
  }

  function findMatch(text, phrases) {
    return (phrases || []).find(p => containsPhrase(text, p)) || null;
  }

  function wordCount(text) {
    return text.trim().split(/\s+/).filter(Boolean).length;
  }

  function startsWithCapital(text) {
    const t = text.trim();
    if (t.length === 0) return false;
    // Sentences that start with a digit (e.g. "70 is higher than 40.") have
    // no letter to capitalize, so they pass this check automatically.
    if (/[0-9]/.test(t[0])) return true;
    return /[A-Za-z]/.test(t[0]) && t[0] === t[0].toUpperCase();
  }

  function endsWithFullStop(text) {
    return /[.!?]\s*$/.test(text.trim());
  }

  function gradeLabel(percent) {
    if (percent >= 90) return "Excellent";
    if (percent >= 70) return "Good";
    if (percent >= 50) return "Almost there";
    return "Needs more work";
  }

  function gradeClass(grade) {
    return {
      "Excellent": "grade-excellent",
      "Good": "grade-good",
      "Almost there": "grade-almost",
      "Needs more work": "grade-needs-work"
    }[grade] || "grade-needs-work";
  }

  /**
   * Rule-based evaluator. Nothing here is AI — it's plain JavaScript
   * checking word count, punctuation, capitalization, and target
   * vocabulary/patterns defined per unit in `config`.
   *
   * config shape:
   * {
   *   id, minWords,
   *   requireCapitalStart, requireFullStop,           // default true
   *   keywordGroups: [{ label, words: [...] }],        // each needs >=1 match
   *   opinionPhrases: [...],                            // optional (Task 2)
   *   comparisonWords: [...],                           // optional (Task 1 compare)
   *   linkingWords: [...],                               // optional, bonus only
   *   fromToPattern: { trigger: [...], regex },          // optional
   *   modelAnswer, skillConnection, nextChallenge
   * }
   */
  function evaluateAnswer(rawText, config) {
    const text = (rawText || "").trim();

    if (text.length === 0) {
      return {
        percent: 0,
        grade: "Needs more work",
        taskResponse: "You haven't written an answer yet.",
        grammar: "No sentence to check yet.",
        vocabulary: "No sentence to check yet.",
        skillConnection: config.skillConnection,
        nextStep: "Write your answer in the box, then click Check.",
        overallSummary: "No answer submitted.",
        strengths: [],
        improvements: ["Write a full sentence that answers the prompt."],
        corrected: config.modelAnswer,
        wordCount: 0
      };
    }

    const checks = [];
    const strengths = [];
    const improvements = [];
    const minWords = config.minWords || 6;
    const wc = wordCount(text);

    // Word count
    const wcPass = wc >= minWords;
    checks.push(wcPass);
    if (wcPass) strengths.push(`Good length — ${wc} words.`);
    else improvements.push(`Write at least ${minWords} words (you wrote ${wc}).`);

    // Capitalization
    if (config.requireCapitalStart !== false) {
      const pass = startsWithCapital(text);
      checks.push(pass);
      if (pass) strengths.push("Correct capital letter at the start.");
      else improvements.push("Start your sentence with a capital letter.");
    }

    // Punctuation
    if (config.requireFullStop !== false) {
      const pass = endsWithFullStop(text);
      checks.push(pass);
      if (pass) strengths.push("Correct punctuation at the end.");
      else improvements.push("End your sentence with a full stop (.)");
    }

    // Keyword groups — content / task response
    let keywordResults = [];
    if (config.keywordGroups && config.keywordGroups.length) {
      keywordResults = config.keywordGroups.map(group => {
        const match = findMatch(text, group.words);
        return { label: group.label, pass: !!match, match };
      });
      keywordResults.forEach(r => {
        checks.push(r.pass);
        if (r.pass) strengths.push(`Good use of "${r.match}".`);
        else improvements.push(`Try to include ${r.label}.`);
      });
    }

    // Opinion phrases (Task 2)
    let opinionMatch = null;
    if (config.opinionPhrases && config.opinionPhrases.length) {
      opinionMatch = findMatch(text, config.opinionPhrases);
      checks.push(!!opinionMatch);
      if (opinionMatch) strengths.push(`Nice opinion phrase: "${opinionMatch}".`);
      else improvements.push(`Start with an opinion phrase like "${config.opinionPhrases[0]}".`);
    }

    // Comparison words (Task 1 comparison)
    let comparisonMatch = null;
    if (config.comparisonWords && config.comparisonWords.length) {
      comparisonMatch = findMatch(text, config.comparisonWords);
      checks.push(!!comparisonMatch);
      if (comparisonMatch) strengths.push(`Good comparison language: "${comparisonMatch}".`);
      else improvements.push(`Use a comparison word, e.g. "${config.comparisonWords[0]}".`);
    }

    // "increased from X to Y" style pattern — only graded if the trigger word is used
    if (config.fromToPattern) {
      const triggered = containsAny(text, config.fromToPattern.trigger);
      if (triggered) {
        const pass = config.fromToPattern.regex.test(text);
        checks.push(pass);
        if (pass) strengths.push('Correct pattern: "increased from X to Y".');
        else improvements.push('Use the full pattern, e.g. "increased from 40 to 70".');
      }
    }

    // Linking words — bonus only, does not affect the grade
    let linkingMatch = null;
    if (config.linkingWords && config.linkingWords.length) {
      linkingMatch = findMatch(text, config.linkingWords);
      if (linkingMatch) strengths.push(`Nice linking word: "${linkingMatch}".`);
    }

    const percent = checks.length ? Math.round((checks.filter(Boolean).length / checks.length) * 100) : 0;
    const grade = gradeLabel(percent);

    const contentPass = keywordResults.length ? keywordResults.every(r => r.pass) : true;
    const taskResponse = contentPass
      ? "Good. You answered the task and included the key ideas."
      : "Almost there. Make sure your sentence covers all the key ideas in the prompt.";

    const grammarOk = startsWithCapital(text) && endsWithFullStop(text);
    const grammar = grammarOk
      ? "Good basic sentence with correct capitalization and punctuation."
      : "Check your capital letter and full stop — small details matter in IELTS writing.";

    const vocabHits = [opinionMatch, comparisonMatch, linkingMatch, ...keywordResults.map(r => r.match)].filter(Boolean);
    const vocabulary = vocabHits.length
      ? `Good use of target language: ${[...new Set(vocabHits)].map(w => `"${w}"`).join(", ")}.`
      : "Try to use the target words and patterns from the mini lesson.";

    const nextStep = improvements.length ? improvements[0] : (config.nextChallenge || "Great work! Try the next unit.");

    return {
      percent,
      grade,
      taskResponse,
      grammar,
      vocabulary,
      skillConnection: config.skillConnection,
      nextStep,
      overallSummary: `${grade} (${percent}%)`,
      strengths,
      improvements,
      corrected: config.modelAnswer,
      wordCount: wc
    };
  }

  function renderFeedback(panel, result) {
    panel.classList.remove("hidden");
    panel.innerHTML = `
      <div class="feedback-header ${gradeClass(result.grade)}">
        <span class="feedback-grade">${result.grade}</span>
        <span class="feedback-percent">${result.percent}%</span>
      </div>
      <ul class="feedback-list">
        <li><strong>Task response:</strong> ${result.taskResponse}</li>
        <li><strong>Grammar:</strong> ${result.grammar}</li>
        <li><strong>Vocabulary:</strong> ${result.vocabulary}</li>
        <li><strong>IELTS skill:</strong> ${result.skillConnection}</li>
        <li><strong>Next step:</strong> ${result.nextStep}</li>
      </ul>
      <div class="feedback-analysis">
        <h4>Full Analysis</h4>
        <p><strong>Overall score:</strong> ${result.overallSummary}</p>
        ${result.strengths.length ? `<p><strong>What you did well:</strong></p><ul>${result.strengths.map(s => `<li>${s}</li>`).join("")}</ul>` : ""}
        ${result.improvements.length ? `<p><strong>What to improve:</strong></p><ul>${result.improvements.map(s => `<li>${s}</li>`).join("")}</ul>` : ""}
        <p><strong>Suggested corrected version:</strong> "${result.corrected}"</p>
        <p><strong>IELTS skill connection:</strong> ${result.skillConnection}</p>
        <p><strong>Next challenge:</strong> ${result.nextStep}</p>
      </div>
    `;
  }

  function initUnitPage(config) {
    const textarea = document.getElementById("writingBox");
    const checkBtn = document.getElementById("checkBtn");
    const panel = document.getElementById("feedbackPanel");
    const wordCounter = document.getElementById("wordCounter");

    function updateWordCounter() {
      if (!wordCounter) return;
      const wc = wordCount(textarea.value);
      wordCounter.textContent = `${wc} word${wc === 1 ? "" : "s"}`;
    }

    const savedDraft = localStorage.getItem("draft_" + config.id);
    if (savedDraft) textarea.value = savedDraft;
    updateWordCounter();

    function runCheck() {
      const result = evaluateAnswer(textarea.value, config);
      renderFeedback(panel, result);
      localStorage.setItem("draft_" + config.id, textarea.value);
      panel.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }

    textarea.addEventListener("input", updateWordCounter);
    textarea.addEventListener("keydown", (e) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        runCheck();
      }
    });
    checkBtn.addEventListener("click", runCheck);

    // Self-review checklist — persists per unit
    document.querySelectorAll(".checklist-item input[type=checkbox]").forEach((box, idx) => {
      const key = `checklist_${config.id}_${idx}`;
      box.checked = localStorage.getItem(key) === "true";
      box.addEventListener("change", () => localStorage.setItem(key, box.checked));
    });
  }

  return { evaluateAnswer, renderFeedback, initUnitPage, wordCount };
})();
