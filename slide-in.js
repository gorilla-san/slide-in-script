document.addEventListener("DOMContentLoaded", function() {
  const urlParams = new URLSearchParams(window.location.search);
  const slideIn = urlParams.get('slide-in');

  if (slideIn === 'true') {
    let sections = document.querySelectorAll('.sections');
    sections[0].style.transform = 'translateY(100dvh)';
    sections[1].style.transform = 'translateY(100dvh)';
    sections[0].style.transition = 'all 0.5s';
    sections[1].style.transition = 'all 0.5s';
    setTimeout(()=>{
      sections[0].style.transform = 'translateY(-100dvh)';
      sections[1].style.transform = 'translateY(-100dvh)';
    }, 100)
  }
  const newUrl = new URL(window.location.href);
  newUrl.searchParams.delete('slide-in');
  window.history.replaceState(null, null, newUrl);
});
