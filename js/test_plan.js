  document.getElementById('menu-button').addEventListener('click', function () {
    const nav = document.getElementById('nav');
    nav.classList.toggle('show');
  });

  function updateHoursDisplay(val) {
    document.getElementById('hours-display').textContent = val;
  }

  function generatePlan() {
  const hours = parseInt(document.getElementById('hours').value);
  const distance = document.getElementById('distance').value;
  const output = document.getElementById('plan-output');

  if (hours < 5) {
    output.innerHTML = `
      <h3>Not Enough Training Time</h3>
      <p>Unfortunately, we can't provide a realistic training plan with fewer than <strong>5 hours per week</strong>.</p>
      <p>Consider starting with lighter routines and gradually increasing your weekly commitment.</p>
    `;
    return;
  }

  if (hours >= 15) {
    output.innerHTML = `
      <h3>Advanced Training Plan Guidance</h3>
      <p>With <strong>${hours} hours/week</strong>, you're ready for serious performance-based training.</p>
      <ul>
        <li> <strong>Two-a-day sessions</strong> (e.g., swim in the morning, run in the evening)</li>
        <li> Long endurance rides and tempo sessions</li>
        <li> Brick workouts (bike → run transitions)</li>
        <li> Structured recovery (mobility, yoga, active rest)</li>
        <li> Periodization: base → build → peak → taper</li>
      </ul>
      <p>Consider hiring a coach or using a detailed program with metrics like heart rate or power zones for optimal progress.</p>
    `;
    return;
  }

  // Mid-range realistic plan logic
  const base = {
    sprint: { swim: 2, bike: 2, run: 2 },
    olympic: { swim: 2, bike: 3, run: 3 },
    half: { swim: 3, bike: 4, run: 3 },
    full: { swim: 3, bike: 5, run: 4 }
  };

  const multiplier = hours / (base[distance].swim + base[distance].bike + base[distance].run);

  const plan = {
    swim: Math.max(1, Math.round(base[distance].swim * multiplier)),
    bike: Math.max(1, Math.round(base[distance].bike * multiplier)),
    run: Math.max(1, Math.round(base[distance].run * multiplier)),
    rest: 1
  };

  output.innerHTML = `
    <h3>Your Weekly Training Plan</h3>
    <ul>
      <li><strong>Swim:</strong> ${plan.swim} session${plan.swim > 1 ? 's' : ''}</li>
      <li><strong>Bike:</strong> ${plan.bike} session${plan.bike > 1 ? 's' : ''}</li>
      <li><strong>Run:</strong> ${plan.run} session${plan.run > 1 ? 's' : ''}</li>
      <li><strong>Rest:</strong> ${plan.rest} day</li>
    </ul>
    <p>📝 Be consistent, and don’t skip your recovery — it’s part of your growth.</p>
  `;
}