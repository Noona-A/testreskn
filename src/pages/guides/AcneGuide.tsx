import { useState, useEffect, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, AlertTriangle, CheckCircle, XCircle, Clock, Sparkles, ShieldCheck, Heart, AlertCircle, Pill, Droplets, Sun, Moon, ChevronRight, BookOpen, FlaskConical, Calendar, Zap, ShoppingBag, Timer, Baby, Shirt, Stethoscope, Palette, HeartHandshake, Apple } from "lucide-react";
import SEO from "@/components/SEO";
const sections = [{
  id: "understanding",
  label: "Understanding Acne",
  icon: BookOpen
}, {
  id: "treatments",
  label: "Treatments",
  icon: FlaskConical
}, {
  id: "routine",
  label: "Your Routine",
  icon: Sun
}, {
  id: "prescription",
  label: "Prescription Help",
  icon: Pill
}, {
  id: "mistakes",
  label: "Common Mistakes",
  icon: XCircle
}, {
  id: "action-plan",
  label: "12-Week Plan",
  icon: Calendar
}, {
  id: "purging",
  label: "Purging vs Breakouts",
  icon: AlertCircle
}, {
  id: "scars",
  label: "Scars & Marks",
  icon: Heart
}, {
  id: "layering",
  label: "Layering Actives",
  icon: Zap
}, {
  id: "emergency",
  label: "Emergency Treatment",
  icon: AlertTriangle
}, {
  id: "pregnancy",
  label: "Pregnancy-Safe",
  icon: Baby
}, {
  id: "body-acne",
  label: "Body Acne",
  icon: Shirt
}, {
  id: "hormonal",
  label: "Hormonal & PCOS",
  icon: Stethoscope
}, {
  id: "makeup",
  label: "Makeup Tips",
  icon: Palette
}, {
  id: "mental-health",
  label: "Mental Health",
  icon: HeartHandshake
}, {
  id: "diet",
  label: "Diet & Lifestyle",
  icon: Apple
}, {
  id: "budget",
  label: "Budget Routines",
  icon: ShoppingBag
}, {
  id: "timeline",
  label: "Timeline",
  icon: Timer
}];

// Section content components
const UnderstandingContent = () => <div className="space-y-3">
    <div>
      <h3 className="font-semibold text-base text-foreground mb-2">What Causes Acne?</h3>
      <p className="text-muted-foreground mb-2 text-xs">
        Acne develops when four key factors come together:
      </p>
      <div className="grid sm:grid-cols-2 gap-2">
        <div className="bg-lavender-light/50 border border-purple rounded-xl p-3">
          <h4 className="font-medium text-foreground text-sm mb-1">Excess oil production</h4>
          <p className="text-xs text-muted-foreground">Your skin produces too much oil, often triggered by hormones</p>
        </div>
        <div className="bg-lavender-light/50 border border-purple-light rounded-xl p-3">
          <h4 className="font-medium text-foreground text-sm mb-1">Blocked pores</h4>
          <p className="text-xs text-muted-foreground">Dead skin cells don't shed properly and clog pores</p>
        </div>
        <div className="bg-lavender-light/50 border border-lavender-glow rounded-xl p-3">
          <h4 className="font-medium text-foreground text-sm mb-1">Bacteria</h4>
          <p className="text-xs text-muted-foreground">Bacteria multiply in clogged pores, causing inflammation</p>
        </div>
        <div className="bg-blush/30 border border-pink-300 rounded-xl p-3">
          <h4 className="font-medium text-foreground text-sm mb-1">Inflammation</h4>
          <p className="text-xs text-muted-foreground">Your body's immune response creates redness and swelling</p>
        </div>
      </div>
    </div>

    <div>
      <h3 className="font-semibold text-lg text-foreground mb-3">Types of Acne</h3>
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">Non-Inflammatory</h4>
          <div className="space-y-2">
            <div className="bg-muted/50 rounded-lg p-2 flex items-center gap-2">
              <span className="bg-purple/15 text-purple-deep text-xs font-medium px-2 py-0.5 rounded-full">Blackheads</span>
              <p className="text-xs text-muted-foreground">Open pores that look dark due to oxidation</p>
            </div>
            <div className="bg-muted/50 rounded-lg p-2 flex items-center gap-2">
              <span className="bg-purple/15 text-purple-deep text-xs font-medium px-2 py-0.5 rounded-full">Whiteheads</span>
              <p className="text-xs text-muted-foreground">Closed pores that appear as small white bumps</p>
            </div>
          </div>
        </div>
        <div>
          <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">Inflammatory</h4>
          <div className="space-y-2">
            <div className="bg-blush/30 rounded-lg p-2 flex items-center gap-2">
              <span className="bg-pink-100 text-pink-700 text-xs font-medium px-2 py-0.5 rounded-full">Papules</span>
              <p className="text-xs text-muted-foreground">Small, red, tender bumps without pus</p>
            </div>
            <div className="bg-blush/30 rounded-lg p-2 flex items-center gap-2">
              <span className="bg-pink-100 text-pink-700 text-xs font-medium px-2 py-0.5 rounded-full">Pustules</span>
              <p className="text-xs text-muted-foreground">Red bumps with white/yellow pus at centre</p>
            </div>
            <div className="bg-blush/30 rounded-lg p-2 flex items-center gap-2">
              <span className="bg-pink-200 text-pink-800 text-xs font-medium px-2 py-0.5 rounded-full">Nodules/Cysts</span>
              <p className="text-xs text-muted-foreground">Deep, painful lumps with highest scarring risk</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div>
      <h3 className="font-semibold text-lg text-foreground mb-3">How Serious Is My Acne?</h3>
      <div className="grid sm:grid-cols-2 gap-3">
        <div className="bg-green-50/80 border border-green-200 rounded-xl p-3">
          <h4 className="font-semibold text-green-800 text-sm mb-1">Mild to Moderate</h4>
          <p className="text-xs text-green-700">Any blackheads/whiteheads, up to 34 red bumps. Often responds well to over-the-counter treatments.</p>
        </div>
        <div className="bg-red-50/80 border border-red-200 rounded-xl p-3">
          <h4 className="font-semibold text-red-800 text-sm mb-1">Moderate to Severe</h4>
          <p className="text-xs text-red-700">35+ red bumps, nodules/cysts present, or scarring developing. May need prescription treatment.</p>
        </div>
      </div>
    </div>
  </div>;
