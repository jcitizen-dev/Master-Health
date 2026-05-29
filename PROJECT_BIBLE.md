# Health Master App — Project Bible
*Drop this into any new session to resume work with full context.*

---

## 1. What This Is

A personal health education and tracking app for **Jordan Chandler** (DOB 1980-01-11, male, vegan, age 46). Three sections served from a single Firebase hosting project:

| Section | Path | Purpose |
|---------|------|---------|
| **Blood Tab** | `/index.html` (root) | Browse all blood test results — marker cards, stat summaries, range bars, supplement connection drawers |
| **Stack Tracker** | `/stack-app/index.html` | Daily supplement tracker — tap to mark taken, long-press for detail sheet, progress ring, log view |
| **Health Stack Academy** | `/game-app/index.html` | Gamified learning — flashcards, quizzes, boss battles, XP/ranks, supplement encyclopedia, biomarker flashcards |

**Live URL:** `health-master-app.web.app`
**GitHub:** `jcitizen-dev/Master-Health` (main branch)
**Firebase project:** `health-master-app`
**Deploy command:** `firebase deploy --only hosting --project health-master-app`
**Local path:** `/Users/jordan/Desktop/Health Master App/`

---

## 2. File Structure

```
Health Master App/
├── index.html              # Blood Tab (root)
├── bloodtests.js           # window.BLOOD_TESTS — all 6 panels raw data
├── stack-app/
│   └── index.html          # Stack Tracker (vanilla JS, single file)
├── game-app/
│   ├── index.html          # React app (Babel standalone, no build step)
│   └── src/
│       ├── biomarkers.js   # window.HSA.BIOMARKERS + window.HSA.SUPPLEMENT_CONNECTIONS
│       ├── supplements.js  # window.HSA.SUPPLEMENTS + window.HSA.CATEGORIES
│       ├── quizzes.js      # window.HSA.QUIZZES (last ID: q175)
│       ├── progression.js  # window.HSA.CATEGORIES, window.HSA.BOSSES, window.HSA.BADGES
│       ├── components.js   # Shared React components
│       ├── hooks.js        # Custom React hooks
│       └── app.js          # App shell / routing
└── PROJECT_BIBLE.md        # This file
```

---

## 3. Jordan's Health Profile

- **DOB:** 1980-01-11 | **Age:** 46 | **Sex:** Male | **Diet:** Vegan
- **Training:** High intensity, heavy supplement load
- **Hair protocol:** Dutasteride (on script)

### Key Blood Test History (chronological)

| Date | Lab | Notes |
|------|-----|-------|
| Sep 2023 | Quest | Vegan deficiency panel — B6 48.9 HIGH, Omega-3 4.0%, B12 445 |
| Jul 2025 | Cedars/Quest (Dr. Bhatia) | ALT 35, AST 25, Hgb 13.9 LOW, Vit D 31.58 (barely above min), CRP 0.61, SHBG 30 |
| Oct 2025 | Quest | Hormone panel — Total T 654, Free T 100.5, SHBG 30 |
| Apr 2026 | Medlab Serbia | 52-marker panel — ALT 67 HIGH, AST 39 HIGH, SHBG 53.42 JUMPED, eGFR 62.2 borderline (creatine artifact), CRP 1.0 borderline, Homocysteine 10.2 borderline, albumin 52/K 5.2 (dehydration/travel artifact — NOT sauna) |
| May 2026 | Quest (latest) | Full CMP + CBC + NMR lipids + advanced kidney — most complete recent panel |

### Latest Quest (May 2026) — Key Values

**🔴 Flagged (elevated/low):**
- LDL-P: 1176 nmol/L (optimal <1138)
- LDL Small: 262 nmol/L (optimal <142)
- LDL Medium: 269 nmol/L (optimal <215)
- HDL Large: 4921 nmol/L (optimal >6729)
- LDL Peak Size: 218 Å (optimal >222.9) — Pattern A/B boundary, officially Pattern A
- Hematocrit: 38.8% (below ref low)
- **DHT: 7 ng/dL LOW** (ref 12–65 ng/dL, by LC/MS/MS gold standard) — dutasteride suppressing DHT below lower reference limit. Previously reported as 483.7 pg/mL by immunoassay — that was an overestimate due to cross-reactivity. LC/MS/MS is the accurate result. Expected and desired on dutasteride for hair preservation.

