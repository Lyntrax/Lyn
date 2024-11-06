// Adjust the container size dynamically based on the screen width
window.addEventListener('resize', resizeContainer);

function resizeContainer() {
  const container = document.querySelector('.container');
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;

  // Set container width and height based on viewport size
  container.style.width = Math.min(viewportWidth * 0.9, 900) + 'px';  // Max width 900px
  container.style.height = Math.min(viewportHeight * 0.75, 600) + 'px';  // Max height 600px
}

// Initial resize to apply size on page load
resizeContainer();