const TreatmentsContent = () => <div className="space-y-4">
  

    <div className="bg-card border border-border rounded-xl p-4">
      <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
        <h3 className="font-semibold text-foreground text-sm">Benzoyl Peroxide (2.5-10%)</h3>
        <span className="bg-purple/10 text-purple-deep text-xs font-medium px-2 py-0.5 rounded-full">Gold Standard</span>
      </div>
      <p className="text-xs text-muted-foreground mb-2">Kills bacteria, reduces inflammation, and helps unclog pores. Start with 2.5% to minimise irritation, apply once daily.</p>
      <div className="bg-amber-50/80 border border-amber-200 rounded-lg p-2 flex items-start gap-2">
        <AlertTriangle className="w-3 h-3 text-amber-600 flex-shrink-0 mt-0.5" />
        <p className="text-xs text-amber-800">Bleaches fabric — use white towels and pillowcases!</p>
      </div>
    </div>

    <div className="bg-card border border-border rounded-xl p-4">
      <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
        <h3 className="font-semibold text-foreground text-sm">Adapalene (Retinoid) 0.1%</h3>
        <span className="bg-purple/10 text-purple-deep text-xs font-medium px-2 py-0.5 rounded-full"> Recommended</span>
      </div>
      <p className="text-xs text-muted-foreground mb-2">Normalises skin cell turnover and prevents clogged pores. Start 2-3x weekly at night, use a pea-sized amount. Expect some dryness initially.</p>
      <div className="bg-red-50/80 border border-red-200 rounded-lg p-2 flex items-start gap-2">
        <XCircle className="w-3 h-3 text-red-600 flex-shrink-0 mt-0.5" />
        <p className="text-xs text-red-800">Not safe during pregnancy. You must use SPF daily as it increases sun sensitivity.</p>
      </div>
    </div>

    <div className="grid sm:grid-cols-2 gap-3">
      <div className="bg-card border border-border rounded-xl p-3">
        <h3 className="font-semibold text-foreground text-sm mb-1">Salicylic Acid 0.5-2%</h3>
        <p className="text-xs text-muted-foreground">Exfoliates inside pores and dissolves oil. Best for blackheads, whiteheads, and oily skin. Can be used daily long-term.</p>
      </div>
      <div className="bg-card border border-border rounded-xl p-3">
        <h3 className="font-semibold text-foreground text-sm mb-1">Azelaic Acid 10-20%</h3>
        <p className="text-xs text-muted-foreground">Antibacterial and anti-inflammatory, also fades dark marks. Well-tolerated and safe in pregnancy.</p>
      </div>
      <div className="bg-card border border-border rounded-xl p-3">
        <h3 className="font-semibold text-foreground text-sm mb-1">Niacinamide 2-10%</h3>
        <p className="text-xs text-muted-foreground">Reduces oil production and inflammation. Very well-tolerated and pairs nicely with most other actives.</p>
      </div>
      <div className="bg-card border border-border rounded-xl p-3">
        <h3 className="font-semibold text-foreground text-sm mb-1">Alpha Hydroxy Acids (AHAs)</h3>
        <p className="text-xs text-muted-foreground">Surface exfoliation that improves texture and mild dark marks. Start with lower strengths.</p>
      </div>
    </div>
  </div>;
const RoutineContent = () => <div className="space-y-6">
    <div className="bg-lavender-light/50 rounded-xl p-4 mb-4">
      <h3 className="font-semibold text-foreground mb-2 text-sm">Golden Rules</h3>
      <ul className="text-xs text-muted-foreground space-y-1">
        <li className="flex items-start gap-2"><CheckCircle className="w-3 h-3 text-green-600 flex-shrink-0 mt-0.5" /> Introduce only one new active at a time</li>
        <li className="flex items-start gap-2"><CheckCircle className="w-3 h-3 text-green-600 flex-shrink-0 mt-0.5" /> Wait 4-6 weeks before adding another product</li>
        <li className="flex items-start gap-2"><CheckCircle className="w-3 h-3 text-green-600 flex-shrink-0 mt-0.5" /> SPF is non-negotiable when using any active</li>
        <li className="flex items-start gap-2"><CheckCircle className="w-3 h-3 text-green-600 flex-shrink-0 mt-0.5" /> Even oily skin needs moisturiser</li>
      </ul>
    </div>

    <div className="grid sm:grid-cols-2 gap-4">
      <div className="bg-amber-50/80 border border-amber-200 rounded-xl p-4">
        <div className="flex items-center gap-2 mb-3">
          <Sun className="w-5 h-5 text-amber-600" />
          <h3 className="font-semibold text-amber-900">Morning</h3>
        </div>
        <ol className="text-xs text-amber-800 space-y-2">
          <li><span className="font-medium">1.</span> Gentle, fragrance-free cleanser</li>
          <li><span className="font-medium">2.</span> Niacinamide or Azelaic Acid serum (optional)</li>
          <li><span className="font-medium">3.</span> Lightweight, non-comedogenic moisturiser</li>
          <li><span className="font-medium">4.</span> SPF 30-50 (essential!)</li>
        </ol>
      </div>

      <div className="bg-indigo-50/80 border border-indigo-200 rounded-xl p-4">
        <div className="flex items-center gap-2 mb-3">
          <Moon className="w-5 h-5 text-indigo-600" />
          <h3 className="font-semibold text-indigo-900">Evening</h3>
        </div>
        <ol className="text-xs text-indigo-800 space-y-2">
          <li><span className="font-medium">1.</span> Double cleanse if wearing SPF/makeup</li>
          <li><span className="font-medium">2.</span> Treatment (Benzoyl Peroxide OR Adapalene)</li>
          <li><span className="font-medium">3.</span> Wait 10-15 minutes for treatment to absorb</li>
          <li><span className="font-medium">4.</span> Moisturiser (be generous if skin feels dry)</li>
        </ol>
      </div>
    </div>

    <div className="bg-card border border-border rounded-xl p-4">
      <h3 className="font-semibold text-foreground text-sm mb-2">Recommended First-Line Approaches</h3>
      <div className="text-xs text-muted-foreground space-y-2">
        <p><strong>For Mild-Moderate:</strong> Adapalene 0.1% + Benzoyl Peroxide 2.5% combination (e.g., Differin + Acnecide) OR Benzoyl Peroxide + Azelaic Acid</p>
        <p><strong>For Moderate-Severe:</strong> Consider professional consultation for prescription options (oral antibiotics + topical combination)</p>
      </div>
    </div>
  </div>;
const PrescriptionContent = () => <div className="space-y-4">
   

    <div className="bg-purple-50/80 border border-purple-200 rounded-xl p-4">
      <h3 className="font-semibold text-purple-900 mb-2 text-sm">When to Seek Professional Help</h3>
      <ul className="text-xs text-purple-800 space-y-1">
        <li>• Moderate-severe acne not responding to over-the-counter products after 12 weeks of consistent use</li>
        <li>• Nodules or cysts present (deep, painful lumps)</li>
        <li>• Acne causing scarring</li>
        <li>• Significant impact on your mental health or confidence</li>
        <li>• You suspect hormonal acne (jawline breakouts, related to periods)</li>
      </ul>
    </div>

    <div className="space-y-3">
      <div className="bg-card border border-border rounded-xl p-3">
        <h3 className="font-semibold text-foreground text-sm">Topical Antibiotics</h3>
        <p className="text-xs text-muted-foreground">Clindamycin or erythromycin — always prescribed with benzoyl peroxide to prevent bacteria becoming resistant</p>
      </div>
      <div className="bg-card border border-border rounded-xl p-3">
        <h3 className="font-semibold text-foreground text-sm">Oral Antibiotics</h3>
        <p className="text-xs text-muted-foreground">Lymecycline or doxycycline — typically 3-month courses. You should see improvement within 6-8 weeks</p>
      </div>
      <div className="bg-card border border-border rounded-xl p-3">
        <h3 className="font-semibold text-foreground text-sm">Combined Oral Contraceptives</h3>
        <p className="text-xs text-muted-foreground">For hormonal acne in women — options include Dianette, Yasmin. Takes 3-4 months to see improvement</p>
      </div>
      <div className="bg-card border border-border rounded-xl p-3">
        <h3 className="font-semibold text-foreground text-sm">Isotretinoin (Roaccutane)</h3>
        <p className="text-xs text-muted-foreground">Dermatologist-only prescription for severe or scarring acne. Very effective but requires careful monitoring</p>
      </div>
    </div>
  </div>;
