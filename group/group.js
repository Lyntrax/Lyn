// script.js

// Add hover interactivity to gallery items for demonstration
document.querySelectorAll('.gallery-item img').forEach(img => {
  img.addEventListener('click', () => {
    alert(`You clicked on: ${img.alt}`);
  });
});
