function renderGuidedPractice() {
  const item = guidedPracticeItems[gpIndex];
  document.getElementById("gpQuestion").textContent = item.question;

  // отрисовать часы
  const clockBox = document.getElementById("gpClock");
  clockBox.innerHTML = `
    <div class="gp-clock-img">${item.clock.split(" ")[0]}</div>
    <div class="gp-clock-caption">${item.clock}</div>
  `;

  const box = document.getElementById("gpOptions");
  box.innerHTML = "";
  const feedback = document.getElementById("gpFeedback");
  feedback.textContent = "";

  item.options.forEach((opt, i) => {
    const btn = document.createElement("button");
    btn.className = "gp-option";
    btn.textContent = opt;
    btn.onclick = () => {
      [...box.querySelectorAll(".gp-option")].forEach(b => {
        b.classList.remove("selected", "correct", "wrong");
      });
      btn.classList.add("selected");

      if (i === item.correctIndex) {
        btn.classList.remove("selected");
        btn.classList.add("correct");
        feedback.textContent = item.correctFeedback;
      } else {
        btn.classList.remove("selected");
        btn.classList.add("wrong");
        feedback.textContent = item.wrongFeedback;
      }
    };
    box.appendChild(btn);
  });
}