const MistakesContent = () => <div className="space-y-3">
    <p className="text-sm text-muted-foreground mb-4">
      Avoid these common pitfalls that can make acne worse or delay your results.
    </p>

    {[{
    mistake: "Giving up too soon",
    fix: "Treatments take 6-8 weeks minimum. Full results often take 12 weeks. Don't give up after 2-3 weeks!"
  }, {
    mistake: "Using too many products at once",
    fix: "Start ONE active ingredient at a time. Wait 4-6 weeks before adding another to know what's working"
  }, {
    mistake: "Over-cleansing or harsh scrubbing",
    fix: "Stick to gentle, pH-balanced cleanser twice daily. Over-washing damages your skin barrier"
  }, {
    mistake: "Skipping moisturiser because skin is oily",
    fix: "Dehydrated skin produces MORE oil. Use a lightweight, non-comedogenic moisturiser"
  }, {
    mistake: "Not using SPF with actives",
    fix: "SPF 30+ daily is essential with retinoids/acids — sun damage worsens marks and irritation"
  }, {
    mistake: "Picking and squeezing spots",
    fix: "This causes scarring and spreads bacteria. Use hydrocolloid patches instead if tempted"
  }, {
    mistake: "Using antibiotics alone",
    fix: "Antibiotics should always be combined with topical treatments to prevent resistance"
  }].map((item, index) => <div key={index} className="bg-card border border-border rounded-xl p-3 flex gap-3">
        <XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
        <div>
          <p className="text-sm font-medium text-foreground">{item.mistake}</p>
          <p className="text-xs text-muted-foreground">{item.fix}</p>
        </div>
      </div>)}
  </div>;
const ActionPlanContent = () => <div className="space-y-4">
    <p className="text-sm text-muted-foreground mb-4">
      A structured approach to introducing treatments and tracking your progress.
    </p>

    {[{
    weeks: "1-2",
    title: "Foundation",
    tasks: ["Establish gentle cleansing routine (morning and evening)", "Add non-comedogenic moisturiser", "Start daily SPF 30+", "Take baseline photos for comparison"]
  }, {
    weeks: "3-4",
    title: "First Active",
    tasks: ["Choose ONE: benzoyl peroxide, azelaic acid, OR adapalene", "Start slowly (2-3x weekly for retinoid, daily for benzoyl peroxide)", "Monitor for irritation and adjust if needed"]
  }, {
    weeks: "6-8",
    title: "Assess & Adjust",
    tasks: ["Review your tracking — notice any patterns?", "Compare progress photos", "If improving, continue! If not, increase frequency of active"]
  }, {
    weeks: "9-12",
    title: "Evaluate Progress",
    tasks: ["You should see noticeable improvement by now", "If seeing improvement, continue with maintenance", "If not adequately improved, seek professional consultation"]
  }].map((phase, index) => <div key={index} className="bg-card border border-border rounded-xl p-4">
        <div className="flex items-center gap-3 mb-2">
          <span className="bg-primary text-primary-foreground text-xs font-bold px-2 py-1 rounded-full">Weeks {phase.weeks}</span>
          <h3 className="font-semibold text-foreground text-sm">{phase.title}</h3>
        </div>
        <ul className="text-xs text-muted-foreground space-y-1">
          {phase.tasks.map((task, i) => <li key={i} className="flex items-start gap-2">
              <CheckCircle className="w-3 h-3 text-primary flex-shrink-0 mt-0.5" />
              {task}
            </li>)}
        </ul>
      </div>)}
  </div>;
const PurgingContent = () => <div className="space-y-4">
  

    <div className="grid sm:grid-cols-2 gap-4">
      <div className="bg-green-50/80 border border-green-200 rounded-xl p-4">
        <div className="flex items-center gap-2 mb-3">
          <CheckCircle className="w-5 h-5 text-green-600" />
          <h3 className="font-semibold text-green-900 text-sm">Normal Purging</h3>
        </div>
        <ul className="text-xs text-green-800 space-y-1">
          <li>• Only happens with cell-turnover actives (retinoids, AHAs, BHAs)</li>
          <li>• Breakouts in your usual problem areas</li>
          <li>• Small, surface-level spots that heal faster than usual</li>
          <li>• Improves within 4-6 weeks</li>
          <li>• May have mild dryness or peeling (especially retinoids)</li>
        </ul>
      </div>

      <div className="bg-red-50/80 border border-red-200 rounded-xl p-4">
        <div className="flex items-center gap-2 mb-3">
          <XCircle className="w-5 h-5 text-red-600" />
          <h3 className="font-semibold text-red-900 text-sm">Bad Reaction — Stop Product</h3>
        </div>
        <ul className="text-xs text-red-800 space-y-1">
          <li>• Breakouts in new areas where you don't normally get spots</li>
          <li>• Painful cysts or deep nodules</li>
          <li>• Severe burning, stinging, or itching</li>
          <li>• Excessive dryness, cracking, or peeling</li>
          <li>• Gets worse after 6-8 weeks</li>
        </ul>
      </div>
    </div>

    <div className="bg-card border border-border rounded-xl p-4">
      <h3 className="font-semibold text-foreground text-sm mb-2">How Long Does Purging Last?</h3>
      <div className="grid sm:grid-cols-2 gap-2 text-xs text-muted-foreground">
        <p>• <strong>Retinoids:</strong> 4-8 weeks, sometimes up to 12</p>
        <p>• <strong>Benzoyl peroxide:</strong> 2-4 weeks</p>
        <p>• <strong>Salicylic acid:</strong> 2-3 weeks</p>
        <p>• <strong>Azelaic acid:</strong> 2-4 weeks</p>
      </div>
    </div>

    <div className="bg-amber-50/80 border border-amber-200 rounded-lg p-3">
      <p className="text-xs text-amber-800"><strong>If in doubt:</strong> Stop the product and see if your skin improves within 1-2 weeks. If purging continues beyond 8 weeks or worsens, consult a healthcare professional.</p>
    </div>
  </div>;
const ScarsContent = () => <div className="space-y-4">
    <p className="text-sm text-muted-foreground mb-4">
      After acne heals, you may be left with marks. Understanding the difference between temporary marks and permanent scars is key to choosing the right treatment.
    </p>

    <div className="space-y-3">
      <div className="bg-pink-50/80 border border-pink-200 rounded-xl p-4">
        <h3 className="font-semibold text-pink-900 text-sm mb-2">PIE (Post-Inflammatory Erythema) — Red/Pink Marks</h3>
        <p className="text-xs text-pink-800 mb-2">Caused by damaged blood vessels beneath the skin. More common in lighter skin tones. Can take 3-12 months to fade naturally.</p>
        <p className="text-xs text-pink-700"><strong>What helps:</strong> Azelaic acid, niacinamide, vitamin C, SPF, and time</p>
      </div>

      <div className="bg-amber-50/80 border border-amber-200 rounded-xl p-4">
        <h3 className="font-semibold text-amber-900 text-sm mb-2">PIH (Post-Inflammatory Hyperpigmentation) — Dark Marks</h3>
        <p className="text-xs text-amber-800 mb-2">Caused by excess melanin production after inflammation. More common in medium to darker skin tones. Can take 6-24 months to fade. Sun exposure makes it worse!</p>
        <p className="text-xs text-amber-700"><strong>What helps:</strong> Vitamin C, azelaic acid, tranexamic acid, retinoids, and SPF is CRITICAL</p>
      </div>

      <div className="bg-purple-50/80 border border-purple-200 rounded-xl p-4">
        <h3 className="font-semibold text-purple-900 text-sm mb-2">Atrophic Scars (Indented/Pitted)</h3>
        <p className="text-xs text-purple-800 mb-2">Ice pick, boxcar, and rolling scars from collagen loss. These cannot be fixed with skincare products alone.</p>
        <p className="text-xs text-purple-700"><strong>Professional options:</strong> Microneedling (£150-400/session), TCA CROSS (£100-300/session), laser resurfacing (£400-1500+), subcision. Expect 50-70% improvement with multiple sessions.</p>
      </div>
    </div>

    <div className="bg-card border border-border rounded-xl p-3">
      <p className="text-xs text-muted-foreground"><strong>Most important step:</strong> Daily SPF 30+ is essential. UV exposure darkens existing marks and prevents them from fading. Nothing else will work without sun protection!</p>
    </div>
  </div>;
