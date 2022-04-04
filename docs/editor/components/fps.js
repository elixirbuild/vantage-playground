const times = [];
let fps;

function refreshLoop() {
  window.requestAnimationFrame(() => {
    const now = performance.now();
    while (times.length > 0 && times[0] <= now - 1000) {
      times.shift();
    }
    times.push(now);
    fps = Math.floor(times.length / 2);

    document.getElementById("fps").innerHTML = fps;
    refreshLoop();
  });
}

refreshLoop();
