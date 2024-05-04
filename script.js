document.addEventListener('DOMContentLoaded', function() {
    const yesButton = document.getElementById('yes');
    const noButton = document.getElementById('no');
    const cta = document.querySelector('.buttons');
  
    if (yesButton && noButton) {
      noButton.addEventListener('mouseenter', () => {
        const yesIndex = Array.from(cta.children).indexOf(yesButton);
        const noIndex = Array.from(cta.children).indexOf(noButton);
  
        if (yesIndex < noIndex) {
          cta.insertBefore(noButton, yesButton);
        } else {
          cta.insertBefore(yesButton, noButton);
        }
      });
  
      yesButton.addEventListener('click', function(event) {
        event.preventDefault(); 
        const videoUrl = '0642E654CAF4FC322DD2EC06010E1487_video_dashinit.mp4'; 
        window.open(videoUrl, '_blank');
      });
    }
  });