const LayeringContent = () => <div className="space-y-4">
    <p className="text-sm text-muted-foreground mb-4">
      Once you've introduced actives one at a time and your skin has adjusted, you can combine them strategically. Never introduce multiple new products at once.
    </p>

    <div className="bg-green-50/80 border border-green-200 rounded-xl p-4 mb-3">
      <h3 className="font-semibold text-green-900 text-sm mb-2 flex items-center gap-2">
        <CheckCircle className="w-4 h-4" /> Safe Combinations
      </h3>
      <ul className="text-xs text-green-800 space-y-1">
        <li>• Niacinamide + almost anything (very versatile)</li>
        <li>• Hyaluronic acid + anything</li>
        <li>• Benzoyl peroxide AM + Retinoid PM (different times of day)</li>
        <li>• Azelaic acid + Niacinamide</li>
        <li>• Azelaic acid AM + Retinoid PM</li>
      </ul>
    </div>

    <div className="bg-red-50/80 border border-red-200 rounded-xl p-4 mb-3">
      <h3 className="font-semibold text-red-900 text-sm mb-2 flex items-center gap-2">
        <XCircle className="w-4 h-4" /> Avoid Together (Same Routine)
      </h3>
      <ul className="text-xs text-red-800 space-y-1">
        <li>• Retinoids + AHAs/BHAs (too irritating together)</li>
        <li>• Benzoyl peroxide + Vitamin C (BP deactivates vitamin C)</li>
        <li>• Multiple strong acids at once</li>
        <li>• Retinoids + Benzoyl peroxide at the same time</li>
      </ul>
    </div>

    <div className="bg-card border border-border rounded-xl p-4">
      <h3 className="font-semibold text-foreground text-sm mb-2">Sample Advanced Routine (After 3+ Months)</h3>
      <div className="grid sm:grid-cols-2 gap-3 text-xs text-muted-foreground">
        <div>
          <p className="font-medium text-foreground mb-1">Morning:</p>
          <p>1. Gentle cleanser</p>
          <p>2. Vitamin C or Azelaic Acid</p>
          <p>3. Niacinamide (optional)</p>
          <p>4. Moisturiser</p>
          <p>5. SPF 30+</p>
        </div>
        <div>
          <p className="font-medium text-foreground mb-1">Evening:</p>
          <p>1. Gentle cleanser</p>
          <p>2. Wait 5 mins for skin to dry</p>
          <p>3. Retinoid OR Benzoyl Peroxide</p>
          <p>4. Wait 10-15 mins</p>
          <p>5. Moisturiser</p>
        </div>
      </div>
    </div>

    <div className="bg-lavender-light/50 rounded-lg p-3">
      <p className="text-xs text-muted-foreground"><strong>Tip:</strong> When in doubt, alternate nights or use one product in the morning and one in the evening.</p>
    </div>
  </div>;
const EmergencyContent = () => <div className="space-y-4">


    <div className="space-y-3">
      <div className="bg-card border border-border rounded-xl p-4">
        <h3 className="font-semibold text-foreground text-sm mb-2">For a Red, Angry Spot</h3>
        <ol className="text-xs text-muted-foreground space-y-1">
          <li><span className="font-medium">1.</span> Ice wrapped in cloth for 10 mins on, 10 mins off, repeat 2-3x — reduces swelling</li>
          <li><span className="font-medium">2.</span> Benzoyl peroxide 2.5-5% spot treatment — leave on overnight</li>
          <li><span className="font-medium">3.</span> Hydrocolloid patch overnight — absorbs fluid and protects from picking</li>
        </ol>
      </div>

      <div className="bg-card border border-border rounded-xl p-4">
        <h3 className="font-semibold text-foreground text-sm mb-2">For a Cyst or Deep Nodule</h3>
        <ol className="text-xs text-muted-foreground space-y-1">
          <li><span className="font-medium">1.</span> Do NOT squeeze — this makes it worse and causes scarring</li>
          <li><span className="font-medium">2.</span> Warm compress to help draw it out</li>
          <li><span className="font-medium">3.</span> For urgent events, a dermatologist can do a cortisone injection</li>
        </ol>
      </div>

      <div className="bg-card border border-border rounded-xl p-4">
        <h3 className="font-semibold text-foreground text-sm mb-2">Covering a Spot with Makeup</h3>
        <ol className="text-xs text-muted-foreground space-y-1">
          <li>• Apply hydrocolloid patch first if possible, then makeup over top</li>
          <li>• Use green colour corrector for redness, then concealer</li>
          <li>• Pat gently, don't rub</li>
          <li>• Use non-comedogenic products only</li>
        </ol>
      </div>
    </div>

    <div className="bg-red-50/80 border border-red-200 rounded-lg p-3">
      <h3 className="font-semibold text-red-800 text-sm mb-2">What DOESN'T Work (Despite What You See Online)</h3>
      <ul className="text-xs text-red-700 space-y-1">
        <li>❌ Toothpaste — too harsh, can cause burns</li>
        <li>❌ Lemon juice — causes irritation and pigmentation</li>
        <li>❌ Baking soda — disrupts skin pH</li>
        <li>❌ Tea tree oil undiluted — can cause severe irritation</li>
        <li>❌ Picking/squeezing — causes scarring and spreads bacteria</li>
      </ul>
    </div>

    <div className="bg-amber-50/80 border border-amber-200 rounded-lg p-3">
      <p className="text-xs text-amber-800"><strong>Realistic expectations:</strong> Nothing makes a spot disappear overnight. These methods reduce redness, size, and pain. Prevention with a consistent routine is always better than emergency treatment.</p>
    </div>
  </div>;
const PregnancyContent = () => <div className="space-y-4">


    <div className="bg-green-50/80 border border-green-200 rounded-xl p-4">
      <h3 className="font-semibold text-green-900 text-sm mb-3 flex items-center gap-2">
        <CheckCircle className="w-4 h-4" /> Safe Options During Pregnancy
      </h3>
      <div className="space-y-3 text-xs text-green-800">
        <div>
          <p className="font-medium">Azelaic Acid (10-20%)</p>
          <p className="text-green-700">First-line treatment for pregnancy acne. Minimal absorption, excellent for both acne and pigmentation.</p>
        </div>
        <div>
          <p className="font-medium">Benzoyl Peroxide (2.5-5%)</p>
          <p className="text-green-700">Limited absorption through skin, generally considered safe. Use lower strengths.</p>
        </div>
        <div>
          <p className="font-medium">Niacinamide</p>
          <p className="text-green-700">Vitamin B3 derivative, safe to use morning and evening.</p>
        </div>
        <div>
          <p className="font-medium">Gentle cleansing + moisturising</p>
          <p className="text-green-700">Fragrance-free, gentle cleansers and non-comedogenic moisturisers.</p>
        </div>
      </div>
    </div>

    <div className="bg-red-50/80 border border-red-200 rounded-xl p-4">
      <h3 className="font-semibold text-red-900 text-sm mb-3 flex items-center gap-2">
        <XCircle className="w-4 h-4" /> AVOID During Pregnancy
      </h3>
      <ul className="text-xs text-red-800 space-y-1">
        <li>❌ <strong>ALL retinoids</strong> (adapalene, tretinoin, isotretinoin) — can cause birth defects</li>
        <li>❌ <strong>Oral tetracyclines</strong> (doxycycline, lymecycline)</li>
        <li>❌ <strong>Salicylic acid above 2%</strong> (low concentrations may be okay — ask your GP)</li>
        <li>❌ <strong>Spironolactone</strong> — affects fetal development</li>
      </ul>
    </div>

    <div className="bg-card border border-border rounded-xl p-4">
      <h3 className="font-semibold text-foreground text-sm mb-2">Sample Pregnancy-Safe Routine</h3>
      <div className="grid sm:grid-cols-2 gap-3 text-xs text-muted-foreground">
        <div>
          <p className="font-medium text-foreground mb-1">Morning:</p>
          <p>1. Gentle cleanser</p>
          <p>2. Azelaic acid 15-20%</p>
          <p>3. Niacinamide serum</p>
          <p>4. Moisturiser</p>
          <p>5. SPF 30+</p>
        </div>
        <div>
          <p className="font-medium text-foreground mb-1">Evening:</p>
          <p>1. Gentle cleanser</p>
          <p>2. Benzoyl peroxide 2.5-5%</p>
          <p>3. Moisturiser</p>
        </div>
      </div>
    </div>

    <div className="bg-amber-50/80 border border-amber-200 rounded-lg p-3">
      <p className="text-xs text-amber-800"><strong>Important:</strong> Always tell your GP or midwife about any skincare products you're using during pregnancy.</p>
    </div>
  </div>;
