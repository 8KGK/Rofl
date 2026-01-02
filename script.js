document.addEventListener('DOMContentLoaded', () => {
  const video = document.getElementById('bg-video');
  const clickLayer = document.getElementById('click-layer');

  video.play().catch(() => {});

  clickLayer.addEventListener('click', async () => {
    video.muted = false;
    video.volume = 1;

    try {
      await video.play();
      console.log('Sound enabled');
    } catch (e) {
      console.warn('Sound still blocked');
    }

    clickLayer.remove(); 
  });
});
