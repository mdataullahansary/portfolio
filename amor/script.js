const startDate = new Date("2025-11-08T00:39:00");
const audio = document.getElementById("bgMusic"); 
const btn = document.getElementById("btn");
const card = document.getElementById("enterCard");
  const overlay = document.getElementById("overlay");
  const exitBtn = document.getElementById("exit");


  fetch("valentine.html", { cache: "force-cache" });




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

    

  function closeOverlay() {
    card.classList.add("exit");
    overlay.classList.add("overlay-exit");

    setTimeout(() => {
      overlay.style.display = "none";
      window.location.href = "valentine.html";
    }, 500);
  }

  function isValentineDay() {
    const today = new Date();
    const year = today.getFullYear();
    const valentineDate = new Date(year, 1, 14); // February 14 
    if (1  ) {
      closeOverlay();
    } else {
      alert("It's not Valentine's Day yet! Please come back on February 14th.");
    }
    
  }

  card.addEventListener("click", isValentineDay);
  card.addEventListener("touchstart", isValentineDay);
  exitBtn.addEventListener("click",  () => {
    overlay.style.display = "none";
  } );
  exitBtn.addEventListener("touchstart", () => {
    overlay.style.display = "none";
  } );
     

 let isPlaying = false;
 function playMusic ()  {
  if (!isPlaying) {
    audio.play();
  } else {
    audio.pause();
  }
 isPlaying = !isPlaying;
 };

btn.addEventListener("click", playMusic);
btn.addEventListener("touchstart", playMusic);