const BodyAcneContent = () => <div className="space-y-4">
 

    <div className="bg-card border border-border rounded-xl p-4">
      <h3 className="font-semibold text-foreground text-sm mb-2">Why Body Acne Is Different</h3>
      <ul className="text-xs text-muted-foreground space-y-1">
        <li>• Thicker skin needs higher concentrations or wash-off products</li>
        <li>• Friction from clothing, backpacks, bra straps can worsen it</li>
        <li>• Sweat and heat get trapped under clothes</li>
        <li>• Harder to reach for applying products</li>
      </ul>
    </div>

    <div className="space-y-3">
      <div className="bg-card border border-border rounded-xl p-3">
        <h3 className="font-semibold text-foreground text-sm">Benzoyl Peroxide Wash (Most Effective)</h3>
        <p className="text-xs text-muted-foreground">Apply to damp skin, leave on for 3-5 minutes (this is key!), then rinse. Use 3-4x weekly. UK options: Acnecide 5% Wash, PanOxyl 4% or 10% Wash.</p>
      </div>
      <div className="bg-card border border-border rounded-xl p-3">
        <h3 className="font-semibold text-foreground text-sm">Salicylic Acid Body Wash</h3>
        <p className="text-xs text-muted-foreground">Use daily or alternate with benzoyl peroxide. CeraVe SA Smoothing Cleanser or Neutrogena Body Clear are good options.</p>
      </div>
      <div className="bg-card border border-border rounded-xl p-3">
        <h3 className="font-semibold text-foreground text-sm">Salicylic Acid Sprays</h3>
        <p className="text-xs text-muted-foreground">Easier to reach your back! Neutrogena Body Clear Spray is a good UK option.</p>
      </div>
    </div>

    <div className="bg-lavender-light/50 rounded-xl p-4">
      <h3 className="font-semibold text-foreground text-sm mb-2">Lifestyle Tips</h3>
      <ul className="text-xs text-muted-foreground space-y-1">
        <li>• Shower immediately after sweating or exercise</li>
        <li>• Wear loose, breathable fabrics (cotton)</li>
        <li>• Change bed sheets weekly</li>
        <li>• Wash gym clothes after EVERY use</li>
        <li>• Sports bras: moisture-wicking fabric, wash after each wear</li>
        <li>• Avoid tight backpack straps</li>
      </ul>
    </div>

    <div className="bg-purple-50/80 border border-purple-200 rounded-lg p-3">
      <p className="text-xs text-purple-800"><strong>See your GP if:</strong> Severe or painful cysts on back/chest, no improvement after 12 weeks of consistent treatment, or scarring developing.</p>
    </div>
  </div>;
const HormonalContent = () => <div className="space-y-4">


    <div className="bg-card border border-border rounded-xl p-4">
      <h3 className="font-semibold text-foreground text-sm mb-2">Signs of Hormonal Acne</h3>
      <ul className="text-xs text-muted-foreground space-y-1">
        <li>• Breakouts along jawline, chin, and lower cheeks</li>
        <li>• Flares 7-10 days before your period</li>
        <li>• Deep, painful cysts rather than surface whiteheads</li>
        <li>• Persists past age 25</li>
        <li>• Doesn't respond well to standard acne treatments</li>
      </ul>
    </div>

    <div className="bg-pink-50/80 border border-pink-200 rounded-xl p-4">
      <h3 className="font-semibold text-pink-900 text-sm mb-2">Signs of PCOS (Beyond Acne)</h3>
      <ul className="text-xs text-pink-800 space-y-1">
        <li>• Irregular periods (more than 35 days between periods)</li>
        <li>• Excess hair growth on face, chest, or back</li>
        <li>• Hair thinning on scalp</li>
        <li>• Weight gain, difficulty losing weight</li>
        <li>• Darkening skin on neck, armpits, or groin</li>
      </ul>
    </div>

    <div className="bg-card border border-border rounded-xl p-4">
      <h3 className="font-semibold text-foreground text-sm mb-2">Over-the-Counter Approach</h3>
      <ul className="text-xs text-muted-foreground space-y-1">
        <li>• Topical treatments still help: Adapalene + benzoyl peroxide</li>
        <li>• Azelaic acid is excellent for hormonal acne</li>
        <li>• Niacinamide reduces inflammation and oil</li>
      </ul>
    </div>

     <div className="bg-card border border-border rounded-xl p-4">
      <h3 className="font-semibold text-foreground text-sm mb-2">Prescription Options (UK)</h3>
      <ul className="text-xs text-muted-foreground space-y-1">
        <li>• Combined Oral Contraceptive (COCP) - Recommended for hormonal acne in women. Takes 3-4 months to see improvement.</li>
        <li>• Spironolactone - Anti-androgen medication used off-label. Takes 3-6 months for full effect. NOT safe in pregnancy.</li>
      </ul>
    </div>

  
     

    <div className="bg-amber-50/80 border border-amber-200 rounded-lg p-3">
      <p className="text-xs text-amber-800"><strong>When to see your GP:</strong> Suspected PCOS, hormonal acne not responding to topical treatments, or if you're considering prescription options.</p>
    </div>
  </div>;
const MakeupContent = () => <div className="space-y-4">

    <div className="bg-card border border-border rounded-xl p-4">
      <h3 className="font-semibold text-foreground text-sm mb-2">What to Look For</h3>
      <ul className="text-xs text-muted-foreground space-y-1">
        <li>• <strong>"Non-comedogenic"</strong> on the label — won't clog pores</li>
        <li>• <strong>"Oil-free"</strong> for foundations and concealers</li>
        <li>• <strong>Mineral makeup</strong> — often better tolerated</li>
        <li>• <strong>Water-based formulas</strong></li>
      </ul>
    </div>


    <div className="bg-lavender-light/50 rounded-xl p-4">
      <h3 className="font-semibold text-foreground text-sm mb-2">Application Tips</h3>
      <ul className="text-xs text-muted-foreground space-y-1">
        <li>• Clean brushes and sponges weekly — bacteria builds up</li>
        <li>• Use a separate brush for concealing active spots</li>
        <li>• Don't share makeup with others</li>
        <li>• Remove ALL makeup before bed — every night</li>
        <li>• Use oil-free makeup remover or micellar water</li>
      </ul>
    </div>

    <div className="bg-red-50/80 border border-red-200 rounded-lg p-3">
      <h3 className="font-semibold text-red-800 text-sm mb-2">Avoid</h3>
      <ul className="text-xs text-red-700 space-y-1">
        <li>• Heavy, oil-based foundations</li>
        <li>• Old/expired makeup — bacteria grows over time</li>
        <li>• Sharing makeup</li>
        <li>• Sleeping in makeup — EVER</li>
      </ul>
    </div>

    <div className="bg-card border border-border rounded-lg p-3">
      <p className="text-xs text-muted-foreground"><strong>If you're breaking out:</strong> Try going makeup-free for 2 weeks to see if it helps. Simplify to just SPF + concealer on spots only.</p>
    </div>
  </div>;
