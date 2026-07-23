# Debugging & Investigation Board

## Project Information
* **Project Name:** Antenna Recommender System[cite: 3]
* **Report Date:** July 23, 2026
* **Status:** Resolved / Verified[cite: 3]

---

## 1. Investigation Statement

We investigated 5 major UI and functional issues in the Antenna Recommender application to improve user experience, dynamic content formatting, and language switching (Arabic/English)[cite: 3]:

* **Issue 1 (Dropdown Sync):** Changing the frequency back to "Any Frequency" kept invalid options active in the application dropdown[cite: 3].
* **Issue 2 (API Latency & Freezes):** Missing Gemini API key or slow internet caused an infinite loading spinner when running project analysis[cite: 3].
* **Issue 3 (Raw AI Text):** AI-generated installation guide appeared as unformatted text with raw markdown tags (`**`, `#`)[cite: 3].
* **Issue 4 (Zero Match Blank Screen):** Selecting conflicting filters resulted in a completely empty page without helpful feedback[cite: 3].
* **Issue 5 (RTL/LTR Layout Shift):** Switching languages updated text but failed to adjust page alignment, sidebars, and UI cards correctly[cite: 3].

---

## 2. Reproduction Records

### Case A: Unformatted AI Markdown (Issue 3)[cite: 3]
1. Click on **"Get AI Installation Guide"**[cite: 3].
2. Observe the returned text on the screen[cite: 3].
3. **Observed Result:** Text shows raw `#` and `**` symbols instead of formatted visual cards[cite: 3].

### Case B: Zero Search Match Blank Screen (Issue 4)[cite: 3]
1. Set **Frequency** filter to `HF`[cite: 3].
2. Set **Installation** filter to `Embedded`[cite: 3].
3. Click **"Find My Antenna Now"**[cite: 3].
4. **Observed Result:** Page is completely blank[cite: 3].

---

## 3. Narrowed Technical Target

* **UI & Formatting:** Focus on `parseMarkdownToHtml()` for rendering AI guides and CSS/HTML card sizes for better page flow[cite: 3].
* **State & Alignment:** Target `setLanguage()` to update root DOM attributes (`dir="rtl"` / `dir="ltr"`) and fix dropdown cleanup logic in `updateApplicationDropdown()`[cite: 3].
* **API Fallbacks:** Address uncaught HTTP errors in `callGemini()` by adding a local fallback mode[cite: 3].
* **Excluded:** No core backend server changes needed; all fixes are focused on front-end stability and API error handling[cite: 3].

---

## 4. Split Diagnosis (Defect vs Ambiguity)

* **Code Defects:** 
  * Missing DOM direction attributes during translation toggles[cite: 3].
  * Absence of a text parser before assigning raw AI responses to `innerHTML`[cite: 3].
  * Missing fallback UI when filter results return an empty array `[]`[cite: 3].
* **Handled Edge Cases:** 
  * Missing API keys or network disconnects causing infinite loading loops[cite: 3].

---

## 5. Bounded Fix Plan

* **Fix 1:** Add custom parser function `parseMarkdownToHtml()` to render AI guide responses into clean step-by-step UI cards[cite: 3].
* **Fix 2:** Update `setLanguage()` to set `dir="rtl"` or `dir="ltr"` on root HTML elements alongside dynamic image and card size updates[cite: 3].
* **Fix 3:** Update `handleFindAntennaClick()` to display a "No exact match found" card with general fallback recommendations[cite: 3].
* **Fix 4:** Add local heuristic mode in `callGemini()` to safely return antenna suggestions within 1.2s when API keys are missing[cite: 3].

---

## 6. Proof & Verification Record

| Test Case ID | Scenario | Expected Outcome | Status |
| :--- | :--- | :--- | :--- |
| **TC-QA-01** | Switch between Arabic & English repeatedly | Text and page direction (`dir`) flip seamlessly without layout breaks[cite: 3] | **PASS**[cite: 3] |
| **TC-QA-03** | Resize browser window below 768px | Mobile view and card grids resize properly[cite: 3] | **PASS**[cite: 3] |
| **TC-QA-04** | Click "Get AI Installation Guide" | AI guide displays as clean, formatted step cards[cite: 3] | **PASS**[cite: 3] |
| **TC-QA-05** | Submit conflicting filter search | Clear warning message and fallback antennas appear[cite: 3] | **PASS**[cite: 3] |
