const quotes = [
  "Don't let your distractions define your day.",
  "One step closer to focus — keep going!",
  "Your time is precious. Spend it wisely.",
  "Mind over media. You’ve got this!",
  "Focus is a muscle — train it daily.",
  "Distraction is the enemy of progress.",
  "The only way out is through — stay sharp!",
  "Every moment you reclaim matters.",
  "Eyes on your goal, not on the scroll.",
  "Real success starts with real focus.",
  "Less scrolling, more glowing.",
  "Discipline is choosing what you want most.",
  "Today’s small focus builds tomorrow’s big results.",
  "You opened this — now close it with purpose.",
  "Silence the noise. Hear your goals."
];

const DISTRACTION_LIMIT = 10;

chrome.storage.local.get(["distractionCount"], (res) => {
  let count = res.distractionCount || 0;
  count++;
  chrome.storage.local.set({ distractionCount: count });

  const quote = quotes[Math.floor(Math.random() * quotes.length)];

  // Always show quote first
  showFloatingQuote(quote);

  setTimeout(() => {
    flashScreenRed(3);
    playAlarm();

    if (count >= DISTRACTION_LIMIT) {
      setTimeout(() => {
        showFloatingQuote("⚠️ Too many distractions. Site locked for 30 seconds.");
        lockSiteTemporarily(30);
      }, 2500); // show lock quote after initial effects
    }
  }, 500);
});

// ========== QUOTE UI ==========
function showFloatingQuote(text) {
  const blurLayer = document.createElement("div");
  Object.assign(blurLayer.style, {
    position: "fixed",
    top: "0",
    left: "0",
    width: "100vw",
    height: "100vh",
    backdropFilter: "blur(5px)",
    backgroundColor: "rgba(0,0,0,0.3)",
    zIndex: "999998",
    pointerEvents: "none"
  });

  const box = document.createElement("div");
  box.textContent = text;

  Object.assign(box.style, {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    background: "#1e1e1e",
    color: "#fff",
    padding: "20px 25px",
    borderRadius: "12px",
    boxShadow: "0 0 15px rgba(0,0,0,0.6)",
    fontSize: "18px",
    fontFamily: "sans-serif",
    zIndex: "1000001",
    textAlign: "center",
    maxWidth: "80vw",
    opacity: "0",
    transition: "opacity 0.5s ease"
  });

  document.body.appendChild(blurLayer);
  document.body.appendChild(box);
  setTimeout(() => (box.style.opacity = "1"), 100);

  setTimeout(() => {
    box.style.opacity = "0";
    blurLayer.remove();
    setTimeout(() => box.remove(), 500);
  }, 6000);
}

// ========== RED FLASH ==========
function flashScreenRed(times = 3) {
  let flashes = 0;

  const flashOnce = () => {
    const flash = document.createElement("div");
    Object.assign(flash.style, {
      position: "fixed",
      top: "0",
      left: "0",
      width: "100vw",
      height: "100vh",
      backgroundColor: "rgba(255, 0, 0, 0.5)",
      zIndex: "999997",
      pointerEvents: "none"
    });

    document.body.appendChild(flash);
    setTimeout(() => flash.remove(), 300);
  };

  const interval = setInterval(() => {
    flashOnce();
    flashes++;
    if (flashes >= times) clearInterval(interval);
  }, 400);
}

// ========== ALARM SOUND ==========
function playAlarm() {
  const soundURL = "https://actions.google.com/sounds/v1/alarms/digital_watch_alarm_long.ogg";

  const context = new (window.AudioContext || window.webkitAudioContext)();
  fetch(soundURL)
    .then(res => res.arrayBuffer())
    .then(buffer => context.decodeAudioData(buffer))
    .then(decoded => {
      for (let i = 0; i < 10; i++) {
        setTimeout(() => {
          const src = context.createBufferSource();
          src.buffer = decoded;
          src.connect(context.destination);
          src.start();
        }, i * 800);
      }
    })
    .catch(err => console.warn("Audio failed:", err));
}

// ========== TEMPORARY LOCK ==========
function lockSiteTemporarily(seconds) {
  const blocker = document.createElement("div");
  Object.assign(blocker.style, {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    backgroundColor: "#000",
    color: "#fff",
    fontSize: "22px",
    fontFamily: "sans-serif",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: "1000000"
  });

  blocker.textContent = `⏳ Locked for ${seconds} seconds...`;
  document.body.appendChild(blocker);

  let timeLeft = seconds;
  const interval = setInterval(() => {
    timeLeft--;
    blocker.textContent = `⏳ Locked for ${timeLeft} seconds...`;
    if (timeLeft <= 0) {
      clearInterval(interval);
      blocker.remove();
    }
  }, 1000);
}