const MentalHealthContent = () => <div className="space-y-4">


    <div className="bg-lavender-light/50 rounded-xl p-4">
      <h3 className="font-semibold text-foreground text-sm mb-2">You're Not Alone</h3>
      <ul className="text-xs text-muted-foreground space-y-1">
        <li>• It's the 8th most common condition worldwide</li>
        <li>• Adult acne (25+) is increasingly common, especially in women</li>
      </ul>
    </div>


    <div className="bg-purple-50/80 border border-purple-200 rounded-xl p-4">
      <h3 className="font-semibold text-purple-900 text-sm mb-2">When to Seek Help</h3>
      <ul className="text-xs text-purple-800 space-y-1">
        <li>• Acne is significantly affecting your daily life</li>
        <li>• You're avoiding social situations because of your skin</li>
        <li>• You feel depressed or anxious</li>
        <li>• You're picking or scratching excessively</li>
        <li className="font-medium">• Suicidal thoughts — seek help immediately</li>
      </ul>
    </div>

    <div className="bg-card border border-border rounded-xl p-4">
      <h3 className="font-semibold text-foreground text-sm mb-2">UK Mental Health Resources</h3>
      <ul className="text-xs text-muted-foreground space-y-1">
        <li>• <strong>Your GP</strong> — can refer you for counselling or CBT on the NHS</li>
        <li>• <strong>IAPT services</strong> — you can self-refer for free NHS talking therapies</li>
        <li>• <strong>Samaritans:</strong> 116 123 (24/7, free, confidential)</li>
        <li>• <strong>Mind:</strong> Mental health charity with resources and helplines</li>
      </ul>
    </div>

    <div className="bg-green-50/80 border border-green-200 rounded-xl p-4">
      <h3 className="font-semibold text-green-900 text-sm mb-2">Coping Strategies</h3>
      <ul className="text-xs text-green-800 space-y-1">
        <li>• Remember: Most people notice your acne far less than you do</li>
        <li>• Focus on what you CAN control (routine, sleep, stress)</li>
        <li>• Don't compare yourself to filtered social media</li>
        <li>• Talk to someone you trust</li>
        <li>• Consider therapy — CBT is particularly helpful</li>
      </ul>
    </div>

    <div className="bg-amber-50/80 border border-amber-200 rounded-lg p-3">
      <p className="text-xs text-amber-800"><strong>Note:</strong> If you're on isotretinoin (Roaccutane) report any mood changes to your prescriber immediately.</p>
    </div>
  </div>;
const DietContent = () => <div className="space-y-4">
    <p className="text-sm text-muted-foreground mb-4">
      UK guidelines say there's not enough evidence to recommend specific diets for acne. However, some research suggests potential links that may be worth exploring.
    </p>

    <div className="bg-card border border-border rounded-xl p-4">
      <h3 className="font-semibold text-foreground text-sm mb-2">What Research Suggests</h3>
      <ul className="text-xs text-muted-foreground space-y-2">
        <li>
          <strong>High-glycaemic foods</strong> (white bread, pasta, sugary foods, white rice)
          <p className="text-muted-foreground/80 mt-0.5">Some studies show a link with acne — these cause blood sugar spikes</p>
        </li>
        <li>
          <strong>Dairy products</strong> (especially skimmed milk)
          <p className="text-muted-foreground/80 mt-0.5">Mixed evidence — may be worth tracking if you consume a lot of dairy</p>
        </li>
      </ul>
    </div>

    <div className="bg-lavender-light/50 rounded-xl p-4">
      <h3 className="font-semibold text-foreground text-sm mb-2">What We CAN Recommend</h3>
      <ul className="text-xs text-muted-foreground space-y-1">
        <li>• <strong>Track your triggers</strong> — keep a food diary alongside your breakout log to spot patterns personal to YOU</li>
        <li>• <strong>Stay hydrated</strong> — drink plenty of water</li>
        <li>• <strong>Balanced diet</strong> — plenty of vegetables, fruits, and whole foods</li>
        <li>• <strong>Don't stress about food</strong> — diet is just one small factor</li>
      </ul>
    </div>

    <div className="bg-card border border-border rounded-xl p-4">
      <h3 className="font-semibold text-foreground text-sm mb-2">Free/Low-Cost Lifestyle Improvements</h3>
      <div className="grid sm:grid-cols-2 gap-2 text-xs text-muted-foreground">
        <ul className="space-y-1">
          <li>• Change pillowcases weekly (have 2-3 sets)</li>
          <li>• Clean your phone screen regularly</li>
          <li>• Don't touch your face</li>
        </ul>
        <ul className="space-y-1">
          <li>• Sleep 7-9 hours</li>
          <li>• Manage stress (free meditation apps available)</li>
          <li>• Exercise regularly (shower straight after)</li>
        </ul>
      </div>
    </div>

    <div className="bg-amber-50/80 border border-amber-200 rounded-lg p-3">
      <p className="text-xs text-amber-800"><strong>Bottom line:</strong> While we can't make definitive dietary recommendations, tracking your diet alongside breakouts can help YOU identify personal triggers. But remember — skincare routine is far more important than diet for most people.</p>
    </div>
  </div>;
const BudgetContent = () => <div className="space-y-4">
    <p className="text-sm text-muted-foreground mb-4">
      Effective skincare doesn't have to be expensive. Here's how to build a routine on a tight budget.
    </p>

    <div className="bg-purple-50/80 border border-purple-200 rounded-xl p-4">
      <h3 className="font-semibold text-purple-900 text-sm mb-2">Minimum Effective Routine (~£19/month)</h3>
      <div className="space-y-2 text-xs text-purple-800">
        <div className="flex justify-between"><span>Gentle Cleanser: Simple Refreshing Facial Wash (£4/150ml)</span><span>~£2/mo</span></div>
        <div className="flex justify-between"><span>Treatment: Acnecide 5% Gel (£9-10)</span><span>~£10/mo</span></div>
        <div className="flex justify-between"><span>Moisturiser: Simple Light Moisturiser (£5/125ml)</span><span>~£2.50/mo</span></div>
        <div className="flex justify-between"><span>SPF: Altruist Face Fluid SPF50 (£7/50ml)</span><span>~£4.50/mo</span></div>
        <div className="border-t border-purple-200 pt-2 font-medium flex justify-between"><span>Total</span><span>~£19/month</span></div>
      </div>
    </div>

    <div className="bg-card border border-border rounded-xl p-4">
      <h3 className="font-semibold text-foreground text-sm mb-2">UK Product Recommendations by Category</h3>
      <div className="space-y-3 text-xs text-muted-foreground">
        <div>
          <p className="font-medium text-foreground">Coming soon!</p>
          <p></p>
        </div>
    
      </div>
    </div>

    <div className="bg-lavender-light/50 rounded-xl p-4">
      <h3 className="font-semibold text-foreground text-sm mb-2">Money-Saving Tips</h3>
      <ul className="text-xs text-muted-foreground space-y-1">
        <li>• Buy larger sizes when on offer (Boots/Superdrug have frequent 3-for-2)</li>
        <li>• Check Boots Advantage Card deals</li>
        <li>• Amazon Subscribe & Save (5-15% off)</li>
        <li>• The Ordinary — affordable, effective actives</li>
      </ul>
    </div>

    <div className="bg-card border border-border rounded-xl p-4">
      <h3 className="font-semibold text-foreground text-sm mb-2">What You DON'T Need</h3>
      <ul className="text-xs text-muted-foreground space-y-1">
        <li>• Toners (usually unnecessary)</li>
        <li>• Multiple serums</li>
        <li>• Eye creams (use your regular moisturiser)</li>
        <li>• Expensive cleansers (they all wash off!)</li>
        <li>• Face mists or sheet masks</li>
      </ul>
    </div>
  </div>;
