document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);
    const slideIn = urlParams.get('slide-in');
  
    if (slideIn === 'true') {
      // Dynamically inject CSS for the sliding effect
      const style = document.createElement('style');
      document.head.appendChild(style);
      style.textContent = `
        body {
          transition: transform 0.5s ease-out;
        }
        .slide-in {
          transform: translateY(-100vh); /* Slide from bottom */
        }
      `;
  
      // Add the slide-in class to body to trigger the animation
      document.body.classList.add('slide-in');
  
      // Remove the query param after the animation finishes
      setTimeout(() => {
        const newUrl = new URL(window.location.href);
        newUrl.searchParams.delete('slide-in');
        window.history.replaceState(null, null, newUrl);
      }, 500); // Match the duration of the CSS transition
    }
  });