**🟡 Borderline:**
- Hemoglobin: 13.3 g/dL (consistently low across all panels — vegan/athlete pattern, not iron deficiency)
- RBC: 4.37 (below optimal 4.7, above ref low 4.2)
- Non-HDL: 102 mg/dL (optimal <100)
- Bilirubin: 1.2 mg/dL (upper edge of Quest ref range)
- Homocysteine: 10.2 µmol/L (optimal <9 — carry-forward from Serbia)
- DHEA-S: 120 µg/dL (borderline)
- Magnesium: 0.85 mmol/L (borderline)
- SHBG: 30 nmol/L (back to normal — was 53.42 in Serbia, Tongkat + Boron brought it back)
- HDL: 1.34 mmol/L

**✅ Improved / Resolved:**
- ALT: 67 (Serbia) → **26** (Quest) — fully resolved
- AST: 39 (Serbia) → **34** (Quest) — resolved
- CRP: 1.0 (Serbia) → **<0.2** (Quest) — dramatic improvement
- SHBG: 53.42 (Serbia) → **30** (Quest) — back to Oct 2025 baseline
- Vit D: 31.58 ng/mL (Jul 2025) → **54.7 ng/mL** (Serbia/Quest) — at therapeutic level
- eGFR-Cystatin: **111** (excellent — Serbia 62.2 was creatine artifact)

---

## 4. Supplement Stack & Schedule

### Current SUPP_MAP (label → supplement ID)
```javascript
const SUPP_MAP = {
  'NMN':'nmn', 'TMG':'tmg', 'B12':'b12', 'NAC':'nac',
  'Matcha':'matcha', 'Citrulline':'citrulline',
  'Protein':'protein', 'Creatine':'creatine', 'EVOO':'evoo',
  '🐟':'fishoil', 'Taurine':'taurine',
  'Tongkat':'tongkat', 'TUDCA':'tudca',
  'Garlic':'garlic', 'Ginger':'ginger', 'Vit C':'vitc',
  'P5P':'p5p', 'Probiotic':'probiotic', 'Duta':'dutasteride',
  'Boron':'boron', 'Mag':'magnesium', 'Zinc':'zinc',
  'Ash/Api':'ashwagandha', 'Glycine':'glycine', 'Fisetin':'fisetin',
  'Vit D':'vitd', 'K2':'k2', 'Psyllium':'psyllium'
};
```

### Weekly Schedule (current as of May 2026)

| Time | Sun | Mon | Tue | Wed | Thu | Fri | Sat |
|------|-----|-----|-----|-----|-----|-----|-----|
| **Fasted** | NMN TMG B12 | NMN NAC TMG B12 | NMN NAC TMG B12 | NMN NAC TMG B12 | NMN NAC TMG B12 | NMN NAC TMG B12 | NMN TMG B12 |
| **Pre** | — | Matcha Citrulline | Matcha Citrulline | Matcha Citrulline | Matcha Citrulline | Matcha Citrulline | Matcha |
| **Post (Shake)** | Protein Creatine EVOO 🐟 Taurine | +Vit D K2 | +Vit D K2 | +Vit D K2 | +Vit D K2 | +Vit D K2 | Protein Creatine EVOO 🐟 Taurine |
| **Lunch** | Psyllium Probiotic P5P Fisetin Boron | Tongkat TUDCA Garlic Ginger Vit C P5P Probiotic Boron | Tongkat TUDCA Garlic Ginger Vit C P5P Probiotic Boron | Psyllium Garlic Ginger Vit C P5P Probiotic Boron | Tongkat TUDCA Garlic Ginger Vit C P5P Probiotic Boron | Psyllium Garlic Ginger Vit C P5P Probiotic Boron | Psyllium Probiotic P5P Fisetin Boron |
| **Night** | Mag Zinc Glycine **Duta** | Mag Zinc Ash/Api Glycine **Duta** | Mag Zinc Ash/Api Glycine **Duta** | Mag Ash/Api Glycine **Duta** | Mag Zinc Ash/Api Glycine **Duta** | Mag Zinc Ash/Api Glycine **Duta** | Mag Glycine **Duta** |
| **Skip** | NAC TUDCA Tongkat | — | — | Tongkat TUDCA | — | Tongkat TUDCA | NAC Tongkat TUDCA Garlic Ginger |

