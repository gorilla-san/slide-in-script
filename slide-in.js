document.addEventListener("DOMContentLoaded", function() {
  const urlParams = new URLSearchParams(window.location.search);
  const slideIn = urlParams.get('slide-in');

  if (slideIn === 'true') {
    // Immediately apply CSS to position the body below the viewport
    document.documentElement.style.cssText = `
      position: relative;
      transform: translateY(100vh); /* Start below the viewport */
      transition: transform 0.5s ease-out;
    `;

    // Use requestAnimationFrame to ensure styles are applied before any painting
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        document.documentElement.style.transform = 'translateY(0)'; // Slide to normal position
      });
    });

    // Remove the query param after the animation finishes
    setTimeout(() => {
      const newUrl = new URL(window.location.href);
      newUrl.searchParams.delete('slide-in');
      window.history.replaceState(null, null, newUrl);
    }, 500); // Match the duration of the CSS transition
  }
});
