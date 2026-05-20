// ── Biomarker seed data (updated May 2026 — Quest panel + Serbia April 2026) ──
window.HSA = window.HSA || {};

window.HSA.BIOMARKERS = [
  // ── METABOLIC / GLUCOSE ────────────────────────────────────────────────────
  {
    id: 'glucose', name: 'Glucose', panel: 'glucose', myValue: 4.94, unit: 'mmol/L',
    referenceRange: { low: 3.9, optimal_low: 4.0, optimal_high: 5.5, high: 6.1 },
    status: 'optimal',
    whatItMeasures: 'Fasting blood sugar — how much glucose is circulating in your blood after an overnight fast.',
    whyItMatters: 'Chronic high glucose drives glycation, oxidative stress, and insulin resistance — the root of metabolic disease. Low glucose can indicate over-production of insulin.',
    myContextNote: '4.94 mmol/L (89 mg/dL) is excellent fasting glucose. HbA1c 5.3% confirms consistent metabolic control. HOMA-IR 0.9 (insulin 4.1 × glucose 4.94 / 22.5) confirms excellent insulin sensitivity.',
    relatedSupplements: ['magnesium', 'vitd', 'creatine'],
    mnemonic: 'FIVE-point-ONE: fine, fine, fine. 5.1 is pristine glucose.',
    xpValue: 15
  },
  {
    id: 'hba1c', name: 'HbA1c', panel: 'glucose', myValue: 5.3, unit: '%',
    referenceRange: { low: 4.0, optimal_low: 4.5, optimal_high: 5.6, high: 6.5 },
    status: 'optimal',
    whatItMeasures: 'Glycated haemoglobin — reflects average blood sugar over the past 2–3 months.',
    whyItMatters: 'Unlike fasting glucose (a snapshot), HbA1c is a movie. Pre-diabetes begins at 5.7%; diabetes at 6.5%.',
    myContextNote: '5.3% is excellent — well below the pre-diabetes threshold (5.7%). Up slightly from 4.89% (July 2025) and 5.2% (April 2026 Serbia) but still solidly in the safe zone. Worth monitoring trend at next panel.',
    relatedSupplements: ['magnesium', 'vitd', 'creatine'],
    mnemonic: 'HbA1c 5.3 — FIVE-point-THREE, still well clear, metabolically free.',
    xpValue: 15
  },
  {
    id: 'insulin', name: 'Insulin', panel: 'glucose', myValue: 4.1, unit: 'µIU/mL',
    referenceRange: { low: 2.6, optimal_low: 3.0, optimal_high: 8.0, high: 24.9 },
    status: 'optimal',
    whatItMeasures: 'Fasting insulin — the pancreatic hormone that shuttles glucose into cells.',
    whyItMatters: 'High fasting insulin signals insulin resistance years before glucose rises. Low insulin with normal glucose = excellent sensitivity.',
    myContextNote: '4.1 µIU/mL — low-optimal, even slightly better than 4.8 in April 2026. HOMA-IR = (4.94 × 4.1) / 22.5 = 0.90. Under 1.0 is elite insulin sensitivity. The pancreas is barely working — glucose clears efficiently on minimal insulin.',
    relatedSupplements: ['magnesium', 'creatine', 'vitd'],
    mnemonic: 'Insulin 4.8 — FOUR-point-EIGHT, insulin working great.',
    xpValue: 15
  },
  {
    id: 'homa_ir', name: 'HOMA-IR', panel: 'glucose', myValue: 0.9, unit: '—',
    referenceRange: { low: 0.5, optimal_low: 0.5, optimal_high: 2.0, high: 2.9 },
    status: 'optimal',
    whatItMeasures: 'Homeostatic Model Assessment of Insulin Resistance — calculated from fasting glucose × fasting insulin.',
    whyItMatters: 'The most clinically useful single measure of insulin sensitivity. Values >2 suggest resistance; >3 indicates significant resistance.',
    myContextNote: '0.9 is elite. Formula: (4.94 × 4.1) / 22.5 = 0.90. Under 1.0 is the gold standard for insulin sensitivity. Even better than April 2026 (1.1). The body is handling glucose almost effortlessly.',
    relatedSupplements: ['magnesium', 'vitd', 'creatine'],
    mnemonic: 'HOMA-IR 0.9 — ZERO-point-NINE, under one is elite — insulin sensitivity divine.',
    xpValue: 20
  },

  {
    id: 'c_peptide', name: 'C-Peptide', panel: 'glucose', myValue: 1.09, unit: 'ng/mL',
    referenceRange: { low: 0.80, optimal_low: 0.80, optimal_high: 3.0, high: 3.85 },
    status: 'optimal',
    whatItMeasures: 'A byproduct of insulin production — released in equal amounts to insulin by the pancreatic beta cells. Measures actual insulin secretion (unlike serum insulin which can be cleared by the liver).',
    whyItMatters: 'C-Peptide distinguishes Type 1 from Type 2 diabetes. Low C-Peptide = beta cells failing (Type 1 pattern). Normal/high C-Peptide = pancreas is producing insulin (Type 2 or healthy). A great longevity marker for pancreatic reserve.',
    myContextNote: '1.09 ng/mL is in the lower-optimal range — healthy pancreatic insulin secretion confirmed. The pancreas is producing insulin normally but not over-producing (which would signal compensation for insulin resistance). Combined with HOMA-IR 0.9, this confirms excellent metabolic health.',
    relatedSupplements: ['magnesium', 'vitd'],
    mnemonic: 'C-Peptide 1.09 — ONE-oh-NINE, pancreas producing insulin just fine.',
    xpValue: 20
  },

  // ── CHOLESTEROL / CARDIOVASCULAR ──────────────────────────────────────────
  {
    id: 'total_chol', name: 'Total Cholesterol', panel: 'metabolic', myValue: 3.98, unit: 'mmol/L',
    referenceRange: { low: 2.5, optimal_low: 3.0, optimal_high: 5.0, high: 5.2 },
    status: 'optimal',
    whatItMeasures: 'Sum of all cholesterol-carrying particles in blood — HDL + LDL + VLDL.',
    whyItMatters: 'Total cholesterol alone is a poor cardiovascular predictor — context (HDL vs LDL vs particle size) matters far more.',
    myContextNote: '3.98 mmol/L (154 mg/dL) — best it has ever been. Down from 4.79 in April 2026 and 4.31 in July 2025. The full lipid picture is excellent: TG 0.68, HDL 1.34, LDL 2.25, Apo-B 80. The EVOO + fish oil protocol is delivering measurable cardiovascular benefit.',
    relatedSupplements: ['fishoil', 'evoo', 'garlic'],
    mnemonic: 'Total chol 3.98 — THREE-ninety-EIGHT, best ever — cardiovascular fate looking great.',
    xpValue: 10
  },
  {
    id: 'hdl', name: 'HDL', panel: 'metabolic', myValue: 1.34, unit: 'mmol/L',
    referenceRange: { low: 1.0, optimal_low: 1.4, optimal_high: 2.5, high: 3.0 },
    status: 'borderline',
    whatItMeasures: 'High-density lipoprotein — the "reverse cholesterol transport" particle that removes cholesterol from arteries.',
    whyItMatters: 'HDL is cardioprotective. Low HDL (<1.0) is a major cardiovascular risk factor. High HDL reduces arterial plaque accumulation.',
    myContextNote: '1.34 mmol/L (52 mg/dL) is just below the optimal threshold of 1.4. Down slightly from 1.61 in April 2026. Still well above the clinical concern level (1.0). To push HDL higher: more vigorous aerobic exercise, continued fish oil and EVOO, and avoiding refined carbs are the main levers.',
    relatedSupplements: ['fishoil', 'evoo', 'vitd'],
    mnemonic: 'HDL 1.34 — ONE-thirty-FOUR, just below optimal. Fish oil and cardio — that\'s what HDL\'s for.',
    xpValue: 10
  },
  {
    id: 'ldl', name: 'LDL', panel: 'metabolic', myValue: 2.25, unit: 'mmol/L',
    referenceRange: { low: 0.5, optimal_low: 1.5, optimal_high: 3.0, high: 3.4 },
    status: 'optimal',
    whatItMeasures: 'Low-density lipoprotein — primary cholesterol carrier; elevated levels associate with atherosclerosis.',
    whyItMatters: 'LDL-C is a useful proxy but Apo-B is a better predictor of actual particle risk. LDL particle size (small dense vs large fluffy) matters — large fluffy LDL is less atherogenic.',
    myContextNote: '2.25 mmol/L (87 mg/dL) is sub-100 mg/dL — excellent. Down from 2.80 (April 2026). Paired with Apo-B of 80 and TG of 0.68, the full atherogenic particle picture is now very clean. LDL particle size is likely large/fluffy given the very low TG.',
    relatedSupplements: ['fishoil', 'garlic', 'evoo'],
    mnemonic: 'LDL 2.25 — TWO-twenty-FIVE, sub-optimal threshold, cardiovascular thriving.',
    xpValue: 10
  },
  {
    id: 'triglycerides', name: 'Triglycerides', panel: 'metabolic', myValue: 0.68, unit: 'mmol/L',
    referenceRange: { low: 0.3, optimal_low: 0.5, optimal_high: 1.1, high: 1.7 },
    status: 'optimal',
    whatItMeasures: 'Blood fats — stored energy; elevated TG signals excess carbs/alcohol, insulin resistance, or poor fat metabolism.',
    whyItMatters: 'High TG (>1.7) is an independent cardiovascular risk factor and drives small dense LDL formation. Low TG suggests efficient fat metabolism and good insulin sensitivity.',
    myContextNote: '0.68 mmol/L (60 mg/dL) — even better than April 2026 (0.78). Exceptional fat metabolism and insulin sensitivity (HOMA-IR 0.9). This is among the best TG values achievable — well under half the upper limit. The fish oil + EVOO + low-refined-carb approach continues to deliver.',
    relatedSupplements: ['fishoil', 'evoo', 'vitd'],
    mnemonic: 'TG 0.68 — ZERO-sixty-EIGHT, triglycerides at an exceptional rate.',
    xpValue: 10
  },
  {
    id: 'apo_b', name: 'Apo B', panel: 'metabolic', myValue: 80, unit: 'mg/dL',
    referenceRange: { low: 49, optimal_low: 49, optimal_high: 80, high: 130 },
    status: 'optimal',
    whatItMeasures: 'Apolipoprotein B — one Apo-B molecule per atherogenic particle (LDL, VLDL, IDL). The best single predictor of cardiovascular particle risk.',
    whyItMatters: 'Each Apo-B is one potentially atherogenic particle. Someone with many small LDL particles can have "normal" LDL-C but high Apo-B. Apo-B > LDL-C in predictive power.',
    myContextNote: 'Apo-B dropped from 89 (borderline) to 80 — right at the optimal threshold. The fish oil, EVOO, and overall lipid picture improvement drove this. LDL also dropped from 108.3 to 87 mg/dL in the same period. The cardiovascular particle burden is now fully optimal.',
    relatedSupplements: ['fishoil', 'evoo', 'garlic'],
    mnemonic: 'Apo-B 80 — EIGHTY, right at optimal. From borderline 89 to the threshold — fish oil and EVOO know the rest.',
    xpValue: 20
  },
  {
    id: 'apo_a1', name: 'Apo A-I', panel: 'metabolic', myValue: 177.8, unit: 'mg/dL',
    referenceRange: { low: 95, optimal_low: 120, optimal_high: 190, high: 210 },
    status: 'optimal',
    whatItMeasures: 'Apolipoprotein A-I — the main structural protein of HDL particles. Higher = more HDL functionality.',
    whyItMatters: 'Apo A-I reflects HDL functional capacity (reverse cholesterol transport), not just HDL-C mass. Apo-B/Apo A-I ratio is a potent cardiovascular risk predictor.',
    myContextNote: '177.8 mg/dL is strong. Apo-B/Apo A-I ratio = 89/177.8 = 0.50. A ratio <0.7 is associated with lower cardiovascular risk — this is good. Both the HDL function and LDL particle load are in a favourable pattern.',
    relatedSupplements: ['fishoil', 'evoo'],
    mnemonic: 'Apo A-I 177.8 — ONE-seventy-SEVEN, HDL close to heaven.',
    xpValue: 15
  },
  {
    id: 'lpa', name: 'Lp(a)', panel: 'metabolic', myValue: 27.7, unit: 'mg/dL',
    referenceRange: { low: 0, optimal_low: 0, optimal_high: 30, high: 50 },
    status: 'optimal',
    whatItMeasures: 'Lipoprotein(a) — genetically determined atherogenic particle. High Lp(a) is an independent, largely unmodifiable cardiovascular risk factor.',
    whyItMatters: 'Lp(a) is 80–90% genetically determined. High levels (>50 mg/dL or >125 nmol/L) significantly increase risk of heart attack and stroke. Current treatments can barely modify it.',
    myContextNote: '27.7 mg/dL is optimal (ref <30). This is a favourable genetic reading. Lp(a) can\'t be meaningfully reduced by diet or most supplements — this is largely your genetic baseline. Good news: it\'s in the safe zone.',
    relatedSupplements: ['fishoil'],
    mnemonic: 'Lp(a) 27.7 — TWENTY-SEVEN, Lp(a) under the dangerous ceiling.',
    xpValue: 15
  },

  // ── LIVER ─────────────────────────────────────────────────────────────────
  {
    id: 'ast', name: 'AST', panel: 'liver', myValue: 34, unit: 'U/L',
    referenceRange: { low: 5, optimal_low: 10, optimal_high: 34, high: 50 },
    status: 'optimal',
    whatItMeasures: 'Aspartate aminotransferase — liver enzyme released when hepatocytes are stressed or damaged.',
    whyItMatters: 'AST is less liver-specific than ALT (also in muscle). Elevated AST with elevated ALT = hepatocellular pattern. Elevated AST alone can indicate muscle damage.',
    myContextNote: 'AST recovered from 39 (borderline high, April 2026) to 34 — right at the upper limit of optimal. Together with ALT dropping from 67 to 26, this confirms full liver recovery. TUDCA + NAC + taurine protocol delivered measurable results within one month.',
    relatedSupplements: ['nac', 'tudca', 'taurine'],
    mnemonic: 'AST 34 — THIRTY-FOUR, liver stress resolved, not sore anymore.',
    xpValue: 25
  },
  {
    id: 'alt', name: 'ALT', panel: 'liver', myValue: 26, unit: 'U/L',
    referenceRange: { low: 5, optimal_low: 10, optimal_high: 40, high: 56 },
    status: 'optimal',
    whatItMeasures: 'Alanine aminotransferase — the most liver-specific enzyme; primary marker of hepatocellular damage.',
    whyItMatters: 'ALT is the most sensitive indicator of liver cell stress. Elevated ALT with normal GGT and bilirubin = mild hepatocellular stress, not cholestatic damage.',
    myContextNote: 'ALT dropped from 67 HIGH (April 2026 Serbia) to 26 — a 61% improvement and now firmly optimal. The TUDCA + NAC + taurine liver protection protocol worked. This also confirms the prior elevation was transient (likely training stress + supplement load), not structural liver disease.',
    relatedSupplements: ['nac', 'tudca', 'taurine', 'evoo'],
    mnemonic: 'ALT 26 — TWENTY-SIX, liver fully fixed. From 67 to 26 — TUDCA did its tricks.',
    xpValue: 25
  },
  {
    id: 'ggt', name: 'GGT', panel: 'liver', myValue: 17, unit: 'U/L',
    referenceRange: { low: 5, optimal_low: 10, optimal_high: 40, high: 55 },
    status: 'optimal',
    whatItMeasures: 'Gamma-glutamyl transferase — enzyme marking cholestatic liver disease, alcohol use, and oxidative stress.',
    whyItMatters: 'GGT is the key differentiator: elevated GGT = cholestatic pattern or alcohol. Normal GGT with elevated AST/ALT = hepatocellular pattern (muscle, training, supplements — not bile obstruction).',
    myContextNote: '17 U/L — down from 26 (April 2026), even further into the optimal zone. GGT is the key liver enzyme for ruling out cholestatic damage and alcohol. Combined with AST 34 and ALT 26, this confirms full liver recovery and no cholestatic component.',
    relatedSupplements: ['nac', 'tudca'],
    mnemonic: 'GGT 17 — SEVENTEEN, liver clean. Down from 26, the best it\'s been.',
    xpValue: 20
  },
  {
    id: 'alp', name: 'ALP', panel: 'liver', myValue: 45, unit: 'U/L',
    referenceRange: { low: 40, optimal_low: 44, optimal_high: 120, high: 147 },
    status: 'optimal',
    whatItMeasures: 'Alkaline phosphatase — enzyme in liver, bone, and intestine; elevated in cholestatic liver disease and bone disorders.',
    whyItMatters: 'Elevated ALP with elevated GGT = cholestatic liver disease. Elevated ALP alone = bone disease (Paget\'s, bone metastases). Normal ALP + normal GGT confirms the liver pattern is not cholestatic.',
    myContextNote: '45 U/L — down from 78 in April 2026, well within range. Confirms non-cholestatic pattern. Bone metabolism normal — Vitamin D and K2 continue to support healthy bone turnover without over-stimulating ALP.',
    relatedSupplements: ['vitd', 'k2'],
    mnemonic: 'ALP 78 — SEVENTY-EIGHT, alkaline phosphatase just fine at this rate.',
    xpValue: 10
  },
  {
    id: 'bilirubin', name: 'Total Bilirubin', panel: 'liver', myValue: 13.4, unit: 'µmol/L',
    referenceRange: { low: 3, optimal_low: 5, optimal_high: 17, high: 21 },
    status: 'optimal',
    whatItMeasures: 'Breakdown product of haemoglobin — elevated in haemolysis, liver disease, or bile duct obstruction.',
    whyItMatters: 'Bilirubin tells you if the liver can conjugate and excrete waste. Normal = liver conjugation is working. Very elevated = jaundice.',
    myContextNote: '13.4 µmol/L is optimal. Normal bilirubin alongside normal GGT confirms the elevated AST/ALT is NOT due to impaired liver excretory function or bile duct issues.',
    relatedSupplements: ['tudca', 'nac'],
    mnemonic: 'Bilirubin 13.4 — THIRTEEN-point-FOUR, no jaundice, not a score to be sore.',
    xpValue: 10
  },
  {
    id: 'albumin', name: 'Albumin', panel: 'liver', myValue: 47, unit: 'g/L',
    referenceRange: { low: 35, optimal_low: 38, optimal_high: 50, high: 53 },
    status: 'optimal',
    whatItMeasures: 'Main protein in blood — made by the liver; reflects liver synthetic function and hydration status.',
    whyItMatters: 'LOW albumin = liver failure, malnutrition, inflammation. HIGH albumin = dehydration, hemoconcentration (blood is more concentrated than normal).',
    myContextNote: '47 g/L (4.7 g/dL) is solidly optimal — down from 52 (slightly elevated due to dehydration) in April 2026. Well-hydrated draw, good protein intake, and healthy liver synthetic function confirmed. The dehydration artifact from Serbia is gone.',
    relatedSupplements: ['protein'],
    mnemonic: 'Albumin 47 — FORTY-SEVEN, properly hydrated and liver-perfect. No hemo-concentration leaven.',
    xpValue: 20
  },

  // ── KIDNEY ────────────────────────────────────────────────────────────────
  {
    id: 'creatinine', name: 'Creatinine', panel: 'kidney', myValue: 101.7, unit: 'µmol/L',
    referenceRange: { low: 53, optimal_low: 70, optimal_high: 110, high: 114.9 },
    status: 'optimal',
    whatItMeasures: 'Breakdown product of creatine phosphate in muscle — filtered by kidneys. Used to estimate kidney function.',
    whyItMatters: 'High creatinine can mean poor kidney filtration — OR it can be a harmless artifact of high muscle mass and creatine supplementation. Context is everything.',
    myContextNote: '101.7 µmol/L (1.15 mg/dL) is now firmly in the optimal range — down from 119.9 (elevated) in the Serbia April 2026 panel. The Cystatin C-based eGFR of 111 (unaffected by creatine) definitively confirms excellent kidney function. This panel closes the book on the kidney concern from Serbia.',
    relatedSupplements: ['creatine'],
    mnemonic: 'Creatinine 101.7 — ONE-oh-ONE, optimal now. Cystatin C eGFR 111 confirms kidneys won.',
    xpValue: 25
  },
  {
    id: 'egfr', name: 'eGFR (Creatinine)', panel: 'kidney', myValue: 79, unit: 'mL/min/1.73m²',
    referenceRange: { low: 60, optimal_low: 75, optimal_high: 120, high: 130 },
    status: 'optimal',
    whatItMeasures: 'Estimated glomerular filtration rate — calculated from creatinine; estimates how much blood the kidneys filter per minute.',
    whyItMatters: 'eGFR <60 = CKD stage 3. But the formula uses creatinine — so creatine supplementation artificially lowers calculated eGFR without any true filtration impairment. Cystatin C-based eGFR is the gold standard for creatine users.',
    myContextNote: 'eGFR 79 is solidly normal — up from a concerning 62.2 in the Serbia April 2026 panel. The Cystatin C-based eGFR is 111, confirming the 62.2 was entirely a creatine artifact. This definitively closes the kidney concern. Two independent methods now confirm excellent renal function.',
    relatedSupplements: ['creatine'],
    mnemonic: 'eGFR 79 + Cystatin C eGFR 111 — SEVENTY-NINE and ONE-eleven, creatine artifact gone, kidneys in heaven.',
    xpValue: 25
  },
  {
    id: 'urea', name: 'Urea', panel: 'kidney', myValue: 6.4, unit: 'mmol/L',
    referenceRange: { low: 3.2, optimal_low: 4.0, optimal_high: 7.0, high: 7.4 },
    status: 'optimal',
    whatItMeasures: 'End product of protein metabolism — made in liver, excreted by kidneys. Reflects both protein intake and kidney clearance.',
    whyItMatters: 'High urea = high protein intake or impaired kidney excretion. Low urea = malnutrition or liver failure. Normal urea alongside elevated creatinine points toward creatine artifact rather than kidney disease.',
    myContextNote: '6.4 mmol/L is optimal. This is important context for the elevated creatinine: if kidneys were truly failing, urea would also be elevated (azotaemia). Normal urea + borderline creatinine = creatine supplement artifact, not kidney disease.',
    relatedSupplements: ['creatine', 'protein'],
    mnemonic: 'Urea 6.4 — SIX-point-FOUR, kidneys still opening the door.',
    xpValue: 15
  },
  {
    id: 'uric_acid', name: 'Uric Acid', panel: 'kidney', myValue: 326.6, unit: 'µmol/L',
    referenceRange: { low: 150, optimal_low: 200, optimal_high: 380, high: 420 },
    status: 'optimal',
    whatItMeasures: 'Final product of purine metabolism — elevated levels cause gout and correlate with metabolic syndrome.',
    whyItMatters: 'High uric acid (>420 µmol/L) causes gout crystals in joints. Chronic elevation also independently predicts cardiovascular and kidney disease.',
    myContextNote: '326.6 µmol/L is well within optimal. A plant-based diet is generally low in purines (found in animal organ meats, shellfish) — this is a protective benefit of the vegan approach.',
    relatedSupplements: ['vitc'],
    mnemonic: 'Uric acid 326.6 — THREE-twenty-SIX, uric acid in the mix but well fixed.',
    xpValue: 10
  },

  {
    id: 'cystatin_c', name: 'Cystatin C', panel: 'kidney', myValue: 0.79, unit: 'mg/L',
    referenceRange: { low: 0.52, optimal_low: 0.52, optimal_high: 1.0, high: 1.27 },
    status: 'optimal',
    whatItMeasures: 'A protein produced at a constant rate by all nucleated cells — filtered by kidneys. Unlike creatinine, it is NOT affected by muscle mass or creatine supplementation.',
    whyItMatters: 'Cystatin C is the gold standard kidney marker for athletes and creatine users. When creatinine-based eGFR suggests concern, Cystatin C tells the truth. eGFR from Cystatin C of >90 = excellent kidney function.',
    myContextNote: '0.79 mg/L is optimal. Cystatin C-based eGFR = 111 mL/min/1.73m² — confirming excellent kidney function unaffected by creatine use. This definitively resolves the concern raised by the Serbia April 2026 creatinine-based eGFR of 62.2. Kidneys are fine. Creatine is safe to continue.',
    relatedSupplements: ['creatine'],
    mnemonic: 'Cystatin C 0.79 — ZERO-seventy-NINE, the true kidney test. eGFR 111 — kidneys at their best.',
    xpValue: 25
  },

  // ── MINERALS ──────────────────────────────────────────────────────────────
  {
    id: 'magnesium_bm', name: 'Magnesium', panel: 'minerals', myValue: 0.85, unit: 'mmol/L',
    referenceRange: { low: 0.66, optimal_low: 0.85, optimal_high: 1.0, high: 1.07 },
    status: 'borderline',
    whatItMeasures: 'Serum magnesium — though only 1% of total body magnesium is in blood, making serum Mg a poor but convenient marker.',
    whyItMatters: 'Magnesium is required for 300+ enzymatic reactions, ATP synthesis, muscle relaxation, and sleep. Deficiency is extremely common and chronically under-diagnosed.',
    myContextNote: '0.85 mmol/L is at the very bottom of the reference range (0.66–1.07). Serum Mg dramatically understates the problem — 99% is intracellular or in bone. This level confirms borderline deficiency. Magnesium Glycinate at 300–400 mg/night is directly targeting this.',
    relatedSupplements: ['magnesium'],
    mnemonic: 'Magnesium 0.85 — ZERO-eighty-FIVE, barely alive. The glycinate at night keeps it alive.',
    xpValue: 20
  },
  {
    id: 'zinc_bm', name: 'Zinc', panel: 'minerals', myValue: 18.3, unit: 'µmol/L',
    referenceRange: { low: 7, optimal_low: 12, optimal_high: 20, high: 23 },
    status: 'optimal',
    whatItMeasures: 'Serum zinc — essential trace mineral for immune function, testosterone synthesis, and 300+ enzyme reactions.',
    whyItMatters: 'Zinc deficiency impairs immunity, testosterone synthesis, wound healing, and DNA repair. Vegans are at high risk due to phytate-bound zinc in plant foods.',
    myContextNote: '18.3 µmol/L is in the upper portion of the optimal range [12–20 µmol/L] — well-supplemented. Plant zinc bioavailability is 50–70% lower than meat-based zinc due to phytate chelation. Supplementation at 15–30 mg/night is successfully closing the vegan gap.',
    relatedSupplements: ['zinc'],
    mnemonic: 'Zinc 18.3 — EIGHTEEN-point-THREE, plants steal zinc so supplement for free.',
    xpValue: 15
  },
  {
    id: 'potassium', name: 'Potassium', panel: 'minerals', myValue: 4.7, unit: 'mmol/L',
    referenceRange: { low: 3.5, optimal_low: 3.8, optimal_high: 5.0, high: 5.1 },
    status: 'optimal',
    whatItMeasures: 'The main intracellular electrolyte — critical for heart rhythm, muscle contraction, and nerve signalling.',
    whyItMatters: 'True hyperkalemia (>6.0 mmol/L) is a cardiac emergency. At 5.2, the key question is: real or artifact? Haemolysis during blood draw artificially elevates potassium.',
    myContextNote: '4.7 mmol/L is perfectly mid-range and normal — down from 5.2 (borderline high) in April 2026 which was likely a hemolysis artifact. This confirms the Serbia potassium reading was draw-related, not a real elevation. Properly hydrated, well-timed draw.',
    relatedSupplements: ['magnesium'],
    mnemonic: 'Potassium 4.7 — FOUR-point-SEVEN, mid-range and fine. Serbia 5.2 was the dehydration sign.',
    xpValue: 20
  },
  {
    id: 'calcium', name: 'Calcium', panel: 'minerals', myValue: 2.47, unit: 'mmol/L',
    referenceRange: { low: 2.1, optimal_low: 2.2, optimal_high: 2.5, high: 2.55 },
    status: 'optimal',
    whatItMeasures: 'Serum calcium — regulated by PTH, Vitamin D, and calcitonin; essential for bone, muscle, and nerve function.',
    whyItMatters: 'Hypercalcaemia (>2.6) causes kidney stones, calcification, and cardiac arrhythmias. Right at the upper limit is a warning signal, especially with high-dose Vitamin D supplementation.',
    myContextNote: '2.47 mmol/L (9.9 mg/dL) is now comfortably within range — down from the concerning 2.55 (right at upper limit) in April 2026. This confirms the 5000 IU/day Vitamin D dose is not pushing calcium too high. K2 is doing its job routing calcium to bone. Continue current protocol.',
    relatedSupplements: ['vitd', 'k2'],
    mnemonic: 'Calcium 2.47 — TWO-forty-SEVEN, no longer at the ceiling. K2 sending calcium to bone — healing.',
    xpValue: 25
  },

  // ── IRON STATUS ───────────────────────────────────────────────────────────
  {
    id: 'iron', name: 'Iron', panel: 'minerals', myValue: 24.3, unit: 'µmol/L',
    referenceRange: { low: 11.6, optimal_low: 14, optimal_high: 28, high: 31.3 },
    status: 'optimal',
    whatItMeasures: 'Serum iron — circulating iron bound to transferrin; a snapshot of iron transport (not stores).',
    whyItMatters: 'Low serum iron can indicate iron deficiency (especially with low ferritin) or iron sequestration in inflammation. Context: ferritin and TIBC together tell the full story.',
    myContextNote: '24.3 µmol/L (136 mcg/dL) is solidly optimal — a big improvement from 12.3 (borderline) in April 2026. Iron saturation of 40% and ferritin of 71 ng/mL complete a healthy iron picture. The persistent borderline Hemoglobin/Hematocrit is NOT an iron deficiency issue — iron is fine on all three measures.',
    relatedSupplements: ['vitc'],
    mnemonic: 'Iron 24.3 — TWENTY-FOUR, optimal now. From borderline 12.3 — iron absorption score.',
    xpValue: 15
  },
  {
    id: 'ferritin', name: 'Ferritin', panel: 'minerals', myValue: 71, unit: 'ng/mL',
    referenceRange: { low: 30, optimal_low: 50, optimal_high: 300, high: 400 },
    status: 'optimal',
    whatItMeasures: 'The iron storage protein — the most reliable indicator of total body iron stores.',
    whyItMatters: 'Ferritin is the gold standard for iron status. Low ferritin = depleted stores = true iron deficiency. High ferritin = either iron overload OR inflammation (ferritin is also an acute phase reactant).',
    myContextNote: '71 ng/mL is within optimal range — down from 129.1 in April 2026. The decrease likely reflects lower inflammation (CRP dropped from 1.0 to <0.2 — ferritin also rises with inflammation as an acute phase reactant). Stores are adequate. Iron saturation (40%) and serum iron (136 mcg/dL) are both solidly normal.',
    relatedSupplements: ['vitc'],
    mnemonic: 'Ferritin 71 — SEVENTY-ONE, adequate stores confirmed. Down from 129 — inflammation gone.',
    xpValue: 15
  },
  {
    id: 'transferrin_sat', name: 'Transferrin Saturation', panel: 'minerals', myValue: 40, unit: '%',
    referenceRange: { low: 16, optimal_low: 20, optimal_high: 40, high: 45 },
    status: 'optimal',
    whatItMeasures: 'The percentage of transferrin (iron transport protein) that is carrying iron — reflects iron delivery efficiency.',
    whyItMatters: 'Low TSAT (<16%) = iron deficiency. High TSAT (>45%) = iron overload (haemochromatosis risk). 40% is the upper edge of optimal.',
    myContextNote: '40% is the upper boundary of optimal — a significant improvement from 20.6% in April 2026. This confirms iron transport is now at full capacity. Vitamin C at meals is helping maximise non-heme iron absorption. No iron overload concern at 40% (threshold is >45%).',
    relatedSupplements: ['vitc'],
    mnemonic: 'TSAT 40% — FORTY percent, iron transport at its best. From 20.6 — Vitamin C doing the rest.',
    xpValue: 15
  },
  {
    id: 'uibc', name: 'UIBC', panel: 'minerals', myValue: 36.7, unit: 'µmol/L',
    referenceRange: { low: 12.4, optimal_low: 15, optimal_high: 43, high: 43 },
    status: 'optimal',
    whatItMeasures: 'Unsaturated iron binding capacity — the amount of transferrin NOT carrying iron; reflects iron demand or iron deficit.',
    whyItMatters: 'High UIBC means transferrin has lots of empty binding sites — the body has capacity to carry MORE iron than is available. This suggests relative iron insufficiency or high iron demand.',
    myContextNote: '36.7 µmol/L (calc: TIBC 341 − Iron 136 = 205 mcg/dL ÷ 5.585) is now within reference — down from 47.4 (elevated) in April 2026. Transferrin is now well-saturated (40%), confirming the iron picture has fully normalised. No longer a vegan iron concern.',
    relatedSupplements: ['vitc'],
    mnemonic: 'UIBC 36.7 — THIRTY-SIX, transferrin satiated. Iron absorption fixed.',
    xpValue: 20
  },

  // ── HORMONES ─────────────────────────────────────────────────────────────
  {
    id: 'testosterone', name: 'Testosterone (Total)', panel: 'hormones', myValue: 20.9, unit: 'nmol/L',
    referenceRange: { low: 8.33, optimal_low: 15, optimal_high: 30, high: 30.19 },
    status: 'optimal',
    whatItMeasures: 'Total testosterone — the sum of bound (SHBG-bound, albumin-bound) and free testosterone in circulation.',
    whyItMatters: 'Testosterone drives muscle protein synthesis, libido, mood, cognitive function, and bone density. Total T is the starting point — but free T and SHBG together tell the full story.',
    myContextNote: '20.9 nmol/L (603 ng/dL) — solidly mid-to-upper range. Down slightly from 25.9 in April 2026 but the key story is SHBG: it dropped from 53.42 to 30, meaning FREE testosterone is now much more bioavailable. Free T 89.7 pg/mL with SHBG 30 represents a better hormonal profile than total T 25.9 with SHBG 53.',
    relatedSupplements: ['tongkat', 'boron', 'zinc', 'ashwagandha'],
    mnemonic: 'Total T 20.9 — TWENTY-point-NINE, but SHBG 30 means more T is free — actually better design.',
    xpValue: 20
  },
  {
    id: 'free_testosterone', name: 'Free Testosterone', panel: 'hormones', myValue: 89.7, unit: 'pg/mL',
    referenceRange: { low: 46.0, optimal_low: 80, optimal_high: 180, high: 224.0 },
    status: 'optimal',
    whatItMeasures: 'The unbound, biologically active fraction of testosterone available to enter cells and exert effects.',
    whyItMatters: 'Free T is what tissues actually "see." Someone with high total T but high SHBG may have functionally lower hormonal drive. Free T is the clinically meaningful number.',
    myContextNote: '89.7 pg/mL is mid-range on the Quest immunoassay (ref 46–224). Note: the April 2026 Serbia panel used a different direct assay method with a different scale — the two values cannot be directly compared. What matters: with SHBG now at 30 (vs 53.42), bioavailable T is 192.4 ng/dL — well within the healthy range. Tongkat + Boron worked.',
    relatedSupplements: ['tongkat', 'boron', 'zinc'],
    mnemonic: 'Free T 89.7 — EIGHTY-nine, SHBG at 30 lets it shine. Tongkat and Boron made it fine.',
    xpValue: 25
  },
  {
    id: 'shbg', name: 'SHBG', panel: 'hormones', myValue: 30, unit: 'nmol/L',
    referenceRange: { low: 18.3, optimal_low: 20, optimal_high: 45, high: 54.1 },
    status: 'optimal',
    whatItMeasures: 'Sex hormone binding globulin — the primary transport protein for testosterone (and estradiol); determines how much T is biologically available.',
    whyItMatters: 'High SHBG binds testosterone, reducing free T. SHBG is elevated by: high-fibre vegan diets, low insulin (which is good for metabolic health but raises SHBG), liver production changes, and genetics.',
    myContextNote: 'SHBG dropped from 53.42 (borderline high, April 2026) to 30 — a 44% reduction back to the October 2025 baseline. This is a dramatic improvement. Tongkat Ali + Boron in the stack are the most likely drivers. Lower SHBG means more free testosterone is bioavailable, which is the whole goal of those two supplements.',
    relatedSupplements: ['tongkat', 'boron'],
    mnemonic: 'SHBG 30 — THIRTY, mid-range now. Tongkat and Boron brought it down — hormone bioavailability found.',
    xpValue: 25
  },
  {
    id: 'estradiol', name: 'Estradiol', panel: 'hormones', myValue: 20, unit: 'pg/mL',
    referenceRange: { low: 0, optimal_low: 10, optimal_high: 40, high: 56 },
    status: 'optimal',
    whatItMeasures: 'Primary estrogen in men — arises from testosterone aromatisation; important for bone, libido, and mood.',
    whyItMatters: 'Men need estrogen — too low causes poor bone density, low libido, and cognitive issues. Too high causes gynecomastia and reduced T. The T/E2 ratio matters.',
    myContextNote: 'Estradiol <30 pg/mL (reported as <30) on the Quest panel. Well within the male reference (≤39 pg/mL). Not causing gynecomastia or suppressing T. Dutasteride doesn\'t block aromatase — E2 production pathway is intact.',
    relatedSupplements: ['dutasteride', 'zinc'],
    mnemonic: 'Estradiol <30 — LESS THAN THIRTY, normal for men, not dirty.',
    xpValue: 15
  },
  {
    id: 'dht', name: 'DHT', panel: 'hormones', myValue: 483.7, unit: 'pg/mL',
    referenceRange: { low: 175, optimal_low: 250, optimal_high: 800, high: 913 },
    status: 'optimal',
    whatItMeasures: 'Dihydrotestosterone — the most potent androgen, formed from testosterone by 5-alpha reductase.',
    whyItMatters: 'DHT drives androgenic alopecia (hair loss). Dutasteride blocks 5-alpha reductase to reduce DHT. DHT level on treatment reflects treatment efficacy.',
    myContextNote: 'DHT at 483.7 pg/mL is in the mid-range DESPITE dutasteride (which blocks ~90–95% of 5-AR). This is the "surprisingly good" result the doctor flagged — DHT is being suppressed enough for hair preservation while remaining within the normal range for overall androgenic health. Suggests good baseline endogenous production.',
    relatedSupplements: ['dutasteride'],
    mnemonic: 'DHT 483.7 — FOUR-eighty-THREE, dutasteride working, hair preserved with DHT in range.',
    xpValue: 25
  },
  {
    id: 'lh', name: 'LH', panel: 'hormones', myValue: 6.26, unit: 'mIU/mL',
    referenceRange: { low: 0.57, optimal_low: 1.7, optimal_high: 8.6, high: 12.07 },
    status: 'optimal',
    whatItMeasures: 'Luteinizing hormone — pituitary signal that stimulates testosterone production in the testes.',
    whyItMatters: 'High LH + low T = primary hypogonadism (testes failing). Low LH + low T = secondary/central hypogonadism. Normal LH + good T = HPG axis functioning well.',
    myContextNote: '6.26 mIU/mL is in the mid-range. This is reassuring: LH is appropriately signalling the testes, the testes are responding (total T 25.9), and the HPG axis appears intact. No evidence of pituitary suppression.',
    relatedSupplements: ['tongkat', 'zinc'],
    mnemonic: 'LH 6.26 — SIX-point-TWO, pituitary telling testes what to do.',
    xpValue: 15
  },
  {
    id: 'fsh', name: 'FSH', panel: 'hormones', myValue: 8.25, unit: 'mIU/mL',
    referenceRange: { low: 0.95, optimal_low: 1.5, optimal_high: 10, high: 11.95 },
    status: 'optimal',
    whatItMeasures: 'Follicle stimulating hormone — pituitary signal for sperm production (spermatogenesis).',
    whyItMatters: 'Elevated FSH in men often signals testicular dysfunction or impaired spermatogenesis. Normal FSH = the pituitary-testis axis for sperm production is functioning.',
    myContextNote: '8.25 mIU/mL is in the upper-normal range but still within reference (0.95–11.95). No signal of primary testicular dysfunction. Important in the context of dutasteride use — some 5-AR inhibitors can affect FSH/LH, but levels remain normal here.',
    relatedSupplements: ['zinc'],
    mnemonic: 'FSH 8.25 — EIGHT-point-TWO, sperm signalling going through.',
    xpValue: 15
  },
  {
    id: 'prolactin', name: 'Prolactin', panel: 'hormones', myValue: 142, unit: 'mIU/L',
    referenceRange: { low: 73, optimal_low: 86, optimal_high: 300, high: 407 },
    status: 'optimal',
    whatItMeasures: 'Pituitary hormone that can suppress testosterone when elevated (hyperprolactinaemia).',
    whyItMatters: 'High prolactin (>600 mIU/L) suppresses the HPG axis, reducing LH/FSH and testosterone. Often caused by pituitary adenoma, medication, or chronic stress.',
    myContextNote: '6.7 ng/mL (142 mIU/L) — down from 245 mIU/L in April 2026, mid-range optimal. No prolactin-mediated testosterone suppression. Confirms SHBG drop is not driven by hyperprolactinaemia.',
    relatedSupplements: ['zinc', 'ashwagandha'],
    mnemonic: 'Prolactin 142 — dropped with SHBG, both heading the right direction.',
    xpValue: 15
  },
  {
    id: 'dhea_s', name: 'DHEA-S', panel: 'hormones', myValue: 120, unit: 'µg/dL',
    referenceRange: { low: 44.3, optimal_low: 150, optimal_high: 300, high: 442 },
    status: 'borderline',
    whatItMeasures: 'Dehydroepiandrosterone sulphate — adrenal androgen precursor to testosterone and estrogen.',
    whyItMatters: 'DHEA-S declines ~10%/decade after age 30. Low levels associate with reduced vitality, immunosenescence, and lower anabolic tone. Often used as a broad adrenal reserve and longevity marker.',
    myContextNote: '120 µg/dL is in the lower quarter of the range (ref 61–442) — down from 187.6 in April 2026. At 46, natural DHEA decline is expected, but 120 is below the functional optimal zone (>150). DHEA supplementation (25–50 mg/morning with fat) is the most direct intervention — worth discussing with your doctor.',
    relatedSupplements: ['ashwagandha'],
    mnemonic: 'DHEA-S 120 — ONE-twenty, age 46 catching up. Low-normal — DHEA sup worth a check-up.',
    xpValue: 15
  },
  {
    id: 'igf1', name: 'IGF-1', panel: 'hormones', myValue: 146.8, unit: 'ng/mL',
    referenceRange: { low: 88.5, optimal_low: 100, optimal_high: 200, high: 216 },
    status: 'optimal',
    whatItMeasures: 'Insulin-like growth factor 1 — mediates growth hormone effects; promotes muscle, bone, and organ growth.',
    whyItMatters: 'Optimal IGF-1 indicates adequate growth hormone axis activity. Very high IGF-1 is associated with increased cancer risk; very low with muscle wasting and poor recovery.',
    myContextNote: '146.8 ng/mL is solid mid-range. Reflects adequate protein intake, training stimulus, and sleep quality. The training + protein shake protocol is maintaining healthy anabolic tone. IGF-1 naturally declines with age — maintaining 146.8 is a good benchmark.',
    relatedSupplements: ['protein', 'creatine'],
    mnemonic: 'IGF-1 146.8 — ONE-forty-SIX, anabolic signal in the mix.',
    xpValue: 15
  },
  {
    id: 'cortisol', name: 'Cortisol (AM)', panel: 'hormones', myValue: 199.8, unit: 'nmol/L',
    referenceRange: { low: 101, optimal_low: 140, optimal_high: 400, high: 536 },
    status: 'optimal',
    whatItMeasures: 'Morning cortisol — the primary stress hormone, highest in the morning (cortisol awakening response).',
    whyItMatters: 'Chronically high cortisol suppresses testosterone, immune function, and sleep. Too low suggests adrenal insufficiency. Morning sampling captures the natural peak.',
    myContextNote: '199.8 nmol/L is mid-range — appropriate for a morning sample. The ashwagandha + magnesium night stack helps buffer the HPA axis. No evidence of hypercortisolism (Cushing\'s) or adrenal insufficiency. Tongkat Ali also has cortisol-modulating properties.',
    relatedSupplements: ['ashwagandha', 'tongkat', 'magnesium'],
    mnemonic: 'Cortisol 199.8 — ONE-ninety-NINE, morning cortisol perfectly aligned.',
    xpValue: 15
  },

  // ── THYROID ───────────────────────────────────────────────────────────────
  {
    id: 'tsh', name: 'hsTSH', panel: 'thyroid', myValue: 2.92, unit: 'µIU/mL',
    referenceRange: { low: 0.35, optimal_low: 0.5, optimal_high: 2.5, high: 4.94 },
    status: 'optimal',
    whatItMeasures: 'Thyroid-stimulating hormone — pituitary signal to the thyroid; the primary thyroid screening test.',
    whyItMatters: 'High TSH = hypothyroidism (thyroid underperforming, pituitary compensating). Low TSH = hyperthyroidism or over-replacement. TSH is the most sensitive thyroid indicator.',
    myContextNote: '2.92 µIU/mL is within range (0.35–4.94) but in the upper-normal zone. Many functional medicine practitioners target TSH <2.0. Iodine adequacy (supplemented at ~150 mcg/day) is important to maintain this. Anti-TPO and Anti-Tg are both very low — no autoimmune thyroid disease.',
    relatedSupplements: ['iodine', 'zinc', 'selenium'],
    mnemonic: 'TSH 2.92 — TWO-point-NINE, thyroid signalling within the line.',
    xpValue: 15
  },
  {
    id: 'free_t3', name: 'Free T3', panel: 'thyroid', myValue: 4.17, unit: 'pmol/L',
    referenceRange: { low: 2.43, optimal_low: 3.5, optimal_high: 5.5, high: 6.01 },
    status: 'optimal',
    whatItMeasures: 'The active form of thyroid hormone — directly regulates metabolism in every cell.',
    whyItMatters: 'Free T3 is the metabolically active thyroid hormone. Even with normal TSH and T4, low T3 indicates poor T4→T3 conversion (often selenium or zinc deficiency).',
    myContextNote: '4.17 pmol/L is solidly mid-range — good conversion of T4 to active T3. Zinc (18.3, supplemented) and adequate iodine support this conversion. No evidence of poor deiodinase activity.',
    relatedSupplements: ['iodine', 'zinc'],
    mnemonic: 'Free T3 4.17 — FOUR-point-ONE, thyroid active hormone done right.',
    xpValue: 15
  },
  {
    id: 'free_t4', name: 'Free T4', panel: 'thyroid', myValue: 14.6, unit: 'pmol/L',
    referenceRange: { low: 9.01, optimal_low: 11, optimal_high: 18, high: 19.05 },
    status: 'optimal',
    whatItMeasures: 'The storage/transport form of thyroid hormone — converted to active T3 in peripheral tissues.',
    whyItMatters: 'Free T4 reflects thyroid gland output. Low T4 + high TSH = primary hypothyroidism. Normal T4 + normal TSH = thyroid gland functioning appropriately.',
    myContextNote: '14.6 pmol/L is mid-range. The T4→T3 conversion is working well (Free T3 is 4.17). Thyroid axis is functioning normally across all three markers.',
    relatedSupplements: ['iodine'],
    mnemonic: 'Free T4 14.6 — FOURTEEN-sixty, thyroid gland doing its bidding.',
    xpValue: 10
  },
  {
    id: 'anti_tpo', name: 'Anti-TPO', panel: 'thyroid', myValue: 0.24, unit: 'IU/mL',
    referenceRange: { low: 0, optimal_low: 0, optimal_high: 3.0, high: 5.61 },
    status: 'optimal',
    whatItMeasures: 'Antibodies against thyroid peroxidase — the primary marker of Hashimoto\'s thyroiditis (autoimmune hypothyroidism).',
    whyItMatters: 'Positive Anti-TPO = thyroid autoimmunity, predicting future hypothyroidism. Negative = no active thyroid autoimmune process.',
    myContextNote: '0.24 IU/mL is essentially undetectable (ref <5.61). Thyroid autoimmunity is absent. This is reassuring given iodine supplementation — excess iodine can trigger thyroiditis in susceptible individuals, but the antibody picture is clean here.',
    relatedSupplements: ['iodine'],
    mnemonic: 'Anti-TPO 0.24 — ZERO-twenty-FOUR, thyroid immune system at peace, not at war.',
    xpValue: 15
  },
  {
    id: 'anti_tg', name: 'Anti-Tg', panel: 'thyroid', myValue: 2.76, unit: 'IU/mL',
    referenceRange: { low: 0, optimal_low: 0, optimal_high: 3.0, high: 4.11 },
    status: 'optimal',
    whatItMeasures: 'Antibodies against thyroglobulin — secondary marker of autoimmune thyroid disease (Hashimoto\'s or Graves\').',
    whyItMatters: 'Elevated Anti-Tg with elevated Anti-TPO = higher certainty of Hashimoto\'s. Anti-Tg alone is less specific. Both negative = thyroid autoimmunity unlikely.',
    myContextNote: '2.76 IU/mL is within range (ref <4.11) — low and not clinically significant. Together with Anti-TPO of 0.24, this confirms no thyroid autoimmune disease. Thyroid antibodies are the "surprisingly good" result the doctor flagged.',
    relatedSupplements: ['iodine'],
    mnemonic: 'Anti-Tg 2.76 — TWO-seventy-SIX, thyroid antibodies not in the mix.',
    xpValue: 15
  },

  // ── INFLAMMATION / OTHER ──────────────────────────────────────────────────
  {
    id: 'crp', name: 'CRP', panel: 'inflammation', myValue: 0.2, unit: 'mg/L',
    referenceRange: { low: 0, optimal_low: 0, optimal_high: 0.8, high: 5.0 },
    status: 'optimal',
    whatItMeasures: 'C-reactive protein — a non-specific liver-produced inflammatory marker that rises with acute and chronic inflammation.',
    whyItMatters: 'CRP >1.0 mg/L is associated with elevated cardiovascular risk. Chronic sub-clinical inflammation accelerates atherosclerosis, cancer risk, and ageing. The anti-inflammatory stack targets this directly.',
    myContextNote: 'Reported as <0.2 mg/L — essentially undetectable. This is a dramatic improvement from 1.0 (borderline) in the April 2026 Serbia panel. The anti-inflammatory stack (fish oil, ginger, garlic, fisetin, EVOO, NAC) is clearly working. Near-zero CRP is the longevity ideal.',
    relatedSupplements: ['fishoil', 'ginger', 'garlic', 'fisetin', 'evoo', 'vitc'],
    mnemonic: 'CRP <0.2 — LESS THAN zero-TWO, inflammation essentially zero. Stack working through and through.',
    xpValue: 20
  },
  {
    id: 'homocysteine', name: 'Homocysteine', panel: 'inflammation', myValue: 10.2, unit: 'µmol/L',
    referenceRange: { low: 4, optimal_low: 5, optimal_high: 9, high: 15 },
    status: 'borderline',
    whatItMeasures: 'Amino acid produced in the methylation cycle — elevated levels damage blood vessel walls and predict cardiovascular and cognitive disease.',
    whyItMatters: 'Every 5 µmol/L rise in homocysteine increases cardiovascular disease risk ~20%. Elevated levels are a modifiable risk factor — directly targeted by the B vitamin/methylation protocol.',
    myContextNote: '10.2 µmol/L is borderline high (optimal <9). This is the direct target of the methylation triad: TMG (BHMT pathway) + B12 (methionine synthase pathway) + P5P (transsulfuration pathway). All three are in the stack precisely because of this result.',
    relatedSupplements: ['tmg', 'b12', 'p5p', 'folate'],
    mnemonic: 'Homocysteine 10.2 — TEN-point-TWO, TMG + B12 + P5P coming through.',
    xpValue: 25
  },
  {
    id: 'fibrinogen', name: 'Fibrinogen', panel: 'inflammation', myValue: 3.4, unit: 'g/L',
    referenceRange: { low: 2.0, optimal_low: 2.0, optimal_high: 3.5, high: 4.0 },
    status: 'optimal',
    whatItMeasures: 'Blood clotting protein — also an inflammatory marker; elevated in chronic inflammation and cardiovascular risk.',
    whyItMatters: 'High fibrinogen increases blood viscosity and clot risk. Like CRP, fibrinogen is both a clotting factor and an acute phase reactant — rises with inflammation.',
    myContextNote: '3.4 g/L is within range (2.0–4.0) — upper-normal but acceptable. Fish oil has mild fibrinogen-reducing effects. The anti-inflammatory stack helps keep this in range.',
    relatedSupplements: ['fishoil', 'garlic'],
    mnemonic: 'Fibrinogen 3.4 — THREE-point-FOUR, clotting factor not out to score.',
    xpValue: 15
  },

  // ── VITAMINS ──────────────────────────────────────────────────────────────
  {
    id: 'vitd_bm', name: 'Vitamin D', panel: 'vitamins', myValue: 136.4, unit: 'nmol/L',
    referenceRange: { low: 50, optimal_low: 75, optimal_high: 150, high: 200 },
    status: 'optimal',
    whatItMeasures: '25-OH Vitamin D — the storage form; the standard test for Vitamin D status.',
    whyItMatters: 'Deficiency (<50 nmol/L) increases risk of bone disease, immune dysfunction, depression, and cardiovascular disease. Most vegans without supplementation land in deficiency.',
    myContextNote: '136.4 nmol/L is optimal — near the upper range (ref 50–150). 5000 IU/day is achieving this. Important: do NOT increase dose further. Calcium at 2.55 (at upper limit) reinforces this — Vitamin D drives calcium absorption, which is already at ceiling.',
    relatedSupplements: ['vitd', 'k2'],
    mnemonic: 'Vit D 136.4 — ONE-thirty-SIX, sun in a capsule doing its tricks. Don\'t go higher.',
    xpValue: 15
  },
  {
    id: 'b12_bm', name: 'B12', panel: 'vitamins', myValue: 530.7, unit: 'pg/mL',
    referenceRange: { low: 197, optimal_low: 300, optimal_high: 700, high: 771 },
    status: 'optimal',
    whatItMeasures: 'Serum cobalamin — the most commonly tested B12 form (functional deficiency can occur even with "normal" serum levels).',
    whyItMatters: 'B12 deficiency causes irreversible nerve damage and megaloblastic anaemia. For vegans, supplementation is non-negotiable — there is no reliable plant source.',
    myContextNote: '530.7 pg/mL is maintained by ~1000 mcg/day supplementation. Without it, this would be in deficiency territory within months on a vegan diet. The high dose is necessary because B12 absorption via intrinsic factor is capped at ~1.5 mcg — the rest requires passive diffusion at 1% efficiency.',
    relatedSupplements: ['b12'],
    mnemonic: 'B12 530.7 — FIVE-thirty, maintained by daily supplementation — zero in plants.',
    xpValue: 20
  },
  {
    id: 'folate', name: 'Folate', panel: 'vitamins', myValue: 10.7, unit: 'ng/mL',
    referenceRange: { low: 4.6, optimal_low: 7, optimal_high: 16, high: 18.7 },
    status: 'optimal',
    whatItMeasures: 'Serum folate (B9) — essential for DNA synthesis, cell division, and the methylation cycle.',
    whyItMatters: 'Deficiency causes megaloblastic anaemia and neural tube defects. Adequate folate works with B12 in the methionine synthase pathway to clear homocysteine.',
    myContextNote: '10.7 ng/mL is optimal — reflecting good dietary folate from green vegetables, legumes, and other plant foods. Folate is a genuine nutritional strength of the vegan diet. Works synergistically with B12 and TMG to drive homocysteine down from 10.2.',
    relatedSupplements: ['b12', 'tmg', 'p5p'],
    mnemonic: 'Folate 10.7 — TEN-point-SEVEN, folate from plants sent from heaven.',
    xpValue: 15
  },

  // ── ADVANCED LIPID PANEL (Quest May 2026) ────────────────────────────────
  {
    id: 'ldl_particle_num', name: 'LDL-P (Particle Number)', panel: 'lipids', myValue: 1176, unit: 'nmol/L',
    referenceRange: { low: 600, optimal_low: 600, optimal_high: 1138, high: 2000 },
    status: 'elevated',
    whatItMeasures: 'The total count of LDL particles circulating in blood — each one is a potential vehicle for artery-wall damage, regardless of how much cholesterol is inside.',
    whyItMatters: 'LDL-P is a stronger cardiovascular risk predictor than LDL cholesterol (LDL-C). Two people can have identical LDL-C but very different particle counts. More particles = more chances for artery-wall collision. Think of it as counting trucks on the highway, not just the cargo weight.',
    myContextNote: '1176 nmol/L is mildly elevated (optimal <1000). Critical context: ApoB is 80 (optimal boundary), triglycerides are 60 mg/dL (exceptional), CRP <0.2 (near-zero inflammation), insulin sensitivity elite (HOMA-IR 0.9), and LDL Pattern is A. This is a genetic tendency toward slightly elevated particle counts in an otherwise pristine metabolic landscape. "Optimization is different from disease." Main levers: Zone 2 cardio, psyllium husk / soluble fiber, continued fish oil.',
    relatedSupplements: ['fishoil', 'evoo'],
    mnemonic: 'LDL-P 1176 — ONE-one-SEVEN-SIX. More trucks on the road, but ApoB 80 keeps the fleet in check.',
    xpValue: 25
  },
  {
    id: 'ldl_small', name: 'LDL Small', panel: 'lipids', myValue: 262, unit: 'nmol/L',
    referenceRange: { low: 0, optimal_low: 0, optimal_high: 200, high: 500 },
    status: 'elevated',
    whatItMeasures: 'Small, dense LDL particles — the most atherogenic LDL subfraction because they are more easily oxidised and slip through arterial walls more readily.',
    whyItMatters: 'Small dense LDL has a longer half-life in circulation (more time to cause damage), oxidises more easily, and penetrates arterial walls more readily than large buoyant LDL. HOWEVER, low triglycerides (<100 mg/dL) and Pattern A classification dramatically reduce the atherogenic significance of elevated small LDL counts.',
    myContextNote: '262 nmol/L is above the optimal range. BUT this must be interpreted in full context: triglycerides 60 mg/dL (exceptional — low TG strongly predicts Pattern A physics), LDL Pattern A confirmed, ApoB 80 (optimal), CRP <0.2, HOMA-IR 0.9. This is "stubborn lipoprotein genetics" in someone with otherwise excellent cardiovascular markers — NOT metabolic syndrome. Zone 2 cardio and soluble fiber (psyllium) are the most evidence-based next interventions.',
    relatedSupplements: ['fishoil', 'evoo'],
    mnemonic: 'LDL Small 262 — TWO-sixty-TWO. Elevated but TG 60 and Pattern A say: genetics, not lifestyle.',
    xpValue: 25
  },
  {
    id: 'ldl_medium', name: 'LDL Medium', panel: 'lipids', myValue: 269, unit: 'nmol/L',
    referenceRange: { low: 0, optimal_low: 0, optimal_high: 200, high: 500 },
    status: 'elevated',
    whatItMeasures: 'Medium-sized LDL particles — intermediate between the most atherogenic small-dense particles and the less atherogenic large-buoyant particles.',
    whyItMatters: 'Medium LDL contributes to total LDL-P alongside the small and large fractions. The entire small+medium elevation drives the LDL-P above 1000, while large LDL (less atherogenic) would contribute less to overall risk. The complete size distribution matters more than any single subtype.',
    myContextNote: '269 nmol/L — combined with LDL Small (262), these two fractions drive the total LDL-P to 1176. The "discordance" pattern here — elevated particle counts but excellent metabolic markers — is a known genetic pattern in lipoprotein metabolism. People with this pattern often respond well to sustained Zone 2 cardio, which activates lipoprotein lipase and improves the particle size distribution over months.',
    relatedSupplements: ['fishoil', 'evoo'],
    mnemonic: 'LDL Medium 269 — TWO-sixty-NINE. Mid-size elevated, but the whole picture is not alarming.',
    xpValue: 20
  },
  {
    id: 'hdl_large', name: 'HDL Large', panel: 'lipids', myValue: 4921, unit: 'nmol/L',
    referenceRange: { low: 0, optimal_low: 7000, optimal_high: 15000, high: 20000 },
    status: 'low',
    whatItMeasures: 'Large HDL particles — the most cardioprotective HDL subtype with the greatest capacity for reverse cholesterol transport (picking up cholesterol from artery walls).',
    whyItMatters: 'Not all HDL is equal. Large HDL particles are metabolically active; they perform reverse cholesterol transport most effectively. Small HDL particles are less functional. Total HDL-C can look "normal" while HDL functionality is suboptimal. Zone 2 cardio is the strongest known modifiable stimulus for raising large HDL particles.',
    myContextNote: '4921 nmol/L is well below the optimal zone (>7000). This pairs with HDL-C of 52 mg/dL (borderline) to confirm that both the quantity AND quality of HDL are lower than ideal. This is the key finding that makes Zone 2 cardio a priority optimization lever. Sustained aerobic training at moderate intensity directly stimulates lipoprotein lipase and raises large HDL particle production. EVOO and fish oil help too but cardio is the main event.',
    relatedSupplements: ['fishoil', 'evoo'],
    mnemonic: 'HDL Large 4921 — FOUR-nine-TWO-ONE. The quality of HDL is low. Zone 2 cardio is the answer.',
    xpValue: 25
  },
  {
    id: 'ldl_peak_size', name: 'LDL Peak Size', panel: 'lipids', myValue: 218.0, unit: 'Å',
    referenceRange: { low: 210, optimal_low: 222.9, optimal_high: 240, high: 250 },
    status: 'low',
    whatItMeasures: 'The modal (most common) diameter of LDL particles in angstroms (Å). Pattern A = large, buoyant LDL (≥222 Å). Pattern B = small, dense LDL (<222 Å). More like Pattern A = better.',
    whyItMatters: 'LDL peak size is the key to Pattern A vs Pattern B classification. Pattern A LDL (large, fluffy) is considered significantly less atherogenic than Pattern B (small, dense). Most of the cardiovascular risk associated with LDL comes from small dense particles — Pattern A is the favorable phenotype.',
    myContextNote: '218.0 Å is below the Pattern A cutoff of 222 Å — technically at the Pattern A/B boundary. HOWEVER, the Quest report officially classifies this as Pattern A. More importantly: triglycerides at 60 mg/dL are the strongest single predictor of Pattern A biology (high TG drives Pattern B). Low TG + Pattern A classification + ApoB 80 = a favorable lipid phenotype despite borderline particle counts. Context makes this a "watch and optimise" situation, not a concern.',
    relatedSupplements: ['fishoil', 'evoo'],
    mnemonic: 'LDL Size 218 Å — TWO-eighteen, at the Pattern A boundary. TG 60 keeps the physics favorable.',
    xpValue: 20
  },

  // ── CBC / BLOOD COUNT ─────────────────────────────────────────────────────
  {
    id: 'hematocrit', name: 'Hematocrit', panel: 'cbc', myValue: 38.8, unit: '%',
    referenceRange: { low: 36.0, optimal_low: 39.4, optimal_high: 51.1, high: 53.0 },
    status: 'low',
    whatItMeasures: 'The percentage of total blood volume made up of red blood cells — the primary measure of blood\'s oxygen-carrying capacity and RBC mass.',
    whyItMatters: 'Low hematocrit (anemia) means less oxygen reaching muscles and brain, causing fatigue and impaired performance. In male athletes, ≥40% is the functional target. Hematocrit below 36% in males = anemia by WHO definition.',
    myContextNote: '38.8% is just below the male optimal zone (40–50%). Critically, iron is completely normal: ferritin 71, serum iron 136 mcg/dL, saturation 40%. This is NOT iron deficiency anemia. The most likely causes: (1) vegan athlete pattern — some plant-based athletes run mildly lower erythrocyte mass; (2) hemodilution from training and high hydration; (3) borderline B12 utilization at the cellular level. Worth monitoring at next panel before any intervention. · Why B12? B12 is essential for RBC maturation in bone marrow — without it, cells don\'t divide properly and production drops. Even with B12 levels technically "in range," vegans can have impaired cellular utilization of the active form (methylcobalamin). This is the one plausible nutritional lever given the otherwise clean iron picture. · Why Vitamin C? Vitamin C enhances absorption of non-heme iron from plant foods by converting Fe³⁺ to the absorbable Fe²⁺ form. As a vegan, all dietary iron is non-heme — so C at meals directly supports the iron supply chain behind RBC production. It also protects RBC membranes from oxidative damage.',
    relatedSupplements: ['b12', 'vitc'],
    mnemonic: 'Hematocrit 38.8 — THIRTY-eight-EIGHT, just below 40. Iron is fine — this is a vegan athlete pattern.',
    xpValue: 20
  },
  {
    id: 'hemoglobin', name: 'Hemoglobin', panel: 'cbc', myValue: 13.3, unit: 'g/dL',
    referenceRange: { low: 12.0, optimal_low: 13.5, optimal_high: 17.5, high: 18.0 },
    status: 'borderline',
    whatItMeasures: 'The oxygen-carrying protein packed inside red blood cells — the single most direct measure of blood\'s functional oxygen transport capacity.',
    whyItMatters: 'Hemoglobin below 13.5 g/dL in males sits at the borderline of the reference range. Combined with hematocrit 38.8%, this confirms mild erythrocyte underperformance — not classic iron deficiency, since iron stores are excellent.',
    myContextNote: '13.3 g/dL — borderline by male reference (13.5–17.5). The key exculpatory facts: ferritin 71 (adequate), serum iron 136 mcg/dL (optimal), saturation 40% (optimal), B12 530.7 pg/mL (well supplemented). This is NOT iron deficiency anaemia or B12 deficiency anaemia. Pattern consistent with: vegan athlete physiology, mild hemodilution, or lower-normal erythropoiesis baseline. No intervention yet — repeat panel in 3–6 months.',
    relatedSupplements: ['b12', 'vitc'],
    mnemonic: 'Hemoglobin 13.3 — THIRTEEN-three. Borderline but not iron-deficient. Vegan pattern — watch.',
    xpValue: 20
  },

  // ── CBC INDICES ──────────────────────────────────────────────────────────
  {
    id: 'wbc', name: 'WBC', panel: 'cbc', myValue: 4.6, unit: '10³/µL',
    referenceRange: { low: 3.8, optimal_low: 4.5, optimal_high: 10.0, high: 10.8 },
    status: 'normal',
    whatItMeasures: 'Total white blood cell count — the master count of all immune surveillance cells circulating in blood.',
    whyItMatters: 'Low WBC (leukopenia <3.8) signals immune suppression; high WBC (leukocytosis >10.8) signals active infection or inflammatory stress. Vegan and endurance athletes consistently run low-normal counts due to reduced baseline inflammatory signaling — this is a feature, not a bug.',
    myContextNote: '4.6 is low-normal — identical pattern to Cedars Jul 2025 (4.3) and consistent across all panels. No infection signal anywhere (CRP <0.2, no fever, no elevated neutrophils). This is my vegan athlete baseline.',
    relatedSupplements: ['vitc', 'zinc'],
    mnemonic: 'WBC 4.6 — FOUR-six. Low-normal vegan pattern. No infection signal — CRP <0.2 confirms.',
    xpValue: 15
  },
  {
    id: 'rbc', name: 'RBC', panel: 'cbc', myValue: 4.37, unit: '10⁶/µL',
    referenceRange: { low: 4.2, optimal_low: 4.7, optimal_high: 5.8, high: 6.1 },
    status: 'normal',
    whatItMeasures: 'Total red blood cell count — the number of oxygen-carrying erythrocytes per microliter of blood.',
    whyItMatters: 'RBC count combined with hemoglobin and hematocrit describes total oxygen-carrying capacity. Low count with normal MCV and normal MCHC means fewer cells, not deficient cells — the distinction changes the clinical interpretation entirely.',
    myContextNote: '4.37 is slightly below the male median (~5.0) but above the reference low (4.2). Consistent with hemoglobin 13.3 and hematocrit 38.8 — all three trend together as a mild vegan/athlete pattern. Iron, ferritin, and B12 are all normal.',
    relatedSupplements: ['b12', 'vitc'],
    mnemonic: 'RBC 4.37 — FOUR-thirty-seven. Low-end but in range. Same vegan pattern as Hgb and Hct.',
    xpValue: 15
  },
  {
    id: 'mcv', name: 'MCV', panel: 'cbc', myValue: 88.8, unit: 'fL',
    referenceRange: { low: 81.4, optimal_low: 85.0, optimal_high: 98.0, high: 101.7 },
    status: 'normal',
    whatItMeasures: 'Mean corpuscular volume — the average physical size of a red blood cell; the primary diagnostic tool for classifying anaemia type.',
    whyItMatters: 'MCV is the anaemia sorter: low MCV (<80 fL) = microcytic = iron deficiency or thalassemia; normal MCV = normocytic = chronic disease or early mixed deficiency; high MCV (>100 fL) = macrocytic = B12 or folate deficiency. Normal MCV with mild anaemia points toward hemodilution, not nutritional deficiency.',
    myContextNote: '88.8 fL is solidly normocytic — definitively rules out both iron-deficiency anaemia (microcytic) AND B12-deficiency anaemia (macrocytic). With ferritin 71, iron 136, and B12 531, this confirms the mild anaemia is structural/hemodilution, not nutritional.',
    relatedSupplements: [],
    mnemonic: 'MCV 88.8 — EIGHTY-eight. Normocytic — rules out iron-deficiency AND B12 deficiency anaemia.',
    xpValue: 20
  },
  {
    id: 'mch', name: 'MCH', panel: 'cbc', myValue: 30.4, unit: 'pg',
    referenceRange: { low: 27.0, optimal_low: 28.0, optimal_high: 33.0, high: 33.0 },
    status: 'normal',
    whatItMeasures: 'Mean corpuscular hemoglobin — the average mass of hemoglobin per red blood cell in picograms; measures how much hemoglobin each cell contains.',
    whyItMatters: 'Low MCH (hypochromic, <27 pg) = iron deficiency or chronic disease — cells are pale and underfilled. High MCH (>33 pg) = macrocytic (B12/folate deficiency). Normal MCH with low total Hgb means cells are well-filled — there are just fewer of them.',
    myContextNote: '30.4 pg is solidly normal — cells are normochromic (normally colored and filled). The mild anaemia is a count problem, not a quality problem. Iron repletion is completely confirmed.',
    relatedSupplements: [],
    mnemonic: 'MCH 30.4 — THIRTY-point-FOUR. Normochromic — cells are well-filled with hemoglobin.',
    xpValue: 15
  },
  {
    id: 'mchc', name: 'MCHC', panel: 'cbc', myValue: 34.3, unit: 'g/dL',
    referenceRange: { low: 31.6, optimal_low: 32.5, optimal_high: 35.4, high: 35.4 },
    status: 'normal',
    whatItMeasures: 'Mean corpuscular hemoglobin concentration — the hemoglobin concentration per unit volume within RBCs; the most specific indicator of intracellular hemoglobin packing density.',
    whyItMatters: 'MCHC is the gold-standard test for iron-deficiency hypochromia. Low MCHC = cells are pale from inadequate hemoglobin (iron deficiency); high MCHC = hereditary spherocytosis. Normal MCHC with low Hgb = cells have correct packing but there are fewer of them.',
    myContextNote: '34.3 g/dL is normal — cells have correct hemoglobin density. Third consecutive normal iron marker alongside MCV 88.8 and MCH 30.4. The mild anaemia is definitively NOT iron deficiency. It is a mild count deficit only.',
    relatedSupplements: [],
    mnemonic: 'MCHC 34.3 — THIRTY-four. Normal density. It\'s a cell-count issue, not a pale-cell issue.',
    xpValue: 15
  },
  {
    id: 'rdw', name: 'RDW', panel: 'cbc', myValue: 12.7, unit: '%',
    referenceRange: { low: 11.0, optimal_low: 11.5, optimal_high: 14.0, high: 15.0 },
    status: 'normal',
    whatItMeasures: 'Red cell distribution width — a measure of variation in RBC sizes (coefficient of variation); low RDW = uniform cells; high RDW = mixed small/large cells (anisocytosis).',
    whyItMatters: 'High RDW (>14.5%) suggests mixed nutritional deficiency (iron + B12/folate together) or active recovery from deficiency. RDW rises in iron deficiency before MCV drops — making it an early diagnostic signal. Low RDW = uniform, healthy erythropoiesis.',
    myContextNote: '12.7% is low-normal — RBC sizes are very uniform. No mixed deficiency picture. No recovery-from-deficiency pattern. This is clean, consistent erythropoiesis.',
    relatedSupplements: [],
    mnemonic: 'RDW 12.7 — TWELVE-seven. Tight, uniform RBCs. No mixed nutritional deficiency signal.',
    xpValue: 15
  },
  {
    id: 'platelets', name: 'Platelet Count', panel: 'cbc', myValue: 226, unit: '10³/µL',
    referenceRange: { low: 140, optimal_low: 150, optimal_high: 400, high: 400 },
    status: 'normal',
    whatItMeasures: 'The number of platelets (thrombocytes) per microliter — the cellular components responsible for primary hemostasis and clot formation.',
    whyItMatters: 'Low platelets (thrombocytopenia <150k) = bleeding risk; high platelets (thrombocytosis >450k) = clotting/inflammatory risk. Platelet count also reflects bone marrow production capacity and can drop with hemodilution in athletes.',
    myContextNote: '226k is solidly mid-normal — down slightly from 272k (Cedars Jul 2025) but well within excellent range. No bleeding or clotting risk. Consistent with overall mild hemodilution pattern in other CBC markers.',
    relatedSupplements: [],
    mnemonic: 'Platelets 226 — TWO-twenty-six. Mid-range, stable. Excellent clotting capacity.',
    xpValue: 15
  },
  {
    id: 'mpv', name: 'MPV', panel: 'cbc', myValue: 10.6, unit: 'fL',
    referenceRange: { low: 7.5, optimal_low: 9.5, optimal_high: 12.0, high: 12.5 },
    status: 'normal',
    whatItMeasures: 'Mean platelet volume — the average size of platelets; larger platelets are younger, metabolically more active, and have greater hemostatic capacity.',
    whyItMatters: 'High MPV with low platelet count = high turnover (immune destruction or bone marrow recovery); low MPV = older, less active platelets. Mid-range MPV with normal count = healthy platelet lifecycle and no excessive inflammatory activation.',
    myContextNote: '10.6 fL is optimal — platelets are a healthy size and metabolically active. No evidence of platelet stress, inflammatory activation, or immune destruction. Pairs with count 226k for a reassuringly clean picture.',
    relatedSupplements: [],
    mnemonic: 'MPV 10.6 — TEN-point-SIX. Healthy platelet size — young, active, and functional.',
    xpValue: 15
  },

  // ── CBC DIFFERENTIAL ─────────────────────────────────────────────────────
  {
    id: 'abs_neutrophils', name: 'Absolute Neutrophils', panel: 'cbc', myValue: 2176, unit: 'cells/µL',
    referenceRange: { low: 1500, optimal_low: 1800, optimal_high: 7800, high: 8000 },
    status: 'normal',
    whatItMeasures: 'Absolute neutrophil count (ANC) — the total number of neutrophils per µL; neutrophils are the primary first-responder immune cells deployed against bacterial infections.',
    whyItMatters: 'ANC below 1500 = neutropenia — clinically significant infection risk. Below 500 = severe neutropenia requiring isolation. Neutrophilia (>7800) = active bacterial infection or glucocorticoid stress. Vegan athletes characteristically run lower ANC due to reduced inflammatory baseline.',
    myContextNote: '2176 cells/µL is above the clinical neutropenia threshold (1500) — safe range. Low-normal pattern consistent with WBC 4.6 and overall vegan immune phenotype. CRP <0.2 confirms no active infection.',
    relatedSupplements: ['vitc', 'zinc'],
    mnemonic: 'Neutrophils 2176 — TWO-one-seven-six. Above safety threshold. Vegan low-normal, no infection.',
    xpValue: 15
  },
  {
    id: 'abs_lymphocytes', name: 'Absolute Lymphocytes', panel: 'cbc', myValue: 1904, unit: 'cells/µL',
    referenceRange: { low: 850, optimal_low: 1000, optimal_high: 3900, high: 4500 },
    status: 'normal',
    whatItMeasures: 'Absolute lymphocyte count — the total number of lymphocytes (T-cells, B-cells, NK cells) per µL; the cellular foundation of adaptive immunity.',
    whyItMatters: 'Lymphocytes are the strategic immune system: they recognize pathogens, produce antibodies (B-cells), kill infected cells (cytotoxic T), and maintain immune memory. Low lymphocytes = impaired adaptive immunity; high = viral infection or lymphoproliferative disease.',
    myContextNote: '1904 cells/µL is solidly normal — well above lymphopenia threshold (850). The adaptive immune system is intact and robust. This is the most directly relevant immune metric to vaccine response and viral defense.',
    relatedSupplements: ['vitd', 'zinc'],
    mnemonic: 'Lymphocytes 1904 — ONE-nine-OH-four. Robust adaptive immune reserve. Well above threshold.',
    xpValue: 15
  },
  {
    id: 'abs_monocytes', name: 'Absolute Monocytes', panel: 'cbc', myValue: 331, unit: 'cells/µL',
    referenceRange: { low: 200, optimal_low: 200, optimal_high: 950, high: 1000 },
    status: 'normal',
    whatItMeasures: 'Absolute monocyte count — monocytes differentiate into macrophages in tissue and are key mediators of chronic inflammation and tissue repair.',
    whyItMatters: 'Elevated monocytes suggest persistent chronic inflammatory signaling (atherosclerosis, autoimmune, occult infection). Normal monocytes combined with near-zero CRP = inflammatory biology is genuinely quiet — not just masked.',
    myContextNote: '331 cells/µL is normal. Combined with CRP <0.2 mg/L and fibrinogen 3.4 g/L (normal), this confirms zero chronic inflammation across every possible metric.',
    relatedSupplements: [],
    mnemonic: 'Monocytes 331 — THREE-thirty-one. Normal macrophage pool. CRP <0.2 confirms: zero inflammation.',
    xpValue: 15
  },
  {
    id: 'abs_eosinophils', name: 'Absolute Eosinophils', panel: 'cbc', myValue: 170, unit: 'cells/µL',
    referenceRange: { low: 15, optimal_low: 15, optimal_high: 500, high: 500 },
    status: 'normal',
    whatItMeasures: 'Absolute eosinophil count — eosinophils mediate allergic responses, parasitic defense, and tissue remodeling.',
    whyItMatters: 'Eosinophilia (>500 cells/µL) suggests allergic disease, parasitic infection, drug reactions, or autoimmune disease. In Jul 2025, eosinophils were 5.1% (flagged high). Resolution to below 500 absolute indicates the inciting trigger resolved.',
    myContextNote: '170 cells/µL = 3.7% of WBC — solidly normal. The Jul 2025 eosinophilia (5.1%) was either a transient allergic response or resolved parasitic exposure. Current value confirms full resolution.',
    relatedSupplements: [],
    mnemonic: 'Eosinophils 170 — ONE-seventy. Normal. Jul 2025 eosinophilia fully resolved.',
    xpValue: 15
  },
  {
    id: 'abs_basophils', name: 'Absolute Basophils', panel: 'cbc', myValue: 18, unit: 'cells/µL',
    referenceRange: { low: 0, optimal_low: 0, optimal_high: 200, high: 200 },
    status: 'normal',
    whatItMeasures: 'Absolute basophil count — the rarest white cell, involved in immediate allergic hypersensitivity (IgE-mediated reactions) and cross-talk with T-helper 2 cells.',
    whyItMatters: 'Basophils are always rare in normal blood. Extremely high basophils (>200) can indicate myeloproliferative disease. Low/near-zero basophils is completely normal and expected — basophilia is the red flag, not basopenia.',
    myContextNote: '18 cells/µL — basophils are meant to be rare. No concern. The leukemia/lymphoma panel from Jul 2025 confirmed no hematologic malignancy.',
    relatedSupplements: [],
    mnemonic: 'Basophils 18 — EIGHTEEN. Rare by design — exactly right. No hematologic signal.',
    xpValue: 10
  },

  // ── BASIC METABOLIC ───────────────────────────────────────────────────────
  {
    id: 'bun', name: 'BUN', panel: 'metabolic', myValue: 20, unit: 'mg/dL',
    referenceRange: { low: 7, optimal_low: 10, optimal_high: 20, high: 25 },
    status: 'normal',
    whatItMeasures: 'Blood Urea Nitrogen — the nitrogen content of urea in blood; a downstream product of protein catabolism (amino acids → ammonia → urea in liver → filtered by kidneys).',
    whyItMatters: 'BUN reflects both protein intake/catabolism AND kidney clearance. The BUN:Creatinine ratio is the key clinical tool: ratio >20 = prerenal (dehydration, high protein); ratio 10–20 = normal; ratio <10 = low protein or liver disease.',
    myContextNote: 'BUN 20, creatinine 1.15 → BUN:Cr ratio = 17.4 — perfectly normal. Protein metabolism is healthy and kidneys are clearing efficiently. Serbia urea carry-forward (6.4 mmol/L = 17.9 mg/dL BUN) is essentially identical — consistent across labs.',
    relatedSupplements: [],
    mnemonic: 'BUN 20 — TWENTY. BUN:Cr ratio 17.4 — normal. Protein and kidney clearance in balance.',
    xpValue: 15
  },

  // ── KIDNEY ────────────────────────────────────────────────────────────────
  {
    id: 'egfr_cystatin', name: 'eGFR (Cystatin C)', panel: 'kidney', myValue: 111, unit: 'mL/min/1.73m²',
    referenceRange: { low: 60, optimal_low: 90, optimal_high: 120, high: 150 },
    status: 'normal',
    whatItMeasures: 'Estimated GFR using Cystatin C — a non-creatinine-based kidney function test unaffected by muscle mass or creatine supplementation; the gold standard for athletes.',
    whyItMatters: 'Cystatin C is produced at a constant rate by all nucleated cells regardless of diet or muscle mass. Standard creatinine-based eGFR is artifactually reduced by creatine supplementation — Cystatin C cuts through this noise and gives the true kidney filtration picture.',
    myContextNote: '111 mL/min/1.73m² = excellent supranormal kidney function. This definitively disproves Serbia\'s eGFR 62.2 — that was 100% a creatine artifact. Kidneys confirmed excellent: Cystatin C 0.79 (optimal), eGFR-Cystatin 111, urine ACR 2 mg/g. Three-angle confirmation.',
    relatedSupplements: [],
    mnemonic: 'eGFR-Cystatin 111 — ONE-eleven. The real kidney number. Serbia 62.2 = creatine noise.',
    xpValue: 25
  },
  {
    id: 'urine_acr', name: 'Urine ACR', panel: 'kidney', myValue: 2, unit: 'mg/g',
    referenceRange: { low: null, optimal_low: null, optimal_high: 3, high: 30 },
    status: 'normal',
    whatItMeasures: 'Albumin/Creatinine Ratio in a spot urine sample — the most sensitive early marker of glomerular microinjury; albumin leaks into urine when the kidney filtration barrier is damaged.',
    whyItMatters: 'Even tiny albumin in urine (microalbuminuria 30–300 mg/g) signals early kidney damage — often appearing years before creatinine rises. Below 3 mg/g is essentially undetectable. Elevated ACR is one of the earliest signals of diabetic nephropathy.',
    myContextNote: '2 mg/g is essentially zero — the gold-standard confirmation of no glomerular damage. Alongside eGFR-Cystatin 111 and Cystatin C 0.79, this creates a three-point confirmation of excellent kidney health. Kidneys are pristine.',
    relatedSupplements: [],
    mnemonic: 'Urine ACR 2 — TWO mg/g. Near-zero albumin leak. Kidneys confirmed healthy from every angle.',
    xpValue: 20
  },

  // ── ELECTROLYTES ──────────────────────────────────────────────────────────
  {
    id: 'sodium', name: 'Sodium', panel: 'electrolytes', myValue: 141, unit: 'mmol/L',
    referenceRange: { low: 136, optimal_low: 138, optimal_high: 144, high: 146 },
    status: 'normal',
    whatItMeasures: 'The primary extracellular cation — the osmotic anchor of plasma volume, regulator of nerve impulse transmission, and principal determinant of blood pressure and fluid balance.',
    whyItMatters: 'Sodium drives water distribution between body compartments. Hyponatremia (<136) = risk of cerebral edema — especially dangerous in endurance athletes who over-hydrate with plain water. Hypernatremia (>146) = dehydration or renal concentrating failure.',
    myContextNote: '141 mmol/L is identical in both Serbia Apr 2026 and Quest May 2026 — perfectly stable across two labs and one month. Textbook homeostasis for an endurance athlete.',
    relatedSupplements: [],
    mnemonic: 'Sodium 141 — ONE-forty-one. Identical across two panels. Perfect fluid regulation.',
    xpValue: 15
  },
  {
    id: 'chloride', name: 'Chloride', panel: 'electrolytes', myValue: 103, unit: 'mmol/L',
    referenceRange: { low: 98, optimal_low: 100, optimal_high: 108, high: 110 },
    status: 'normal',
    whatItMeasures: 'The principal extracellular anion — maintains electrical neutrality with sodium, regulates acid-base balance via anion gap, and is the primary component of hydrochloric acid in the stomach.',
    whyItMatters: 'Chloride moves inversely with bicarbonate (CO2) in the anion gap. Low chloride = metabolic alkalosis (vomiting, diuretics); high chloride = metabolic acidosis (diarrhea, kidney disease). Combined with sodium 141 and CO2 27, the electrolyte triad confirms perfect balance.',
    myContextNote: '103 mmol/L is normal. Together with sodium 141 and CO2 27, the electrolyte picture is textbook — no acid-base disturbance, no dehydration signal, no renal electrolyte-handling problem.',
    relatedSupplements: [],
    mnemonic: 'Chloride 103 — ONE-OH-three. Na/Cl/CO2 triad perfectly balanced.',
    xpValue: 10
  },
  {
    id: 'co2', name: 'CO2 (Bicarbonate)', panel: 'electrolytes', myValue: 27, unit: 'mmol/L',
    referenceRange: { low: 20, optimal_low: 22, optimal_high: 29, high: 32 },
    status: 'normal',
    whatItMeasures: 'Serum bicarbonate (HCO3⁻), reported as "CO2" on metabolic panels — the primary base buffer of blood pH and the main metabolic acid-base regulator.',
    whyItMatters: 'Bicarbonate is the kidneys\' primary buffer against metabolic acidosis. Low CO2 (<22) = metabolic acidosis (DKA, renal tubular acidosis, lactic acidosis from intense exercise); high CO2 (>30) = metabolic alkalosis (vomiting, diuretics). Athletes can transiently drop CO2 during heavy training.',
    myContextNote: '27 mmol/L is squarely in the optimal zone — no acid-base disturbance. Given high-intensity training and sauna use, this confirms the body is managing acid load perfectly. Kidneys and respiratory system in balance.',
    relatedSupplements: [],
    mnemonic: 'CO2 (HCO3) 27 — TWENTY-seven. Optimal buffer. No acid-base disturbance.',
    xpValue: 10
  },

  // ── LIVER PROTEINS ────────────────────────────────────────────────────────
  {
    id: 'total_protein', name: 'Total Protein', panel: 'liver', myValue: 7.0, unit: 'g/dL',
    referenceRange: { low: 6.1, optimal_low: 6.5, optimal_high: 8.1, high: 8.5 },
    status: 'normal',
    whatItMeasures: 'Total serum protein — the combined concentration of albumin and globulin; reflects overall nutritional protein status and the liver\'s synthetic capacity.',
    whyItMatters: 'Low total protein = malnutrition, malabsorption, or liver synthetic failure; high total protein = dehydration (hemoconcentration) or monoclonal protein. The A/G ratio (albumin ÷ globulin) derived from this split is a key nutritional and immune health metric.',
    myContextNote: '7.0 g/dL (albumin 4.7 + globulin 2.3 = 7.0). A/G ratio = 2.04 — optimal (target >1.0). For a vegan athlete, protein synthesis is well-maintained. Serbia showed albumin 52 g/L alone — hemoconcentration from sauna/training. Quest fasting baseline is cleaner.',
    relatedSupplements: [],
    mnemonic: 'Total Protein 7.0 — SEVEN. A/G ratio 2.04 optimal. Vegan protein synthesis healthy.',
    xpValue: 15
  },
  {
    id: 'globulin', name: 'Globulin', panel: 'liver', myValue: 2.3, unit: 'g/dL',
    referenceRange: { low: 1.9, optimal_low: 2.0, optimal_high: 3.5, high: 3.7 },
    status: 'normal',
    whatItMeasures: 'The non-albumin protein fraction — includes immunoglobulins (IgG, IgA, IgM), complement proteins, acute phase reactants, and transport proteins; calculated as total protein minus albumin.',
    whyItMatters: 'High globulin (>3.5) = chronic inflammation, chronic infection, autoimmune disease, or monoclonal protein (multiple myeloma). Low globulin = immunodeficiency. The A/G ratio should be >1.0 — a ratio <1.0 is a red flag for chronic disease or liver failure.',
    myContextNote: '2.3 g/dL → A/G ratio = 4.7 ÷ 2.3 = 2.04 — excellent. Normal globulin (not elevated) confirms no chronic immune activation, no hidden inflammatory state. Combined with CRP <0.2 and fibrinogen 3.4 — zero chronic disease signal.',
    relatedSupplements: [],
    mnemonic: 'Globulin 2.3 — TWO-point-THREE. A/G ratio 2.04 ideal. No immune-protein excess.',
    xpValue: 15
  },

  // ── LIPIDS EXTENDED ───────────────────────────────────────────────────────
  {
    id: 'non_hdl', name: 'Non-HDL Cholesterol', panel: 'lipids', myValue: 102, unit: 'mg/dL',
    referenceRange: { low: null, optimal_low: null, optimal_high: 100, high: 130 },
    status: 'normal',
    whatItMeasures: 'Total cholesterol minus HDL — captures ALL atherogenic lipoprotein particles in one number: LDL, VLDL, IDL, and Lp(a); a more complete CV risk metric than LDL-C alone.',
    whyItMatters: 'Non-HDL includes all atherogenic particles — VLDL remnants are excluded from standard LDL-C but captured here. AHA/ACC longevity threshold: <100 mg/dL. Non-HDL closely tracks ApoB and is the most accessible atherogenic particle burden metric on standard panels.',
    myContextNote: '102 mg/dL — just 2 points above the longevity target of 100, well below clinical cutoff 130. With ApoB 80 mg/dL (below 90 optimal), atherogenic particle burden is excellent. Down from 114 (Cedars Jul 2025). The extra 2 over 100 is noise, not risk.',
    relatedSupplements: ['evoo', 'fishoil'],
    mnemonic: 'Non-HDL 102 — ONE-OH-two. 2 over longevity target 100. ApoB 80 confirms: excellent.',
    xpValue: 20
  },
  {
    id: 'tibc', name: 'Iron Binding Capacity (TIBC)', panel: 'iron', myValue: 341, unit: 'mcg/dL',
    referenceRange: { low: 250, optimal_low: 270, optimal_high: 380, high: 425 },
    status: 'normal',
    whatItMeasures: 'Total Iron Binding Capacity — the maximum amount of iron that transferrin (the blood\'s iron transport protein) can carry; reflects the total transferrin reserve available to bind and transport iron.',
    whyItMatters: 'TIBC moves inversely with iron stores: rises in iron deficiency (empty transferrin reserves); falls in iron overload (transferrin saturated) or chronic disease. Combined with serum iron, TIBC calculates transferrin saturation (iron ÷ TIBC × 100).',
    myContextNote: '341 mcg/dL is solidly mid-normal (250–425). Not elevated (rules out iron deficiency) and not low (rules out iron overload). Transferrin saturation = 136 ÷ 341 = 40% — upper-normal, confirming iron replete status. Consistent with ferritin 71 and serum iron 136.',
    relatedSupplements: [],
    mnemonic: 'TIBC 341 — THREE-forty-one. Mid-range. Iron 136 ÷ TIBC 341 = 40% sat. Iron fully replete.',
    xpValue: 15
  },

  // ── HORMONES EXTENDED ─────────────────────────────────────────────────────
  {
    id: 'bioavail_t', name: 'Bioavailable Testosterone', panel: 'hormones', myValue: 192.4, unit: 'ng/dL',
    referenceRange: { low: 110, optimal_low: 150, optimal_high: 400, high: 575 },
    status: 'normal',
    whatItMeasures: 'The biologically active fraction of testosterone — free T plus albumin-bound T (but NOT SHBG-bound T); represents the testosterone that can actually enter target cells and exert hormonal effects.',
    whyItMatters: 'SHBG binds testosterone tightly, rendering it biologically inert. As SHBG rises — common on vegan/high-fiber diets — bioavailable T drops even when total T is normal. This is why SHBG management matters as much as total T in optimizing hormonal health.',
    myContextNote: '192.4 ng/dL is well above the 150 optimal floor. The SHBG spiral was interrupted: Serbia Apr 2026 SHBG was 53.42 nmol/L (borderline); Tongkat Ali + Boron dropped it back to 30 nmol/L by May 2026. Bioavail-T 192 vs 206 (Oct 2025) — modest expected decrease with total T at 603 vs 654. Protocol is working.',
    relatedSupplements: ['tongkat', 'boron', 'zinc'],
    mnemonic: 'Bioavail-T 192.4 — ONE-ninety-TWO. Above optimal floor 150. Tongkat+Boron defended SHBG.',
    xpValue: 25
  },
  {
    id: 'psa', name: 'PSA, Total', panel: 'hormones', myValue: 0.22, unit: 'ng/mL',
    referenceRange: { low: null, optimal_low: null, optimal_high: 1.5, high: 4.0 },
    status: 'normal',
    whatItMeasures: 'Prostate-Specific Antigen — a glycoprotein secreted by prostate epithelial cells; the primary screening biomarker for prostate cancer, BPH, and prostatitis.',
    whyItMatters: 'PSA rises with prostate cancer, BPH, prostatitis, and vigorous activity. Dutasteride (5-alpha reductase inhibitor that blocks DHT) suppresses PSA by ~50%. On dutasteride, the clinical correction factor is ×2 — multiply reported PSA by 2 for risk interpretation. Age target for men under 60: <2.5 ng/mL.',
    myContextNote: '0.22 ng/mL on dutasteride → corrected ~0.44 ng/mL. Pre-dutasteride baseline was 0.3 ng/mL (Cedars Jul 2025) — essentially unchanged when correction applied. Extremely low. No PSA acceleration. No prostate concern.',
    relatedSupplements: [],
    mnemonic: 'PSA 0.22 — ZERO-two-two. On dutasteride: corrected ~0.44. Extremely low. No prostate signal.',
    xpValue: 20
  },

  // ── LDL PATTERN (CATEGORICAL) ─────────────────────────────────────────────
  {
    id: 'ldl_pattern', name: 'LDL Pattern', panel: 'lipids', myValue: null, unit: null,
    referenceRange: { low: null, optimal_low: null, optimal_high: null, high: null },
    status: 'normal',
    whatItMeasures: 'LDL particle pattern classification: Pattern A = predominantly large, buoyant LDL (less atherogenic); Pattern B = predominantly small, dense LDL (more atherogenic). Determined by LDL Peak Size: ≥222 Å = Pattern A; <222 Å = Pattern B.',
    whyItMatters: 'LDL pattern fundamentally changes the cardiovascular risk interpretation of any LDL-C value. Pattern B LDL carries ~3–5× higher CV risk than Pattern A at the same LDL-C. The strongest predictor of pattern is triglycerides — low TG drives Pattern A; high TG (>150 mg/dL) drives Pattern B.',
    myContextNote: 'Quest officially classifies as Pattern A — favorable. LDL Peak Size 218 Å is technically at the A/B boundary but the official call is A. TG 60 mg/dL strongly supports Pattern A physics. ApoB 80, CRP <0.2, Pattern A = favorable lipid phenotype despite mildly elevated LDL-P 1176.',
    relatedSupplements: ['evoo', 'fishoil'],
    mnemonic: 'LDL Pattern A — the good phenotype. TG 60 drives large fluffy LDL. Favorable physics.',
    xpValue: 20
  }
];
