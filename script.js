function triggerJumpscare() {
      const overlay = document.getElementById('jumpscare');
      const audio = document.getElementById('rockSound');

      overlay.style.display = 'block';  // reveal just in time
      setTimeout(() => {                 // tiny delay helps force reflow
        overlay.classList.add('active');
      }, 10);

      audio.currentTime = 0;
      audio.play().catch(e => console.log("Audio needs interaction:", e));

      setTimeout(() => {
        overlay.classList.remove('active');
        setTimeout(() => {
          overlay.style.display = 'none'; // hide again after fade
        }, 300);
      }, 1600); // visible for ~1.6s
    }