**Key scheduling rules:**
- **Psyllium** (Konsyl brand, 10g/day): Lunch on TUDCA-off days only (Sun, Wed, Fri, Sat) — bile acid conflict
- **Dutasteride**: Night every day — moved from Lunch to avoid psyllium/TUDCA conflicts
- **TUDCA**: Mon/Tue/Thu only — being considered for gradual taper as liver enzymes normalized
- **Tongkat**: Mon/Tue/Thu — being monitored; SHBG back to 30, may taper
- **Psyllium timing:** drink 15–30 min BEFORE lunch, with a full glass of water (8–12 oz), drink fast before it gels

---

## 5. Game App Architecture

### Categories (`window.HSA.CATEGORIES`)
```javascript
methylation: { label:'Methylation & Longevity', emoji:'🧬', color:'#A78BFA' }
training:    { label:'Training & Recovery',     emoji:'💪', color:'#60A5FA' }
liver:       { label:'Liver & Detox',           emoji:'⚗️', color:'#34D399' }
neuro:       { label:'Neuro & Mood',            emoji:'🧠', color:'#818CF8' }
hormones:    { label:'Hormones & Vitality',     emoji:'🔥', color:'#FF6B35' }
gut:         { label:'Gut & Immunity',          emoji:'🦠', color:'#10B981' }
hair:        { label:'Hair Protocol',           emoji:'💈', color:'#F59E0B' }
vegan:       { label:'Vegan Gaps',              emoji:'🌱', color:'#84CC16' }
lipids:      { label:'Advanced Lipids',         emoji:'🫀', color:'#EC4899' }
cardio:      { label:'Zone 2 & Cardio',         emoji:'🏃', color:'#06B6D4' }
longevity:   { label:'Longevity Protocols',     emoji:'⏳', color:'#F97316' }
```

### Bosses (one per category + boss ID)
- Methylation: The Methylation Wraith
- Training: The Iron Golem
- Liver: The Toxic Shade
- Neuro: The Fog Entity
- Hormones: The Hormone Tyrant
- Gut: The Gut Parasite
- Hair: The Follicle Phantom
- Vegan: The Deficiency Specter
- Lipids: The Particle Phantom
- Cardio: The Mitochondrial Wraith
- Longevity: The Senescent Reaper (q166–q175)

### Quiz IDs
- Last used: **q186** — next new question starts at **q187**

### Biomarker Count
- **86 biomarkers** in `biomarkers.js`
- **66 biomarkers** have supplement connections in `SUPPLEMENT_CONNECTIONS`

### Status color mapping (game)
```javascript
'optimal'  → green (var(--accent) = #c8f542)
'borderline' → yellow (var(--xp-gold))
'elevated' / 'low' → red (var(--danger))
// Note: 'normal' also renders yellow — all biomarkers now use 'optimal' or 'borderline', not 'normal'
```

---

## 6. Stack Tracker Technical Details

### Long-press supplement detail sheet
- **480ms** hold on any pill opens the detail sheet
- `SUPP_MAP` maps pill label → supplement ID
- `getSuppData()` looks up `window.parent.HSA.SUPPLEMENTS` (same-origin iframe)
- `_lpFired` flag prevents click from firing after long press
- Pills with a SUPP_MAP entry get `class="has-detail"`

### Navigation
- Default view: **Today** (supplement tracker)
- Progress ring (top right) → taps to open **Log**
- **"Log"** title in Log view → taps to return to Today (no separate back button)
- Sign In button: hidden at bottom of Log view (for cloud sync)

### Cloud sync
- Firebase Auth + Firestore fully implemented
- User signs in with email/password to load/save log backup
- `exportBackup()` / `importBackup()` for JSON backup/restore

### Views
- `showView('today')` — main tracker
- `showView('log')` — history log

---

## 7. Blood Tab (Root index.html)

### Key features
- Marker cards grouped by panel (glucose, liver, kidney, etc.)
- Each card has: value bar, status badge, stat summary
- **Supplement connection tags** ("In my stack — tap to learn why")
  - Tapping a supplement tag opens a focused connection card
  - Content from `window.HSA.SUPPLEMENT_CONNECTIONS[biomarkerId][suppId]`
