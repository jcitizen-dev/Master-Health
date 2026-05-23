// ── Quiz seed data (120 questions) ───────────────────────────────────────────
window.HSA = window.HSA || {};

window.HSA.QUIZZES = [
  // ── MY VALUE — Biomarkers (30 questions) ─────────────────────────────────
  { id:'q1', type:'my_value', category:'glucose', difficulty:1,
    question:'What was my glucose result in the latest bloodwork (May 2026)?',
    options:['76 mg/dL','89 mg/dL','95 mg/dL','101 mg/dL'], answer:'89 mg/dL',
    explanation:'89 mg/dL (4.94 mmol/L) — squarely optimal (ref 70–99 mg/dL). Combined with HbA1c 5.3% and HOMA-IR 0.9, this confirms strong, sustained metabolic health.',
    xpReward:10, markerId:'glucose' },

  { id:'q2', type:'my_value', category:'glucose', difficulty:1,
    question:'What was my HbA1c (average blood sugar over 3 months)?',
    options:['4.9%','5.3%','5.6%','6.0%'], answer:'5.3%',
    explanation:'5.3% — well within optimal. Up slightly from 4.89% (July 2025) but still solidly clear of the 5.7% pre-diabetes threshold.',
    xpReward:10, markerId:'hba1c' },

  { id:'q3', type:'high_low', category:'liver', difficulty:1,
    question:'Was my ALT (liver enzyme) in the optimal, borderline, or elevated range?',
    options:['Optimal','Borderline','Elevated','Critically high'], answer:'Optimal',
    explanation:'ALT at 26 U/L — fully recovered from 67 HIGH in April 2026. The TUDCA + NAC protocol delivered measurable results: a 61% improvement. Now solidly optimal.',
    xpReward:15, markerId:'alt' },

  { id:'q4', type:'high_low', category:'liver', difficulty:1,
    question:'Was my AST (liver enzyme) within the reference range?',
    options:['Yes, optimal','Yes, borderline','No, elevated','No, critically elevated'], answer:'Yes, optimal',
    explanation:'AST at 34 U/L — down from 39 (borderline high) in April 2026, now right at the optimal boundary. Full liver recovery confirmed.',
    xpReward:15, markerId:'ast' },

  { id:'q5', type:'my_value', category:'hormones', difficulty:2,
    question:'What was my total testosterone?',
    options:['14.8 nmol/L','17.2 nmol/L','20.9 nmol/L','24.6 nmol/L'], answer:'20.9 nmol/L',
    explanation:'20.9 nmol/L (603 ng/dL Quest) — solidly mid-range. Down from 25.9 (Serbia April 2026), but the key story is SHBG dropping from 53.42 to 30 — more testosterone is now free and bioavailable. Free T of 89.7 pg/mL with SHBG 30 is actually a better profile.',
    xpReward:15, markerId:'testosterone' },

  { id:'q6', type:'my_value', category:'hormones', difficulty:2,
    question:'What was my SHBG (sex hormone binding globulin)?',
    options:['18.6 nmol/L','24.8 nmol/L','30 nmol/L','42.1 nmol/L'], answer:'30 nmol/L',
    explanation:'30 nmol/L — back to the October 2025 baseline, down 44% from the borderline high 53.42 in April 2026. Tongkat Ali + Boron protocol worked. Lower SHBG means free testosterone is now more bioavailable. The whole point of those two supplements.',
    xpReward:15, markerId:'shbg' },

  { id:'q7', type:'my_value', category:'inflammation', difficulty:2,
    question:'What was my homocysteine level?',
    options:['7.8 µmol/L','10.2 µmol/L','12.6 µmol/L','15.1 µmol/L'], answer:'10.2 µmol/L',
    explanation:'10.2 µmol/L — borderline high (optimal <9). This is the direct target of the methylation triad: TMG + B12 + P5P. Each addresses a different pathway of homocysteine clearance.',
    xpReward:15, markerId:'homocysteine' },

  { id:'q8', type:'my_value', category:'vitamins', difficulty:1,
    question:'What was my Vitamin D (25-OH) level?',
    options:['89.4 nmol/L','104.2 nmol/L','136.4 nmol/L','162.8 nmol/L'], answer:'136.4 nmol/L',
    explanation:'136.4 nmol/L — optimal and near the upper reference limit (50–150). 5000 IU D3 daily achieves this. Important: do not increase dose — calcium at 2.55 is already at upper limit.',
    xpReward:10, markerId:'vitd_bm' },

  { id:'q9', type:'my_value', category:'vitamins', difficulty:1,
    question:'What was my Vitamin B12 level?',
    options:['312.4 pg/mL','421.0 pg/mL','530.7 pg/mL','648.2 pg/mL'], answer:'530.7 pg/mL',
    explanation:'530.7 pg/mL — maintained only by ~1000 mcg/day supplementation. Without it, B12 would crash toward deficiency within months on a vegan diet. Zero reliable plant sources of B12.',
    xpReward:10, markerId:'b12_bm' },

  { id:'q10', type:'high_low', category:'kidney', difficulty:2,
    question:'Was my eGFR (kidney filtration estimate) within reference or borderline?',
    options:['Well within optimal','Borderline — near the cutoff','Below reference — concerning','Critically low'], answer:'Well within optimal',
    explanation:'eGFR 79 on the May 2026 Quest panel — solidly normal. Even more importantly: Cystatin C eGFR = 111 (unaffected by creatine), definitively confirming excellent kidney function. The April 2026 Serbia reading of 62.2 was entirely a creatine artifact. Kidneys are excellent.',
    xpReward:15, markerId:'egfr' },

  { id:'q11', type:'my_value', category:'kidney', difficulty:2,
    question:'What was my creatinine in the latest Quest panel, and is it within the reference range?',
    options:['0.82 mg/dL','1.02 mg/dL','1.15 mg/dL','1.34 mg/dL'], answer:'1.15 mg/dL',
    explanation:'1.15 mg/dL — within reference (0.6–1.29) and down from the elevated 119.9 µmol/L in the April 2026 Serbia panel. Cystatin C eGFR of 111 provides gold-standard confirmation that kidney function is excellent. The creatine artifact concern from Serbia is fully resolved.',
    xpReward:15, markerId:'creatinine' },

  { id:'q12', type:'high_low', category:'minerals', difficulty:2,
    question:'Was my potassium elevated, optimal, or low?',
    options:['Low — borderline deficiency','Optimal','Borderline elevated','Critically high'], answer:'Optimal',
    explanation:'Potassium at 4.7 mmol/L — perfectly normal, down from 5.2 (borderline elevated) in April 2026. The prior Serbia reading was likely a hemolysis/dehydration artifact. This panel confirms normal potassium with a well-hydrated, properly timed draw.',
    xpReward:15, markerId:'potassium' },

  { id:'q13', type:'high_low', category:'minerals', difficulty:2,
    question:'Was my UIBC (unsaturated iron binding capacity) within range?',
    options:['Well within optimal','At lower boundary','At upper boundary','Above reference — elevated'], answer:'Well within optimal',
    explanation:'UIBC at 205 mcg/dL (calculated: TIBC 341 − Iron 136) is within reference — a significant improvement from 47.4 µmol/L (elevated) in April 2026. Transferrin is now well-saturated (iron saturation 40%), confirming the iron picture has fully normalised. No longer a vegan iron concern.',
    xpReward:15, markerId:'uibc' },

  { id:'q14', type:'high_low', category:'minerals', difficulty:1,
    question:'Was my albumin within the reference range?',
    options:['Low — below reference','Optimal mid-range','High — above reference','Critically elevated'], answer:'Optimal mid-range',
    explanation:'Albumin at 4.7 g/dL (47 g/L) — solidly optimal and properly hydrated, down from 52 g/L (mildly elevated) in the April 2026 Serbia panel. The dehydration/hemoconcentration artifact from Serbia is gone. Well-hydrated draw, good protein intake, liver synthetic function confirmed.',
    xpReward:15, markerId:'albumin' },

  { id:'q15', type:'my_value', category:'hormones', difficulty:2,
    question:'What was my DHT level, and is it notable given my medication?',
    options:['183.2 pg/mL — very low on dutasteride','483.7 pg/mL — in normal range despite dutasteride','724.1 pg/mL — elevated','912.5 pg/mL — near maximum'], answer:'483.7 pg/mL — in normal range despite dutasteride',
    explanation:'DHT at 483.7 pg/mL despite dutasteride (which blocks ~90% of 5-AR activity) suggests excellent endogenous testosterone production. DHT remains in the normal range (175–913) — the "surprisingly good" result the doctor flagged.',
    xpReward:20, markerId:'dht' },

  { id:'q16', type:'my_value', category:'metabolic', difficulty:1,
    question:'What were my triglycerides?',
    options:['0.41 mmol/L','0.54 mmol/L','0.68 mmol/L','0.92 mmol/L'], answer:'0.68 mmol/L',
    explanation:'0.68 mmol/L (60 mg/dL) — exceptional fat metabolism, even better than April 2026 (0.78). Well under half the upper limit. The fish oil + EVOO + low-refined-carb approach continues to deliver.',
    xpReward:10, markerId:'triglycerides' },

  { id:'q17', type:'my_value', category:'minerals', difficulty:2,
    question:'What was my calcium level, and why is it significant?',
    options:['2.21 mmol/L — low','2.38 mmol/L — mid-range','2.47 mmol/L — mid-range, safely in range','2.65 mmol/L — above reference'], answer:'2.47 mmol/L — mid-range, safely in range',
    explanation:'2.47 mmol/L (9.9 mg/dL) — now comfortably mid-range, down from the concerning 2.55 (right at the upper limit) in April 2026. K2 is routing D3-driven calcium absorption to bone effectively. The 5000 IU/day D3 dose is not pushing calcium too high.',
    xpReward:20, markerId:'calcium' },

  { id:'q18', type:'my_value', category:'hormones', difficulty:2,
    question:'What was my free testosterone on the May 2026 Quest panel?',
    options:['31.2 pg/mL','62.8 pg/mL','89.7 pg/mL','142.4 pg/mL'], answer:'89.7 pg/mL',
    explanation:'89.7 pg/mL — mid-range on the Quest immunoassay (ref 46–224). With SHBG now at 30 (vs 53.42 in April 2026), bioavailable T is 192.4 ng/dL — well within the healthy range. Note: the Serbia panel used a different assay with a different scale; values between panels are not directly comparable.',
    xpReward:15, markerId:'free_testosterone' },

  { id:'q19', type:'my_value', category:'thyroid', difficulty:1,
    question:'What was my TSH?',
    options:['1.12 µIU/mL','1.88 µIU/mL','2.92 µIU/mL','3.54 µIU/mL'], answer:'2.92 µIU/mL',
    explanation:'2.92 µIU/mL — within reference (0.35–4.94), though upper-normal. Anti-TPO (0.24) and Anti-Tg (2.76) being very low confirms no thyroid autoimmunity — an excellent finding.',
    xpReward:10, markerId:'tsh' },

  { id:'q20', type:'my_value', category:'metabolic', difficulty:2,
    question:'What was my Apo B (cardiovascular particle risk marker)?',
    options:['58 mg/dL','72 mg/dL','80 mg/dL','96 mg/dL'], answer:'80 mg/dL',
    explanation:'80 mg/dL — now right at the optimal threshold, down from borderline 89 in April 2026. The fish oil and EVOO protocol continues to improve the atherogenic particle picture.',
    xpReward:15, markerId:'apo_b' },

  { id:'q21', type:'my_value', category:'inflammation', difficulty:1,
    question:'What was my CRP (C-reactive protein)?',
    options:['<0.2 mg/L','0.4 mg/L','0.8 mg/L','1.4 mg/L'], answer:'<0.2 mg/L',
    explanation:'Reported as <0.2 mg/L — essentially undetectable. A dramatic improvement from 1.0 (borderline) in the April 2026 Serbia panel. The anti-inflammatory stack (fish oil, ginger, garlic, fisetin, EVOO) is clearly working. Near-zero CRP is the longevity ideal.',
    xpReward:15, markerId:'crp' },

  { id:'q22', type:'my_value', category:'minerals', difficulty:1,
    question:'What was my ferritin (iron storage)?',
    options:['31 ng/mL','54 ng/mL','71 ng/mL','108 ng/mL'], answer:'71 ng/mL',
    explanation:'71 ng/mL — adequate stores, down from 129.1 in April 2026. The decrease likely reflects resolved inflammation (CRP dropped from 1.0 to <0.2 — ferritin also rises with inflammation). Iron saturation (40%) and serum iron (136 mcg/dL) are both solidly normal.',
    xpReward:10, markerId:'ferritin' },

  { id:'q23', type:'my_value', category:'hormones', difficulty:2,
    question:'What was my DHEA-S?',
    options:['74 µg/dL','98 µg/dL','120 µg/dL','158 µg/dL'], answer:'120 µg/dL',
    explanation:'120 µg/dL — lower than expected and down from 187.6 in April 2026. At 46, natural DHEA decline is expected, but 120 is below the functional optimal zone (>150). This is the borderline marker to monitor at the next panel.',
    xpReward:15, markerId:'dhea_s' },

  { id:'q24', type:'my_value', category:'vitamins', difficulty:1,
    question:'What was my folate level?',
    options:['6.2 ng/mL','8.9 ng/mL','10.7 ng/mL','14.3 ng/mL'], answer:'10.7 ng/mL',
    explanation:'10.7 ng/mL — optimal (ref 4.6–18.7). Folate is a genuine vegan dietary strength — green vegetables, legumes, and seeds are rich sources. Works with B12 and TMG in the methylation cycle.',
    xpReward:10, markerId:'folate' },

  { id:'q25', type:'high_low', category:'thyroid', difficulty:2,
    question:'Were my thyroid antibodies (Anti-TPO and Anti-Tg) elevated?',
    options:['Both elevated — Hashimoto\'s pattern','Anti-TPO elevated only','Anti-Tg elevated only','Both very low — no autoimmunity'], answer:'Both very low — no autoimmunity',
    explanation:'Anti-TPO at 0.24 (ref <5.61) and Anti-Tg at 2.76 (ref <4.11) are both very low. Thyroid autoimmunity is essentially absent — a "surprisingly good" finding the doctor flagged, especially reassuring given iodine supplementation.',
    xpReward:20, markerId:'anti_tpo' },

  { id:'q26', type:'my_value', category:'hormones', difficulty:2,
    question:'What was my LH (luteinizing hormone)?',
    options:['2.14 mIU/mL','4.33 mIU/mL','6.26 mIU/mL','9.88 mIU/mL'], answer:'6.26 mIU/mL',
    explanation:'6.26 mIU/mL — mid-range (ref 0.57–12.07). Normal LH confirms the pituitary is appropriately signalling the testes. No evidence of central hypogonadism or pituitary suppression.',
    xpReward:15, markerId:'lh' },

  { id:'q27', type:'my_value', category:'hormones', difficulty:2,
    question:'What was my cortisol (morning)?',
    options:['112.4 nmol/L','156.8 nmol/L','199.8 nmol/L','324.1 nmol/L'], answer:'199.8 nmol/L',
    explanation:'199.8 nmol/L — mid-range for a morning sample (ref 101–536). Appropriate cortisol awakening response. Ashwagandha + magnesium at night buffer HPA axis reactivity without over-suppressing morning cortisol.',
    xpReward:15, markerId:'cortisol' },

  { id:'q28', type:'my_value', category:'inflammation', difficulty:2,
    question:'What was my fibrinogen?',
    options:['2.1 g/L','2.7 g/L','3.4 g/L','3.9 g/L'], answer:'3.4 g/L',
    explanation:'3.4 g/L — within range (2.0–4.0), upper-normal. Fibrinogen is both a clotting factor and an inflammatory marker. Fish oil has mild fibrinogen-reducing effects, helping keep this in check.',
    xpReward:10, markerId:'fibrinogen' },

  { id:'q29', type:'my_value', category:'liver', difficulty:1,
    question:'What was my GGT?',
    options:['9 U/L','17 U/L','31 U/L','44 U/L'], answer:'17 U/L',
    explanation:'17 U/L — down from 26 (April 2026), even further into the optimal zone. GGT confirms non-cholestatic pattern. Combined with AST 34 and ALT 26, this confirms full liver recovery.',
    xpReward:15, markerId:'ggt' },

  { id:'q30', type:'my_value', category:'hormones', difficulty:2,
    question:'What was my IGF-1?',
    options:['98.4 ng/mL','124.6 ng/mL','146.8 ng/mL','188.2 ng/mL'], answer:'146.8 ng/mL',
    explanation:'146.8 ng/mL — solidly mid-range (ref 88.5–216). Reflects adequate growth hormone axis activity, protein intake, training stimulus, and sleep quality. A healthy anabolic benchmark.',
    xpReward:10, markerId:'igf1' },

  // ── DOSAGE questions (25 questions) ──────────────────────────────────────
  { id:'q31', type:'dosage', category:'methylation', difficulty:1,
    question:'What is my NMN dose?',
    options:['100–200 mg','250–500 mg','500–1000 mg','1500–2000 mg'], answer:'500–1000 mg',
    explanation:'500–1000 mg taken fasted. NMN is a direct NAD+ precursor. Fasted intake maximises absorption. Paired with TMG to protect the SAMe pool.',
    xpReward:10, supplementId:'nmn' },

  { id:'q32', type:'dosage', category:'liver', difficulty:1,
    question:'What is my NAC dose?',
    options:['300 mg','600 mg','1200 mg','2400 mg'], answer:'600 mg',
    explanation:'600 mg taken fasted on training days only. NAC is the rate-limiting glutathione precursor. Skipped on rest days to avoid blunting training-adaptation ROS signalling.',
    xpReward:10, supplementId:'nac' },

  { id:'q33', type:'dosage', category:'methylation', difficulty:1,
    question:'What is my TMG (trimethylglycine) dose?',
    options:['500 mg','1000–1500 mg','2000 mg','3000 mg'], answer:'1000–1500 mg',
    explanation:'1000–1500 mg fasted. TMG directly converts homocysteine → methionine via BHMT. Also protects the SAMe pool depleted by NMN methylation demand.',
    xpReward:10, supplementId:'tmg' },

  { id:'q34', type:'dosage', category:'vegan', difficulty:1,
    question:'What is my Vitamin B12 dose?',
    options:['50 mcg','250 mcg','~1000 mcg','5000 mcg'], answer:'~1000 mcg',
    explanation:'~1000 mcg/day. High dose is necessary: B12 absorption via intrinsic factor is capped at ~1.5 mcg per dose — the rest requires passive diffusion at only 1% efficiency. This maintains B12 at 530.7 pg/mL.',
    xpReward:10, supplementId:'b12' },

  { id:'q35', type:'dosage', category:'training', difficulty:1,
    question:'What dose of citrulline do I take pre-workout?',
    options:['2–3 g','4–5 g','6–8 g','10–12 g'], answer:'6–8 g',
    explanation:'6–8 g taken 30–45 min pre-workout. 6 g is the minimum effective dose; 8 g maximises nitric oxide production and blood flow to working muscles.',
    xpReward:10, supplementId:'citrulline' },

  { id:'q36', type:'dosage', category:'hair', difficulty:2,
    question:'What dose of dutasteride do I take?',
    options:['0.1 mg','0.25 mg','0.5 mg','1.0 mg'], answer:'0.5 mg',
    explanation:'0.5 mg daily — the standard therapeutic dose. Dutasteride blocks both type I and II 5-alpha reductase, reducing DHT by ~90–95%. Requires medical supervision and prescription.',
    xpReward:15, supplementId:'dutasteride' },

  { id:'q37', type:'dosage', category:'training', difficulty:1,
    question:'What is my creatine monohydrate dose?',
    options:['2 g','3 g','5 g','10 g'], answer:'5 g',
    explanation:'5 g/day — the evidence-based maintenance dose. Saturates muscle phosphocreatine stores for strength, power, and cognitive performance. No loading phase needed.',
    xpReward:10, supplementId:'creatine' },

  { id:'q38', type:'dosage', category:'vegan', difficulty:1,
    question:'What is my Vitamin D3 dose?',
    options:['1000 IU','2000 IU','5000 IU','10000 IU'], answer:'5000 IU',
    explanation:'5000 IU daily — achieves 136.4 nmol/L (optimal). With calcium at 2.55 (upper limit) and D at near-upper range, this dose should not be increased further.',
    xpReward:10, supplementId:'vitd' },

  { id:'q39', type:'dosage', category:'methylation', difficulty:1,
    question:'What is my Vitamin K2 dose?',
    options:['50 mcg','100–200 mcg','400 mcg','1000 mcg'], answer:'100–200 mcg',
    explanation:'100–200 mcg (MK-7 form) taken with D3. K2 activates osteocalcin (calcium into bone) and Matrix Gla Protein (prevents arterial calcium deposition) — the essential D3 safety partner.',
    xpReward:10, supplementId:'k2' },

  { id:'q40', type:'dosage', category:'vegan', difficulty:1,
    question:'What dose of fish oil do I take (as EPA/DHA)?',
    options:['500 mg EPA/DHA','~1–2 g EPA/DHA','3–4 g EPA/DHA','5+ g EPA/DHA'], answer:'~1–2 g EPA/DHA',
    explanation:'~1–2 g EPA/DHA daily. EPA is the primary anti-inflammatory omega-3; DHA for brain and membrane function. The only non-vegan supplement in the stack — pragmatically chosen for efficacy.',
    xpReward:10, supplementId:'fishoil' },

  { id:'q41', type:'dosage', category:'vegan', difficulty:1,
    question:'What is my taurine dose?',
    options:['250 mg','500 mg','1–2 g','4–6 g'], answer:'1–2 g',
    explanation:'1–2 g daily in the post-workout shake. Taurine is essentially absent in plants — a genuine vegan gap for cardiovascular function, bile acid conjugation, and muscle performance.',
    xpReward:10, supplementId:'taurine' },

  { id:'q42', type:'dosage', category:'methylation', difficulty:2,
    question:'What is my fisetin dose?',
    options:['100 mg','250 mg','500 mg','1000 mg'], answer:'500 mg',
    explanation:'500 mg taken with a fat-containing meal on pulse days (Sat + Sun). Pulsed protocol mirrors human senolytic trials — daily dosing is not recommended for senolytics.',
    xpReward:15, supplementId:'fisetin' },

  { id:'q43', type:'dosage', category:'hormones', difficulty:2,
    question:'What is my Tongkat Ali dose?',
    options:['50–100 mg','200–400 mg','600–800 mg','1000 mg'], answer:'200–400 mg',
    explanation:'200–400 mg, cycled (Mon, Tue, Thu — off Wed, Fri, Sat, Sun). Targeting SHBG reduction and free testosterone optimisation. Cycled to prevent receptor downregulation.',
    xpReward:15, supplementId:'tongkat' },

  { id:'q44', type:'dosage', category:'liver', difficulty:2,
    question:'What is my TUDCA dose?',
    options:['100–150 mg','250–500 mg','750 mg–1 g','1.5–2 g'], answer:'250–500 mg',
    explanation:'250–500 mg on training days, with lunch. TUDCA (tauroursodeoxycholic acid) specifically protects hepatocytes from bile-acid toxicity and ER stress — the hepatoprotective partner to NAC.',
    xpReward:15, supplementId:'tudca' },

  { id:'q45', type:'dosage', category:'methylation', difficulty:2,
    question:'What is my P5P (active B6) dose?',
    options:['5–10 mg','25–50 mg','100 mg','250 mg'], answer:'25–50 mg',
    explanation:'25–50 mg daily. P5P is the active form of B6 — cofactor for the transsulfuration pathway (converting homocysteine → cystathionine). Works alongside TMG and B12 in the methylation triad.',
    xpReward:15, supplementId:'p5p' },

  { id:'q46', type:'dosage', category:'hormones', difficulty:1,
    question:'What is my boron dose?',
    options:['1 mg','3–6 mg','10 mg','20 mg'], answer:'3–6 mg',
    explanation:'3–6 mg daily. Evidence shows boron (6 mg/day for one week) reduces SHBG by ~9% and increases free testosterone. Works synergistically with Tongkat Ali on the SHBG target.',
    xpReward:10, supplementId:'boron' },

  { id:'q47', type:'dosage', category:'neuro', difficulty:1,
    question:'What is my magnesium glycinate dose (elemental magnesium)?',
    options:['100–150 mg','200–250 mg','300–400 mg','500–600 mg'], answer:'300–400 mg',
    explanation:'300–400 mg elemental magnesium nightly. Glycinate is the most bioavailable, GI-gentle form. Supports sleep, muscle relaxation, ATP synthesis, and GABA modulation.',
    xpReward:10, supplementId:'magnesium' },

  { id:'q48', type:'dosage', category:'vegan', difficulty:1,
    question:'What is my zinc dose?',
    options:['5–10 mg','15–30 mg','50 mg','100 mg'], answer:'15–30 mg',
    explanation:'15–30 mg nightly. Addresses the classic vegan zinc gap (plant zinc bioavailability is 50–70% lower due to phytates). Zinc supports testosterone synthesis, immune function, and 300+ enzymatic reactions.',
    xpReward:10, supplementId:'zinc' },

  { id:'q49', type:'dosage', category:'neuro', difficulty:1,
    question:'What is my ashwagandha dose?',
    options:['100–200 mg','300–600 mg','800 mg–1 g','1.5–2 g'], answer:'300–600 mg',
    explanation:'300–600 mg nightly with magnesium as the calming recovery stack. KSM-66 or Sensoril are the standardised extracts with the best human trial evidence.',
    xpReward:10, supplementId:'ashwagandha' },

  { id:'q50', type:'dosage', category:'methylation', difficulty:1,
    question:'What is my glycine dose?',
    options:['500 mg–1 g','1–2 g','3–5 g','8–10 g'], answer:'3–5 g',
    explanation:'3–5 g nightly. Glycine improves sleep quality, supports collagen synthesis, acts as a methyl buffer (prevents hypermethylation), and is a glutathione precursor alongside NAC.',
    xpReward:10, supplementId:'glycine' },

  { id:'q51', type:'dosage', category:'neuro', difficulty:2,
    question:'What is my apigenin dose?',
    options:['10–20 mg','~50 mg','100–150 mg','200 mg'], answer:'~50 mg',
    explanation:'~50 mg taken with NMN. Apigenin inhibits CD38 — the enzyme that degrades NAD+. This is the mechanistic synergy: NMN builds NAD+, Apigenin prevents its breakdown.',
    xpReward:15, supplementId:'apigenin' },

  { id:'q52', type:'dosage', category:'vegan', difficulty:1,
    question:'What is my iodine dose?',
    options:['50 mcg','~150 mcg','300 mcg','1000 mcg'], answer:'~150 mcg',
    explanation:'~150 mcg daily — the RDA. Vegan diets are consistently iodine-deficient (no dairy, no seafood). Do not exceed 300 mcg without medical guidance, as excess iodine can suppress thyroid.',
    xpReward:10, supplementId:'iodine' },

  { id:'q53', type:'dosage', category:'training', difficulty:1,
    question:'How much protein do I aim for per shake?',
    options:['15–20 g','25–30 g','~30–40 g','50–60 g'], answer:'~30–40 g',
    explanation:'~30–40 g per shake. Vegans need ~1.6–2.2 g protein/kg/day for muscle growth. The shake closes the gap between whole-food plant protein and this target.',
    xpReward:10, supplementId:'protein' },

  { id:'q54', type:'dosage', category:'hair', difficulty:1,
    question:'What dose of topical minoxidil do I use?',
    options:['0.5 mL once daily','1 mL twice daily','2 mL once daily','0.25 mL once daily'], answer:'1 mL twice daily',
    explanation:'1 mL of 5% minoxidil solution, applied twice daily to the scalp. This is the standard clinical dose. The "minoxidil shed" in weeks 4–8 is a normal part of the follicle reset.',
    xpReward:10, supplementId:'rogaine' },

  { id:'q55', type:'dosage', category:'gut', difficulty:1,
    question:'What is my Vitamin C dose?',
    options:['100–200 mg','500–1000 mg','2000–3000 mg','5000 mg'], answer:'500–1000 mg',
    explanation:'500–1000 mg daily at lunch. Vitamin C enhances non-heme iron absorption (critical for vegans), regenerates glutathione, and has anti-inflammatory properties targeting CRP of 1.0.',
    xpReward:10, supplementId:'vitc' },

  // ── DOSAGE TIMING questions (20 questions) ────────────────────────────────
  { id:'q56', type:'dosage_timing', category:'methylation', difficulty:1,
    question:'WHEN and WHY do I take NMN fasted?',
    options:['With food — NAD+ needs dietary fat','Fasted — maximises absorption and pairs with TMG to protect SAMe','At night — supports circadian NAD+ rhythm','Post-workout — capitalises on anabolic window'], answer:'Fasted — maximises absorption and pairs with TMG to protect SAMe',
    explanation:'NMN is taken fasted for maximum absorption via the Slc12a8 transporter. It\'s taken alongside TMG because NMN increases methylation demand, depleting SAMe — TMG donates methyl groups to protect the pool.',
    xpReward:15, supplementId:'nmn' },

  { id:'q57', type:'dosage_timing', category:'liver', difficulty:2,
    question:'WHY is NAC skipped on rest days?',
    options:['To save money','To prevent GI discomfort','Rest days don\'t need liver support','To avoid blunting training adaptation from ROS signalling'], answer:'To avoid blunting training adaptation from ROS signalling',
    explanation:'Reactive oxygen species (ROS) generated during training are signalling molecules that drive adaptation (mitochondrial biogenesis, strength gains). On rest days, NAC\'s antioxidant effect doesn\'t blunt anything — but the hepatoprotective benefit on training days is retained.',
    xpReward:20, supplementId:'nac' },

  { id:'q58', type:'dosage_timing', category:'training', difficulty:1,
    question:'WHEN is citrulline taken and why?',
    options:['Post-workout — for recovery','Fasted morning — for NO production all day','30–45 min pre-workout — to peak nitric oxide during training','Before bed — to improve sleep blood flow'], answer:'30–45 min pre-workout — to peak nitric oxide during training',
    explanation:'Citrulline is taken 30–45 min before training. It takes ~45–60 min to convert to arginine in the kidneys and generate peak nitric oxide — timed to maximise blood flow during the workout.',
    xpReward:15, supplementId:'citrulline' },

  { id:'q59', type:'dosage_timing', category:'methylation', difficulty:1,
    question:'WHY are Vitamin D3 and K2 always taken together?',
    options:['They taste better together','D3 drives calcium absorption; K2 routes it to bone not arteries','K2 activates D3 from its inactive form','D3 prevents K2 toxicity'], answer:'D3 drives calcium absorption; K2 routes it to bone not arteries',
    explanation:'D3 increases calcium absorption from the gut. Without K2, this calcium can deposit in arteries (calcification risk). K2 activates osteocalcin (bone deposition) and Matrix Gla Protein (arterial protection) — routing calcium to the right destination.',
    xpReward:15, supplementId:'k2' },

  { id:'q60', type:'dosage_timing', category:'neuro', difficulty:1,
    question:'WHY is magnesium taken at night?',
    options:['It would disrupt sleep if taken in the morning','It maximises absorption before food','Magnesium supports sleep via NMDA antagonism and GABA activity','It needs to be separated from B12 by 12 hours'], answer:'Magnesium supports sleep via NMDA antagonism and GABA activity',
    explanation:'Magnesium acts as an NMDA receptor antagonist (calming excitatory neurons) and promotes GABA activity — both mechanisms reduce neural excitation and support sleep onset and quality.',
    xpReward:15, supplementId:'magnesium' },

  { id:'q61', type:'dosage_timing', category:'hormones', difficulty:2,
    question:'WHY is Tongkat Ali cycled (not taken daily)?',
    options:['It\'s too expensive to use daily','Daily use causes liver toxicity','To prevent receptor downregulation and maintain sensitivity','It only works acutely, not chronically'], answer:'To prevent receptor downregulation and maintain sensitivity',
    explanation:'Tongkat Ali is cycled (Mon, Tue, Thu) to prevent receptor desensitisation. Continuous stimulation of the HPG axis can lead to downregulation — cycling maintains the sensitivity of the response.',
    xpReward:20, supplementId:'tongkat' },

  { id:'q62', type:'dosage_timing', category:'methylation', difficulty:2,
    question:'WHY is fisetin taken in a pulsed protocol rather than daily?',
    options:['Daily use causes tolerance','Daily fisetin is hepatotoxic','Senolytic clearance of zombie cells is episodic, not continuous','Fisetin is too expensive for daily use'], answer:'Senolytic clearance of zombie cells is episodic, not continuous',
    explanation:'Senolytics work by triggering apoptosis in accumulated senescent cells. This clearance happens episodically — once cleared, they take time to re-accumulate. Daily senolytics would have diminishing returns and risk removing cells needed for acute processes like wound healing.',
    xpReward:20, supplementId:'fisetin' },

  { id:'q63', type:'dosage_timing', category:'liver', difficulty:2,
    question:'WHY are NAC and TUDCA taken together on training days?',
    options:['They cancel each other out on rest days','They provide complementary hepatoprotection: NAC via glutathione, TUDCA via bile acid displacement','They need each other for absorption','To double the dose of one active compound'], answer:'They provide complementary hepatoprotection: NAC via glutathione, TUDCA via bile acid displacement',
    explanation:'NAC boosts glutathione (antioxidant protection of hepatocytes). TUDCA displaces toxic bile acids and reduces ER stress (structural protection). Together they address hepatocellular stress from two different angles — directly relevant to AST 39 + ALT 67.',
    xpReward:20, supplementId:'tudca' },

  { id:'q64', type:'dosage_timing', category:'methylation', difficulty:2,
    question:'WHEN and WHY is apigenin taken with NMN?',
    options:['At night — to extend NAD+ production during sleep','With NMN in the morning — Apigenin inhibits CD38 to protect the NAD+ NMN builds','Post-workout — to enhance muscle NAD+ usage','With food — apigenin needs fat for absorption'], answer:'With NMN in the morning — Apigenin inhibits CD38 to protect the NAD+ NMN builds',
    explanation:'CD38 is the primary NAD+ consumer in the body, degrading most NAD+ almost as fast as it\'s produced. Apigenin inhibits CD38, protecting the NAD+ that NMN builds. The synergy: one builds NAD+, the other blocks its breakdown.',
    xpReward:20, supplementId:'apigenin' },

  { id:'q65', type:'dosage_timing', category:'training', difficulty:1,
    question:'WHY is EVOO included in the post-workout shake?',
    options:['For calorie density only','To replace the fat lost in training','As a fat vehicle for fat-soluble supplements (D3, K2, fish oil) and for its anti-inflammatory oleocanthal','Because protein needs fat to be digested'], answer:'As a fat vehicle for fat-soluble supplements (D3, K2, fish oil) and for its anti-inflammatory oleocanthal',
    explanation:'EVOO enables absorption of fat-soluble vitamins D3 and K2 in the shake. Separately, oleocanthal in EVOO is a natural COX inhibitor with similar mechanism to ibuprofen — contributing to the anti-inflammatory protocol targeting CRP 1.0.',
    xpReward:15, supplementId:'evoo' },

  { id:'q66', type:'dosage_timing', category:'gut', difficulty:1,
    question:'WHY is Vitamin C timed at lunch (with food)?',
    options:['Vitamin C is best absorbed in the afternoon','To enhance non-heme iron absorption from plant foods in the meal','It would disrupt sleep if taken at night','Vitamin C requires B12 co-absorption'], answer:'To enhance non-heme iron absorption from plant foods in the meal',
    explanation:'Vitamin C reduces ferric iron (Fe3+) to ferrous iron (Fe2+), dramatically increasing non-heme iron absorption from plant foods. This directly addresses the vegan iron gap — and explains why serum iron is borderline (12.3) but ferritin is solid (129.1).',
    xpReward:15, supplementId:'vitc' },

  { id:'q67', type:'dosage_timing', category:'neuro', difficulty:1,
    question:'WHY are magnesium and ashwagandha taken together at night?',
    options:['They are poorly absorbed separately','They both fight insomnia from different angles: Mg via NMDA, Ashwagandha via cortisol','Ashwagandha activates magnesium absorption','They neutralise each other\'s stimulant effects'], answer:'They both fight insomnia from different angles: Mg via NMDA, Ashwagandha via cortisol',
    explanation:'Magnesium reduces neural excitation (NMDA antagonism, GABA support). Ashwagandha reduces cortisol via HPA axis modulation. Together they create a synergistic relaxation and recovery stack — addressing sleep from both neurological and hormonal angles.',
    xpReward:15, supplementId:'ashwagandha' },

  { id:'q68', type:'dosage_timing', category:'hair', difficulty:2,
    question:'WHY does the hair protocol use THREE different products (dutasteride, minoxidil, copper peptide)?',
    options:['Because one product isn\'t enough — they\'re all the same mechanism','Each targets a different failure point in androgenic alopecia (upstream → midstream → downstream)','The doctor required all three for insurance','They need each other to be absorbed topically'], answer:'Each targets a different failure point in androgenic alopecia (upstream → midstream → downstream)',
    explanation:'Dutasteride blocks DHT production (upstream — source), Minoxidil increases follicle blood flow (midstream — delivery), Copper Peptide (GHK-Cu) promotes follicle proliferation and angiogenesis (downstream — response). Multi-mechanism protocols outperform single agents in AGA.',
    xpReward:20, supplementId:'dutasteride' },

  { id:'q69', type:'dosage_timing', category:'vegan', difficulty:1,
    question:'WHY must B12 be taken at high doses (~1000 mcg) when the RDA is only 2.4 mcg?',
    options:['B12 is unstable and degrades rapidly','Vegans metabolise B12 faster than omnivores','B12 absorption via intrinsic factor is capped at ~1.5 mcg per dose; the rest requires passive diffusion at only 1% efficiency','B12 is excreted in urine within minutes of absorption'], answer:'B12 absorption via intrinsic factor is capped at ~1.5 mcg per dose; the rest requires passive diffusion at only 1% efficiency',
    explanation:'The intrinsic factor (IF) system can only absorb ~1.5 mcg per dose — the rest is absorbed via passive diffusion at ~1% efficiency. To absorb 10 mcg passively, you need to consume 1000 mcg. This is why high-dose B12 is necessary for vegans.',
    xpReward:20, supplementId:'b12' },

  { id:'q70', type:'dosage_timing', category:'training', difficulty:1,
    question:'WHY is creatine taken daily (not just on training days)?',
    options:['Creatine only works on training days','To maintain consistent elevated muscle phosphocreatine stores throughout the week','It\'s too difficult to remember otherwise','Daily dosing prevents kidney damage'], answer:'To maintain consistent elevated muscle phosphocreatine stores throughout the week',
    explanation:'Creatine works by saturating muscle stores over time. Daily dosing maintains this saturation. The benefit isn\'t acute (unlike caffeine) — it\'s the chronically elevated muscle phosphocreatine that provides strength/power advantages.',
    xpReward:10, supplementId:'creatine' },

  { id:'q71', type:'dosage_timing', category:'vegan', difficulty:2,
    question:'WHY is taurine in the post-workout shake (not morning fasted stack)?',
    options:['Taurine competes with NMN for absorption','Post-workout is when muscle taurine demand is highest','Taurine causes insomnia if taken in the morning','Taurine needs protein to be absorbed'], answer:'Post-workout is when muscle taurine demand is highest',
    explanation:'Taurine is an osmolyte in muscle cells — muscle contraction depletes it. Post-workout timing replenishes depleted muscle taurine during recovery. Taurine also supports bile acid conjugation relevant to the fat-containing shake.',
    xpReward:15, supplementId:'taurine' },

  { id:'q72', type:'dosage_timing', category:'methylation', difficulty:2,
    question:'WHY is glycine taken at night specifically?',
    options:['Glycine is a stimulant and would disrupt sleep if taken in the morning','Glycine reduces core body temperature, facilitating sleep onset','Glycine competes with NMN for absorption in the morning','Glycine is poorly absorbed without being combined with magnesium'], answer:'Glycine reduces core body temperature, facilitating sleep onset',
    explanation:'Glycine reduces core body temperature by promoting vasodilation — a drop in core temp is the physiological trigger for sleep onset. RCTs show 3 g glycine improves sleep quality, time to sleep, and morning alertness.',
    xpReward:20, supplementId:'glycine' },

  { id:'q73', type:'dosage_timing', category:'vegan', difficulty:1,
    question:'WHY is fish oil taken with the post-workout shake (with food) rather than fasted?',
    options:['Fish oil would blunt the fasted NMN absorption','Fish oil is fat-soluble and requires dietary fat for absorption','Fish oil causes nausea when taken without food in some people only','Omega-3s are activated by protein digestion'], answer:'Fish oil is fat-soluble and requires dietary fat for absorption',
    explanation:'EPA and DHA are fat-soluble — they require dietary fat for micelle formation and intestinal absorption. The post-workout shake contains EVOO, which serves as the fat vehicle for fish oil (and D3 + K2) absorption.',
    xpReward:15, supplementId:'fishoil' },

  { id:'q74', type:'dosage_timing', category:'gut', difficulty:1,
    question:'WHEN is the probiotic taken and why?',
    options:['Fasted morning — bacteria need an empty stomach','At night — gut bacteria are active during sleep','With or just before a meal — to improve survival through stomach acid','Post-workout — protein provides a growth medium'], answer:'With or just before a meal — to improve survival through stomach acid',
    explanation:'Stomach acid pH is highest when fasting. Taking probiotics with food buffers the acid environment, dramatically improving survival of bacteria through the stomach to reach the intestine.',
    xpReward:10, supplementId:'probiotic' },

  { id:'q75', type:'dosage_timing', category:'methylation', difficulty:2,
    question:'WHY is P5P the preferred form of B6 over regular pyridoxine?',
    options:['P5P is cheaper than pyridoxine','P5P is the active form — no conversion step needed, and pyridoxine above 50 mg/day risks neuropathy','P5P has better taste','Pyridoxine requires stomach acid to convert, which we suppress'], answer:'P5P is the active form — no conversion step needed, and pyridoxine above 50 mg/day risks neuropathy',
    explanation:'P5P (pyridoxal-5-phosphate) is the active coenzyme form of B6. Pyridoxine (the common supplement) must be converted by pyridoxal kinase. Critically: regular pyridoxine above 50 mg/day causes peripheral neuropathy — P5P at 25–50 mg is far safer and more targeted.',
    xpReward:20, supplementId:'p5p' },

  // ── MULTIPLE CHOICE — Mechanism/Science (20 questions) ────────────────────
  { id:'q76', type:'multiple_choice', category:'methylation', difficulty:2,
    question:'What enzyme does Apigenin inhibit, and why does this matter for NAD+ levels?',
    options:['SIRT1 — extends NAD+ half-life','CD38 — CD38 is the primary NAD+ consumer; inhibiting it preserves the NAD+ NMN builds','PARP — prevents NAD+ from being used in DNA repair','NMNAT — prevents excess NAD+ synthesis'], answer:'CD38 — CD38 is the primary NAD+ consumer; inhibiting it preserves the NAD+ NMN builds',
    explanation:'CD38 (cyclic ADP-ribose hydrolase) degrades NAD+ in most tissues. Its activity increases with age and inflammation. Apigenin inhibiting CD38 means NAD+ produced by NMN supplementation is protected from rapid breakdown.',
    xpReward:20, supplementId:'apigenin' },

  { id:'q77', type:'multiple_choice', category:'liver', difficulty:2,
    question:'In the April 2026 panel, AST was 39 and ALT was 67. Why did normal GGT contextualise those elevations as benign?',
    options:['GGT being normal means the liver is fine and AST/ALT can be ignored','Normal GGT rules out cholestatic liver disease and alcohol as causes — making training/supplement stress the most likely explanation — confirmed when both values normalised by May 2026','GGT measures the same thing as ALT, so normal GGT overrides elevated ALT','Low GGT means the liver can\'t metabolise supplements'], answer:'Normal GGT rules out cholestatic liver disease and alcohol as causes — making training/supplement stress the most likely explanation — confirmed when both values normalised by May 2026',
    explanation:'GGT is specifically elevated in: alcohol consumption, bile duct obstruction, fatty liver, and cholestatic disease. Normal GGT with elevated AST/ALT = hepatocellular pattern without cholestasis — strongly pointing to muscle stress, training load, or supplement effects rather than structural liver damage. Confirmed: both AST and ALT normalised by May 2026 (AST 34, ALT 26).',
    xpReward:20, markerId:'ggt' },

  { id:'q78', type:'multiple_choice', category:'methylation', difficulty:3,
    question:'Homocysteine can be cleared via two pathways. Which supplements support each?',
    options:['Pathway A (remethylation): TMG + B12; Pathway B (transsulfuration): P5P + NAC','Pathway A: NAC + TUDCA; Pathway B: TMG + fisetin','Pathway A: Zinc + Boron; Pathway B: Glycine + Apigenin','Pathway A: Citrulline + Taurine; Pathway B: Creatine + Glycine'], answer:'Pathway A (remethylation): TMG + B12; Pathway B (transsulfuration): P5P + NAC',
    explanation:'Remethylation converts homocysteine → methionine using TMG (via BHMT) or B12/folate (via methionine synthase). Transsulfuration converts homocysteine → cystathionine → cysteine (and ultimately glutathione) via CBS, which requires P5P. NAC provides cysteine at the end of this pathway.',
    xpReward:30, markerId:'homocysteine' },

  { id:'q79', type:'multiple_choice', category:'training', difficulty:2,
    question:'Why does creatine supplementation make eGFR appear lower than actual kidney function?',
    options:['Creatine damages the glomerular membrane over time','Creatine → creatinine is a normal metabolic byproduct; more creatine = more creatinine = lower calculated eGFR, despite no actual filtration impairment','Creatine competes with creatinine for renal tubular secretion','Creatine dehydrates the blood, concentrating creatinine falsely'], answer:'Creatine → creatinine is a normal metabolic byproduct; more creatine = more creatinine = lower calculated eGFR, despite no actual filtration impairment',
    explanation:'eGFR is calculated from serum creatinine using equations (CKD-EPI, MDRD). Higher creatine intake → more creatine phosphate → more creatinine released. The kidney is filtering normally, but the formula sees elevated creatinine and calculates a lower eGFR. The clue that it\'s an artifact: urea is normal (6.4). Confirmed: eGFR recovered to 79 on the May 2026 Quest panel, and Cystatin C eGFR of 111 definitively rules out any kidney impairment.',
    xpReward:20, supplementId:'creatine' },

  { id:'q80', type:'multiple_choice', category:'hormones', difficulty:2,
    question:'Why might a vegan diet specifically raise SHBG levels?',
    options:['Plant protein directly stimulates SHBG liver production','High-fibre vegan diets reduce enterohepatic recycling of estrogens, altering the hormonal signals that regulate hepatic SHBG production','Vegan diets are low in zinc, which directly controls SHBG synthesis','Plant-based diets increase insulin, which raises SHBG'], answer:'High-fibre vegan diets reduce enterohepatic recycling of estrogens, altering the hormonal signals that regulate hepatic SHBG production',
    explanation:'Dietary fibre binds estrogens in the gut and prevents their reabsorption (enterohepatic recirculation). Lower circulating estrogens alter the hormonal milieu, and SHBG production (in the liver) is sensitive to sex steroid levels. Additionally, high-fibre diets are associated with lower insulin — and insulin is a potent suppressor of SHBG.',
    xpReward:20, markerId:'shbg' },

  { id:'q81', type:'multiple_choice', category:'neuro', difficulty:2,
    question:'How does Ashwagandha reduce cortisol — at what level of the HPA axis does it act?',
    options:['At the adrenal gland — blocks cortisol synthesis directly','At the hypothalamic level — reduces CRH secretion, thereby reducing ACTH and then cortisol','At the pituitary — blocks ACTH receptor','At the kidney — increases cortisol excretion'], answer:'At the hypothalamic level — reduces CRH secretion, thereby reducing ACTH and then cortisol',
    explanation:'Withanolides (ashwagandha\'s active compounds) act on the hypothalamus to reduce CRH (corticotropin-releasing hormone) secretion. This reduces pituitary ACTH release, which in turn reduces adrenal cortisol synthesis. It modulates the axis at the top, not the end-organ.',
    xpReward:20, supplementId:'ashwagandha' },

  { id:'q82', type:'multiple_choice', category:'hair', difficulty:3,
    question:'Dutasteride vs finasteride — why does dutasteride have superior hair preservation in trials?',
    options:['Dutasteride has a longer half-life only','Dutasteride blocks both type I AND type II 5-alpha reductase; finasteride only blocks type II — providing more complete DHT suppression in skin/scalp','Dutasteride is applied topically; finasteride is systemic','Dutasteride directly stimulates hair follicle growth factors'], answer:'Dutasteride blocks both type I AND type II 5-alpha reductase; finasteride only blocks type II — providing more complete DHT suppression in skin/scalp',
    explanation:'Type I 5-AR is dominant in scalp skin and sebaceous glands. Type II is dominant in hair follicles and prostate. Finasteride only blocks type II (~70% DHT reduction). Dutasteride blocks both (~90–95% DHT reduction), providing more complete scalp DHT suppression — hence superior hair count outcomes in comparative trials.',
    xpReward:30, supplementId:'dutasteride' },

  { id:'q83', type:'multiple_choice', category:'vegan', difficulty:2,
    question:'Why does a vegan diet specifically create a taurine gap?',
    options:['Vegans metabolise taurine faster than omnivores','Plants actively destroy taurine','Taurine is found almost exclusively in animal tissues; plants contain none, and endogenous synthesis from methionine/cysteine is insufficient to meet all physiological demands','Vegan gut bacteria consume taurine before it can be absorbed'], answer:'Taurine is found almost exclusively in animal tissues; plants contain none, and endogenous synthesis from methionine/cysteine is insufficient to meet all physiological demands',
    explanation:'Taurine is synthesised from cysteine and methionine via cysteine sulfinic acid decarboxylase (CSAD) — but human CSAD activity is limited. Vegans have significantly lower plasma taurine than omnivores in studies. The physiological consequences include reduced cardiovascular protection and bile acid conjugation capacity.',
    xpReward:20, supplementId:'taurine' },

  { id:'q84', type:'multiple_choice', category:'methylation', difficulty:2,
    question:'What is the "methyl buffer" role of glycine in the context of NMN + TMG + B12?',
    options:['Glycine donates methyl groups alongside TMG','Glycine N-methyltransferase (GNMT) uses excess SAMe + glycine → sarcosine, preventing hypermethylation','Glycine prevents B12 from being methylated before absorption','Glycine competes with homocysteine for methyl groups'], answer:'Glycine N-methyltransferase (GNMT) uses excess SAMe + glycine → sarcosine, preventing hypermethylation',
    explanation:'When methylation is running high (TMG + B12 + NMN all driving methyl transfer), SAMe can accumulate. GNMT uses glycine as a "drain" — converting SAMe + glycine → sarcosine, safely disposing of excess methyl groups. Glycine is the methylation overflow valve.',
    xpReward:25, supplementId:'glycine' },

  { id:'q85', type:'multiple_choice', category:'vegan', difficulty:2,
    question:'What is the mechanism by which Vitamin C enhances non-heme iron absorption?',
    options:['Vitamin C activates the DMT1 iron transporter in the intestine','Vitamin C chelates phytate, removing the inhibitor of iron absorption','Vitamin C reduces ferric iron (Fe3+) to ferrous iron (Fe2+), the form absorbable by the intestinal brush border transporter','Vitamin C increases gastric acid production, improving iron dissolution'], answer:'Vitamin C reduces ferric iron (Fe3+) to ferrous iron (Fe2+), the form absorbable by the intestinal brush border transporter',
    explanation:'Plant iron is non-heme iron in the ferric (Fe3+) form. The intestinal iron transporter DMT1 can only absorb ferrous iron (Fe2+). Vitamin C (ascorbic acid) is a reducing agent that converts Fe3+ → Fe2+ in the intestinal lumen, making plant iron absorbable. This is why timing Vitamin C with iron-containing plant meals is mechanistically important.',
    xpReward:20, supplementId:'vitc' },

  { id:'q86', type:'multiple_choice', category:'methylation', difficulty:3,
    question:'The Apigenin/NMN → NAD+ → Sirtuin axis ultimately does what?',
    options:['Raises insulin sensitivity via GLUT4 upregulation','Activates sirtuins (SIRT1/SIRT3) which regulate gene expression for longevity, mitochondrial biogenesis, and DNA repair','Reduces cortisol by modulating adrenal steroidogenesis','Converts homocysteine to methionine via the methionine synthase pathway'], answer:'Activates sirtuins (SIRT1/SIRT3) which regulate gene expression for longevity, mitochondrial biogenesis, and DNA repair',
    explanation:'Elevated NAD+ (from NMN) activates NAD+-dependent deacetylases: SIRT1 (nuclear — gene regulation, DNA repair) and SIRT3 (mitochondrial — mitochondrial biogenesis, energy metabolism). Apigenin protects this pool from CD38 degradation, amplifying the effect.',
    xpReward:30, supplementId:'nmn' },

  { id:'q87', type:'multiple_choice', category:'hormones', difficulty:2,
    question:'In April 2026, why was free testosterone (8.63 pg/mL) mid-range despite total testosterone of 25.9 nmol/L?',
    options:['25.9 nmol/L is actually low total testosterone','Most testosterone is stored in muscle tissue, not blood','SHBG at 53.42 binds approximately 96–97% of total testosterone, leaving only a small free fraction','The dutasteride is directly suppressing free testosterone production'], answer:'SHBG at 53.42 binds approximately 96–97% of total testosterone, leaving only a small free fraction',
    explanation:'SHBG binds testosterone with high affinity. At SHBG of 53.42, roughly 96–97% of total T is bound — leaving free T at ~3–4% of total = 8.63 pg/mL. The gap between total T and free T bioavailability is the defining clinical feature of this hormonal picture. Update: by May 2026, SHBG dropped to 30 and free T improved to 89.7 pg/mL (Quest) — Tongkat Ali + Boron protocol worked.',
    xpReward:25, markerId:'shbg' },

  { id:'q88', type:'multiple_choice', category:'liver', difficulty:2,
    question:'In April 2026, what did the AST/ALT pattern (AST 39, ALT 67, GGT normal) tell us about the type of liver stress?',
    options:['Cholestatic liver disease — bile duct obstruction','Hepatocellular pattern — hepatocyte stress, not bile obstruction; GGT normal rules out cholestasis and alcohol','Alcoholic hepatitis — ALT > AST ratio','Autoimmune hepatitis — requires biopsy to confirm'], answer:'Hepatocellular pattern — hepatocyte stress, not bile obstruction; GGT normal rules out cholestasis and alcohol',
    explanation:'Liver enzyme pattern interpretation: Hepatocellular (ALT-dominant rise, normal GGT) = muscle stress, training, drugs, viral hepatitis. Cholestatic (GGT + ALP elevated, ALT modestly elevated) = bile duct obstruction, alcohol, fatty liver. The pattern here is clearly hepatocellular — training and supplement load are the most likely cause. Update: both values normalised by May 2026 (ALT 26, AST 34), confirming the benign hepatocellular interpretation.',
    xpReward:25, markerId:'alt' },

  { id:'q89', type:'multiple_choice', category:'minerals', difficulty:2,
    question:'Why does Calcium at 2.55 mmol/L (upper limit) advise against increasing Vitamin D3?',
    options:['Vitamin D directly deposits calcium in arteries','Vitamin D3 increases intestinal calcium absorption via calcitriol — more D3 would push already-ceiling calcium higher, risking hypercalcaemia','Vitamin D3 at high doses blocks K2, causing calcium misrouting','Vitamin D and calcium compete for the same receptor'], answer:'Vitamin D3 increases intestinal calcium absorption via calcitriol — more D3 would push already-ceiling calcium higher, risking hypercalcaemia',
    explanation:'Calcitriol (active Vitamin D) upregulates TRPV6 and calbindin in intestinal cells, increasing calcium absorption. With calcium already at 2.55 (upper limit) in April 2026, adding more D3 would increase this absorption further, potentially causing hypercalcaemia (>2.6 mmol/L), which risks kidney stones, calcification, and cardiac arrhythmias. By May 2026, calcium improved to 2.47 mmol/L — K2 routing is working. Still: do not increase the D3 dose.',
    xpReward:25, markerId:'calcium' },

  { id:'q90', type:'multiple_choice', category:'gut', difficulty:2,
    question:'What is the mechanism of oleocanthal (from EVOO) as an anti-inflammatory?',
    options:['Oleocanthal increases prostaglandin synthesis for healing','Oleocanthal inhibits both COX-1 and COX-2 (same mechanism as ibuprofen), reducing prostaglandin-driven inflammation','Oleocanthal activates NF-κB signalling','Oleocanthal is converted to resolvins by immune cells'], answer:'Oleocanthal inhibits both COX-1 and COX-2 (same mechanism as ibuprofen), reducing prostaglandin-driven inflammation',
    explanation:'Oleocanthal is a natural phenolic compound in EVOO that was discovered to have an ibuprofen-like anti-inflammatory mechanism: it non-selectively inhibits COX-1 and COX-2, reducing prostaglandin synthesis. The familiar "throat-burn" sensation from good EVOO is oleocanthal acting on the same airway receptors as NSAIDs.',
    xpReward:20, supplementId:'evoo' },

  { id:'q91', type:'multiple_choice', category:'vegan', difficulty:2,
    question:'Why is creatine especially important for vegans (beyond athletic performance)?',
    options:['Vegans need creatine to replace meat protein','Vegans have essentially zero dietary creatine (found only in animal muscle), resulting in 20–50% lower muscle creatine stores AND lower brain creatine — affecting both power output and cognitive function','Creatine replaces the haem iron missing from vegan diets','Vegan gut microbiome cannot synthesise creatine from plant amino acids'], answer:'Vegans have essentially zero dietary creatine (found only in animal muscle), resulting in 20–50% lower muscle creatine stores AND lower brain creatine — affecting both power output and cognitive function',
    explanation:'Creatine is synthesised from glycine + arginine + methionine (endogenously), but the rate of synthesis is far below that obtained from meat. Vegans have measurably lower muscle and brain creatine. Supplementation closes this gap for physical performance AND potentially cognitive function — creatine is one of the most important supplements for vegans specifically.',
    xpReward:20, supplementId:'creatine' },

  { id:'q92', type:'multiple_choice', category:'thyroid', difficulty:3,
    question:'Why does normal Anti-TPO (0.24) with supplemental iodine provide reassurance?',
    options:['Iodine deficiency causes high Anti-TPO, not excess','Excess iodine can trigger thyroid autoimmunity (Wolff-Chaikoff + autoimmune response) in susceptible individuals — absence of Anti-TPO elevation at 150 mcg/day confirms this dose is safe for this thyroid','Anti-TPO measures iodine metabolism specifically','Iodine directly suppresses Anti-TPO antibody production'], answer:'Excess iodine can trigger thyroid autoimmunity (Wolff-Chaikoff + autoimmune response) in susceptible individuals — absence of Anti-TPO elevation at 150 mcg/day confirms this dose is safe for this thyroid',
    explanation:'High iodine can paradoxically trigger or worsen autoimmune thyroiditis in genetically susceptible individuals by increasing thyroglobulin iodination, making it more antigenic. Anti-TPO at 0.24 (essentially zero) confirms no iodine-induced thyroid autoimmunity is occurring at the current 150 mcg dose.',
    xpReward:30, markerId:'anti_tpo' },

  { id:'q93', type:'multiple_choice', category:'hormones', difficulty:3,
    question:'DHT at 483.7 pg/mL on dutasteride — what does this tell us about endogenous testosterone production?',
    options:['Dutasteride is not working — DHT should be undetectable','DHT at 483.7 despite 90–95% 5-AR blockade implies very high baseline testosterone → DHT conversion, suggesting robust endogenous T production','Dutasteride only reduces DHT by 50% in reality','483.7 pg/mL is below the normal range for males'], answer:'DHT at 483.7 despite 90–95% 5-AR blockade implies very high baseline testosterone → DHT conversion, suggesting robust endogenous T production',
    explanation:'If dutasteride reduces DHT by ~90%, and the residual DHT is 483.7 pg/mL (within reference 175–913), then pre-treatment DHT was approximately 4,000–5,000+ pg/mL. This implies exceptionally high endogenous testosterone → DHT conversion driven by strong T production. The hair benefit is real (DHT suppressed for follicles) while systemic androgenic health is maintained.',
    xpReward:30, markerId:'dht' },

  { id:'q94', type:'multiple_choice', category:'methylation', difficulty:2,
    question:'What does high Lp(a) at 27.7 mg/dL tell us about cardiovascular risk modification potential?',
    options:['Lp(a) can be dramatically lowered with niacin and statins','Lp(a) is 80–90% genetically determined; at 27.7 mg/dL it\'s in the safe zone (<30), and intervention options are limited regardless','Fish oil directly lowers Lp(a)','High dietary fat is the primary driver of Lp(a)'], answer:'Lp(a) is 80–90% genetically determined; at 27.7 mg/dL it\'s in the safe zone (<30), and intervention options are limited regardless',
    explanation:'Lp(a) is largely genetically fixed and minimally modifiable by diet or most supplements. The clinical significance: values >50 mg/dL significantly increase risk. At 27.7, we\'re in the safe zone. This is essentially a genetic lottery win — nothing to treat, just reassuring data.',
    xpReward:20, markerId:'lpa' },

  { id:'q95', type:'multiple_choice', category:'methylation', difficulty:2,
    question:'The Apo-B/Apo A-I ratio is 0.50. What does this indicate?',
    options:['A ratio above 0.7 is optimal','A ratio of 0.50 is below 0.7, associated with lower cardiovascular risk — atherogenic particles are low relative to cardioprotective HDL particles','Apo-B should always equal Apo A-I','The ratio means LDL is three times higher than HDL'], answer:'A ratio of 0.50 is below 0.7, associated with lower cardiovascular risk — atherogenic particles are low relative to cardioprotective HDL particles',
    explanation:'Apo-B/Apo A-I ratio: Apo-B = atherogenic particle count (LDL + VLDL + IDL). Apo A-I = cardioprotective HDL functionality. A ratio <0.7 is considered low cardiovascular risk; <0.5 is excellent. Apo B is now 80 (down from 89 in April 2026), giving a ratio of 80/177.8 = 0.45 — squarely in the excellent zone. Consistent with low cardiovascular risk.',
    xpReward:20, markerId:'apo_b' },

  // ── COMBO / SYNERGY questions (15 questions) ─────────────────────────────
  { id:'q96', type:'combo', category:'methylation', difficulty:3, streakBonus:true,
    question:'My homocysteine is 10.2 µmol/L. Which THREE supplements directly target this, and via which pathways?',
    options:['NMN + Fisetin + Creatine','TMG (BHMT) + B12 (methionine synthase) + P5P (transsulfuration)','NAC + TUDCA + Taurine','Zinc + Boron + Tongkat Ali'],
    answer:'TMG (BHMT) + B12 (methionine synthase) + P5P (transsulfuration)',
    explanation:'Homocysteine is cleared by two pathways: (1) Remethylation — TMG via BHMT, B12/folate via methionine synthase → converts Hcy → methionine. (2) Transsulfuration — P5P cofactor for CBS → converts Hcy → cystathionine → cysteine. The methylation triad covers both routes comprehensively.',
    xpReward:30, markerId:'homocysteine' },

  { id:'q97', type:'combo', category:'liver', difficulty:3, streakBonus:true,
    question:'NAC and TUDCA both target the liver — why are they cycled on workout days only, and why are they complementary?',
    options:['They compete for the same liver receptor — alternating prevents this','NAC provides glutathione-based antioxidant protection; TUDCA provides bile acid displacement and ER stress reduction. Workout days = peak liver stress. Rest days: skipping NAC avoids blunting ROS-driven training adaptations','They are expensive, so workout-day restriction is economic','TUDCA only works in the presence of post-workout protein'], answer:'NAC provides glutathione-based antioxidant protection; TUDCA provides bile acid displacement and ER stress reduction. Workout days = peak liver stress. Rest days: skipping NAC avoids blunting ROS-driven training adaptations',
    explanation:'NAC and TUDCA are mechanistically complementary — different targets within hepatocyte protection. Workout days create peak hepatocellular stress (elevated ALT/AST pattern). Skipping NAC on rest days preserves ROS signalling needed for adaptation while TUDCA provides structural bile acid protection. Update: by May 2026, ALT dropped to 26 and AST to 34 — confirming the protocol worked.',
    xpReward:30, supplementId:'nac' },

  { id:'q98', type:'combo', category:'training', difficulty:3, streakBonus:true,
    question:'What lab artifact does creatine create, and which TWO biomarkers does it artificially affect?',
    options:['Creatine elevates urea and uric acid','Creatine raises serum creatinine (its metabolite) and thus lowers calculated eGFR — both without indicating true kidney damage','Creatine elevates ALT and AST by stressing the liver','Creatine elevates CRP by causing systemic inflammation'],
    answer:'Creatine raises serum creatinine (its metabolite) and thus lowers calculated eGFR — both without indicating true kidney damage',
    explanation:'Creatine → creatinine (via non-enzymatic phosphocreatine hydrolysis). Higher creatine intake = more creatinine = (1) elevated serum creatinine (119.9 µmol/L, above ref 53–114.9) and (2) lower calculated eGFR (62.2, near the cutoff) — both lab artifacts in the April 2026 Serbia panel. The key diagnostic clue: urea is normal (6.4 mmol/L), confirming no true kidney dysfunction. May 2026 resolution confirmed: creatinine 1.15 mg/dL (normal), eGFR 79, Cystatin C eGFR 111.',
    xpReward:30, supplementId:'creatine' },

  { id:'q99', type:'combo', category:'hormones', difficulty:3, streakBonus:true,
    question:'In April 2026, SHBG was 53.42. Which TWO supplements targeted it, and what happened by May 2026?',
    options:['NMN + Apigenin — via CD38 inhibition and NAD+ elevation','TMG + P5P — via methylation pathway','Tongkat Ali (HPG axis/SHBG modulation) + Boron (SHBG gene expression inhibition)','Zinc + Magnesium — SHBG is reduced by electrolyte balance'],
    answer:'Tongkat Ali (HPG axis/SHBG modulation) + Boron (SHBG gene expression inhibition)',
    explanation:'Tongkat Ali modulates SHBG through HPG axis effects and may reduce SHBG binding affinity. Boron directly inhibits SHBG gene expression in the liver (studies show 6 mg/day reduces SHBG ~9%). Together they attack SHBG from complementary angles. Both worked: SHBG dropped to 30 by May 2026 — a 44% reduction back to baseline. Free testosterone improved to 89.7 pg/mL (Quest).',
    xpReward:30, markerId:'shbg' },

  { id:'q100', type:'combo', category:'methylation', difficulty:3, streakBonus:true,
    question:'NMN pairs with which supplement to prevent SAMe depletion, and why?',
    options:['NMN pairs with Apigenin — to prevent CD38 from degrading SAMe','NMN pairs with TMG — because NMN increases methylation demand that depletes SAMe, and TMG donates methyl groups to replenish it','NMN pairs with P5P — because P5P activates NMN metabolism','NMN pairs with Glycine — because NMN inhibits the glycine methyl buffer'],
    answer:'NMN pairs with TMG — because NMN increases methylation demand that depletes SAMe, and TMG donates methyl groups to replenish it',
    explanation:'NMN → NAD+ synthesis consumes methyl groups, reducing SAMe (S-adenosylmethionine). SAMe is the universal methyl donor — depleting it impairs methylation everywhere. TMG (trimethylglycine) donates a methyl group via BHMT, replenishing SAMe. This is why NMN should always be paired with TMG.',
    xpReward:30, supplementId:'nmn' },

  { id:'q101', type:'combo', category:'vegan', difficulty:3, streakBonus:true,
    question:'Which ONE supplement closes THREE vegan gaps simultaneously: cardiovascular, muscle performance, AND cognitive function?',
    options:['B12 — closes nerve, cognitive, and cardiovascular gaps','Creatine — vegans have zero dietary creatine, affecting muscle phosphocreatine AND brain creatine AND cardiovascular creatine reserves','Fish oil — closes omega-3 gaps for heart, brain, and muscle','Zinc — immune, testosterone, and enzyme gaps'],
    answer:'Creatine — vegans have zero dietary creatine, affecting muscle phosphocreatine AND brain creatine AND cardiovascular creatine reserves',
    explanation:'Creatine is found exclusively in animal muscle. Vegans have 20–50% lower muscle creatine stores (performance), lower brain creatine (cognitive function — creatine improves memory and executive function in studies), and reduced cardiac creatine (cardiovascular energy buffer). One supplement, three vegan-specific gaps.',
    xpReward:30, supplementId:'creatine' },

  { id:'q102', type:'combo', category:'liver', difficulty:3, streakBonus:true,
    question:'In April 2026, ALT was 67 and AST was 39. Which TWO hepatoprotective supplements targeted this, and did they work?',
    options:['Garlic + Ginger — anti-inflammatory but not hepatoprotective','NMN + TMG — methylation is not hepatoprotective','NAC (boosts glutathione for antioxidant protection) + TUDCA (bile acid displacement and ER stress reduction)','Fish oil + Fisetin — omega-3s and senolytics'],
    answer:'NAC (boosts glutathione for antioxidant protection) + TUDCA (bile acid displacement and ER stress reduction)',
    explanation:'NAC provides the rate-limiting cysteine for glutathione synthesis — the liver\'s primary antioxidant defence against oxidative stress in hepatocytes. TUDCA displaces toxic hydrophobic bile acids and reduces ER stress (unfolded protein response). Together they cover oxidative and structural hepatocyte protection. Result: by May 2026, ALT dropped to 26 (-61%) and AST to 34. Protocol confirmed effective.',
    xpReward:30, markerId:'alt' },

  { id:'q103', type:'combo', category:'methylation', difficulty:3, streakBonus:true,
    question:'Vitamin D3 must be paired with which supplement for calcium safety, and why is this especially important given my calcium was 2.55 (April 2026)?',
    options:['D3 pairs with Zinc — Zinc activates Vitamin D receptors','D3 pairs with K2 — K2 activates osteocalcin and Matrix Gla Protein to route D3-driven calcium absorption into bone, not arteries. With calcium at 2.55 (upper limit), K2 is the safety valve','D3 pairs with Magnesium — Magnesium converts D3 to its active form','D3 pairs with B12 — B12 prevents D3 toxicity'],
    answer:'D3 pairs with K2 — K2 activates osteocalcin and Matrix Gla Protein to route D3-driven calcium absorption into bone, not arteries. With calcium at 2.55 (upper limit), K2 is the safety valve',
    explanation:'D3 increases intestinal calcium absorption via calcitriol. Without K2, this calcium can deposit in arterial walls (calcification). K2 (MK-7) carboxylates Matrix Gla Protein (prevents arterial calcium) and osteocalcin (promotes bone calcium). With calcium at 2.55 mmol/L (exactly at the upper limit in April 2026), K2\'s routing role was especially critical. Update: calcium improved to 2.47 mmol/L by May 2026 — K2 is working.',
    xpReward:30, supplementId:'k2' },

  { id:'q104', type:'combo', category:'methylation', difficulty:3, streakBonus:true,
    question:'What is the mechanism connecting Apigenin and NMN, and why is it called a synergy?',
    options:['Apigenin activates NMN to its active form inside cells','Apigenin inhibits CD38 (the enzyme that degrades NAD+); NMN builds NAD+. Together: one builds, one protects — amplifying the net NAD+ gain far beyond either alone','Apigenin and NMN share the same Slc12a8 transporter','Apigenin converts NMN to NAD+ faster than NMNAT'],
    answer:'Apigenin inhibits CD38 (the enzyme that degrades NAD+); NMN builds NAD+. Together: one builds, one protects — amplifying the net NAD+ gain far beyond either alone',
    explanation:'CD38 degrades NAD+ at a faster rate than NMN alone can replace it. By inhibiting CD38 with Apigenin while supplementing the precursor with NMN, the stack creates a "build + protect" dynamic — net NAD+ accumulates significantly more than with either compound alone. This is a mechanistically elegant synergy.',
    xpReward:30, supplementId:'apigenin' },

  { id:'q105', type:'combo', category:'hormones', difficulty:3, streakBonus:true,
    question:'In April 2026, why was free testosterone (8.63 pg/mL) lower than expected despite total testosterone of 25.9 nmol/L, and what changed by May 2026?',
    options:['25.9 nmol/L is a falsely elevated reading','Dutasteride directly blocks free testosterone production','SHBG at 53.42 binds ~96–97% of total testosterone — leaving only ~3–4% as bioavailable free testosterone. High total T with high SHBG = reduced hormonal bioavailability','Estradiol <20 pg/mL is suppressing free testosterone receptors'],
    answer:'SHBG at 53.42 binds ~96–97% of total testosterone — leaving only ~3–4% as bioavailable free testosterone. High total T with high SHBG = reduced hormonal bioavailability',
    explanation:'SHBG is the primary testosterone-binding protein — high affinity, high capacity. At SHBG 53.42 (top of reference), the binding fraction is ~96–97% of total T. Free T = (roughly) 3–4% of 25.9 nmol/L = ~0.78–1.04 nmol/L total, or 8.63 pg/mL measured. Tongkat + Boron aimed to shift this ratio. By May 2026: SHBG dropped to 30 and free T improved to 89.7 pg/mL (Quest immunoassay) — protocol confirmed effective.',
    xpReward:30, markerId:'free_testosterone' },

  { id:'q106', type:'combo', category:'liver', difficulty:3, streakBonus:true,
    question:'In April 2026, what THREE factors made the elevated ALT (67) and AST (39) most likely BENIGN — and was this interpretation confirmed?',
    options:['TSH is normal + Calcium is normal + Insulin is normal','GGT is normal (rules out cholestasis/alcohol) + CRP is low (rules out major inflammation) + Bilirubin is normal (rules out hepatic excretion failure)','Testosterone is high + IGF-1 is normal + DHEA-S is mid-range','eGFR is near-normal + Urea is normal + Creatinine elevation is explained by creatine'],
    answer:'GGT is normal (rules out cholestasis/alcohol) + CRP is low (rules out major inflammation) + Bilirubin is normal (rules out hepatic excretion failure)',
    explanation:'Three exculpatory findings: (1) GGT 26 (normal) → rules out alcohol, bile duct obstruction, cholestatic disease. (2) CRP 1.0 (low) → rules out systemic inflammation driving liver stress. (3) Bilirubin 13.4 (normal) → liver conjugation and excretion are working. This triad reframes the ALT/AST elevation as training/supplement-related hepatocellular stress. Confirmed benign: ALT dropped to 26 and AST to 34 by May 2026.',
    xpReward:30, markerId:'alt' },

  { id:'q107', type:'combo', category:'minerals', difficulty:3, streakBonus:true,
    question:'In April 2026, potassium was 5.2 (barely elevated) and albumin was 52 (mildly elevated). What likely connected these two findings — and was this confirmed?',
    options:['Both are elevated by the high-protein diet','Both are elevated by dehydration and hemoconcentration — concentrated blood has higher levels of both proteins (albumin) and electrolytes (potassium), especially if the draw was slightly hemolysed','Both are driven by high SHBG levels','Both are biomarkers of kidney dysfunction confirmed by eGFR 62.2'],
    answer:'Both are elevated by dehydration and hemoconcentration — concentrated blood has higher levels of both proteins (albumin) and electrolytes (potassium), especially if the draw was slightly hemolysed',
    explanation:'Blood draw timing relative to sauna and training matters enormously. Dehydration concentrates the blood sample — albumin (a serum protein) appears elevated because less water = more concentrated protein. Hemolysis during draw (even mild) releases intracellular potassium into the sample. Both findings point to pre-draw conditions rather than true pathology. Confirmed by May 2026: potassium returned to 4.7 (optimal) and albumin to 4.7 g/dL (47 g/L) — both normalised.',
    xpReward:30, markerId:'albumin' },

  { id:'q108', type:'combo', category:'vegan', difficulty:3, streakBonus:true,
    question:'In April 2026, elevated UIBC (47.4 µmol/L) alongside normal ferritin (129.1) described a vegan iron pattern. What was the picture, and how has it changed by May 2026?',
    options:['Iron deficiency anaemia — ferritin is unreliable','Iron overload — elevated UIBC means too much iron','Transferrin has empty binding capacity (high UIBC) suggesting iron demand, but ferritin being solid (129.1) confirms stores are adequate — the vegan pattern of lower circulating iron but good stores','UIBC elevation means liver is not producing enough transferrin'],
    answer:'Transferrin has empty binding capacity (high UIBC) suggesting iron demand, but ferritin being solid (129.1) confirms stores are adequate — the vegan pattern of lower circulating iron but good stores',
    explanation:'In April 2026: UIBC elevated (47.4 µmol/L) = transferrin unsaturated = looking for more iron. Serum iron low (12.3 µmol/L) but ferritin solid (129.1) — adequate stores. No supplemental iron needed, just Vitamin C with meals. By May 2026: iron picture fully normalised — serum iron 136 mcg/dL (solidly optimal), iron saturation 40%, UIBC 205 mcg/dL (within reference). The vegan iron concern is resolved.',
    xpReward:30, markerId:'uibc' },

  { id:'q109', type:'combo', category:'methylation', difficulty:3, streakBonus:true,
    question:'How do the three parts of the methylation stack (TMG, B12, P5P) divide the labour of clearing homocysteine?',
    options:['All three work via the same BHMT enzyme with additive effects','TMG handles BHMT (direct remethylation); B12 activates methionine synthase (folate-dependent remethylation); P5P cofactors CBS (transsulfuration to cysteine). Two pathways, three cofactors, one goal: lower homocysteine','They all work in the liver only; TMG handles morning, B12 afternoon, P5P evening','TMG reduces homocysteine production; B12 and P5P clear the existing pool'],
    answer:'TMG handles BHMT (direct remethylation); B12 activates methionine synthase (folate-dependent remethylation); P5P cofactors CBS (transsulfuration to cysteine). Two pathways, three cofactors, one goal: lower homocysteine',
    explanation:'Pathway 1 (Remethylation): TMG via BHMT (liver-specific, folate-independent) OR B12+folate via methionine synthase (all tissues). Pathway 2 (Transsulfuration): CBS enzyme (P5P cofactor) → Hcy → cystathionine → cysteine → glutathione. The stack covers both irreversible routes. Homocysteine at 10.2 is the clinical target.',
    xpReward:30, markerId:'homocysteine' },

  { id:'q110', type:'combo', category:'training', difficulty:3, streakBonus:true,
    question:'Urea is 6.4 (normal) alongside elevated creatinine (119.9). Why is normal urea the KEY diagnostic clue here?',
    options:['Normal urea means the liver is working correctly, not the kidney','Normal urea alongside elevated creatinine disproves true kidney failure — real azotaemia (kidney failure) causes BOTH creatinine AND urea to rise. Normal urea = the kidney is clearing urea fine. Elevated creatinine alone = creatine artifact','Urea and creatinine are always independent and unrelated','Normal urea means protein intake is low, explaining the elevated creatinine'],
    answer:'Normal urea alongside elevated creatinine disproves true kidney failure — real azotaemia (kidney failure) causes BOTH creatinine AND urea to rise. Normal urea = the kidney is clearing urea fine. Elevated creatinine alone = creatine artifact',
    explanation:'In true renal failure (uremia/azotaemia), both creatinine AND urea accumulate because the kidney can\'t filter either. If creatinine is elevated but urea is normal, the kidney is filtering urea normally — the creatinine elevation is not from filtration failure but from overproduction (creatine supplementation). This is the definitive clinical logic. May 2026 confirmed resolution: creatinine 1.15 mg/dL (normal), eGFR 79, Cystatin C eGFR 111.',
    xpReward:30, markerId:'urea' },

  // ── TRUE/FALSE questions (10 questions) ───────────────────────────────────
  { id:'q111', type:'true_false', category:'vegan', difficulty:1,
    question:'TRUE or FALSE: A vegan diet can reliably provide all the B12 the body needs without supplementation.',
    options:['True','False'], answer:'False',
    explanation:'False. There is NO reliable plant food source of Vitamin B12. Seaweed, fermented foods, and some algae contain B12 analogues that are either inactive or block B12 receptors. B12 supplementation is non-negotiable on a vegan diet — B12 at 530.7 pg/mL is only maintained because of ~1000 mcg/day supplementation.',
    xpReward:10 },

  { id:'q112', type:'true_false', category:'training', difficulty:1,
    question:'TRUE or FALSE: Creatine causes kidney damage — that\'s why my creatinine is elevated.',
    options:['True','False'], answer:'False',
    explanation:'False. 30+ years of research consistently show creatine at supplemental doses (3–5 g/day) does not cause kidney damage in healthy individuals. Elevated creatinine (119.9 µmol/L) and borderline eGFR (62.2) in the April 2026 Serbia panel are lab artifacts of creatine metabolism. The proof: urea is normal (6.4 mmol/L), confirming the kidneys are filtering waste normally. Update confirmed: May 2026 Quest panel shows creatinine 1.15 mg/dL (normal) and Cystatin C eGFR 111. Kidneys are excellent.',
    xpReward:15 },

  { id:'q113', type:'true_false', category:'liver', difficulty:2,
    question:'TRUE or FALSE: Normal GGT alongside elevated ALT and AST rules out alcohol as a cause of the liver enzyme elevation.',
    options:['True','False'], answer:'True',
    explanation:'True. GGT is consistently elevated by alcohol consumption — even moderate drinking raises GGT within weeks. Normal GGT (26 U/L, April 2026) alongside elevated ALT (67) and AST (39) strongly argues against alcohol as a cause. It also rules out bile duct obstruction and major cholestatic disease. Update: by May 2026, ALT dropped to 26 and AST to 34 — confirming the benign interpretation was correct.',
    xpReward:15 },

  { id:'q114', type:'true_false', category:'hormones', difficulty:2,
    question:'TRUE or FALSE: High albumin (52 g/L) in my panel indicates liver failure.',
    options:['True','False'], answer:'False',
    explanation:'False. Liver failure causes LOW albumin (the damaged liver can\'t produce enough). HIGH albumin is the opposite problem — typically dehydration and hemoconcentration. My high albumin (52 vs ref 35–50, April 2026) is almost certainly from sauna use and intense training creating a concentrated blood sample at draw time. Confirmed by May 2026: albumin returned to 4.7 g/dL (47 g/L) — the dehydration artifact is gone.',
    xpReward:15 },

  { id:'q115', type:'true_false', category:'methylation', difficulty:2,
    question:'TRUE or FALSE: The NMN/Apigenin combination is synergistic because Apigenin helps NMN convert into NAD+ faster.',
    options:['True','False'], answer:'False',
    explanation:'False — that\'s not the mechanism. Apigenin does not speed up NMN→NAD+ conversion. The synergy is protective: Apigenin inhibits CD38, the enzyme that DEGRADES NAD+. NMN builds NAD+; Apigenin prevents its breakdown. The pairing amplifies net NAD+ accumulation, not the conversion rate.',
    xpReward:20 },

  { id:'q116', type:'true_false', category:'hormones', difficulty:2,
    question:'TRUE or FALSE: My total testosterone of 25.9 nmol/L fully represents how much testosterone my tissues are experiencing.',
    options:['True','False'], answer:'False',
    explanation:'False. Total testosterone includes all the testosterone bound to SHBG (which tissues cannot use) and albumin-bound testosterone (weakly available). SHBG at 53.42 binds ~96–97% of total T. Free testosterone (8.63 pg/mL) is the biologically active fraction. The gap between total T and free T is the key clinical insight.',
    xpReward:20 },

  { id:'q117', type:'true_false', category:'vegan', difficulty:1,
    question:'TRUE or FALSE: Fisetin should be taken daily for maximum senolytic effect.',
    options:['True','False'], answer:'False',
    explanation:'False. Fisetin is taken in a pulsed protocol (Sat + Sun in my schedule) because senolytics work episodically. Senescent cells accumulate over time, are cleared by a senolytic pulse, then slowly re-accumulate. Daily dosing would have diminishing returns and could risk impairing acute wound-healing responses.',
    xpReward:15 },

  { id:'q118', type:'true_false', category:'minerals', difficulty:2,
    question:'TRUE or FALSE: My potassium of 5.2 mmol/L requires immediate dietary restriction of potassium-rich foods.',
    options:['True','False'], answer:'False',
    explanation:'False. Potassium at 5.2 mmol/L (April 2026) is only barely above the reference (3.5–5.1). The doctor flagged this as likely benign — blood draw hemolysis and dehydration are common causes of mild pseudo-hyperkalemia. No cardiac symptoms. The appropriate response is to repeat the test well-hydrated, not restrict dietary potassium. Update: May 2026 potassium is 4.7 mmol/L — confirmed the 5.2 was a benign artifact, not true hyperkalemia.',
    xpReward:15 },

  { id:'q119', type:'true_false', category:'methylation', difficulty:2,
    question:'TRUE or FALSE: My Vitamin D at 136.4 nmol/L is in a healthy range and I should increase it further to maximise benefits.',
    options:['True','False'], answer:'False',
    explanation:'False. 136.4 nmol/L is near the upper reference limit (50–150). Calcium at 2.55 mmol/L is EXACTLY at the upper limit. Vitamin D drives calcium absorption — increasing D3 further would push calcium higher, risking hypercalcaemia. The current 5000 IU/day dose has achieved optimal D levels and should not be increased.',
    xpReward:20 },

  { id:'q120', type:'true_false', category:'liver', difficulty:2,
    question:'TRUE or FALSE: NAC is always taken on rest days in my protocol because that\'s when the liver needs the most support.',
    options:['True','False'], answer:'False',
    explanation:'False — NAC is taken on TRAINING days only (Mon–Fri in the core protocol). On rest days, NAC is skipped to avoid blunting ROS-driven training adaptations. Reactive oxygen species from training act as signalling molecules for adaptation (mitochondrial biogenesis, strength gains). The hepatoprotective benefit is still delivered when it matters most — during peak training stress.',
    xpReward:15 },

  // ── CONCEPT — Biomarker Interpretation (20 questions) ────────────────────
  { id:'q121', type:'concept', category:'liver', difficulty:1,
    question:'ALT and AST are both liver enzymes. Why is ALT considered more liver-specific than AST?',
    options:[
      'ALT is only found in liver cells; AST is also found in muscle, heart, and red blood cells',
      'ALT is higher in the blood than AST in healthy people',
      'AST requires a prescription test; ALT is standard',
      'ALT measures bile flow; AST measures protein production'
    ], answer:'ALT is only found in liver cells; AST is also found in muscle, heart, and red blood cells',
    explanation:'Think of ALT as a liver fingerprint — it sits almost exclusively in liver cells. AST is messier: it leaks from muscle, heart, and even red blood cells. So if only AST is elevated after a hard workout, that\'s probably muscle damage, not liver trouble. When ALT rises too, the liver is much more likely to be the culprit.',
    xpReward:15 },

  { id:'q122', type:'concept', category:'liver', difficulty:2,
    question:'GGT is normal but ALT is elevated. What does this pattern most likely tell you?',
    options:[
      'The damage pattern is hepatocellular (liver cell injury), not cholestatic (bile duct obstruction)',
      'The liver is completely healthy — GGT being normal cancels out the ALT elevation',
      'Alcohol is the most likely cause of the ALT elevation',
      'The kidneys are compensating for reduced liver function'
    ], answer:'The damage pattern is hepatocellular (liver cell injury), not cholestatic (bile duct obstruction)',
    explanation:'Doctors use the ALT/GGT pattern like a diagnostic map. High ALT + normal GGT = liver cells are leaking (hepatocellular injury — things like fatty liver or medication stress). High GGT ± high ALT = bile ducts are backed up (cholestatic) or alcohol is involved. Normal GGT is also strong evidence against alcohol as a cause, since alcohol reliably raises GGT.',
    xpReward:15 },

  { id:'q123', type:'concept', category:'hormones', difficulty:2,
    question:'SHBG (Sex Hormone Binding Globulin) is high. What does this do to testosterone availability in the body?',
    options:[
      'It binds more testosterone and reduces the free fraction that tissues can actually use',
      'It converts testosterone into a more potent form available to tissues',
      'It signals the testes to produce more testosterone',
      'It has no effect — only total testosterone levels matter clinically'
    ], answer:'It binds more testosterone and reduces the free fraction that tissues can actually use',
    explanation:'Think of SHBG as a parking lot where testosterone sits idle. Testosterone parked in SHBG cannot get into your cells. High SHBG means more parking spaces are filled — so even if total testosterone looks great on paper, very little of it is actually free to work. This is why free testosterone is often the more clinically meaningful number.',
    xpReward:15 },

  { id:'q124', type:'concept', category:'minerals', difficulty:1,
    question:'What is the difference between serum iron and ferritin?',
    options:[
      'Serum iron is iron currently circulating in the blood; ferritin is the long-term storage form',
      'Serum iron measures dietary intake; ferritin measures absorption efficiency',
      'Ferritin is the active form used by muscles; serum iron is stored in bone marrow',
      'They measure the same thing — ferritin is just the more accurate test'
    ], answer:'Serum iron is iron currently circulating in the blood; ferritin is the long-term storage form',
    explanation:'Serum iron is like the cash in your wallet right now — it fluctuates hour to hour based on meals and stress. Ferritin is like your savings account — it reflects total iron reserves built up over weeks or months. You can have normal serum iron but very low ferritin (early iron depletion), which is why both tests together tell a much fuller story.',
    xpReward:15 },

  { id:'q125', type:'concept', category:'glucose', difficulty:1,
    question:'Why does HbA1c give a better picture of blood sugar control than a single fasting glucose reading?',
    options:[
      'HbA1c reflects the average blood sugar level over the past 2–3 months, smoothing out day-to-day swings',
      'HbA1c measures the maximum glucose spike ever recorded in the blood',
      'A single glucose reading is always inaccurate due to lab error',
      'HbA1c counts the number of glucose molecules in a litre of blood more precisely'
    ], answer:'HbA1c reflects the average blood sugar level over the past 2–3 months, smoothing out day-to-day swings',
    explanation:'Red blood cells live for about 90 days, and glucose slowly sticks to them (glycation). HbA1c measures how much glucose has stuck — giving a rolling 3-month average. A fasting glucose is just a snapshot that can look fine even in someone who spikes high after every meal. Together they\'re far more informative than either alone.',
    xpReward:15 },

  { id:'q126', type:'concept', category:'thyroid', difficulty:1,
    question:'TSH is elevated above the reference range. What does this indicate about thyroid function?',
    options:[
      'The thyroid is underactive — TSH is high because the brain is shouting louder, trying to stimulate a sluggish gland',
      'The thyroid is overactive — TSH is high because the gland is producing too much hormone',
      'TSH elevation only occurs after thyroid surgery',
      'High TSH means the liver is clearing thyroid hormones too quickly'
    ], answer:'The thyroid is underactive — TSH is high because the brain is shouting louder, trying to stimulate a sluggish gland',
    explanation:'TSH is a messenger from the brain to the thyroid saying "make more hormone." If the thyroid is sluggish (hypothyroid), the brain shouts louder — so TSH goes UP. If the thyroid is overactive (hyperthyroid), the brain quiets down — so TSH goes DOWN. TSH moves in the opposite direction to thyroid function, which trips people up.',
    xpReward:15 },

  { id:'q127', type:'concept', category:'glucose', difficulty:2,
    question:'What is HOMA-IR, and what does a score of 1.1 indicate?',
    options:[
      'It is a calculated estimate of insulin resistance; 1.1 is in the healthy range, indicating good insulin sensitivity',
      'It is a direct blood test; 1.1 means borderline pre-diabetes',
      'It measures the ratio of HDL to glucose; 1.1 is considered optimal for athletes',
      'It stands for Hemoglobin-A1c Ratio; values below 2.0 are always normal'
    ], answer:'It is a calculated estimate of insulin resistance; 1.1 is in the healthy range, indicating good insulin sensitivity',
    explanation:'HOMA-IR (Homeostatic Model Assessment of Insulin Resistance) is calculated from fasting glucose and fasting insulin. Think of it as: how hard does your pancreas have to work to keep blood sugar normal? Scores below 1.0 are excellent, 1.0–1.9 is healthy, and above 2.9 suggests significant insulin resistance. A score of 1.1 means the body is efficiently responding to insulin without having to overproduce it.',
    xpReward:15 },

  { id:'q128', type:'concept', category:'kidney', difficulty:2,
    question:'Someone takes creatine supplements and their creatinine is flagged as elevated. Why might this be a false alarm?',
    options:[
      'Creatine supplements increase creatinine as a normal byproduct — urea staying normal suggests kidney function is fine',
      'Creatine supplements damage the kidneys, so elevated creatinine confirms real injury',
      'Creatinine and creatine are unrelated; the elevation must be from another cause',
      'Elevated creatinine from supplements only occurs if protein intake is very low'
    ], answer:'Creatine supplements increase creatinine as a normal byproduct — urea staying normal suggests kidney function is fine',
    explanation:'Creatinine is a waste product from creatine breakdown in muscle. More creatine in = more creatinine out, even with perfectly healthy kidneys. The key differentiator is urea: kidneys struggling to filter waste will see BOTH creatinine AND urea rise together. If creatinine is up but urea is normal, the kidneys are almost certainly handling things fine — the creatine supplement is the explanation.',
    xpReward:15 },

  { id:'q129', type:'concept', category:'inflammation', difficulty:2,
    question:'What does elevated homocysteine do to blood vessels?',
    options:[
      'It damages the inner lining of blood vessels, making them more likely to develop plaques and clots',
      'It causes blood vessels to dilate too much, lowering blood pressure dangerously',
      'It thickens the blood directly, increasing clotting risk without affecting vessel walls',
      'It has no effect on vessels — elevated homocysteine only affects the brain'
    ], answer:'It damages the inner lining of blood vessels, making them more likely to develop plaques and clots',
    explanation:'Homocysteine is an amino acid produced as a byproduct of protein metabolism. At high levels it acts like sandpaper on the smooth inner lining of arteries. This micro-damage triggers inflammation and encourages cholesterol plaques to form, raising cardiovascular risk independently of LDL. Folate, B6, and B12 help the body clear homocysteine, which is why the "methylation triad" matters.',
    xpReward:15 },

  { id:'q130', type:'concept', category:'metabolic', difficulty:1,
    question:'Why is HDL called "good" cholesterol?',
    options:[
      'HDL acts as a reverse transport vehicle, picking up excess cholesterol from artery walls and carrying it back to the liver for disposal',
      'HDL directly breaks down LDL particles in the bloodstream',
      'HDL blocks cholesterol from being absorbed in the intestines',
      'HDL is produced by the liver only when cholesterol levels are already safe'
    ], answer:'HDL acts as a reverse transport vehicle, picking up excess cholesterol from artery walls and carrying it back to the liver for disposal',
    explanation:'Think of HDL as the cleanup crew. LDL drops cholesterol off in tissues (including artery walls); HDL picks it back up and returns it to the liver where it can be processed or excreted. Higher HDL means a more active cleanup operation — which is why it\'s associated with lower cardiovascular risk. It\'s not that HDL cholesterol is harmless; it\'s that HDL particles are doing a protective job.',
    xpReward:15 },

  { id:'q131', type:'concept', category:'metabolic', difficulty:2,
    question:'What does Apo-B measure that LDL-C (LDL cholesterol) misses?',
    options:[
      'Apo-B counts the total number of cholesterol-carrying particles; LDL-C only measures the cholesterol content inside them',
      'Apo-B measures HDL particles; LDL-C measures only LDL',
      'Apo-B is a more direct measure of dietary fat intake than LDL-C',
      'Apo-B and LDL-C measure the same thing — Apo-B is just a more expensive version of the same test'
    ], answer:'Apo-B counts the total number of cholesterol-carrying particles; LDL-C only measures the cholesterol content inside them',
    explanation:'Imagine LDL-C as the total weight of cargo on delivery trucks, and Apo-B as the count of trucks. A small number of heavily loaded trucks (high LDL-C, low particle count) may be less dangerous than many lightly loaded trucks (lower LDL-C, high particle count) — because each truck is a potential artery-wall collision. Apo-B captures the traffic volume, not just the cargo weight, which is why it\'s a stronger predictor of cardiovascular risk.',
    xpReward:15 },

  { id:'q132', type:'concept', category:'liver', difficulty:2,
    question:'Albumin is elevated above the reference range. What is the most likely explanation?',
    options:[
      'Dehydration — when blood volume shrinks, the same amount of albumin becomes more concentrated',
      'The liver is overproducing albumin due to excess dietary protein',
      'High albumin indicates liver disease because a stressed liver overworks to produce it',
      'Albumin elevation is always clinically insignificant and can be ignored'
    ], answer:'Dehydration — when blood volume shrinks, the same amount of albumin becomes more concentrated',
    explanation:'Albumin is made by the liver and is normally stable. The liver doesn\'t suddenly overproduce it. When albumin reads HIGH, it\'s usually because there\'s less plasma water to dilute it — the same amount of albumin squeezed into less fluid looks more concentrated. Common causes: dehydration, sauna use, or intense exercise before the blood draw. Low albumin (not high) is the worrying sign of liver disease.',
    xpReward:15 },

  { id:'q133', type:'concept', category:'minerals', difficulty:2,
    question:'UIBC (Unsaturated Iron Binding Capacity) is elevated. What does this tell you about your iron status?',
    options:[
      'There is a lot of unfilled space on iron-transport proteins, suggesting the body is hungry for more iron',
      'There is too much iron saturating the transport proteins, suggesting iron overload',
      'UIBC elevation always points to liver disease affecting iron regulation',
      'High UIBC means iron is being lost through the kidneys rather than stored'
    ], answer:'There is a lot of unfilled space on iron-transport proteins, suggesting the body is hungry for more iron',
    explanation:'Transferrin is the protein that ferries iron around the blood. UIBC measures the empty seats on transferrin — capacity that isn\'t currently occupied by iron. High UIBC = lots of empty seats = low iron load relative to transport capacity. The body is essentially saying "send more iron, we have plenty of room." This is consistent with iron deficiency or iron depletion states.',
    xpReward:15 },

  { id:'q134', type:'concept', category:'vitamins', difficulty:2,
    question:'Why should Vitamin K2 be taken alongside Vitamin D3, especially at higher doses?',
    options:[
      'Vitamin D3 drives calcium absorption; K2 directs calcium into bones and teeth instead of artery walls',
      'K2 increases the absorption of D3 from the gut, making the dose more effective',
      'D3 depletes K2 from the body, so supplementing both prevents a deficiency',
      'K2 prevents the toxicity of D3 by blocking excess D3 from reaching the kidneys'
    ], answer:'Vitamin D3 drives calcium absorption; K2 directs calcium into bones and teeth instead of artery walls',
    explanation:'D3 opens the gate for calcium to enter your body from food and supplements — great for bones, but the calcium needs directing. K2 activates proteins (like osteocalcin) that act like traffic controllers, routing calcium into bones and teeth and away from soft tissues like arteries. Without K2, higher D3 doses can lead to calcium accumulating in the wrong places. K2 is the chaperone that ensures the calcium ends up where you want it.',
    xpReward:15 },

  { id:'q135', type:'concept', category:'kidney', difficulty:2,
    question:'eGFR (estimated Glomerular Filtration Rate) can read artificially low in some people. Which scenario most commonly causes this?',
    options:[
      'High muscle mass or creatine supplementation raises creatinine, making eGFR appear lower than actual kidney function',
      'Eating a high-fat meal before the blood draw interferes with the eGFR calculation',
      'Low hydration causes eGFR to drop permanently even after rehydration',
      'Athletes always have impaired kidneys, so low eGFR in athletes is a true finding'
    ], answer:'High muscle mass or creatine supplementation raises creatinine, making eGFR appear lower than actual kidney function',
    explanation:'eGFR is calculated from creatinine — the formula assumes an average muscle mass. Muscular people or those taking creatine produce more creatinine from larger or more active muscles. The formula interprets this extra creatinine as the kidneys struggling to clear it, so it spits out a lower eGFR. But the kidneys are fine — there\'s just more waste being generated. Other kidney markers (urea, cystatin-C) help confirm whether it\'s a false alarm.',
    xpReward:15 },

  { id:'q136', type:'concept', category:'inflammation', difficulty:1,
    question:'CRP (C-Reactive Protein) at 1.0 mg/L is described as "borderline." What does this mean for cardiovascular risk?',
    options:[
      'Values below 1.0 are low risk, 1.0–3.0 are intermediate risk, and above 3.0 are high risk — so 1.0 sits right at the low/intermediate boundary',
      'Any CRP above 0.5 mg/L indicates an active infection requiring treatment',
      'CRP of 1.0 only matters in the context of fever — without fever it is always clinically insignificant',
      'CRP is not used for cardiovascular risk — it only measures bacterial infection severity'
    ], answer:'Values below 1.0 are low risk, 1.0–3.0 are intermediate risk, and above 3.0 are high risk — so 1.0 sits right at the low/intermediate boundary',
    explanation:'High-sensitivity CRP (hs-CRP) is used as a cardiovascular risk marker, separate from the CRP used to detect acute infections (which reads in tens or hundreds). At 1.0 mg/L you are at the exact boundary between the low-risk and intermediate-risk zones. It\'s not alarming, but it\'s a flag to track — chronic low-grade inflammation at this level over years does meaningfully increase heart disease risk.',
    xpReward:15 },

  { id:'q137', type:'concept', category:'metabolic', difficulty:2,
    question:'What is Lp(a), and can it be meaningfully lowered through diet or supplements?',
    options:[
      'Lp(a) is a genetically determined lipoprotein particle; diet and most supplements have very little effect on it',
      'Lp(a) is elevated by saturated fat intake and responds well to dietary changes',
      'Lp(a) is the same as LDL-C but measured more precisely — statins reliably reduce it',
      'Lp(a) can be normalized within months using niacin supplementation'
    ], answer:'Lp(a) is a genetically determined lipoprotein particle; diet and most supplements have very little effect on it',
    explanation:'Lp(a) is a lipoprotein that behaves like a stickier, more dangerous version of LDL. Critically, about 80–90% of your Lp(a) level is set by genetics — not by what you eat. Statins, diet changes, and most supplements barely move it. This makes elevated Lp(a) one of the harder cardiovascular risk factors to treat conventionally. Newer RNA-targeting drugs are in trials specifically for Lp(a) reduction. Knowing your level matters even if you can\'t change it — it informs overall risk assessment.',
    xpReward:15 },

  { id:'q138', type:'concept', category:'thyroid', difficulty:2,
    question:'Anti-TPO antibodies are very low or undetectable. Why is this good news for long-term thyroid health?',
    options:[
      'Low Anti-TPO means the immune system is not attacking the thyroid, making autoimmune thyroid disease (Hashimoto\'s) unlikely',
      'Low Anti-TPO indicates the thyroid is producing excess antibodies, which protects it from damage',
      'Anti-TPO being low means TSH will remain low, reducing the risk of hypothyroidism',
      'Anti-TPO is only relevant after a thyroid cancer diagnosis — low values have no meaning otherwise'
    ], answer:'Low Anti-TPO means the immune system is not attacking the thyroid, making autoimmune thyroid disease (Hashimoto\'s) unlikely',
    explanation:'Anti-TPO antibodies are the immune system\'s "attack signature" against thyroid tissue. Hashimoto\'s thyroiditis — the most common cause of hypothyroidism — is an autoimmune condition where elevated Anti-TPO antibodies signal that the immune system is gradually destroying the thyroid gland. Very low or undetectable Anti-TPO is genuinely reassuring: it means this immune attack is not underway, significantly reducing the likelihood of developing thyroid disease.',
    xpReward:15 },

  { id:'q139', type:'concept', category:'vitamins', difficulty:2,
    question:'Which three supplements form the "methylation triad" used to target elevated homocysteine?',
    options:[
      'Folate (B9), Vitamin B6, and Vitamin B12',
      'Magnesium, Zinc, and Vitamin C',
      'Vitamin D3, Vitamin K2, and Omega-3',
      'NAC, TMG, and Alpha-Lipoic Acid'
    ], answer:'Folate (B9), Vitamin B6, and Vitamin B12',
    explanation:'Homocysteine is recycled or cleared through a process called methylation. Three B-vitamins are essential workers in this process: B12 and folate (B9) work together to convert homocysteine back into methionine (a useful amino acid), while B6 helps convert it down a different clearance pathway. Deficiency in any of the three stalls the system and allows homocysteine to build up. Supplementing all three together is the standard evidence-based approach to lowering elevated homocysteine.',
    xpReward:15 },

  { id:'q140', type:'concept', category:'hormones', difficulty:1,
    question:'What is the difference between total testosterone and free testosterone, and which one more accurately reflects what your body is actually experiencing?',
    options:[
      'Total testosterone measures all testosterone including bound (inactive) forms; free testosterone is the unbound fraction that cells can actually use — free T is more clinically meaningful',
      'Free testosterone is produced by the adrenal glands; total testosterone is produced by the testes — both are equally important',
      'Total testosterone is the better marker because it captures all forms regardless of binding',
      'Free testosterone is only relevant in women — in men, total testosterone is the gold standard'
    ], answer:'Total testosterone measures all testosterone including bound (inactive) forms; free testosterone is the unbound fraction that cells can actually use — free T is more clinically meaningful',
    explanation:'Most testosterone in the blood is hitched to carrier proteins — primarily SHBG (tightly bound and inactive) and albumin (loosely bound and partly available). Only about 1–3% is free and immediately usable by cells. Total testosterone tells you the whole pool; free testosterone tells you how much is actually reaching the locker room. A man with high total T but very high SHBG may experience symptoms of low testosterone because so little of it is free. Free T is the number that reflects lived experience.',
    xpReward:15 },

  // ── ADVANCED LIPID PANEL — New Questions (May 2026 Quest) ─────────────────
  { id:'q141', type:'concept', category:'lipids', difficulty:2,
    question:'What is the difference between LDL-C (LDL cholesterol) and LDL-P (LDL particle number)?',
    options:[
      'LDL-C counts the cholesterol content inside particles; LDL-P counts the number of particles — two people can have the same LDL-C but very different particle counts',
      'LDL-P is just a more precise version of LDL-C using a different lab method',
      'LDL-C is the harmful form; LDL-P is the protective form of the same measurement',
      'LDL-P measures oxidised LDL; LDL-C measures non-oxidised LDL'
    ], answer:'LDL-C counts the cholesterol content inside particles; LDL-P counts the number of particles — two people can have the same LDL-C but very different particle counts',
    explanation:'Imagine LDL-C as the total weight of cargo on delivery trucks, and LDL-P as the count of trucks on the road. You could have 10 heavily loaded trucks (high LDL-C, low LDL-P) or 20 lightly loaded trucks (lower LDL-C, higher LDL-P). Each truck is a potential collision with an artery wall — so particle count (LDL-P) better predicts actual cardiovascular risk. This explains why someone can have "normal" LDL-C but still have a higher cardiovascular risk from elevated LDL-P.',
    xpReward:20, markerId:'ldl_particle_num' },

  { id:'q142', type:'my_value', category:'lipids', difficulty:2,
    question:'What was my LDL Particle Number (LDL-P) on the May 2026 Quest advanced lipid panel?',
    options:['847 nmol/L','1176 nmol/L','1423 nmol/L','1680 nmol/L'], answer:'1176 nmol/L',
    explanation:'1176 nmol/L — mildly elevated (optimal <1000). Context is everything: ApoB 80 (optimal), TG 60 mg/dL (exceptional), Pattern A, CRP <0.2, HOMA-IR 0.9. This is genetic lipoprotein biology, not metabolic dysfunction. Optimization is different from disease.',
    xpReward:15, markerId:'ldl_particle_num' },

  { id:'q143', type:'concept', category:'lipids', difficulty:2,
    question:'Why are small, dense LDL particles considered more atherogenic than large, buoyant LDL?',
    options:[
      'Small LDL has a longer half-life in circulation, oxidises more easily, and slips through arterial walls more readily — all increasing atherogenic potential',
      'Small LDL contains more cholesterol per particle so it deposits more in artery walls',
      'Small LDL is produced only when cholesterol is dietary rather than made by the liver',
      'Small LDL is more atherogenic simply because it is lighter and floats toward arteries'
    ], answer:'Small LDL has a longer half-life in circulation, oxidises more easily, and slips through arterial walls more readily — all increasing atherogenic potential',
    explanation:'Three reasons small dense LDL is riskier: (1) Longer half-life — it stays in circulation longer because LDL receptors bind it less efficiently, giving it more time to cause damage. (2) More easily oxidised — oxidised LDL is far more inflammatory and atherogenic. (3) Smaller size — it can squeeze through the gaps in the endothelial lining of artery walls more easily, where it gets trapped and triggers plaque formation.',
    xpReward:20, markerId:'ldl_small' },

  { id:'q144', type:'concept', category:'lipids', difficulty:2,
    question:'What is LDL Pattern A vs Pattern B, and which is more favorable?',
    options:[
      'Pattern A = predominantly large buoyant LDL (less atherogenic, favorable); Pattern B = predominantly small dense LDL (more atherogenic, concerning). My May 2026 result is Pattern A.',
      'Pattern A = high total LDL count; Pattern B = low total LDL count. Pattern B is better.',
      'Pattern A means LDL is diet-derived; Pattern B means LDL is liver-derived',
      'Pattern A is associated with high triglycerides; Pattern B with low triglycerides'
    ], answer:'Pattern A = predominantly large buoyant LDL (less atherogenic, favorable); Pattern B = predominantly small dense LDL (more atherogenic, concerning). My May 2026 result is Pattern A.',
    explanation:'LDL pattern is classified by particle size: Pattern A = large fluffy LDL (peak size ≥222 Å), considered significantly less atherogenic. Pattern B = small dense LDL (<222 Å), more atherogenic. The key predictor: triglycerides. Low TG (<100 mg/dL) drives Pattern A physics; high TG (>150 mg/dL) drives Pattern B. My TG of 60 mg/dL strongly predicts Pattern A — confirmed by the Quest report.',
    xpReward:20, markerId:'ldl_peak_size' },

  { id:'q145', type:'concept', category:'lipids', difficulty:2,
    question:'Why do many cardiologists now consider ApoB a more important cardiovascular risk marker than LDL-C?',
    options:[
      'ApoB is newer and more expensive so it must be better',
      'ApoB directly counts atherogenic particles (one ApoB per particle) — it captures the total cardiovascular particle burden, not just the cholesterol content inside them',
      'ApoB is only important in high-risk patients; for healthy people LDL-C is sufficient',
      'ApoB measures inflammation directly, which is the true cause of heart disease'
    ], answer:'ApoB directly counts atherogenic particles (one ApoB per particle) — it captures the total cardiovascular particle burden, not just the cholesterol content inside them',
    explanation:'Every atherogenic particle — LDL, VLDL, IDL, Lp(a) — carries exactly ONE ApoB molecule. So ApoB is a direct headcount of all potentially atherogenic particles. LDL-C only measures the cholesterol stuffed inside LDL — it misses VLDL and IDL, and misses the particle-count vs. particle-content distinction. ApoB at 80 (optimal threshold) means the total atherogenic particle burden is well-controlled, despite LDL-P being 1176.',
    xpReward:20, markerId:'apo_b' },

  { id:'q146', type:'concept', category:'lipids', difficulty:2,
    question:'What makes large HDL particles more cardioprotective than small HDL particles?',
    options:[
      'Large HDL particles contain more cholesterol so they can remove more from artery walls',
      'Large HDL particles are more functionally active at reverse cholesterol transport — they have greater capacity to remove cholesterol from artery walls and deliver it back to the liver',
      'Large HDL particles are produced by the liver; small HDL are produced in the gut',
      'Large HDL particles block LDL from binding to artery walls directly'
    ], answer:'Large HDL particles are more functionally active at reverse cholesterol transport — they have greater capacity to remove cholesterol from artery walls and deliver it back to the liver',
    explanation:'Think of large HDL as a full-size dump truck versus small HDL as a compact car. Both do reverse cholesterol transport (picking up cholesterol from artery walls and returning it to the liver), but large HDL does it more efficiently and at greater capacity. Low large HDL is associated with cardiovascular risk even when total HDL-C appears "normal." This is why my HDL-C of 52 mg/dL paired with HDL Large of 4921 (below optimal) is more informative than HDL-C alone.',
    xpReward:20, markerId:'hdl_large' },

  { id:'q147', type:'my_value', category:'lipids', difficulty:2,
    question:'What was my LDL Small particle count on the May 2026 Quest advanced lipid panel?',
    options:['124 nmol/L','192 nmol/L','262 nmol/L','318 nmol/L'], answer:'262 nmol/L',
    explanation:'262 nmol/L — elevated (optimal <200). However: TG 60 mg/dL (exceptional), Pattern A, ApoB 80, CRP <0.2. The context frames this as "stubborn lipoprotein genetics" rather than metabolic syndrome. Zone 2 cardio and psyllium husk are the evidence-based next interventions.',
    xpReward:15, markerId:'ldl_small' },

  { id:'q148', type:'my_value', category:'lipids', difficulty:2,
    question:'What was my HDL Large particle count on the May 2026 Quest advanced lipid panel?',
    options:['2840 nmol/L','4921 nmol/L','6812 nmol/L','8940 nmol/L'], answer:'4921 nmol/L',
    explanation:'4921 nmol/L — below the optimal threshold of 7000 nmol/L. Low large HDL is the functional confirmation that cardioprotective reverse cholesterol transport is suboptimal. The most evidence-based intervention: sustained Zone 2 aerobic cardio, which stimulates ApoA-I synthesis and large HDL production.',
    xpReward:15, markerId:'hdl_large' },

  // ── ZONE 2 CARDIO — New Educational Module ────────────────────────────────
  { id:'q149', type:'concept', category:'cardio', difficulty:1,
    question:'What defines Zone 2 exercise intensity, and why is this specific zone especially important for metabolic health?',
    options:[
      'Zone 2 is maximum sprint effort (90–100% max HR) — the zone that burns the most calories',
      'Zone 2 is low-to-moderate aerobic intensity (~60–70% max HR, conversational pace) — the zone that maximises mitochondrial biogenesis, fat oxidation, and lipoprotein metabolism improvements',
      'Zone 2 is defined by heart rate variability (HRV), not heart rate',
      'Zone 2 is the warm-up zone before "real" training begins — not considered effective exercise'
    ], answer:'Zone 2 is low-to-moderate aerobic intensity (~60–70% max HR, conversational pace) — the zone that maximises mitochondrial biogenesis, fat oxidation, and lipoprotein metabolism improvements',
    explanation:'Zone 2 is the "goldilocks" aerobic zone. At this intensity, you remain below the lactate threshold — meaning mitochondria run primarily on fat oxidation. The cellular adaptations are profound: more mitochondria (biogenesis), better fat-burning capacity, improved cardiovascular efficiency, and — critically for the May 2026 lipid picture — activation of lipoprotein lipase (LPL) which improves particle size distribution and raises large HDL.',
    xpReward:15, supplementId:'zone2' },

  { id:'q150', type:'concept', category:'cardio', difficulty:2,
    question:'How does Zone 2 cardio specifically improve LDL particle profiles?',
    options:[
      'Zone 2 directly lowers LDL-C by blocking cholesterol synthesis in the liver',
      'Zone 2 activates lipoprotein lipase (LPL), which processes triglyceride-rich particles and shifts LDL toward larger, less atherogenic sizes over sustained training',
      'Zone 2 reduces LDL particles by increasing muscle uptake of circulating cholesterol',
      'Zone 2 has no effect on LDL particles — only resistance training affects lipid metabolism'
    ], answer:'Zone 2 activates lipoprotein lipase (LPL), which processes triglyceride-rich particles and shifts LDL toward larger, less atherogenic sizes over sustained training',
    explanation:'Lipoprotein lipase (LPL) is an enzyme attached to blood vessel walls in muscle and fat tissue that breaks down triglyceride-rich particles. Zone 2 cardio strongly upregulates LPL activity. More active LPL: (1) clears VLDL and TG more efficiently, (2) remodels LDL particles into larger, less dense forms, and (3) donates surface components (including ApoA-I) to nascent HDL particles — raising large HDL. HIIT does not produce the same sustained LPL upregulation.',
    xpReward:20, supplementId:'zone2' },

  { id:'q151', type:'concept', category:'cardio', difficulty:2,
    question:'Why does sustained Zone 2 cardio raise large HDL particles specifically?',
    options:[
      'Zone 2 stops the liver from removing HDL from circulation',
      'Zone 2 increases ApoA-I synthesis (the main HDL structural protein) and activates LPL — LPL remodels smaller HDL into larger, more functional particles over sustained aerobic training',
      'Zone 2 transfers cholesterol from LDL to HDL directly during exercise',
      'Zone 2 increases dietary fat absorption which builds larger HDL particles'
    ], answer:'Zone 2 increases ApoA-I synthesis (the main HDL structural protein) and activates LPL — LPL remodels smaller HDL into larger, more functional particles over sustained aerobic training',
    explanation:'Sustained aerobic training increases ApoA-I production (the scaffolding protein that builds HDL particles). LPL activity during Zone 2 also donates surface lipids from VLDL remnants to nascent HDL, growing small HDL into larger, more functional particles. This is the specific mechanism behind "exercise raises HDL" — and it is dose-dependent, taking months of consistent Zone 2 volume to manifest in bloodwork.',
    xpReward:20, supplementId:'zone2' },

  { id:'q152', type:'concept', category:'cardio', difficulty:2,
    question:'In my current health profile, which optimization lever remains MOST underutilised and is most likely to improve the advanced lipid panel?',
    options:[
      'More aggressive supplementation — adding statins or niacin',
      'Zone 2 cardio volume — diet, body composition, supplements, hormones, and inflammation are already well-optimized; cardio is the remaining major lever for LDL-P, small LDL, and HDL Large',
      'Caloric restriction — reducing body fat further is the key driver',
      'Eliminating all dietary fat — the LDL particles are diet-driven'
    ], answer:'Zone 2 cardio volume — diet, body composition, supplements, hormones, and inflammation are already well-optimized; cardio is the remaining major lever for LDL-P, small LDL, and HDL Large',
    explanation:'By May 2026: diet (TG 60, CRP <0.2), body composition (HOMA-IR 0.9), supplements (ApoB 80, fish oil and EVOO running), hormones (SHBG 30, free T 89.7), and inflammation (CRP <0.2) are all well-dialed. The advanced lipid panel flags one remaining cluster: LDL-P 1176, LDL Small 262, HDL Large 4921. These are all responsive to sustained aerobic training. Zone 2 cardio is the highest-yield remaining optimization — the "next chapter" after all other major levers are addressed.',
    xpReward:25, supplementId:'zone2' },

  // ── SERBIA → QUEST TREND COMPARISONS ──────────────────────────────────────
  { id:'q153', type:'multiple_choice', category:'lipids', difficulty:2,
    question:'From Serbia April 2026 to Quest May 2026, which markers showed the MOST DRAMATIC improvement?',
    options:[
      'LDL particle number and HDL large — both dramatically improved',
      'ALT (67→26, -61%), CRP (1.0→<0.2, near-zero), eGFR (62.2→79), and SHBG (53.42→30) — multiple major improvements in one month',
      'Total testosterone and DHT — both dramatically increased',
      'HbA1c and insulin — both substantially improved'
    ], answer:'ALT (67→26, -61%), CRP (1.0→<0.2, near-zero), eGFR (62.2→79), and SHBG (53.42→30) — multiple major improvements in one month',
    explanation:'The Serbia → Quest improvement story is remarkable: ALT dropped 61% (67→26, liver recovered), CRP dropped from borderline 1.0 to essentially undetectable <0.2 (inflammation eliminated), eGFR jumped from concerning 62.2 to solid 79 (creatine artifact resolved), and SHBG fell 44% from 53.42 to 30 (free testosterone dramatically improved). One month of protocol discipline across liver, inflammation, kidney, and hormone axes.',
    xpReward:20 },

  { id:'q154', type:'multiple_choice', category:'lipids', difficulty:2,
    question:'From Serbia April 2026 to Quest May 2026, which cluster of markers WORSENED or remained an OPTIMIZATION TARGET?',
    options:[
      'Liver enzymes — ALT and AST continued to rise',
      'Advanced lipid particle numbers — LDL-P 1176, LDL Small 262, HDL Large 4921 remain optimization targets despite overall excellent cardiovascular health context',
      'Glucose markers — HbA1c rose above pre-diabetes threshold',
      'Testosterone — total testosterone collapsed while free testosterone worsened'
    ], answer:'Advanced lipid particle numbers — LDL-P 1176, LDL Small 262, HDL Large 4921 remain optimization targets despite overall excellent cardiovascular health context',
    explanation:'The advanced lipid particle profile was not tested in Serbia, so May 2026 establishes the baseline. LDL-P 1176, LDL Small 262, and HDL Large 4921 are the new targets. Context: ApoB improved from 89 to 80, TG improved from 0.78 to 0.68 mmol/L, and CRP is near zero. The lipid particle findings likely reflect genetic lipoprotein biology rather than worsening lifestyle — but they are the clear optimization target for the next phase.',
    xpReward:20 },

  { id:'q155', type:'multiple_choice', category:'lipids', difficulty:2,
    question:'My advanced lipid panel shows mildly elevated small LDL particles despite excellent triglycerides (60 mg/dL), HOMA-IR 0.9, and near-zero CRP. What does this pattern most likely represent?',
    options:[
      'Metabolic syndrome — high small LDL always indicates poor metabolic health',
      'Dietary fat excess — must reduce EVOO and fish oil immediately',
      'Genetic tendency in lipoprotein metabolism — not metabolic disease. The context (low TG, excellent insulin sensitivity, zero inflammation) dissociates this from the typical small-LDL risk profile',
      'Supplement toxicity — the stack is elevating LDL particles'
    ], answer:'Genetic tendency in lipoprotein metabolism — not metabolic disease. The context (low TG, excellent insulin sensitivity, zero inflammation) dissociates this from the typical small-LDL risk profile',
    explanation:'Small LDL particles are classically associated with insulin resistance, high TG, and inflammation — the metabolic syndrome constellation. My profile is the opposite: TG 60 (exceptional), HOMA-IR 0.9 (elite insulin sensitivity), CRP <0.2 (essentially no inflammation). The elevated small LDL particles WITHOUT these metabolic risk factors strongly suggests genetic variation in lipoprotein particle metabolism — not lifestyle or diet failure. Optimization is different from disease.',
    xpReward:25 },

  // ── CBC / HEMATOCRIT ──────────────────────────────────────────────────────
  { id:'q156', type:'my_value', category:'metabolic', difficulty:1,
    question:'What was my hematocrit on the May 2026 Quest panel?',
    options:['35.2%','38.8%','41.6%','44.3%'], answer:'38.8%',
    explanation:'38.8% — just below the male optimal zone of 40–50%. Iron is completely fine (ferritin 71, saturation 40%), so this is not iron deficiency anaemia. Most likely a vegan athlete pattern or hemodilution. Worth monitoring at the next panel.',
    xpReward:10, markerId:'hematocrit' },

  { id:'q157', type:'concept', category:'metabolic', difficulty:2,
    question:'My hematocrit is 38.8% (borderline) but all iron markers are optimal. What does this most likely indicate?',
    options:[
      'B12 deficiency — high-dose B12 supplementation is failing',
      'Iron deficiency anaemia — the ferritin test is unreliable',
      'Vegan athlete pattern or hemodilution — borderline hematocrit with excellent iron status does NOT indicate iron deficiency. May reflect training-related plasma volume expansion or baseline physiology.',
      'Kidney disease — eGFR 79 is causing reduced erythropoietin production'
    ], answer:'Vegan athlete pattern or hemodilution — borderline hematocrit with excellent iron status does NOT indicate iron deficiency. May reflect training-related plasma volume expansion or baseline physiology.',
    explanation:'In true iron deficiency anaemia: ferritin is low (<30), TIBC is high, serum iron is low. Here: ferritin 71 (adequate), saturation 40% (optimal), serum iron 136 mcg/dL (optimal). All iron markers are fine. Endurance-trained athletes often have expanded plasma volume — the same RBC mass is diluted in more blood volume, making hematocrit appear lower. This is actually a cardiovascular adaptation, not a deficiency. Monitor at next panel.',
    xpReward:20, markerId:'hematocrit' },

  // ── OPTIMIZATION FRAMING & GENETICS ──────────────────────────────────────
  { id:'q158', type:'concept', category:'lipids', difficulty:1,
    question:'"Optimization is different from disease." What does this mean in the context of my May 2026 lipid results?',
    options:[
      'It means my lipid results are perfect and require no further attention',
      'It means mildly elevated LDL particles in someone with excellent metabolic health, low inflammation, and favorable ApoB represents a genetic optimization target — not a disease state requiring urgent medical treatment',
      'It means lipid results do not matter for people with healthy lifestyles',
      'It means the advanced lipid panel test is unreliable for healthy people'
    ], answer:'It means mildly elevated LDL particles in someone with excellent metabolic health, low inflammation, and favorable ApoB represents a genetic optimization target — not a disease state requiring urgent medical treatment',
    explanation:'The "optimization vs disease" framing is important for psychological wellbeing and appropriate perspective. LDL-P 1176 in someone with: CRP <0.2 (no inflammation driving oxidation), HOMA-IR 0.9 (no insulin resistance causing small LDL production), ApoB 80 (overall atherogenic particle burden well-controlled), and TG 60 (Pattern A physics) — this is a fine-tuning opportunity, not a medical emergency. You have already optimized most major cardiovascular levers. The remaining opportunity is real but it exists in the zone of ongoing optimization, not remediation.',
    xpReward:15 },

  { id:'q159', type:'concept', category:'lipids', difficulty:2,
    question:'How does psyllium husk (soluble fiber) lower LDL cholesterol — what is the mechanism?',
    options:[
      'Psyllium blocks LDL receptors in the liver, trapping LDL in circulation temporarily before clearance',
      'Psyllium forms a gel in the gut that binds bile acids — preventing their reabsorption. The liver must use LDL cholesterol to make replacement bile acids, drawing LDL from the blood.',
      'Psyllium reduces dietary fat absorption, which directly lowers LDL synthesis',
      'Psyllium is an antioxidant that prevents LDL oxidation, making existing LDL less atherogenic'
    ], answer:'Psyllium forms a gel in the gut that binds bile acids — preventing their reabsorption. The liver must use LDL cholesterol to make replacement bile acids, drawing LDL from the blood.',
    explanation:'Bile acids are made from cholesterol by the liver, used to digest fat, then normally reabsorbed in the intestine and recycled (enterohepatic circulation). Psyllium\'s soluble fiber forms a viscous gel that physically traps bile acids, which are then excreted in stool. The liver compensates by pulling more LDL cholesterol from the blood to make new bile. This is the same general mechanism as bile acid sequestrant medications (cholestyramine) but delivered via food/supplement rather than drug. Studies show 5–10 g/day psyllium reduces LDL-C by 5–10%.',
    xpReward:20, supplementId:'psyllium' },

  { id:'q160', type:'concept', category:'cardio', difficulty:2,
    question:'Why does sustained Zone 2 cardio (at conversational pace) produce different physiological adaptations than HIIT (high-intensity interval training)?',
    options:[
      'HIIT is always better — Zone 2 is just not intense enough to produce meaningful adaptation',
      'Zone 2 maximises time below the lactate threshold where fat oxidation and mitochondrial biogenesis dominate — HIIT produces different adaptations (VO2 max, fast-twitch efficiency) but less LPL upregulation and mitochondrial density per session',
      'They produce identical adaptations — intensity is the only variable that matters',
      'Zone 2 is only beneficial for people over 50 — HIIT is superior for all metabolic outcomes in younger people'
    ], answer:'Zone 2 maximises time below the lactate threshold where fat oxidation and mitochondrial biogenesis dominate — HIIT produces different adaptations (VO2 max, fast-twitch efficiency) but less LPL upregulation and mitochondrial density per session',
    explanation:'Zone 2 and HIIT are complementary, not competing. Zone 2 maximises: (1) mitochondrial biogenesis — more time in fat-oxidation mode = stronger stimulus for mitochondrial proliferation; (2) LPL activity — sustained moderate intensity produces more lipoprotein lipase than brief intense bursts; (3) cardiovascular reserve. HIIT maximises VO2 max and fast-twitch power. For the specific goal of improving LDL particle distribution and raising large HDL, sustained Zone 2 volume is the evidence-based tool.',
    xpReward:20, supplementId:'zone2' },

  { id:'q161', type:'my_value', category:'lipids', difficulty:2,
    question:'What was my LDL Peak Size on the May 2026 Quest advanced lipid panel, and what pattern does it suggest?',
    options:['208.4 Å — Pattern B','218.0 Å — Pattern A (borderline)','228.6 Å — Pattern A','240.2 Å — Pattern A (ideal)'], answer:'218.0 Å — Pattern A (borderline)',
    explanation:'218.0 Å is at the boundary of Pattern A (≥222 Å = Pattern A). The Quest report classifies this as Pattern A, which is the favorable designation. Critically, triglycerides at 60 mg/dL are the strongest predictor of Pattern A physics — very low TG means LDL particles are large and buoyant. The 218 Å is at the borderline but the broader context (TG, ApoB, CRP) all support a Pattern A physiology.',
    xpReward:15, markerId:'ldl_peak_size' },

  { id:'q162', type:'multiple_choice', category:'lipids', difficulty:3,
    question:'My profile shows elevated LDL-P (1176) and small LDL (262) but also ApoB 80, TG 60, CRP <0.2, HOMA-IR 0.9, and Pattern A. How do you interpret this "discordance"?',
    options:[
      'The LDL-P and small LDL are the most important numbers — the other markers should be disregarded',
      'Discordance between LDL-P and ApoB/TG/metabolic markers strongly suggests genetic variation in lipoprotein metabolism — not diet- or lifestyle-driven atherogenesis. ApoB 80 confirms the atherogenic burden is controlled. Context saves the interpretation.',
      'This pattern always indicates statin therapy is immediately required',
      'The LDL-P of 1176 must be a lab error — it cannot coexist with TG 60 and Pattern A'
    ], answer:'Discordance between LDL-P and ApoB/TG/metabolic markers strongly suggests genetic variation in lipoprotein metabolism — not diet- or lifestyle-driven atherogenesis. ApoB 80 confirms the atherogenic burden is controlled. Context saves the interpretation.',
    explanation:'When different cardiovascular markers point in different directions, the full constellation matters. Here: LDL-P is mildly elevated (concerning in isolation) but ApoB 80 is optimal (particle burden controlled), TG 60 (excellent — drives Pattern A), CRP <0.2 (no oxidative environment to make LDL particles dangerous), HOMA-IR 0.9 (elite insulin sensitivity). This discordant pattern — elevated particle count with excellent metabolic context — is a known genetic lipoprotein phenotype. The risk profile is much lower than LDL-P alone would suggest.',
    xpReward:30 },

  { id:'q163', type:'concept', category:'cardio', difficulty:2,
    question:'What is lipoprotein lipase (LPL), and why does Zone 2 cardio upregulate it?',
    options:[
      'LPL is a liver enzyme that converts LDL to HDL during exercise',
      'LPL is an enzyme attached to blood vessel walls in muscle and fat tissue that breaks down TG-rich particles — Zone 2 cardio powerfully upregulates it, improving particle size distribution and raising HDL large over sustained training',
      'LPL is produced in the gut and controls bile acid recycling — Zone 2 upregulates bile production',
      'LPL is a blood pressure regulator that Zone 2 cardio activates to reduce cardiovascular resistance'
    ], answer:'LPL is an enzyme attached to blood vessel walls in muscle and fat tissue that breaks down TG-rich particles — Zone 2 cardio powerfully upregulates it, improving particle size distribution and raising HDL large over sustained training',
    explanation:'LPL (lipoprotein lipase) sits on the inner surface of blood vessels in working muscle and fat tissue. It breaks down TG-rich particles (VLDL, IDL) by hydrolyzing their triglycerides, releasing fatty acids into muscle cells. This process: (1) clears TG from blood; (2) remodels VLDL remnants into smaller LDL particles but also shifts the LDL size distribution toward larger forms; (3) donates surface material to HDL particles, growing them into larger, more functional forms. Zone 2 intensity (sustained, moderate) maximises LPL activity per unit time better than HIIT.',
    xpReward:20, supplementId:'zone2' },

  { id:'q164', type:'concept', category:'lipids', difficulty:1,
    question:'What does hs-CRP (high-sensitivity CRP) <0.2 mg/L tell us about cardiovascular risk from LDL particles?',
    options:[
      'CRP being low means LDL particles cannot cause any cardiovascular harm',
      'Very low CRP means there is minimal oxidative and inflammatory environment to modify LDL particles into their most atherogenic (oxidised) form — significantly reducing the clinical significance of mildly elevated LDL-P',
      'CRP <0.2 means the LDL-P test result is a lab error',
      'CRP is unrelated to LDL particle risk — they are independent systems'
    ], answer:'Very low CRP means there is minimal oxidative and inflammatory environment to modify LDL particles into their most atherogenic (oxidised) form — significantly reducing the clinical significance of mildly elevated LDL-P',
    explanation:'LDL particles only become maximally atherogenic after oxidation. Oxidised LDL is the form that triggers inflammatory responses in artery walls, gets taken up by macrophages, and forms foam cells — the beginning of plaque. An inflammatory environment (high CRP, high oxidative stress) accelerates this process. Near-zero CRP (<0.2) means the oxidative/inflammatory environment is minimal — LDL particles are less likely to be oxidised and rendered maximally dangerous. This is why CRP is one of the key contextual markers in interpreting lipid particle results.',
    xpReward:15, markerId:'crp' },

  { id:'q165', type:'concept', category:'lipids', difficulty:2,
    question:'What cardiovascular imaging tests could help assess actual arterial health beyond lipid blood markers?',
    options:[
      'Full-body MRI — the only reliable imaging for arterial health assessment',
      'CAC scan (coronary artery calcium score) and carotid ultrasound (CIMT) — non-invasive tests that directly image plaque burden in arteries, independent of blood marker predictions',
      'PET scan — required to assess cardiac function accurately',
      'Blood pressure monitoring — the only non-invasive cardiovascular assessment needed'
    ], answer:'CAC scan (coronary artery calcium score) and carotid ultrasound (CIMT) — non-invasive tests that directly image plaque burden in arteries, independent of blood marker predictions',
    explanation:'Blood markers (LDL-P, ApoB, CRP) predict cardiovascular risk but don\'t directly measure what\'s happening in your arteries. A CAC scan (coronary artery calcium score) directly images calcified plaque in the coronary arteries — a CAC score of 0 in someone with mildly elevated LDL-P is highly reassuring. Carotid intima-media thickness (CIMT) ultrasound measures arterial wall thickness. Both tests provide objective data on actual arterial health status that blood markers alone cannot give.',
    xpReward:20 },

  { id:'q166', type:'concept', category:'longevity', difficulty:2,
    question:'What is a "senescent cell" (zombie cell), and what makes it harmful?',
    options:[
      'A cancer cell that mutates rapidly and spreads to other tissues',
      'An aged or damaged cell that stops dividing but refuses to die — instead secreting a chronic inflammatory cocktail called SASP (Senescence-Associated Secretory Phenotype)',
      'A cell depleted of NAD+ due to mitochondrial dysfunction',
      'A white blood cell that becomes overactive during immune responses'
    ], answer:'An aged or damaged cell that stops dividing but refuses to die — instead secreting a chronic inflammatory cocktail called SASP (Senescence-Associated Secretory Phenotype)',
    explanation:'Senescent cells accumulate with age and chronic stress. They\'re stuck in a "zombie" state — not dead, not functional, but pumping out inflammatory cytokines (IL-6, TNF-α, MMP-9) that damage surrounding tissue and drive systemic inflammation. SASP (Senescence-Associated Secretory Phenotype) is the term for this toxic secretion pattern. Clearing these cells is one of the core targets of the longevity stack — both HBOT and Fisetin address it through different mechanisms.',
    xpReward:20, supplementId:'hbot' },

  { id:'q167', type:'concept', category:'longevity', difficulty:2,
    question:'What did the landmark Shamir Medical Center HBOT studies (Efrati et al., 2020–2022) demonstrate?',
    options:[
      'HBOT doubles testosterone and IGF-1 after 20 sessions',
      'HBOT at 2 ATA for 60 sessions produced 20–38% telomere elongation and 37% reduction in senescent T-cells — measured directly in human subjects',
      'HBOT eliminates cardiovascular disease risk when combined with statins',
      'Home soft-chambers at 1.3 ATA produce identical results to clinical 2 ATA chambers'
    ], answer:'HBOT at 2 ATA for 60 sessions produced 20–38% telomere elongation and 37% reduction in senescent T-cells — measured directly in human subjects',
    explanation:'Published in the journal Aging, these are the most compelling HBOT longevity studies to date. 65 healthy older adults. Protocol: 60 sessions, 90 min each at 2 ATA breathing 100% oxygen with five-minute air breaks (the air breaks cycle HIF-1α, amplifying the adaptive response). Telomere length was measured via flow cytometry in peripheral blood immune cells. The same study also showed significant improvements in cognitive function — processing speed, attention, and executive function. Dr. Shai Efrati leads the research at Tel Aviv University / Shamir Medical Center.',
    xpReward:25, supplementId:'hbot' },

  { id:'q168', type:'concept', category:'longevity', difficulty:1,
    question:'What is the core mechanism that makes HBOT a "hormetic" intervention?',
    options:[
      'It kills damaged cells directly with high-pressure oxygen',
      'The hyperoxic burst is a controlled stressor — the body\'s adaptive overreaction to the brief oxidative signal is what produces the repair benefits, not the oxygen itself',
      'It floods the bloodstream with antioxidants that neutralise free radicals',
      'High pressure compresses the spine and joints, improving posture and circulation'
    ], answer:'The hyperoxic burst is a controlled stressor — the body\'s adaptive overreaction to the brief oxidative signal is what produces the repair benefits, not the oxygen itself',
    explanation:'Hormesis: a beneficial response to a low-level stressor. HBOT delivers brief hyperoxia (10–15x normal tissue oxygen) — the body interprets this as a threat and mounts a powerful adaptive response: upregulating antioxidants, mobilising stem cells, activating repair pathways. Then oxygen returns to normal, and the adaptive response "overshoots" — leaving the system stronger than before. This is the same principle as Zone 2 cardio (metabolic hormesis), cold plunge (thermal hormesis), and fasting (nutrient-deprivation hormesis).',
    xpReward:20, supplementId:'hbot' },

  { id:'q169', type:'concept', category:'longevity', difficulty:2,
    question:'How does HBOT address my consistently borderline-low hemoglobin (13.9 in Jul 2025, 13.3 in May 2026)?',
    options:[
      'HBOT directly adds iron to the bloodstream to raise hemoglobin synthesis',
      'HBOT stimulates EPO (erythropoietin) production via HIF-1α activation, promoting red blood cell synthesis — the same mechanism altitude training uses',
      'HBOT has no effect on red blood cell production — hemoglobin must be addressed through diet alone',
      'HBOT reduces hemoglobin breakdown by protecting red blood cells from oxidative damage'
    ], answer:'HBOT stimulates EPO (erythropoietin) production via HIF-1α activation, promoting red blood cell synthesis — the same mechanism altitude training uses',
    explanation:'EPO (erythropoietin) is the hormone that tells bone marrow to produce more red blood cells. Altitude training camps exploit this — lower ambient oxygen triggers EPO, building the RBC count athletes return home with. HBOT activates HIF-1α (Hypoxia-Inducible Factor 1-alpha) via the post-session normoxic transition, which upregulates EPO. For consistently borderline-low hemoglobin across multiple panels, HBOT is one of the few non-supplemental interventions with a credible mechanism for improvement alongside dietary iron and B12 optimisation.',
    xpReward:25, supplementId:'hbot' },

  { id:'q170', type:'concept', category:'longevity', difficulty:2,
    question:'Both HBOT and Fisetin target senescent cells — what makes them complementary rather than redundant?',
    options:[
      'They are redundant — you only need one senolytic in your protocol',
      'They work through completely different mechanisms: Fisetin inhibits Bcl-2 anti-apoptotic proteins; HBOT triggers senescent cell apoptosis via oxygen hormesis (p53 activation + oxidative stress pathway)',
      'Fisetin works on muscle cells; HBOT works on brain cells — they have no overlap',
      'HBOT is only needed when Fisetin causes side effects'
    ], answer:'They work through completely different mechanisms: Fisetin inhibits Bcl-2 anti-apoptotic proteins; HBOT triggers senescent cell apoptosis via oxygen hormesis (p53 activation + oxidative stress pathway)',
    explanation:'Senescent cells survive because they hijack anti-apoptotic proteins (especially Bcl-2 and Bcl-xL) to resist normal cell death signals. Fisetin disables this survival mechanism directly — inhibiting Bcl-2 so the cell\'s own death program can proceed. HBOT uses a completely different route: the hyperoxic oxidative burst activates p53 (the cell\'s own tumour suppressor / death signal) and generates reactive oxygen species that overwhelm senescent cells\' already-compromised defences. Different doors into the same room — combining them likely achieves broader senolytic coverage than either alone.',
    xpReward:25, supplementId:'hbot' },

  { id:'q171', type:'concept', category:'longevity', difficulty:2,
    question:'How does HBOT specifically relate to my elevated liver enzymes (ALT 67, AST 39)?',
    options:[
      'HBOT lowers liver enzymes by reducing protein synthesis demands in the liver',
      'HBOT activates HIF-1α and VEGF, which accelerate hepatocyte regeneration and tissue repair — a direct complement to the NAC + TUDCA hepatoprotective protocol',
      'HBOT has no hepatic effects — liver recovery is purely dietary',
      'HBOT raises liver enzymes temporarily before normalising them'
    ], answer:'HBOT activates HIF-1α and VEGF, which accelerate hepatocyte regeneration and tissue repair — a direct complement to the NAC + TUDCA hepatoprotective protocol',
    explanation:'The April 2026 Serbia panel showed ALT 67 (high) and AST 39 (high), likely from heavy training load and creatine. The current protocol addresses this with NAC (antioxidant protection) and TUDCA (bile acid displacement + ER stress reduction). HBOT adds a regenerative layer: hyperoxia activates VEGF (Vascular Endothelial Growth Factor) driving angiogenesis to improve hepatic blood flow, while the HIF-1α pathway upregulates growth factors that accelerate hepatocyte repair. Emerging clinical evidence in NAFLD (non-alcoholic fatty liver disease) shows enzyme normalisation with repeated HBOT courses.',
    xpReward:20, supplementId:'hbot' },

  { id:'q172', type:'concept', category:'longevity', difficulty:1,
    question:'What pressure and session length does the research-backed HBOT longevity protocol use?',
    options:[
      '30 min at 1.0 ATA breathing room air (21% oxygen)',
      '60–90 min at 2 ATA breathing 100% oxygen, with five-minute air breaks per session — as used in the Shamir telomere studies',
      '20 min at 4 ATA — higher pressure is always better',
      '2 hours at 1.1 ATA breathing 30% oxygen'
    ], answer:'60–90 min at 2 ATA breathing 100% oxygen, with five-minute air breaks per session — as used in the Shamir telomere studies',
    explanation:'The Efrati protocol: 90-minute sessions, 2 ATA (atmospheres absolute), 100% oxygen, with five-minute air breaks at 21% oxygen every 20 minutes. The air breaks are deliberate — cycling between hyperoxia and normoxia maximises the HIF-1α activation/deactivation cycle, which is what drives the adaptive response. Home soft-chambers typically operate at 1.3 ATA — lower pressure, lower risk, but the evidence base is at 2 ATA. The gap between 1.3 ATA and 2 ATA in terms of biological effect is not fully characterised, though lower-pressure use is still biologically active.',
    xpReward:15, supplementId:'hbot' },

  { id:'q173', type:'concept', category:'longevity', difficulty:2,
    question:'Why does HBOT synergise specifically well with the NMN/NAD+ protocol?',
    options:[
      'HBOT metabolises NMN faster, increasing its bioavailability',
      'Both are taken fasted — the shared timing creates synergy',
      'HBOT activates PGC-1α, driving mitochondrial biogenesis (more mitochondria); NMN/NAD+ fuels those mitochondria — quantity + quality mitochondrial strategy',
      'HBOT and NMN both target the same SIRT1 pathway — one oral, one physical'
    ], answer:'HBOT activates PGC-1α, driving mitochondrial biogenesis (more mitochondria); NMN/NAD+ fuels those mitochondria — quantity + quality mitochondrial strategy',
    explanation:'PGC-1α (Peroxisome proliferator-activated receptor gamma coactivator 1-alpha) is the master switch for mitochondrial biogenesis — it tells cells to make more mitochondria. HBOT\'s hyperoxic stress activates PGC-1α powerfully. NMN then ensures those new and existing mitochondria have adequate NAD+ to generate ATP. NAD+ declines ~1% per year after age 30, impairing mitochondrial efficiency even if the mitochondria are physically present. HBOT addresses quantity; NMN addresses quality and fuel. Zone 2 cardio also activates PGC-1α — creating a triple synergy: HBOT + NMN + Zone 2.',
    xpReward:25, supplementId:'hbot' },

  { id:'q174', type:'concept', category:'longevity', difficulty:1,
    question:'What does SASP stand for, and why does clearing senescent cells lower systemic inflammation?',
    options:[
      'Systemic Autophagy Suppression Protocol — a cellular process that blocks waste clearance',
      'Senescence-Associated Secretory Phenotype — the chronic inflammatory cocktail (IL-6, TNF-α, MMPs) that zombie cells secrete, which drives systemic CRP elevation and tissue damage',
      'Supplemental Antioxidant Support Programme — a therapeutic strategy for longevity',
      'Serum Albumin Synthesis Pathway — a liver function indicator'
    ], answer:'Senescence-Associated Secretory Phenotype — the chronic inflammatory cocktail (IL-6, TNF-α, MMPs) that zombie cells secrete, which drives systemic CRP elevation and tissue damage',
    explanation:'SASP is why senescent cells are dangerous even when they\'re not dividing. Each zombie cell continuously secretes pro-inflammatory cytokines (IL-6, IL-8), tumour necrosis factor-alpha (TNF-α), and matrix metalloproteinases (MMPs) that degrade the extracellular matrix. Locally, SASP damages surrounding healthy cells and accelerates tissue aging. Systemically, the aggregate SASP output raises CRP, drives low-grade inflammation, and impairs immune function. Clearing senescent cells (via Fisetin, HBOT) directly removes the SASP source — which is why senolytic protocols can measurably lower CRP and inflammatory markers.',
    xpReward:20, supplementId:'hbot' },

  { id:'q175', type:'concept', category:'longevity', difficulty:3,
    question:'What is the full longevity mechanism chain from HBOT → HIF-1α → downstream repair?',
    options:[
      'HBOT → more oxygen → more ATP → cells live longer → longevity',
      'HBOT (hyperoxia) → paradoxical HIF-1α activation during post-session normoxic rebound → VEGF (angiogenesis) + EPO (RBC production) + PGC-1α (mitochondrial biogenesis) + apoptosis of senescent cells → systemic regeneration',
      'HBOT → NF-κB activation → inflammation → immune boost → longevity',
      'HBOT → stem cells released → travel to damage sites → replace all aging cells'
    ], answer:'HBOT (hyperoxia) → paradoxical HIF-1α activation during post-session normoxic rebound → VEGF (angiogenesis) + EPO (RBC production) + PGC-1α (mitochondrial biogenesis) + apoptosis of senescent cells → systemic regeneration',
    explanation:'The key insight is that HIF-1α (Hypoxia-Inducible Factor 1-alpha) is named for hypoxia, but HBOT activates it through a different route: the transition from hyperoxia BACK to normal oxygen. This normoxic rebound is interpreted by sensors as a relative "hypoxic" shift, triggering HIF-1α. From there: VEGF drives new blood vessel formation (healing ischemic and damaged tissue); EPO stimulates red blood cell production in bone marrow; PGC-1α turns on mitochondrial biogenesis. Simultaneously, the oxidative burst of hyperoxia triggers p53 and overwhelms senescent cells\' Bcl-2 defences — clearing SASP-secreting zombie cells. Four mechanisms, one session.',
    xpReward:30, supplementId:'hbot' },
];
