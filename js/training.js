// Define structured weekly training plans for each level
const plans = {
  beginner: [
    "<strong>Swim</strong><br>45 min<br>Focus on technique, drills",
    "<strong>Bike</strong><br>1.5 hrs<br>Easy pace, endurance focus",
    "<strong>Run</strong><br>45 min<br>Steady pace, flat terrain",
    "<strong>Strength + Core</strong><br>45 min<br>Full body with resistance bands",
    "<strong>Rest or Yoga</strong><br>– / 30 min<br>Recovery focus",
    "<strong>Long Ride</strong><br>3–4 hrs<br>Build endurance, nutrition practice",
    "<strong>Brick (Bike + Run)</strong><br>1 hr bike + 30 min run<br>Transition practice"
  ],
  intermediate: [
    "<strong>Swim</strong><br>60 min<br>Include intervals (e.g., 4x100m fast)",
    "<strong>Bike</strong><br>2 hrs<br>Tempo intervals (e.g., 4x5min at race pace)",
    "<strong>Run</strong><br>1 hr<br>Hills or tempo work",
    "<strong>Strength + Core</strong><br>45 min<br>Add weights, functional movements",
    "<strong>Short Swim + Recovery Ride</strong><br>30 min swim + 30 min bike<br>Active recovery",
    "<strong>Long Ride</strong><br>5–6 hrs<br>Nutrition & pacing practice",
    "<strong>Brick (Bike + Run)</strong><br>1.5 hr bike + 45 min run<br>Practice transitions, gear setup"
  ],
  advanced: [
    "<strong>Swim</strong><br>75 min<br>Speed sets + endurance",
    "<strong>Bike</strong><br>3 hrs<br>Interval blocks (6x10min hard)",
    "<strong>Run</strong><br>75 min<br>Threshold or negative splits",
    "<strong>Strength + Core</strong><br>1 hr<br>Power training + mobility",
    "<strong>Double: Swim + Short Run</strong><br>45 min swim + 30 min run<br>Efficiency focus",
    "<strong>Long Brick</strong><br>6 hr bike + 1 hr run<br>Simulate race conditions",
    "<strong>Recovery or Open Water</strong><br>Easy swim or complete rest<br>Listen to your body"
  ]
};

/**
 * Renders the weekly training plan based on selected level
 * @param {string} level - beginner | intermediate | advanced
 */
function renderDetailedPlan(level) {
  const body = document.getElementById("planBody");
  body.innerHTML = ""; // Clear previous plan rows

  // Create and populate a new row with the selected plan data
  const row = document.createElement("tr");
  row.innerHTML = plans[level].map(item => `<td>${item}</td>`).join('');
  body.appendChild(row);
}

// Initialize page with beginner plan by default
document.addEventListener("DOMContentLoaded", () => {
  renderDetailedPlan("beginner");
});
