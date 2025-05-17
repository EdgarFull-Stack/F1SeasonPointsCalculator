document.addEventListener("DOMContentLoaded", () => {
  const points = {
    1: 25,
    2: 18,
    3: 15,
    4: 12,
    5: 10,
    6: 8,
    7: 6,
    8: 4,
    9: 2,
    10: 1,
  };

  const form = document.querySelector("#pointsForm");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    let total = 0;

    for (let i = 1; i <= 5; i++) {
      const input = document.querySelector("#race" + i);
      const pos = parseInt(input.value, 10);

      if (points[pos]) {
        total = total + points[pos];
      }
    }

    alert("Total Points:" + total);

    form.reset();
  });
});
