document.addEventListener("DOMContentLoaded", function() {
  const urlParams = new URLSearchParams(window.location.search);
  const slideIn = urlParams.get('slide-in');

  if (slideIn === 'true') {
    // Dynamically inject CSS for the sliding effect
    const style = document.createElement('style');
    document.head.appendChild(style);
    style.textContent = `
      body {
        position: relative;
        transform: translateY(100vh); /* Start below the viewport */
        transition: transform 0.5s ease-out;
      }
    `;

    // Start the slide-in effect after a slight delay to ensure styles are applied
    setTimeout(() => {
      document.body.style.transform = 'translateY(0)'; // Slide to normal position
    }, 10);

    // Remove the query param after the animation finishes
    setTimeout(() => {
      const newUrl = new URL(window.location.href);
      newUrl.searchParams.delete('slide-in');
      window.history.replaceState(null, null, newUrl);
    }, 500); // Match the duration of the CSS transition
  }
});