const TimelineContent = () => <div className="space-y-4">


    <div className="space-y-3">
      {[{
      time: "Week 1-2",
      status: "Adjustment period",
      desc: "Possible initial irritation, dryness. This is completely normal."
    }, {
      time: "Week 3-4",
      status: "Purging may happen",
      desc: "Skin may look worse before better with retinoids/acids. Stick with it!"
    }, {
      time: "Week 6-8",
      status: "First improvements",
      desc: "Fewer breakouts, existing ones healing faster. Should see SOME improvement."
    }, {
      time: "Week 10-12",
      status: "Visible progress",
      desc: "Clearer skin, reduced inflammation. Noticeable difference from baseline."
    }, {
      time: "Month 4-6",
      status: "Significant improvement",
      desc: "Most mild-moderate acne should be well-controlled by now."
    }, {
      time: "Ongoing",
      status: "Maintenance",
      desc: "Continue your routine to prevent recurrence. Acne is managed, not cured."
    }].map((item, index) => <div key={index} className="bg-card border border-border rounded-xl p-3 flex items-center gap-3">
          <div className="bg-primary/10 text-primary text-xs font-medium px-2 py-1 rounded-full whitespace-nowrap">{item.time}</div>
          <div className="font-medium text-foreground text-sm whitespace-nowrap">{item.status}</div>
          <div className="text-xs text-muted-foreground flex-1">{item.desc}</div>
        </div>)}
    </div>

    <div className="grid sm:grid-cols-2 gap-4">
      <div className="bg-card border border-border rounded-xl p-4">
        <h3 className="font-semibold text-foreground text-sm mb-2">What "Clear" Actually Means</h3>
        <ul className="text-xs text-muted-foreground space-y-1">
          <li>• Not zero spots forever — that's unrealistic</li>
          <li>• 90%+ improvement from your baseline</li>
          <li>• Occasional spot (especially hormonal) is normal</li>
          <li>• Manageable with a maintenance routine</li>
        </ul>
      </div>

      <div className="bg-red-50/80 border border-red-200 rounded-xl p-4">
        <h3 className="font-semibold text-red-900 text-sm mb-2">Why Treatment Sometimes Fails</h3>
        <ul className="text-xs text-red-800 space-y-1">
          <li>• Not giving it enough time (stopping before 12wks)</li>
          <li>• Inconsistent application</li>
          <li>• Wrong product for your acne type</li>
          <li>• Not addressing all factors (stress, hormones)</li>
        </ul>
      </div>
    </div>

    <div className="bg-lavender-light/50 rounded-lg p-4">
      <h3 className="font-semibold text-foreground text-sm mb-2">Remember</h3>
      <ul className="text-xs text-muted-foreground space-y-1">
        <li>• Progress isn't linear. You'll have good and bad days</li>
        <li>• Hormonal flares stress induced breakouts are normal!</li>
        <li>• Take progress photos monthly. Daily checking makes it hard to see change</li>
        <li className="font-medium text-primary">• Be patient. Be consistent. Trust the process. 💜</li>
      </ul>
    </div>
  </div>;
