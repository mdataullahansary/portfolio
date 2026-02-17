const startDate = new Date("2025-11-08T00:39:00");
const birthday = new Date("2026-02-24T00:00:00");
const audio = document.getElementById("bgMusic"); 
const btn = document.getElementById("btn");
const card = document.getElementById("enterCard");
const overlay = document.getElementById("overlay");
const exitBtn = document.getElementById("exit");
const birthDateEl = document.getElementById("birthDate");
const birthHoursEl = document.getElementById("birthHours");
const birthMinsEl = document.getElementById("birthMins");
const birthSecondsEl = document.getElementById("birthSeconds");


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

    function updateBirthdayCounter() {
      const now = new Date();
      let diff = Math.floor((birthday - now) / 1000); // total seconds

      const days = Math.floor(diff / (24 * 3600));
      diff %= 24 * 3600;
      const hours = Math.floor(diff / 3600);
      diff %= 3600;
      const minutes = Math.floor(diff / 60);
      const seconds = diff % 60;
      birthDateEl.textContent = String(days).padStart(2, "0");
      birthHoursEl.textContent = String(hours).padStart(2, "0");
      birthMinsEl.textContent = String(minutes).padStart(2, "0");
      birthSecondsEl.textContent = `${String(seconds).padStart(2, "0")}s`;
      
      console.log(`Time until birthday: ${days}d ${hours}h ${minutes}m ${seconds}s`);
    }

    updateBirthdayCounter();
    setInterval(updateBirthdayCounter, 1000);




    setInterval(updateCounter, 1000);
    setTimeout(() => {
  overlay.style.display = "flex";
}, 2000);
    

  // function closeOverlay() {
  //   card.classList.add("exit");
  //   overlay.classList.add("overlay-exit");

  //   setTimeout(() => {
  //     overlay.style.display = "none";
  //     window.location.href = "valentine.html";
  //   }, 500);
  // }

  function isBirthday() {
    const today = new Date();
    const year = today.getFullYear();
    const bithday = new Date(year, 2, 24); 
    if (today.getDate() === bithday.getDate()) {
      window.location.href = "birthday.html";
    } 
    
  }

  // exitBtn.addEventListener("click",  () => {
  //   overlay.style.display = "none";
  // } );
  // exitBtn.addEventListener("touchstart", () => {
  //   overlay.style.display = "none";
  // } );

  isBirthday();
     

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