- `window.BLOOD_TESTS` — all panels from `bloodtests.js`

---

## 8. Supplements in `longevity` Category

**HBOT** (`id: 'hbot'`, 🫁, legendary)
- Not yet started — planned in a few months
- Pre-protocol baseline tests needed before starting (see Section 10)
- relatedMarkers: crp, hemoglobin, alt, ast, egfr, igf1

**Sauna** (`id: 'sauna'`, 🧖, uncommon)
- Not yet started — planned in a few months
- April 2026 Serbia elevated albumin (52) and potassium (5.2) = travel dehydration, NOT sauna
- relatedMarkers: igf1, cortisol

---

## 9. Key Decisions & Context

| Topic | Decision |
|-------|----------|
| Bloodwork browse | Blood Tab only — Game app's BiomarkersScreen removed |
| Bloodwork quiz/flashcards | Kept in Game — different purpose (testing vs. browsing) |
| LearnScreen | Supplements only (bloodwork mode removed) |
| Game nav icons | Game controller (white) at top; pill SVG in bottom tab |
| TUDCA | Considering gradual taper — liver resolved |
| Tongkat | Considering gradual taper — SHBG resolved, retest in 3mo |
| Psyllium | Added for LDL particle improvement — staggered with TUDCA |
| Dutasteride | Moved to Night to avoid psyllium conflict |
| Serbia dehydration | Travel/jetlag artifact — NOT sauna (not started yet) |
| HBOT/Sauna | Not started. Don't attribute past lab improvements to them |
| Lipid levers | Zone 2 cardio + psyllium = primary; HBOT/sauna = indirect only |

---

## 10. Pre-HBOT/Sauna Baseline Tests (to do before starting)

**Standard Quest draw:**
CBC (Hgb, Hct, RBC), hs-CRP, ALT/AST/GGT, IGF-1, Cortisol (AM fasted), EPO (erythropoietin), Full CMP, Full lipid panel + NMR particles, ApoB

**Specialized:**
- Telomere length (Teloyears / Life Length)
- BDNF
- 8-OHdG (oxidative stress marker)

**Non-blood:**
- Resting HR + HRV baseline
- Blood pressure
- Ear/sinus clearance (required before clinical HBOT)

---

## 11. Pending / Future Work

- **Retest SHBG** in ~3 months off reduced Tongkat to confirm it holds at 30
- **Monitor lipid particles** at next draw — Zone 2 + psyllium are the levers
- **HBOT/Sauna baseline labs** before starting those protocols
- When new blood panels arrive: update `bloodtests.js`, update affected `myValue` + `status` fields in `biomarkers.js`, update any quiz questions referencing old values
- Consider adding Zone 2 cardio tracking to Stack Tracker

---

## 12. How to Update Biomarker Values

When new Quest results arrive:
1. Add new panel to `bloodtests.js` under `window.BLOOD_TESTS.panels`
2. In `biomarkers.js`, update `myValue`, `unit`, `status`, `referenceRange`, and `myContextNote` for changed markers
3. Update any quiz questions in `quizzes.js` that reference the old specific values
4. Check `SUPPLEMENT_CONNECTIONS` for any context notes that reference old values
5. Deploy: `firebase deploy --only hosting --project health-master-app`
6. Push: `git push origin main`

**Status values:**
- `'optimal'` — within optimal_low to optimal_high range (renders green)
- `'borderline'` — in reference range but outside optimal (renders yellow)
- `'elevated'` — above reference high (renders red)
- `'low'` — below reference low (renders red)
- Do NOT use `'normal'` — it renders yellow same as borderline, causing confusion

---

## 13. Important Constraints

- **No sauna/HBOT in past lab conclusions** — neither has been started yet
- **Serbia dehydration** = travel artifact, not sauna
- **eGFR 62.2 (Serbia)** = creatine artifact; true kidney function = eGFR-Cystatin 111 (excellent)
- **Albumin 52/K 5.2 (Serbia)** = dehydration/hemoconcentration artifact
- **Hemoglobin low pattern** = vegan/athlete structural, NOT iron deficiency (MCV/MCH/MCHC/ferritin all normal)
- Jordan is the only user of the app — Sign In is tucked away by design
- All supplement timing is designed for Jordan's specific schedule — fasted morning, training days, etc.
