  document.querySelectorAll('.hover-card').forEach(card => {
      const video = card.querySelector('video');
      
      // Ensure videos autoplay and loop properly
      video.play().catch(e => {
        // Autoplay was prevented - mute and try again
        video.muted = true;
        video.play();
      });
      
      // Handle video looping
      video.addEventListener('ended', () => {
        video.currentTime = 0;
        video.play();
      });
    });




   