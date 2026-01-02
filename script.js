document.addEventListener('DOMContentLoaded', async () => {
  const v = document.getElementById('bg-video');

  // Попытка начать с звуком
  v.muted = false;
  try {
    await v.play();
    console.log('Playback started WITH sound');
  } catch (err) {
    // Браузер заблокировал: включаем muted и воспроизводим
    v.muted = true;
    try { await v.play(); } catch(e) { /* ничего */ }
    console.log('Autoplay with sound blocked — playing muted');
  }
});