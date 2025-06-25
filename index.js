function updateViewportVars() {
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  document.documentElement.style.setProperty('--view-width',  `${vw}`);
  document.documentElement.style.setProperty('--view-height', `${vh}`);
}

window.addEventListener('resize', updateViewportVars);
updateViewportVars();