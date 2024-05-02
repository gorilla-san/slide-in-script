  const urlParams = new URLSearchParams(window.location.search);
  const slideIn = urlParams.get('slide-in');

  if (slideIn === 'true') {
    document.body.classList.add('slide-in');
    setTimeout(()=>{
      document.body.classList.remove('slide-in');
    }, 1000)
  }
  const newUrl = new URL(window.location.href);
  newUrl.searchParams.delete('slide-in');
  window.history.replaceState(null, null, newUrl);
