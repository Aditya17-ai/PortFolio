
// Function to handle scroll animations
export const handleScrollAnimations = () => {
  const revealElements = document.querySelectorAll('.reveal-animation');
  
  revealElements.forEach(element => {
    const elementTop = element.getBoundingClientRect().top;
    const elementBottom = element.getBoundingClientRect().bottom;
    const windowHeight = window.innerHeight;
    
    if (elementTop < windowHeight * 0.85 && elementBottom > 0) {
      element.classList.add('active');
    }
  });
};
