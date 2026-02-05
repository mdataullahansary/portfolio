const startDate = new Date("2025-11-08T00:39:00");
const audio = document.getElementById("bgMusic"); // <-- CHANGE THIS

    function updateCounter() {
      const now = new Date();
      let diff = Math.floor((now - startDate) / 1000); // total seconds

      const days = Math.floor(diff / (24 * 3600));
      diff %= 24 * 3600;
      const hours = Math.floor(diff / 3600);
      diff %= 3600;
      const minutes = Math.floor(diff / 60);
      const seconds = diff % 60;

      const counterEl = document.getElementById("dateCounter");
      counterEl.innerHTML = `<span class="material-symbols-outlined pt-1 signatureColor">favorite</span>
          <span class="signatureColor font-semibold">${days}</span>
          <span class="font-semibold">days</span>
          <span class="font-semibold">${hours}h</span>
          <span class="font-semibold">${minutes}m</span>
          <span class="font-semibold">${seconds}s</span>
          <span class="opacity-75 ">of choosing you</span>`;
    }

    updateCounter();
    setInterval(updateCounter, 1000);

     

  function playMusic() {
    audio.play();
    document.removeEventListener("click", playMusic);
  }

  document.addEventListener("click", playMusic);