const sectionContent: Record<string, {
  title: string;
  description: string;
  component: React.ReactNode;
}> = {
  understanding: {
    title: "Understanding Your Acne",
    description: "Learn what causes acne, the different types, and how to assess severity.",
    component: <UnderstandingContent />
  },
  treatments: {
    title: "Evidence-Based Treatments",
    description: "Recommended treatments including over-the-counter and prescription options.",
    component: <TreatmentsContent />
  },
  routine: {
    title: "Building Your Routine",
    description: "Morning and evening routines with evidence-based active ingredients.",
    component: <RoutineContent />
  },
  prescription: {
    title: "When to Seek Prescription Help",
    description: "Signs you need professional help and what treatments are available.",
    component: <PrescriptionContent />
  },
  mistakes: {
    title: "Common Mistakes to Avoid",
    description: "Pitfalls that can delay progress or make acne worse.",
    component: <MistakesContent />
  },
  "action-plan": {
    title: "Your 12-Week Action Plan",
    description: "A structured approach to introducing treatments and tracking progress.",
    component: <ActionPlanContent />
  },
  purging: {
    title: "Purging vs Bad Reactions",
    description: "How to tell if your skin is adjusting or if a product isn't right for you.",
    component: <PurgingContent />
  },
  scars: {
    title: "Treating Scars & Marks",
    description: "Understanding PIE, PIH, and permanent scarring — and what helps.",
    component: <ScarsContent />
  },
  layering: {
    title: "Layering Actives Safely",
    description: "Which ingredients can be used together and what to keep separate.",
    component: <LayeringContent />
  },
  emergency: {
    title: "Emergency Spot Treatment",
    description: "Quick fixes for sudden breakouts before important events.",
    component: <EmergencyContent />
  },
  pregnancy: {
    title: "Pregnancy-Safe Options",
    description: "Safe acne treatments during pregnancy according to UK guidelines.",
    component: <PregnancyContent />
  },
  "body-acne": {
    title: "Body Acne",
    description: "Treating acne on your back, chest, and shoulders.",
    component: <BodyAcneContent />
  },
  hormonal: {
    title: "Hormonal Acne & PCOS",
    description: "Understanding and treating hormone-related breakouts.",
    component: <HormonalContent />
  },
  makeup: {
    title: "Makeup Tips",
    description: "Choosing products that won't worsen your acne.",
    component: <MakeupContent />
  },
  "mental-health": {
    title: "Mental Health & Support",
    description: "The emotional impact of acne and where to get help.",
    component: <MentalHealthContent />
  },
  diet: {
    title: "Diet & Lifestyle",
    description: "What research says about diet and practical lifestyle tips.",
    component: <DietContent />
  },
  budget: {
    title: "Budget-Friendly Routines",
    description: "Effective UK pharmacy products that won't break the bank.",
    component: <BudgetContent />
  },
  timeline: {
    title: "Realistic Timeline",
    description: "What to expect week by week when starting treatment.",
    component: <TimelineContent />
  }
};
const AcneGuide = () => {
  const [activeSection, setActiveSection] = useState("understanding");
  const contentRef = useRef<HTMLDivElement>(null);
  const isScrollingRef = useRef(false);
  
  const goToNextSection = useCallback(() => {
    const currentIndex = sections.findIndex(s => s.id === activeSection);
    if (currentIndex < sections.length - 1) {
      setActiveSection(sections[currentIndex + 1].id);
      // Scroll content back to top
      if (contentRef.current) {
        contentRef.current.scrollTop = 0;
      }
    }
  }, [activeSection]);

  const goToPrevSection = useCallback(() => {
    const currentIndex = sections.findIndex(s => s.id === activeSection);
    if (currentIndex > 0) {
      setActiveSection(sections[currentIndex - 1].id);
      // Scroll content to bottom to allow scrolling up for previous
      if (contentRef.current) {
        contentRef.current.scrollTop = contentRef.current.scrollHeight;
      }
    }
  }, [activeSection]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        e.preventDefault();
        goToNextSection();
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        goToPrevSection();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goToNextSection, goToPrevSection]);

  useEffect(() => {
    const contentEl = contentRef.current;
    if (!contentEl) return;

    const handleScroll = () => {
      if (isScrollingRef.current) return;
      
      const { scrollTop, scrollHeight, clientHeight } = contentEl;
      const isAtBottom = scrollTop + clientHeight >= scrollHeight - 10;
      const isAtTop = scrollTop <= 10;

      if (isAtBottom) {
        isScrollingRef.current = true;
        goToNextSection();
        setTimeout(() => {
          isScrollingRef.current = false;
        }, 500);
      } else if (isAtTop && scrollTop === 0) {
        // Only trigger prev section on deliberate scroll up at top
        // We'll handle this with wheel event instead
      }
    };

    const handleWheel = (e: WheelEvent) => {
      if (isScrollingRef.current) return;
      
      const { scrollTop, scrollHeight, clientHeight } = contentEl;
      const isAtTop = scrollTop <= 5;
      const isAtBottom = scrollTop + clientHeight >= scrollHeight - 5;

      // Scrolling up at top of content
      if (e.deltaY < 0 && isAtTop) {
        const currentIndex = sections.findIndex(s => s.id === activeSection);
        if (currentIndex > 0) {
          e.preventDefault();
          isScrollingRef.current = true;
          goToPrevSection();
          setTimeout(() => {
            isScrollingRef.current = false;
          }, 500);
        }
      }
      // Scrolling down at bottom of content
      else if (e.deltaY > 0 && isAtBottom) {
        const currentIndex = sections.findIndex(s => s.id === activeSection);
        if (currentIndex < sections.length - 1) {
          e.preventDefault();
          isScrollingRef.current = true;
          goToNextSection();
          setTimeout(() => {
            isScrollingRef.current = false;
          }, 500);
        }
      }
    };

    contentEl.addEventListener('scroll', handleScroll);
    contentEl.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      contentEl.removeEventListener('scroll', handleScroll);
      contentEl.removeEventListener('wheel', handleWheel);
    };
  }, [activeSection, goToNextSection, goToPrevSection]);

  // Reset scroll position when section changes
  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.scrollTop = 0;
    }
  }, [activeSection]);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Complete Acne Guide - Evidence-Based Treatment & Management",
    "description": "A comprehensive guide to understanding, treating, and managing acne with evidence-based approaches following UK clinical guidelines.",
    "url": "https://resknclinic.co.uk/guides/acne",
    "publisher": {
      "@type": "MedicalBusiness",
      "name": "ReSKN Clinic"
    },
    "author": {
      "@type": "Organization",
      "name": "ReSKN Clinic"
    }
  };
  const currentContent = sectionContent[activeSection];
  const SectionIcon = sections.find(s => s.id === activeSection)?.icon || BookOpen;
  const currentIndex = sections.findIndex(s => s.id === activeSection);
  const progress = ((currentIndex + 1) / sections.length) * 100;
  
  return <>
      <SEO title="Complete Acne Guide | Evidence-Based Treatment | ReSKN Clinic" description="A comprehensive guide to understanding, treating, and managing acne. Learn about acne types, causes, Recommended treatments, and build your evidence-based routine." keywords="acne guide, acne treatment UK, acne skincare routine, benzoyl peroxide, adapalene, retinoids, acne guidelines, hormonal acne, PCOS acne, ReSKN Clinic" canonical="https://resknclinic.co.uk/guides/acne" structuredData={structuredData} />
      
      {/* Progress Bar */}
      <div className="fixed top-16 left-0 right-0 z-40">
        <div className="h-1 bg-muted">
          <div 
            className="h-full bg-gradient-to-r from-purple to-primary transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="pt-16">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-purple-deep via-purple to-purple-light py-10 md:py-14">
          <div className="container mx-auto px-4 max-w-5xl">
            <Link to="/guides" className="inline-flex items-center text-sm text-white/80 hover:text-white mb-4 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Guides
            </Link>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-3 text-white">
              The Complete Acne Guide
            </h1>
            <p className="text-base md:text-lg text-white/90 max-w-2xl">Treatment following UK clinical guidelines.</p>
            <p className="text-xs text-white/60 mt-2">
              Based on NICE NG198 & British Association of Dermatologists Guidelines
            </p>
          </div>
        </div>

        {/* Main Content with Tab Layout */}
        <section className="py-10 md:py-14 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-8">
                <span className="inline-block px-4 py-2 bg-accent rounded-full text-sm mb-3">
                  Comprehensive Guide
                </span>
                <h2 className="font-serif text-2xl md:text-3xl font-medium text-foreground mb-3">
                  Everything you need to know
                </h2>
                <p className="text-muted-foreground text-sm max-w-xl mx-auto">Select a topic below to learn more.</p>
              </div>

              <div className="grid md:grid-cols-[220px_1fr] gap-6 items-start">
                {/* Tab Buttons - Vertical on desktop, horizontal scroll on mobile */}
                <div className="flex md:flex-col gap-1 overflow-x-auto md:overflow-visible pb-2 md:pb-0 scrollbar-hide md:h-fit">
                  {sections.map(section => {
                  const Icon = section.icon;
                  return <button key={section.id} onClick={() => setActiveSection(section.id)} className={`flex items-center gap-2 px-3 py-2 rounded-lg text-left transition-all duration-200 flex-shrink-0 md:flex-shrink ${activeSection === section.id ? 'bg-primary text-white shadow-md' : 'bg-card hover:bg-accent text-foreground border border-border'}`}>
                        <Icon className={`w-3.5 h-3.5 flex-shrink-0 ${activeSection === section.id ? 'text-white' : 'text-primary'}`} />
                        <span className="font-medium text-xs whitespace-nowrap">{section.label}</span>
                      </button>;
                })}
                </div>

                {/* Content Area - fixed height without scroll */}
                <div 
                  ref={contentRef}
                  className="card-luxury p-6 md:p-8 h-[800px] flex flex-col"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <SectionIcon className="w-4 h-4 text-primary" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-serif text-lg leading-tight">{currentContent.title}</h3>
                      <p className="text-[10px] text-muted-foreground leading-tight">{currentContent.description}</p>
                    </div>
                  </div>
                  
                  <div className="flex-1 overflow-y-auto pr-2 -mr-2">
                    {currentContent.component}
                  </div>
                  
                  {/* Progress dots at bottom */}
                  <div className="mt-auto pt-4">
                    <div className="flex items-center justify-center gap-1">
                      {sections.map((_, idx) => (
                        <div
                          key={idx}
                          className={`h-1 rounded-full transition-all cursor-pointer ${
                            idx === currentIndex 
                              ? 'w-8 bg-primary' 
                              : idx < currentIndex 
                              ? 'w-1.5 bg-primary/50' 
                              : 'w-1.5 bg-muted'
                          }`}
                          onClick={() => setActiveSection(sections[idx].id)}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-10 md:py-14 bg-section-gradient">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-4">
              Need personalised advice?
            </h2>
            <p className="text-muted-foreground mb-6 text-sm">
              Book a consultation to discuss your skin concerns with our team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="btn-luxury">
                <Link to="/booking">
                  Book Consultation <ChevronRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/guides">
                  Explore More Guides
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>;
};
export default AcneGuide;