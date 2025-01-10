/* Add dynamic hover effects or interactivity here if needed */
const buttons = document.querySelectorAll('.button');

buttons.forEach(button => {
  button.addEventListener('mouseover', () => {
    button.style.boxShadow = '0 12px 25px rgba(0, 0, 0, 0.5)';
  });

  button.addEventListener('mouseout', () => {
    button.style.boxShadow = '0 8px 15px rgba(0, 0, 0, 0.3)';
  });

  button.addEventListener('click', () => {
    button.style.transform = 'scale(0.9)';
    setTimeout(() => {
      button.style.transform = 'scale(1)';
    }, 200);
  });
});
